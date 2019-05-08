<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Distrib\Profile;
use App\Http\Controllers\FileController;
use Illuminate\Support\Facades\Log;
use App\Member\Items;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $data = [];
        $from = date('Y-m-d', strtotime('-7 days'));
        $to = date('Y-m-d');
        $items = Items::whereBetween('created_at', [$from, $to])->count();
        $users = User::whereBetween('created_at', [$from, $to])->count();
        $data['items'] = $items;
        $data['users'] = $users;
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
        $profile = User::find($id)->profile;        
        $path = FileController::getImageUrl('avatar', $id);
        $profile->avatar = $path;
        return $profile;
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
        $type = $request->type;
        try {
            switch ($type) {
                case 'user':
                    User::where('id', $id)->update(['status' => $request->status]);
                    break;

                default:
                    # code...
                    break;
            }
        } catch (\Throwable $th) {
            return 0;
        }

        return 1;
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

    public function listUsers(Request $request)
    {
        $type = $request->type;
        // ret
        switch ($type) {
            case 'members':
                return User::where('type', 'user')->join('nexus_member_profile', 'nexus_member_profile.uid', '=', 'users.id')->leftJoin('cities', 'nexus_member_profile.city_id', '=', 'cities.id')->leftJoin('states', 'states.id', 'cities.sid')->leftJoin('countries', 'countries.id', 'states.cid')->select('users.id', 'fname', 'lname', 'city_name', 'city_id', 'state_name', 'states.id as state_id', 'countries.id as country_id', 'country_name', 'email', 'status')->get();
                break;
            case 'distrib':
                return User::where('type', 'distrib')->join('nexus_distrib_profile', 'uid', '=', 'users.id')->select('users.id', 'distrib_name', 'headq', 'contact', 'email', 'status')->get();
                break;
            default:
                break;
        }
    }

    public function addDistrib(Request $request)
    {
        //check if mail exists
        if (User::where('email', $request->email)->get()->count()) {
            return 0;
        }
        //user table
        $data['email'] = $request->email;
        $data['type'] = 'distrib';
        $data['status'] = 'active';
        $data['password'] = Hash::make('user5');

        $data['email_verified_at'] = date('Y-m-d h:i:s');
        // return $data;
        $distrib = User::create($data);

        $profileData = $request->except('email');
        $profileData['uid'] = $distrib->id;

        //  return $profileData;
        //update distrib profile
        Profile::create($profileData);
        return 1;
    }
}
