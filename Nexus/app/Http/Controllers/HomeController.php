<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Member\InterestList;
use Illuminate\Support\Arr;

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
        // return User::select('id')->get()->toArray();
         // user interst list
         $userInterests = Auth::user()->interests()->select('interest_id')->get()->toArray();

         //get members for each interest
         $memberList = []; //members share same interests

         foreach($userInterests as $intrerest){
             $iid = $intrerest['interest_id'];

             $intrGroup = InterestList::where('interest_id', $iid)->select('uid')->get()->toArray();
             return $intrGroup;
            //  array_push($memberList, $intrGroup);

            // return $intrGroup;l
             foreach($intrGroup as $user){
            //      if(Arr::has($memberList, $user['uid'])){
            //         array_search($user['uid'], $memberList);
            //      }else{
            //          array_push($memberList, $user);
            //      }
                array_push($memberList, $user);

                
             }
         }

         return $memberList;
         //prioritize the list
         foreach($memberList as $int){
            
         }
    }
}
