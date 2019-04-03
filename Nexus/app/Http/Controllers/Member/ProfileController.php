<?php

namespace App\Http\Controllers\Member;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\Member\Profile;
use App\User;
use Illuminate\Support\Facades\Auth;
use App\Member\InterestList;
use App\Http\Controllers\Member\MemberController;
use App\City;
use App\State;
use App\Country;
use App\Member\Friends;
use App\Http\Controllers\FileController;

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
        //fetch current user profile
        if (Auth::user()->profile) {
            $data = Auth::user()->profile;
        }
        $data['email'] = Auth::user()->email;

        return $data;
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
        $profile = User::find($id)->profile()->join('users', 'users.id', 'nexus_member_profile.uid')->select('nexus_member_profile.*', 'users.email')->get();

        //set place names
        if ($profile[0]->city_id != "") {
            $city = City::where('id', $profile[0]->city_id)->get();
            $state = State::where('id', $city[0]->sid)->get();
            $country = Country::where('id', $state[0]->cid)->get();

            $profile[0]->city_name = $city[0]->city_name;
            $profile[0]->state_name = $state[0]->state_name;
            $profile[0]->country_name = $country[0]->country_name;
        }

        $profile[0]->connected = false;
        //see if connected
        if(Friends::where('uid', $profile[0]->uid)->where('fid', Auth::id())->where('status', 'active')->count() || Friends::where('fid', $profile[0]->uid)->where('uid', Auth::id())->where('status', 'active')->count()){
            $profile[0]->connected = true;
                }

        if(Friends::where('uid', $profile[0]->uid)->where('fid', Auth::id())->where('status', 'request')->count() || Friends::where('fid', $profile[0]->uid)->where('uid', Auth::id())->where('status', 'request')->count()){
            $profile[0]->connected = 3;
                }

        // //get intererest list of the user
        $interests = InterestList::where('uid', Auth::id())->join('interests', 'interests.id', 'interest_id')->select('name')->get();

        $profile[0]->interests = $interests;

        //get cover image
        $file = new FileController();
        $profile[0]->coverImage = $file->getImageUrl('cover', $id);
        //get profile image
        $profile[0]->profileImage = $file->getImageUrl('avatar', $id);

        return $profile[0];
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
            // return $data;
            return Profile::create($data)->count();
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
        if (Hash::check($request->currPassword, $password)) {
            return User::where('id', Auth::id())->update(['password' => $newPassword]);
        }
        return 0;
    }
}
