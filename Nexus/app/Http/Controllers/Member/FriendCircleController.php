<?php

namespace App\Http\Controllers\Member;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FriendCircleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /* FRIEND SUGGETIONS
    __________________________________________
    ********************************************/
    public function getFriendSuggetions()
    {
        // user interst list
        $userInterests = Auth::user()->interests()->select('interest_id')->get();

        //get members for each interest
    }
}
