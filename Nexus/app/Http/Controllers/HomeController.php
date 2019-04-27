<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\City;
use App\Country;
use App\State;
use App\Http\Controllers\FileController;
use App\Member\Friends;
use App\FileStore;
use App\Member\Items;
use App\Member\PostLikes;
use App\Member\Tags;
use App\Tokens;
use App\Member\Auction;
use Illuminate\Support\Facades\Notification;
use App\Notifications\AuctionNotification;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
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
        } else if (Auth::user()->type == 'distrib') {
            return view('layouts.distrib');
        } else {
            return view('/nexushome');
        }
    }

    //check profile controller@index
    public function getUserInfo()
    {


        $data = User::where('users.id', Auth::id())->join('nexus_member_profile', 'users.id', '=', 'nexus_member_profile.uid')->select('website', 'gender', 'dob', 'city_id', 'mobile', 'about_you', 'birth_place', 'relationship', 'facebook', 'twitter', 'rss_feed', 'dribble', 'spotify', 'users.created_at')->get();

        if ($data[0]->city_id != "") {
            $city = City::where('id', $data[0]->city_id)->get();
            $state = State::where('id', $city[0]->sid)->get();
            $country = Country::where('id', $state[0]->cid)->get();

            $data[0]->city_name = $city[0]->city_name;
            $data[0]->state_name = $state[0]->state_name;
            $data[0]->country_name = $country[0]->country_name;
        }


        return $data[0];
    }

    public function getUserBasicInfo()
    {
        $data = "";

        if (Auth::user()->profile) {
            // $data->fresher = false;
            // $data->status_text = Auth::user()->profile->status_text; //get status text
            // //get name
            // $fullname = Auth::user()->profile->fname . " " . Auth::user()->profile->lname;
            // $data->uname = $fullname;

            $data = User::where('users.id', Auth::id())->join('nexus_member_profile', 'users.id', '=', 'nexus_member_profile.uid')->select('id', 'email', 'fname', 'lname', 'gender', 'status_text', 'dob')->get();

            $data[0]->fresher = false;
            $data[0]->uname = $data[0]->fname . " " . $data[0]->lname;
        } else {
            $data[0] = Auth::user();
            $data[0]->fresher = true; //check if fresh user
        }

        $image = new FileController();

        $data[0]->myCover = $image->getImageUrl('cover', Auth::id());
        $data[0]->myAvatar = $image->getImageUrl('avatar', Auth::id());

        return $data[0];
    }

    //feeds
    public function fetchMemberFeed()
    {
        //get friends set 1
        $fSetOne = Friends::where('nexus_friends_circle.uid', Auth::id())->join('items', 'items.uid', 'nexus_friends_circle.fid')->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_friends_circle.fid')->join('cities', 'items.loc_id', 'cities.id')->join('states', 'states.id', 'cities.sid')->join('countries', 'countries.id', 'states.cid')->select('nexus_friends_circle.fid as xid', 'items.*', 'nexus_member_profile.fname', 'nexus_member_profile.lname', 'cities.city_name', 'states.state_name', 'countries.country_name')->orderBy('items.updated_at', 'desc')->paginate(1)->toArray();

        //images for set 1
        $i = 0;
        $dataSetOne = $fSetOne['data'];
        foreach ($dataSetOne as $person) {
            $refid = $person['item_id'];
            //item images
            $itemImages = FileStore::where('refid', $refid)->where('type', 'items')->select('path')->get();

            //member avatar
            $avatar = FileStore::where('refid', $refid)->where('type', 'avatar')->select('path')->get();
            if (sizeof($avatar) == 0) {
                $avatar = "img/avatar5-sm.jpg";
            } else {
                $avatar = $avatar['0']->path;
            }

            //item tags
            $tags = Tags::where('item_id', $refid)->join('interests', 'interests.id', 'tags.interest_id')->select('tags.interest_id', 'interests.name')->get();


            $dataSetOne[$i]['tags'] = $tags;
            $dataSetOne[$i]['itemImages'] = $itemImages;
            $dataSetOne[$i]['avatar'] = $avatar;

            //like count on post
            $dataSetOne[$i]['likes'] = PostLikes::where('item_id', $dataSetOne[$i]['item_id'])->get()->count();
            //check whether current user liked the post
            $likes = PostLikes::where('item_id', $dataSetOne[$i]['item_id'])->where('user_id', Auth::id())->get()->count();
            $dataSetOne[$i]['liked'] = $likes;

            $i++;
        }

        //get friends set 2
        //get friends set 2
        $fSetTwo = Friends::where('nexus_friends_circle.fid', Auth::id())->join('items', 'items.uid', 'nexus_friends_circle.uid')->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_friends_circle.uid')->join('cities', 'items.loc_id', 'cities.id')->join('states', 'states.id', 'cities.sid')->join('countries', 'countries.id', 'states.cid')->select('nexus_friends_circle.fid as xid', 'items.*', 'nexus_member_profile.fname', 'nexus_member_profile.lname', 'cities.city_name', 'states.state_name', 'countries.country_name')->orderBy('items.updated_at', 'desc')->paginate(5)->toArray();

        //images for set 2
        $i = 0;
        $dataSetTwo = $fSetTwo['data'];
        foreach ($dataSetTwo as $person) {
            $refid = $person['item_id'];
            //item images
            $itemImages = FileStore::where('refid', $refid)->where('type', 'items')->select('path')->get();

            //member avatar
            $avatar = FileStore::where('refid', $refid)->where('type', 'avatar')->select('path')->get();
            if (sizeof($avatar) == 0) {
                $avatar = "img/avatar5-sm.jpg";
            } else {
                $avatar = $avatar['0']->path;
            }

            //item tags
            $tags = Tags::where('item_id', $refid)->join('interests', 'interests.id', 'tags.interest_id')->select('tags.interest_id', 'interests.name')->get();


            $dataSetTwo[$i]['tags'] = $tags;
            $dataSetTwo[$i]['itemImages'] = $itemImages;
            $dataSetTwo[$i]['avatar'] = $avatar;

            //likes count on post
            $dataSetTwo[$i]['likes'] = PostLikes::where('item_id', $dataSetTwo[$i]['item_id'])->get()->count();
            //check whether current user liked the post
            $likes = PostLikes::where('item_id', $dataSetTwo[$i]['item_id'])->where('user_id', Auth::id())->get()->count();
            $dataSetTwo[$i]['liked'] = $likes;

            $i++;
        }

        //my own posts
        $fSetThree = User::where('users.id', Auth::id())->join('items', 'items.uid', 'users.id')->join('nexus_member_profile', 'nexus_member_profile.uid', 'users.id')->join('cities', 'items.loc_id', 'cities.id')->join('states', 'states.id', 'cities.sid')->join('countries', 'countries.id', 'states.cid')->select('users.id as xid', 'items.*', 'nexus_member_profile.fname', 'nexus_member_profile.lname', 'cities.city_name', 'states.state_name', 'countries.country_name')->orderBy('items.updated_at', 'desc')->paginate(1)->toArray();

        //images for own set 2
        $i = 0;
        $dataSetThree = $fSetThree['data'];
        foreach ($dataSetThree as $person) {
            $refid = $person['item_id'];
            //item images
            $itemImages = FileStore::where('refid', $refid)->where('type', 'items')->select('path')->get();

            //member avatar
            $avatar = FileStore::where('refid', $refid)->where('type', 'avatar')->select('path')->get();
            if (sizeof($avatar) == 0) {
                $avatar = "img/avatar5-sm.jpg";
            } else {
                $avatar = $avatar['0']->path;
            }

            //item tags
            $tags = Tags::where('item_id', $refid)->join('interests', 'interests.id', 'tags.interest_id')->select('tags.interest_id', 'interests.name')->get();


            $dataSetThree[$i]['tags'] = $tags;
            $dataSetThree[$i]['itemImages'] = $itemImages;
            $dataSetThree[$i]['avatar'] = $avatar;

            //likes count on post
            $dataSetThree[$i]['likes'] = PostLikes::where('item_id', $dataSetThree[$i]['item_id'])->get()->count();
            //check whether current user liked the post
            $likes = PostLikes::where('item_id', $dataSetThree[$i]['item_id'])->where('user_id', Auth::id())->get()->count();
            $dataSetThree[$i]['liked'] = $likes;

            $i++;
        }

        //merge both
        $data = array_merge(array_merge($dataSetOne, $dataSetTwo), $dataSetThree);
        // return $fSetThree['total'];
        //compare paginations with most number of pages
        if ($fSetOne['total'] >= $fSetTwo['total'] && $fSetOne['total'] >= $fSetThree['total']) {
            $fSetOne['data'] = $data;
            return $fSetOne;
        }

        if ($fSetTwo['total'] >= $fSetOne['total'] && $fSetTwo['total'] >= $fSetThree['total']) {
            $fSetTwo['data'] = $data;
            return $fSetTwo;
        }

        if ($fSetThree['total'] >= $fSetOne['total'] && $fSetThree['total'] >= $fSetTwo['total']) {
            $fSetThree['data'] = $data;
            return $fSetThree;
        }

        //orderby date
    }

    public function addLikes($itemId)
    {
        $response = [];
        $checkUserLike = PostLikes::where('item_id', $itemId)->where('user_id', Auth::id())->get()->count();


        if (!$checkUserLike) {
            PostLikes::create(['item_id' => $itemId, 'user_id' => Auth::id()]);
        } else {
            PostLikes::where('item_id', $itemId)->where('user_id', Auth::id())->delete();
        }

        $response['liked'] = !$checkUserLike;
        $response['likes'] = PostLikes::where('item_id', $itemId)->get()->count();


        return $response;
    }


    //tokens
    public function storeToken(Request $request)
    {
        $data = $request->all();
        if(Tokens::where('uid', $data['uid'])->where('type', $data['type'])->get()->count()){
            Tokens::where('uid', $data['uid'])->where('type', $data['type'])->update(['token'=>$data['token']]);
            return 1;
        }
        Tokens::create($data);
        return 1;
    }

    public static function verifyToken(Request $request)
    {
        $count = Tokens::where('uid', $request->uid)->where('token', $request->token)->where('type', $request->type)->get()->count();

        if($count){
            Tokens::where('uid', $request->uid)->where('token', $request->token)->where('type', $request->type)->delete();
        }

        return $count;
    }

    //test method
    public function test()
    {
        // return User::all();
        $auction = Auction::where('auid', 1)->get()[0];
        $username = "jismon";

        // return $auction;
        foreach (Auth::user()->friendsOne()->get() as $friend) {
            $user = User::find($friend->id);
             Notification::send($user, new AuctionNotification($auction, $username));
        }
        foreach (Auth::user()->friendsTwo()->get() as $friend) {
            $user = User::find($friend->id);
             Notification::send($user, new AuctionNotification($auction, $username));
        }
        return 'x';
        // Notification::send($users, new AuctionNotification($auction));

        
    }
}
