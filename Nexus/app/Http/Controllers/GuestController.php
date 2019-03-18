<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class GuestController extends Controller
{

    public function checkIfMailExists(Request $request)
    {
        return User::where('email', $request->email)->count();
    }
}
