<?php

namespace App\Http\Controllers\Member;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Member\Auction;
use App\FileStore;
use Illuminate\Support\Facades\Auth;

class AuctionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    { }

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
        ($data['amOrPm'] == "am") ? $data['amOrPm'] = true : $data['amOrPm'] = false;
        $auction = Auction::create($data);
        //reset file refid
        $fileToken = "auctions-" . $request->refid;
        FileStore::where('refid', 'x-' . $fileToken)->where('type', 'items')->update(['refid' => $auction->auid]);

        $profile = Auth::user()->profile;
        $username =  $profile->fname." ".$profile->lname; 

        // return $auction;
        foreach (Auth::user()->friendsOne()->get() as $friend) {
            $user = User::find($friend->id);
            Notification::send($user, new AuctionNotification($auction, $username));
        }
        foreach (Auth::user()->friendsTwo()->get() as $friend) {
            $user = User::find($friend->id);
            Notification::send($user, new AuctionNotification($auction, $username));
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
}
