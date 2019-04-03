<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\User;
use App\City;
use App\Country;
use App\State;
use App\Http\Controllers\FileController;
use App\Member\Friends;
use App\FileStore;
use App\Member\Items;


class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        if (Auth::user()->type == 'admin') {
            return view('layouts.admin');
        } else if (Auth::user()->type == 'distrib') { } else {
            return view('/nexushome');
        }
    }

    //check profile controller@index
    public function getUserInfo()
    {


        $data = User::where('users.id', Auth::id())->join('nexus_member_profile', 'users.id', '=', 'nexus_member_profile.uid')->select('website', 'gender', 'dob', 'city_id', 'mobile', 'about_you', 'birth_place', 'relationship', 'facebook', 'twitter', 'rss_feed', 'dribble', 'spotify', 'users.created_at')->get();

        if ($data[0]->city_id != "") {
            $city = City::where('id', $data[0]->city_id)->get();
            $state = State::where('id', $city[0]->sid)->get();
            $country = Country::where('id', $state[0]->cid)->get();

            $data[0]->city_name = $city[0]->city_name;
            $data[0]->state_name = $state[0]->state_name;
            $data[0]->country_name = $country[0]->country_name;
        }


        return $data[0];
    }
    public function getUserBasicInfo()
    {
        $data = "";

        if (Auth::user()->profile) {
            // $data->fresher = false;
            // $data->status_text = Auth::user()->profile->status_text; //get status text
            // //get name
            // $fullname = Auth::user()->profile->fname . " " . Auth::user()->profile->lname;
            // $data->uname = $fullname;

            $data = User::where('users.id', Auth::id())->join('nexus_member_profile', 'users.id', '=', 'nexus_member_profile.uid')->select('id', 'email', 'fname', 'lname', 'gender', 'status_text', 'dob')->get();

            $data[0]->fresher = false;
            $data[0]->uname = $data[0]->fname . " " . $data[0]->lname;
        } else {
            $data[0] = Auth::user();
            $data[0]->fresher = true; //check if fresh user
        }

        $image = new FileController();

        $data[0]->myCover = $image->getImageUrl('cover', Auth::id());
        $data[0]->myAvatar = $image->getImageUrl('avatar', Auth::id());

        return $data[0];
    }

    //feeds
    //
    public function fetchMemberFeed()
    {
        //get friends set 1
        $fSetOne = Friends::where('nexus_friends_circle.uid', Auth::id())->join('items', 'items.uid', 'nexus_friends_circle.fid')->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_friends_circle.fid')->select('nexus_friends_circle.fid as xid', 'items.*', 'nexus_member_profile.fname', 'nexus_member_profile.lname')->get()->toArray();

        //images for set 1
        $i = 0;
        foreach ($fSetOne as $person) {
            $refid = $person['xid'];
            //item images
            $itemImages = FileStore::where('refid', $refid)->where('type', 'items')->select('path')->get();

            //member avatar
            $avatar = FileStore::where('refid', $refid)->where('type', 'avatar')->select('path')->get();
            if (sizeof($avatar) == 0) {
                $avatar = "theme/img/avatar5-sm.jpg";
            }
            $fSetOne[$i]['itemImages'] = $itemImages;
            $fSetOne[$i]['avatar'] = $avatar;
            $i++;
        }

        //get friends set 2
        $fSetTwo = Friends::where('nexus_friends_circle.fid', Auth::id())->join('items', 'items.uid', 'nexus_friends_circle.uid')->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_friends_circle.uid')->select('nexus_friends_circle.uid as xid', 'items.*', 'nexus_member_profile.fname', 'nexus_member_profile.lname')->get()->toArray();

        //images for set 2
        $i = 0;
        foreach ($fSetTwo as $person) {
            $refid = $person['xid'];
            //item images
            $itemImages = FileStore::where('refid', $refid)->where('type', 'items')->select('path')->get();

            //member avatar
            $avatar = FileStore::where('refid', $refid)->where('type', 'avatar')->select('path')->get();
            if (sizeof($avatar) == 0) {
                $avatar = "theme/img/avatar5-sm.jpg";
            }
            $fSetTwo[$i]['itemImages'] = $itemImages;
            $fSetTwo[$i]['avatar'] = $avatar;
            $i++;
        }

        //merge both
        return array_merge($fSetOne, $fSetTwo);
        //orderby date
    }

    public function addLikes($itemId)
    {
        $likeCount = Items::where('item_id', $itemId)->get()[0]->likes;
        $likeCount++;
        Items::where('item_id', $itemId)->update(['likes'=> $likeCount]);
        return $likeCount;
        
    }

    //test method
    public function test()
    {
        // return $this->getUserInfo();
        // return Friends::where('status', 'request')->where('nexus_friends_circle.uid', Auth::id())->join('nexus_member_profile', 'nexus_friends_circle.uid', 'nexus_member_profile.uid')->select('nexus_member_profile.uid', 'fname', 'lname', 'gender')->get();

    }
}
