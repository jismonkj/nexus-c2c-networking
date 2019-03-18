<?php

namespace App\Http\Controllers\Member;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\Member\Profile;
use App\User;
use Illuminate\Support\Facades\Auth;
use App\Member\InterestList;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //fetch current user profiel
        // return InterestList::where('uid', Auth::id())->join('interests', 'interests.id', 'interest_id')->get();
        return Auth::user()->profile;
    }

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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //fetch another user profile
        return User::find($id)->profile;
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
        //check whether user profile created already
        if (Auth::user()->profile) {
            //update profile
            $data = $request->except(['email', '_token']);
            $email = $request->email;

            //update login
            $user = User::where('id', Auth::id())->update(['email' => $email]);
            $profile = Profile::where('uid', Auth::id())->update($data);

            return ($user) ? $user : $profile;
        } else {
            //new profile
            $data = $request->all();
            $data['uid'] = Auth::id();
            return Profile::create($data);
        }
        return 0;
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

    //change password
    public function changePassword(Request $request)
    {
        $password = Auth::user()->password; //current password
        $newPassword = Hash::make($request->newPassword);
        if(Hash::check($request->currPassword, $password)){
            return User::where('id', Auth::id())->update(['password' => $newPassword]);
        }
        return 0;
    }
}
