<?php

namespace App\Http\Controllers\Member;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Member\Auction;
use App\FileStore;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Member\Bidding;
use Illuminate\Support\Facades\Notification;
use App\Events\BiddingPlaced;
use App\User;
use App\Notifications\AuctionNotification;
use Illuminate\Support\Facades\Log;

class AuctionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //check for auctions that goes live on current time
        $tz = 'Asia/Kolkata';
        $timestamp = time();
        $dt = new \DateTime("now", new \DateTimeZone($tz)); //first argument "must" be a string
        $dt->setTimestamp($timestamp); //adjust the object to correct timestamp
        $amOrPm = $dt->format('a') == 'am' ? true : false;

        switch ($request->type) {
            case 'mine':
                $auction = Auction::where('date', date('Y-m-d'))->where('time', '<=', DB::raw("time_format(CURRENT_TIME, '%h:%i')"))->where('amOrPm', $amOrPm)->where(DB::raw("ADDTIME(time, hours)"), '>', DB::raw("time_format(CURRENT_TIME, '%h:%i')"))->where('u_id', '=', Auth::id())->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_auctions.u_id')->select('nexus_auctions.*', 'nexus_member_profile.fname', 'nexus_member_profile.lname')->get();
                break;
            case 'oldies':
                $auction = Auction::where('date', '<', date('Y-m-d'))->where('u_id', '=', Auth::id())->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_auctions.u_id')->select('nexus_auctions.*', 'nexus_member_profile.fname', 'nexus_member_profile.lname')->get();
                break;
            case 'upcoming':
                $auction = Auction::where('date', '>', date('Y-m-d'))->orWhere('date', date('Y-m-d'))->where('time', '>', DB::raw("time_format(CURRENT_TIME, '%h:%i')"))->where('amOrPm', $amOrPm)->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_auctions.u_id')->select('nexus_auctions.*', 'nexus_member_profile.fname', 'nexus_member_profile.lname')->get();
                break;
            case 'bidded':
                $biddedAuctionIds = Bidding::where('uid', Auth::id())->distinct('auid')->pluck('auid');
                $auction = Auction::whereIn('auid', $biddedAuctionIds)->where('date', '<', date('Y-m-d'))->orWhere('date', date('Y-m-d'))->where('time', '>', DB::raw("time_format(CURRENT_TIME, '%h:%i')"))->where('amOrPm', $amOrPm)->whereIn('auid', $biddedAuctionIds)->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_auctions.u_id')->select('nexus_auctions.*', 'nexus_member_profile.fname', 'nexus_member_profile.lname')->get();
                break;
            case 'minimal':
                $auction = Auction::where('date', date('Y-m-d'))->where('time', '<=', DB::raw("time_format(CURRENT_TIME, '%h:%i')"))->where('amOrPm', $amOrPm)->where(DB::raw("ADDTIME(time, hours)"), '>', DB::raw("time_format(CURRENT_TIME, '%h:%i')"))->where('u_id', '!=', Auth::id())->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_auctions.u_id')->select('nexus_auctions.*', 'nexus_member_profile.fname', 'nexus_member_profile.lname')->take(2)->get();
                break;
            default:
                $auction = Auction::where('date', date('Y-m-d'))->where('time', '<=', DB::raw("time_format(CURRENT_TIME, '%h:%i')"))->where('amOrPm', $amOrPm)->where(DB::raw("ADDTIME(time, hours)"), '>', DB::raw("time_format(CURRENT_TIME, '%h:%i')"))->where('u_id', '!=', Auth::id())->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_auctions.u_id')->select('nexus_auctions.*', 'nexus_member_profile.fname', 'nexus_member_profile.lname')->get();
                break;
        }

        //auctions that are happened >> ones that user bidded and ones that user conducted
        if ($request->type == "oldies" || $request->type == "bidded") {
            $counter = 0;
            foreach ($auction as $au) {
                $auction[$counter]['events'] = Bidding::where('auid', $au->auid)->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_biddings.uid')->orderBy('nexus_biddings.updated_at', 'desc')->select('nexus_biddings.*', 'nexus_member_profile.fname', 'nexus_member_profile.lname')->get();
                $bidPrice = Bidding::where('auid', $au->auid)->max('bidprice');
                $auction[$counter]['highestbid'] = 0;
                if ($bidPrice != null) {
                    $auction[$counter]['highestbid'] = $bidPrice;
                }

                //attatch the winner details
                $winner = Bidding::where('auid', $au->auid)->where('bidprice', $bidPrice)->join('nexus_member_profile', 'nexus_biddings.uid', 'nexus_member_profile.uid')->leftJoin('cities', 'cities.id', 'nexus_member_profile.city_id')->leftJoin('states', 'states.id', 'nexus_member_profile.state_id')->leftJoin('countries', 'countries.id', 'nexus_member_profile.country_id')->select('nexus_member_profile.uid', 'nexus_member_profile.fname', 'lname', 'cities.city_name', 'states.state_name', 'countries.country_name', 'nexus_member_profile.mobile')->get();

                $auction[$counter]['winner'] = 0;
                if ($winner->count()) {
                    $auction[$counter]['winner'] = $winner[0];
                }
                $counter++;
            }
        } else {
            $counter = 0;
            foreach ($auction as $au) {
                $auction[$counter]['events'] = Bidding::where('auid', $au->auid)->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_biddings.uid')->orderBy('nexus_biddings.updated_at', 'desc')->select('nexus_biddings.*', 'nexus_member_profile.fname', 'nexus_member_profile.lname')->get();
                $bidPrice = Bidding::where('auid', $au->auid)->max('bidprice');
                if ($bidPrice != null) {
                    $auction[$counter]['b_price'] = $bidPrice;
                }
                $counter++;
            }
        }

        return $auction;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->except('refid');
        $data['u_id'] = Auth::id();
        ($data['amOrPm'] == "am") ? $data['amOrPm'] = true : $data['amOrPm'] = false;
        $auction = Auction::create($data);
        //reset file refid
        $fileToken = "auctions-" . $request->refid;
        FileStore::where('refid', 'auction-' . $fileToken)->where('type', 'items')->update(['refid' => $auction->auid]);

        $profile = Auth::user()->profile;
        $username =  $profile->fname . " " . $profile->lname;

        // return $auction;
        try {
            foreach (Auth::user()->friendsOne()->get() as $friend) {
                $user = User::find($friend->id);
                Notification::send($user, new AuctionNotification($auction, $username, 'born'));
            }
            foreach (Auth::user()->friendsTwo()->get() as $friend) {
                $user = User::find($friend->id);
                Notification::send($user, new AuctionNotification($auction, $username, 'born'));
            }
        } catch (\Throwable $th) {
            Log::debug($th);
        }


        return $auction;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function bidAuction(Request $request)
    {
        //set bidding price
        $data = $request->all();
        $data['uid'] = Auth::id();
        $bidd = Bidding::create($data);
        $profile = Auth::user()->profile;
        $fname = $profile->fname;
        $lname = $profile->lname;
        //broadcasting the bid
        # -- highest current bidding
        $highestbid = Bidding::where('auid', $data['auid'])->max('bidprice');
        # -- notify his friend circle
        try {
            event(new BiddingPlaced($bidd, $highestbid, $fname, $lname));
        } catch (\Throwable $th) {
            Log::debug($th);
        }
        return 1;
    }
}
