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

    public function getUserInfo()
    {
        $data = Auth::user();
        Auth::user()->profile ? $data->fresher = false : $data->fresher = true; //check if fresh user
        $data->status_text = Auth::user()->profile->status_text; //get status text
        //get name
        $fullname = Auth::user()->profile->fname . " " . Auth::user()->profile->lname;
        $data->uname = $fullname;
        return $data;
    }



    //test method
    public function test()
    {
        // return Auth::user()->interests()->select('interest_id')->get();
        // $user = json_encode(User::select('id')->get());
        // return response($user);
        // return Auth::user()->friends->where('fid', 9);
        // $request = new Request;
        // $request->uid = '11';
        // return Auth::user()->friends->where('fid', 8)->count();
        // $user = Profile::where('uid', 11)->select('fname', 'lname')->get();
        // return $user->count();
        // return FriendCircleController::show('request');
        return Friends::where('status', 'request')->where('fid', Auth::id())->join('nexus_member_profile', 'fid', 'nexus_member_profile.uid')->select('nexus_member_profile.uid', 'fname', 'lname', 'gender')->get();
        // return Auth::user()->friends();

    }
}
