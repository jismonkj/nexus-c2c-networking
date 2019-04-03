<?php

namespace App\Http\Controllers\Member;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Member\InterestList;
use Illuminate\Support\Arr;
use App\Member\Profile;
use App\Member\Friends;
use App\City;
use App\State;
use App\Country;
use App\Http\Controllers\FileController;

class FriendCircleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /* FRIEND SUGGETIONS
    __________________________________________
    ********************************************/
    public function getFriendSuggestions()
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
                $key = 0;
                $flag = false;
                foreach ($memberList as $memberL) {
                    if ($memberL['uid'] == $member['uid']) { //existing member
                        $flag = true;
                        # increase rep. count for existing member
                        $memberList[$key]['rep']++;
                    }
                    $key++;
                }
                if (!$flag) {
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
            if (Auth::user()->friends()->where('fid', $member['uid'])->count() || Auth::user()->friends()->where('uid', $member['uid'])->count()) {
                array_splice($memberList, $key, 1);
            } else {
                # getting names of suggestion candidates
                $user = Profile::where('uid', $member['uid'])->select('fname', 'lname')->get();
                if ($user->count()) {
                    $memberList[$key]['name'] = $user[0]['fname'] . " " . $user[0]['lname'];
                    // return $key;
                }
                $memberList[$key]['invited'] = false;

                # -- avatar
                $path = FileController::getImageUrl('avatar', $member['uid']);
                ($path=="")? $memberList[$key]['avatar'] = "img/avatar38-sm.jpg": $memberList[$key]['avatar'] = $path ;
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
        return $this->getFriendCircle(Auth::id());
    }

    public function store(Request $request)
    {
        //accept request
        $data = $request->all();
        $data['uid'] = Auth::id();
        $data['status'] = 'request';
        Friends::create($data);
        return 1;
    }

    public static function show($status)
    {
        switch ($status) {
            case 'request':
                return Friends::where('status', $status)->where('fid', Auth::id())->join('nexus_member_profile', 'nexus_friends_circle.uid', 'nexus_member_profile.uid')->select('nexus_member_profile.uid', 'fname', 'lname', 'gender')->get();
                break;
            case 'sent':
                return Friends::where('status', 'request')->where('nexus_friends_circle.uid', Auth::id())->join('nexus_member_profile', 'nexus_friends_circle.fid', 'nexus_member_profile.uid')->select('nexus_member_profile.uid', 'fname', 'lname', 'gender')->get();
                break;
        }

        return 0;
    }

    public function update(Request $request, $status)
    {
        if($status == 'active'){
            return Friends::where('uid', $request->uid)->where('fid', Auth::id())->update(['status' => $status, 'date_accepted'=>now()]);
        }
        return Friends::where('uid', $request->uid)->where('fid', Auth::id())->update(['status' => $status]);
    }

    public function destroy($fid)
    {
        return Friends::where('fid', $fid)->where('uid', Auth::id())->orwhere('uid', $fid)->where('fid', Auth::id())->delete();
    }

    //get friend list of another user
    public function getMemberFriendCircle(Request $request)
    {
        $mid = $request->mid; //uid of another user
        return $this->getFriendCircle($mid);
        
    }


    public function getFriendCircle($mid){
        $friends = []; 
          $friendSetOne = Friends::where('nexus_friends_circle.uid', $mid)->where('status', 'active')->join('nexus_member_profile', 'nexus_friends_circle.fid', 'nexus_member_profile.uid')->select('nexus_friends_circle.fid as uid', 'city_id','fname', 'lname', 'date_accepted')->get(); 

           $friendSetTwo = Friends::where('nexus_friends_circle.fid', $mid)->where('status', 'active')->join('nexus_member_profile', 'nexus_friends_circle.uid', 'nexus_member_profile.uid')->select('nexus_friends_circle.uid', 'city_id', 'fname', 'lname',  'date_accepted')->get(); 

        foreach ($friendSetOne as $friend) {
           $friend = $this->setPlaces($friend);
            array_push($friends, $friend);
        }
        foreach ($friendSetTwo as $friend) {
            $friend = $this->setPlaces($friend);
            array_push($friends, $friend);
        }
        return $friends;
    }

    public function setPlaces($user)
    {
        if ($user->city_id != "") {
            $city = City::where('id', $user->city_id)->get();
            $state = State::where('id', $city[0]->sid)->get();
            $country = Country::where('id', $state[0]->cid)->get();

            $user->city_name = $city[0]->city_name;
            $user->state_name = $state[0]->state_name;
            $user->country_name = $country[0]->country_name;
        }

        return $user;
    }
}
