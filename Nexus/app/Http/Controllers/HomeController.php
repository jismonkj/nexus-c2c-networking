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

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
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
        $data = Auth::user();
        $data->fresher = true; //check if fresh user

        if (Auth::user()->profile) {
            $data->fresher = false;
            $data->status_text = Auth::user()->profile->status_text; //get status text
            //get name
            $fullname = Auth::user()->profile->fname . " " . Auth::user()->profile->lname;
            $data->uname = $fullname;
        }

        return $data;
    }

    //test method
    public function test()
    {
        return Friends::where('status', 'request')->where('nexus_friends_circle.uid', Auth::id())->join('nexus_member_profile', 'nexus_friends_circle.uid', 'nexus_member_profile.uid')->select('nexus_member_profile.uid', 'fname', 'lname', 'gender')->get();
    }
}
