<?php

namespace App\Http\Controllers\Distrib;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Distrib\DistribCenter;

class DistribController extends Controller
{
    //landmarks
    public function storeLandMark(Request $request)
    {
        $data = $request->all();
        $data['distirib_id'] = Auth::id();

        // return $data;
        return DistribCenter::create($data);
    }

    public function listLandMarks($cityid)
    {
        return DistribCenter::where('city_id', $cityid)->get();
    }

    public function delLandMark($lid)
    {
        return DistribCenter::where('dcid', $lid)->delete();
    }
}
