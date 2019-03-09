<?php

namespace App\Http\Controllers\Member;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\Member\Profile;
use App\User;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //    return 'home';
        return User::find('1')->profile;
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
            // return $data;
            return Profile::where('uid', Auth::id())->update($data);
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
        $currPassword = Hash::make($request->currPassword);
        $newPassword = Hash::make($request->newPassword);
        return User::find(1)->where('password', $currPassword)->update(['password'=>$newPassword]);
        
    }
}
