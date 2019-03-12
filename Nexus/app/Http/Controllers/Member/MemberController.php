<?php

namespace App\Http\Controllers\Member;

use Illuminate\Http\Request;
use App\Commons\Interest;
use App\Http\Controllers\Controller;
use App\Member\InterestList;
use Illuminate\Support\Facades\Auth;
use App\Member\Profile;

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
}
