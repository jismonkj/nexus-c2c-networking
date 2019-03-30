<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Member\InterestList;
use Illuminate\Support\Arr;
use App\Member\Friends;
use App\Member\Profile;
use App\Http\Controllers\Member\FriendCircleController;
use App\City;
use App\Country;
use App\State;

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
            $data = Auth::user();
            $data->fresher = true; //check if fresh user
        }

        return $data[0];
    }

    //test method
    public function test()
    {
        // return $this->getUserInfo();
        // return Friends::where('status', 'request')->where('nexus_friends_circle.uid', Auth::id())->join('nexus_member_profile', 'nexus_friends_circle.uid', 'nexus_member_profile.uid')->select('nexus_member_profile.uid', 'fname', 'lname', 'gender')->get();
        
    }

   
}
