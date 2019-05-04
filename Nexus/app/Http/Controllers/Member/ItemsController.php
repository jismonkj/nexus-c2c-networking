<?php

namespace App\Http\Controllers\Member;

use App\Member\Items;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\FileStore;
use App\Member\Tags;
use Illuminate\Support\Facades\Notification;
use App\Notifications\ItemNotification;
use App\User;
use Illuminate\Support\Facades\Log;

class ItemsController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $data = $request->except('x_token');
        $imageToken = $request->x_token;
        $data['uid'] = Auth::id();
        $itemId = Items::create($data)->item_id;

        $tags = $data['tags'];
        foreach ($tags as $tag) {
            Tags::create(['item_id' => $itemId, 'interest_id' => $tag['id']]);
        }

        FileStore::where('refid', 'items-' . $imageToken)->where('type', 'items')->update(['refid' => $itemId]);


        $profile = Auth::user()->profile;
        $username =  $profile->fname . " " . $profile->lname;
        $message = $username . " has posted a new item!";
        //get item details
        $item = User::where('users.id', Auth::id())->join('items', 'items.uid', 'users.id')->join('nexus_member_profile', 'nexus_member_profile.uid', 'users.id')->join('cities', 'items.loc_id', 'cities.id')->join('states', 'states.id', 'cities.sid')->join('countries', 'countries.id', 'states.cid')->where('items.item_id', $itemId)->select('users.id as xid', 'items.*', 'nexus_member_profile.fname', 'nexus_member_profile.lname', 'cities.city_name', 'states.state_name', 'countries.country_name')->get()->toArray()[0];
        //files
        $item['itemImages'] = FileStore::where('refid', $itemId)->where('type', 'items')->select('path')->get();
        //tags
        $item['tags'] = Tags::where('item_id', $itemId)->join('interests', 'interests.id', 'tags.interest_id')->select('tags.interest_id', 'interests.name')->get();
        //avatar
        $avatar = FileStore::where('refid', $itemId)->where('type', 'avatar')->select('path')->get();
        if (sizeof($avatar) == 0) {
            $avatar = "img/avatar5-sm.jpg";
        } else {
            $avatar = $avatar['0']->path;
        }
        $item['avatar'] = $avatar;

        // new item notification
        try {
            foreach (Auth::user()->friendsOne()->get() as $friend) {
                $user = User::find($friend->id);
                Notification::send($user, new ItemNotification($message, $item, 'newitem'));
            }
            foreach (Auth::user()->friendsTwo()->get() as $friend) {
                $user = User::find($friend->id);
                Notification::send($user, new ItemNotification($message, $item, 'newitem'));
            }
        } catch (\Throwable $th) {
            Log::debug($th);
        }

        return $item;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Items  $items
     * @return \Illuminate\Http\Response
     */
    public function show(Items $items)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Items  $items
     * @return \Illuminate\Http\Response
     */
    public function edit(Items $items)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Items  $items
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Items $items)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Items  $items
     * @return \Illuminate\Http\Response
     */
    public function destroy(Items $items)
    {
        //
    }
}
