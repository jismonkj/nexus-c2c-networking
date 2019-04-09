<?php

namespace App\Http\Controllers\Member;

use Illuminate\Http\Request;
use App\Commons\Interest;
use App\Http\Controllers\Controller;
use App\Member\InterestList;
use Illuminate\Support\Facades\Auth;
use App\Member\Profile;
use App\City;
use App\Distrib\DistribCenter;
use App\Member\Wallet;
use App\Member\Address;
use App\ItemOrders;
use App\Member\Items;
use App\Member\Tags;
use App\FileStore;

class MemberController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /* MEMBER INTERESTS
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

    public function tagSearch($query)
    {
        return Interest::where('name', 'like', $query . '%')->get();
    }
    /* WALLET
    __________________________________________________________________________________ */

    public function fetchBalance()
    {
        $totalCredit = Wallet::where('refid', Auth::id())->sum('amount');
        $totalDebit = Wallet::where('uid', Auth::id())->sum('amount');

        return $totalCredit - $totalDebit;
    }

    public function walletTransaction(Request $request, $type)
    {
        $data = $request->all();

        switch ($type) {
            case 'credit':
                $data['refid'] = Auth::id();
                Wallet::create($data);
                break;
            case 'debit':
                return $data;
                $data['uid'] = Auth::id();
                Wallet::create($data);
                break;
            default:
                break;
        }

        return $this->fetchBalance();
    }

    /* ORDERS_________________________________________________________________________ */

    public function placeOrder(Request $request)
    {
        $data = $request->all();
        $address = $data['address'];
        $address['uid'] = Auth::id();
        ///save address if new
        $currAddress = Address::where('fname', $address['fname'])->where('lname', $address['lname'])->where('zip', $address['zip'])->where('city_id', $address['city_id'])->where('uid', Auth::id())->get()->toArray()[0];

        if (!sizeof($currAddress)) {
            $currAddress = Address::create($address);
        }

        //update item quantity'
        $item = Items::find($data['item_id']);

        if ($item->quantity > 0) {
            $newQuantity = $item->quantity - $data['quantity'];
            $item->quantity = $newQuantity;
            $item->save();

            ///place order
            $data['addr_id'] = $currAddress['addid'];
            $data['uid'] = Auth::id();
            $currOrder = ItemOrders::create($data);

            ///debit wallet -- two way
            # -- on user
            $creditUser['uid'] = Auth::id();
            $creditUser['refid'] = $data['userid'];
            $userAmount = $data['quantity'] * $data['amount'];
            $creditUser['amount'] = $userAmount;
            $creditUser['type'] = 'member';
            $creditUser['orderid'] = $currOrder['oid'];

            $creditDistrib['uid'] = Auth::id();
            $creditDistrib['refid'] = $data['distrib_id'];
            $distribAmount = $userAmount * ($data['service_charge'] / 100);
            $creditDistrib['amount'] = $distribAmount;
            $creditDistrib['type'] = 'distributor';
            $creditDistrib['orderid'] = $currOrder['oid'];

            Wallet::create($creditUser);
            # -- on distributor
            Wallet::create($creditDistrib);

            return $this->fetchBalance();
        }

        return 0;
    }

    public function orderHistory($type)
    {
        switch ($type) {
            case 'sent':
                $orders = ItemOrders::where('nexus_item_orders.uid', Auth::id())->join('items', 'nexus_item_orders.item_id', 'items.item_id')->join('nexus_member_profile', 'nexus_member_profile.uid', 'items.uid')->join('nexus_distrib_profile', 'nexus_distrib_profile.uid', 'nexus_item_orders.distrib_id')->join('cities', 'items.loc_id', 'cities.id')->join('states', 'cities.sid', 'states.id')->join('nexus_member_addresses', 'nexus_item_orders.addr_id', 'nexus_member_addresses.addid')->join('cities as dcity', 'nexus_member_addresses.city_id', 'dcity.id')->join('states as dstate', 'dcity.sid', 'dstate.id')->select('nexus_item_orders.quantity', 'nexus_item_orders.o_id', 'nexus_item_orders.item_id', 'nexus_item_orders.amount', 'nexus_item_orders.distrib_id', 'nexus_item_orders.service_charge', 'nexus_item_orders.addr_id', 'nexus_member_profile.fname', 'nexus_member_profile.lname', 'nexus_distrib_profile.distrib_name', 'items.contents', 'cities.city_name as ucity', 'states.state_name as ustate', 'dcity.city_name as dcity', 'dstate.state_name as dstate', 'items.uid', 'nexus_item_orders.status', 'nexus_item_orders.created_at')->paginate(6)->toArray();

                $data = $orders['data'];
                $i = 0;
                foreach ($data as $order) {
                    $avatar = FileStore::where('refid', $order['uid'])->where('type', 'avatar')->get();

                    if (sizeof($avatar) == 0) {
                        $avatar = "img/avatar5-sm.jpg";
                    } else {
                        $avatar = $avatar['0']->path;
                    }

                    $data[$i]['uavatar'] = $avatar;
                    $i++;
                }

                $orders['data'] = $data;
                return $orders;
                break;

            case 'recieved':
                $orders = Items::where('items.uid', Auth::id())->join('nexus_item_orders', 'nexus_item_orders.item_id', 'items.item_id')->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_item_orders.uid')->join('nexus_member_addresses', 'nexus_item_orders.addr_id', 'nexus_member_addresses.addid')->join('cities as ucity', 'nexus_member_addresses.city_id', 'ucity.id')->join('states as ustate', 'ucity.sid', 'ustate.id')->join('nexus_distrib_profile', 'nexus_distrib_profile.uid', 'nexus_item_orders.distrib_id')->join('cities', 'items.loc_id', 'cities.id')->join('states', 'cities.sid', 'states.id')->select('nexus_item_orders.quantity', 'nexus_item_orders.o_id', 'nexus_item_orders.item_id', 'nexus_item_orders.amount', 'nexus_item_orders.distrib_id', 'nexus_item_orders.service_charge', 'nexus_item_orders.addr_id', 'nexus_member_profile.fname', 'nexus_member_profile.lname', 'nexus_distrib_profile.distrib_name', 'items.contents', 'cities.city_name as dcity', 'states.state_name as dstate', 'ucity.city_name as ucity', 'ustate.state_name as ustate', 'nexus_item_orders.uid', 'nexus_item_orders.status', 'nexus_item_orders.created_at')->paginate(6)->toArray();

                $data = $orders['data'];
                $i = 0;
                foreach ($data as $order) {
                    $avatar = FileStore::where('refid', $order['uid'])->where('type', 'avatar')->get();

                    if (sizeof($avatar) == 0) {
                        $avatar = "img/avatar5-sm.jpg";
                    } else {
                        $avatar = $avatar['0']->path;
                    }

                    $data[$i]['uavatar'] = $avatar;
                    $i++;
                }

                $orders['data'] = $data;
                return $orders;
                break;
            default:
                break;
        }
    }
    /* ADDRESSES______________________________________________________________________________________*/
    public function fetchAddresses($cityid)
    {
        return Address::where('uid', Auth::id())->where('city_id', $cityid)->select('addid', 'fname', 'lname', 'address', 'contact', 'zip')->get();
    }

    /* VARIOUS
    __________________________________________________________________________________________________ */

    //update status_text
    public function updateStatus(Request $request)
    {
        // return $request->all();
        return Profile::where('uid', Auth::id())->update($request->all());
    }

    // location search //auto complete
    public function locationSearch($query)
    {
        return City::where('city_name', 'like', $query . '%')->join('states', 'cities.sid', 'states.id')->join('countries', 'countries.id', 'states.cid')->select('cities.city_name', 'cities.id', 'states.state_name', 'countries.country_name')->get();
    }

    // find distributors
    public function findDistributors($to, $from)
    {
        return DistribCenter::where('nexus_distrib_centers.city_id', $from)->select('nexus_distrib_centers.distrib_id')->distinct()->join('nexus_distrib_centers as x', 'x.distrib_id', 'nexus_distrib_centers.distrib_id')->where('x.city_id', $to)->select('x.distrib_id')->distinct()->join('nexus_distrib_profile', 'x.distrib_id', 'nexus_distrib_profile.uid')->select('nexus_distrib_profile.distrib_name', 'x.distrib_id', 'nexus_distrib_profile.website', 'nexus_distrib_profile.service_charge')->get();
    }
}
