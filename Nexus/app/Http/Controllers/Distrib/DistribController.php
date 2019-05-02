<?php

namespace App\Http\Controllers\Distrib;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Distrib\DistribCenter;
use App\ItemOrders;
use App\FileStore;
use App\Http\Controllers\HomeController;

class DistribController extends Controller
{
    //landmarks
    public function storeLandMark(Request $request)
    {
        $data = $request->all();
        $data['distrib_id'] = Auth::id();

        // return $data;
        return DistribCenter::create($data);
    }

    public function listLandMarks($cityid)
    {
        return DistribCenter::where('city_id', $cityid)->where('distrib_id', Auth::id())->get();
    }

    public function delLandMark($lid)
    {
        return DistribCenter::where('dcid', $lid)->delete();
    }

    # -- ORDERS
    public function fetchOrders($type)
    {
        $orders = "";
        switch ($type) {
            case 'fresh':
                $orders = ItemOrders::where('nexus_item_orders.status', 'fresh')->where('distrib_id', Auth::id())->join('nexus_member_addresses', 'nexus_item_orders.addr_id', 'nexus_member_addresses.addid')->join('cities as tcity', 'nexus_member_addresses.city_id', 'tcity.id')->join('states as tstate', 'tcity.sid', 'tstate.id')->join('countries as tcountry', 'tstate.cid', 'tcountry.id')->join('items', 'items.item_id', 'nexus_item_orders.item_id')->join('nexus_member_profile', 'items.uid', 'nexus_member_profile.uid')->join('cities as fcity', 'fcity.id', 'items.loc_id')->join('states as fstate', 'fcity.sid', 'fstate.id')->join('countries as fcountry', 'fcountry.id', 'fstate.cid')->select('nexus_item_orders.o_id', 'nexus_item_orders.uid as tuid', 'nexus_item_orders.item_id', 'nexus_item_orders.quantity', 'nexus_item_orders.amount', 'nexus_item_orders.service_charge', 'nexus_item_orders.addr_id', 'nexus_item_orders.created_at', 'nexus_item_orders.updated_at', 'nexus_member_addresses.fname as tfname', 'nexus_member_addresses.lname as tlname', 'nexus_member_addresses.contact as tcontact', 'nexus_member_addresses.address as taddress', 'nexus_member_addresses.zip as tzip', 'tcity.city_name as tcity_name', 'tstate.state_name as tstate_name', 'tcountry.country_name as tcountry_name', 'items.uid as fuid', 'items.contents', 'nexus_member_profile.fname as ffname', 'nexus_member_profile.lname as flname', 'nexus_member_profile.mobile as fcontact', 'fcity.city_name as fcity_name', 'fstate.state_name as fstate_name', 'fcountry.country_name as fcountry_name', 'nexus_item_orders.status')->paginate(6)->toArray();
                break;
            case 'ontheway':
                $orders = ItemOrders::where('nexus_item_orders.status', 'ontheway')->where('distrib_id', Auth::id())->join('nexus_member_addresses', 'nexus_item_orders.addr_id', 'nexus_member_addresses.addid')->join('cities as tcity', 'nexus_member_addresses.city_id', 'tcity.id')->join('states as tstate', 'tcity.sid', 'tstate.id')->join('countries as tcountry', 'tstate.cid', 'tcountry.id')->join('items', 'items.item_id', 'nexus_item_orders.item_id')->join('nexus_member_profile', 'items.uid', 'nexus_member_profile.uid')->join('cities as fcity', 'fcity.id', 'items.loc_id')->join('states as fstate', 'fcity.sid', 'fstate.id')->join('countries as fcountry', 'fcountry.id', 'fstate.cid')->select('nexus_item_orders.o_id', 'nexus_item_orders.uid as tuid', 'nexus_item_orders.item_id', 'nexus_item_orders.quantity', 'nexus_item_orders.amount', 'nexus_item_orders.service_charge', 'nexus_item_orders.addr_id', 'nexus_item_orders.created_at', 'nexus_item_orders.updated_at','nexus_member_addresses.fname as tfname', 'nexus_member_addresses.lname as tlname', 'nexus_member_addresses.contact as tcontact', 'nexus_member_addresses.address as taddress', 'nexus_member_addresses.zip as tzip', 'tcity.city_name as tcity_name', 'tstate.state_name as tstate_name', 'tcountry.country_name as tcountry_name', 'items.uid as fuid', 'items.contents', 'nexus_member_profile.fname as ffname', 'nexus_member_profile.lname as flname', 'nexus_member_profile.mobile as fcontact', 'fcity.city_name as fcity_name', 'fstate.state_name as fstate_name', 'fcountry.country_name as fcountry_name', 'nexus_item_orders.status')->paginate(6)->toArray();
                break;
            case 'delivered':
                $orders = ItemOrders::where('nexus_item_orders.status', 'delivered')->where('distrib_id', Auth::id())->join('nexus_member_addresses', 'nexus_item_orders.addr_id', 'nexus_member_addresses.addid')->join('cities as tcity', 'nexus_member_addresses.city_id', 'tcity.id')->join('states as tstate', 'tcity.sid', 'tstate.id')->join('countries as tcountry', 'tstate.cid', 'tcountry.id')->join('items', 'items.item_id', 'nexus_item_orders.item_id')->join('nexus_member_profile', 'items.uid', 'nexus_member_profile.uid')->join('cities as fcity', 'fcity.id', 'items.loc_id')->join('states as fstate', 'fcity.sid', 'fstate.id')->join('countries as fcountry', 'fcountry.id', 'fstate.cid')->select('nexus_item_orders.o_id', 'nexus_item_orders.uid as tuid', 'nexus_item_orders.item_id', 'nexus_item_orders.quantity', 'nexus_item_orders.amount', 'nexus_item_orders.service_charge', 'nexus_item_orders.addr_id', 'nexus_item_orders.created_at', 'nexus_item_orders.updated_at', 'nexus_member_addresses.fname as tfname', 'nexus_member_addresses.lname as tlname', 'nexus_member_addresses.contact as tcontact', 'nexus_member_addresses.address as taddress', 'nexus_member_addresses.zip as tzip', 'tcity.city_name as tcity_name', 'tstate.state_name as tstate_name', 'tcountry.country_name as tcountry_name', 'items.uid as fuid', 'items.contents', 'nexus_member_profile.fname as ffname', 'nexus_member_profile.lname as flname', 'nexus_member_profile.mobile as fcontact', 'fcity.city_name as fcity_name', 'fstate.state_name as fstate_name', 'fcountry.country_name as fcountry_name', 'nexus_item_orders.status')->paginate(6)->toArray();
                break;
        }

        if (sizeof($orders)) {
            $data = $orders['data'];
            $i = 0;
            foreach ($data as $order) {
                $avatar = FileStore::where('refid', $order['tuid'])->where('type', 'avatar')->get();

                if (sizeof($avatar) == 0) {
                    $avatar = "img/avatar5-sm.jpg";
                } else {
                    $avatar = $avatar['0']->path;
                }

                $data[$i]['tavatar'] = $avatar;

                $avatar = FileStore::where('refid', $order['fuid'])->where('type', 'avatar')->get();

                if (sizeof($avatar) == 0) {
                    $avatar = "img/avatar5-sm.jpg";
                } else {
                    $avatar = $avatar['0']->path;
                }

                $data[$i]['favatar'] = $avatar;
                $i++;
            }

            $orders['data'] = $data;
        }
        return $orders;
    }

    public function changeOrderStatus($status, Request $request)
    {
        if($status == "delivered"){
            if(!HomeController::verifyToken($request)){
                return 0;
            }
        }
        $orderid = $request->o_id;
        ItemOrders::where('o_id', $orderid)->update(['status' => $status]);
        return 1;
    }
}
