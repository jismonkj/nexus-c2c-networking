<?php

namespace App\Http\Controllers\Member;

use Illuminate\Http\Request;
use App\Commons\Interest;
use App\Http\Controllers\Controller;
use App\Member\InterestList;
use Illuminate\Support\Facades\Auth;
use App\Member\Profile;
use App\City;

class MemberController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /* member intersts
    ________________________________________________________________ */

    public function searchInt(Request $request)
    {
        $query = $request->input('query');
        return Interest::where("name", "like", $query . "%")->get();
    }

    public function getUserInterests()
    {
        return InterestList::where('uid', Auth::id())->join('interests', 'interests.id', 'interest_id')->get();
    }

    public function setUserInterest(Request $request)
    {
        $interest = InterestList::create(['uid' => Auth::id(), 'interest_id' => $request->interest_id]);
        return $interest->iid;
    }

    public function delUserInterest(Request $request)
    {
        return InterestList::destroy($request->id);
    }

    /* updata status_text
    __________________________________________________________________________________________________ */

    public function updateStatus(Request $request)
    {
        // return $request->all();
        return Profile::where('uid', Auth::id())->update($request->all());
    }

    // location search //auto complete
    public function locationSearch($query)
    {
        return City::where('city_name', 'like', $query.'%')->join('states', 'cities.sid', 'states.id')->join('countries', 'countries.id', 'states.cid')->select('cities.city_name', 'cities.id', 'states.state_name', 'countries.country_name')->get();
    }

}
