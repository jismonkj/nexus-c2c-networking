<?php

namespace App\Http\Controllers\Member;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Member\InterestList;
use Illuminate\Support\Arr;
use App\Member\Profile;
use App\Member\Friends;

class FriendCircleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /* FRIEND SUGGETIONS
    __________________________________________
    ********************************************/
    public static function getFriendSuggestions()
    {
        # user interst list
        $userInterests = Auth::user()->interests()->select('interest_id')->get();
        # find members share same interest
        $memberList = []; //members list
        foreach ($userInterests as $intrerest) {
            $iid = $intrerest['interest_id'];
            $intrGroup = InterestList::where('interest_id', $iid)->where('uid', '!=', Auth::id())->select('uid')->get()->toArray();
            # adding each member to the list
            foreach ($intrGroup as $member) {
                if (Arr::has($memberList, $member['uid'])) {
                    # increase rep. count for existing member
                    $key = array_search(['uid' => $member['uid']], $memberList);
                    $memberList[$key]['rep']++;
                } else {
                    # for new member
                    $member['rep'] = 1;
                    array_push($memberList, $member);
                }
            }
        }


        # sorting member list based on rep count
        $memberList = array_reverse(Arr::sort($memberList, function ($value) {
            return $value['rep'];
        }));

        # removing friends from the list
        foreach ($memberList as $member) {
            $key = array_search($member, $memberList);
            if (Auth::user()->friends->where('fid', $member['uid'])->count()) {
                array_splice($memberList, $key, 1);
            } else {
                # getting names of suggetion candidates
                $user = Profile::where('uid', $member['uid'])->select('fname', 'lname')->get();
                if ($user->count()) {
                    $memberList[$key]['name'] = $user[0]['fname'] . " " . $user[0]['lname'];
                    // return $key;
                }
                $memberList[$key]['invited'] = false;
            }
        }

        //final suggestion list
        return json_encode($memberList);
    }

    /* FRIEND REQUESTS
    __________________________________________
    ********************************************/

    public function index()
    {
        return Friends::where('nexus_friends_circle.uid', Auth::id())->where('status', 'active')->orWhere('fid', Auth::id())->where('status', 'active')->join('nexus_member_profile', 'nexus_friends_circle.uid', 'nexus_member_profile.uid')->join('cities', 'cities.id', 'city_id')->join('countries', 'countries.id', 'country_id')->select('nexus_friends_circle.uid', 'fname', 'lname', 'country_name', 'city_name', 'date_accepted')->get();
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $data['uid'] = Auth::id();
        $data['date_accepted'] = now();
        Friends::create($data);
        return 1;
    }

    public static function show($status)
    {
        switch ($status) {
            case 'request':
            return Friends::where('status', $status)->where('fid', Auth::id())->join('nexus_member_profile', 'nexus_friends_circle.uid', 'nexus_member_profile.uid')->select('nexus_member_profile.uid', 'fname', 'lname', 'gender')->get();
                break;
        }

        return 0;
    }

    public function update(Request $request, $status)
    {
        return Friends::where('uid', $request->uid)->where('fid', Auth::id())->update(['status' => $status]);
    }

    public function destroy($fid)
    {
        return Auth::user()->friends()->where('fid', $fid)->orWhere('uid', $fid)->delete();
    }
}
