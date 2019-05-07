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
use App\FileStore;
use App\User;
use Illuminate\Support\Facades\Notification;
use App\Notifications\FriendCircleNotification;
use Illuminate\Support\Facades\Log;
use App\Member\Auction;
use App\Http\Controllers\HomeController;

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
        Log::debug($request);
        if(!HomeController::verifyToken($request)){
            return 0;
        }
        $data = $request->all();
        $address = $data['address'];
        $address['uid'] = Auth::id();
        ///save address if new
        $currAddress = Address::where('fname', $address['fname'])->where('lname', $address['lname'])->where('zip', $address['zip'])->where('city_id', $address['city_id'])->where('uid', Auth::id())->get();

        if (!sizeof($currAddress)) {
            $currAddress = Address::create($address);
        } else {
            $currAddress = $currAddress[0];
        }

        $proceed = false;

        if ($request->type == "auction") {
            $proceed = true;
        } else {
            $item = Items::find($data['item_id']);
            if ($item->quantity > 0) {
                $newQuantity = $item->quantity - $data['quantity'];
                $item->quantity = $newQuantity;
                $item->save();
                $proceed = true;
            }
        }

        //update item quantity' //wallet deductions //create order
        if ($proceed) {
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

            $profile = Auth::user()->profile;
            $username = $profile->fname . " " . $profile->lname;
            $user = User::find($data['userid']);
            $message = "<b>" . $username . "</b> has orderd your product! <a href='#/account/orders-sent'>VIEW</a>";
            try {
                Notification::send($user, new FriendCircleNotification($message));
            } catch (\Throwable $th) {
                Log::debug($th);
            }

            return $this->fetchBalance();
        }

        return 0;
    }

    public function orderHistory($type)
    {
        $ordersAu = [];
        $orders = [];
        switch ($type) {
            case 'sent':
                $orders = ItemOrders::where('nexus_item_orders.uid', Auth::id())->where('nexus_item_orders.type', 'item')->join('items', 'nexus_item_orders.item_id', 'items.item_id')->join('nexus_member_profile', 'nexus_member_profile.uid', 'items.uid')->join('nexus_distrib_profile', 'nexus_distrib_profile.uid', 'nexus_item_orders.distrib_id')->join('cities', 'items.loc_id', 'cities.id')->join('states', 'cities.sid', 'states.id')->join('nexus_member_addresses', 'nexus_item_orders.addr_id', 'nexus_member_addresses.addid')->join('cities as dcity', 'nexus_member_addresses.city_id', 'dcity.id')->join('states as dstate', 'dcity.sid', 'dstate.id')->where('nexus_item_orders.distrib_id', '!=', '0')->select('nexus_item_orders.quantity', 'nexus_item_orders.o_id', 'nexus_item_orders.item_id', 'nexus_item_orders.amount', 'nexus_item_orders.distrib_id', 'nexus_item_orders.service_charge', 'nexus_item_orders.addr_id', 'nexus_member_profile.fname', 'nexus_member_profile.lname', 'nexus_distrib_profile.distrib_name', 'items.contents', 'cities.city_name as ucity', 'states.state_name as ustate', 'dcity.city_name as dcity', 'dstate.state_name as dstate', 'items.uid', 'nexus_item_orders.status', 'nexus_item_orders.created_at', 'nexus_item_orders.type')->paginate(6)->toArray();
                //orders on auctions
                $ordersAu = ItemOrders::where('nexus_item_orders.uid', Auth::id())->where('nexus_item_orders.type', 'auction')->join('nexus_auctions', 'nexus_item_orders.item_id', 'nexus_auctions.auid')->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_auctions.u_id')->join('nexus_distrib_profile', 'nexus_distrib_profile.uid', 'nexus_item_orders.distrib_id')->join('cities', 'nexus_auctions.loc_id', 'cities.id')->join('states', 'cities.sid', 'states.id')->join('nexus_member_addresses', 'nexus_item_orders.addr_id', 'nexus_member_addresses.addid')->join('cities as dcity', 'nexus_member_addresses.city_id', 'dcity.id')->join('states as dstate', 'dcity.sid', 'dstate.id')->where('nexus_item_orders.distrib_id', '!=', '0')->select('nexus_item_orders.quantity', 'nexus_item_orders.o_id', 'nexus_item_orders.item_id', 'nexus_item_orders.amount', 'nexus_item_orders.distrib_id', 'nexus_item_orders.service_charge', 'nexus_item_orders.addr_id', 'nexus_member_profile.fname', 'nexus_member_profile.lname', 'nexus_distrib_profile.distrib_name', 'nexus_auctions.description as contents', 'cities.city_name as ucity', 'states.state_name as ustate', 'dcity.city_name as dcity', 'dstate.state_name as dstate', 'nexus_auctions.u_id as uid', 'nexus_item_orders.status', 'nexus_item_orders.created_at', 'nexus_item_orders.type')->paginate(6)->toArray();
                break;

            case 'recieved':
                $orders = Items::where('items.uid', Auth::id())->join('nexus_item_orders', 'nexus_item_orders.item_id', 'items.item_id')->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_item_orders.uid')->join('nexus_member_addresses', 'nexus_item_orders.addr_id', 'nexus_member_addresses.addid')->join('cities as ucity', 'nexus_member_addresses.city_id', 'ucity.id')->join('states as ustate', 'ucity.sid', 'ustate.id')->join('nexus_distrib_profile', 'nexus_distrib_profile.uid', 'nexus_item_orders.distrib_id')->join('cities', 'items.loc_id', 'cities.id')->join('states', 'cities.sid', 'states.id')->where('nexus_item_orders.distrib_id', '!=', '0')->select('nexus_item_orders.quantity', 'nexus_item_orders.o_id', 'nexus_item_orders.item_id', 'nexus_item_orders.amount', 'nexus_item_orders.distrib_id', 'nexus_item_orders.service_charge', 'nexus_item_orders.addr_id', 'nexus_member_profile.fname', 'nexus_member_profile.lname', 'nexus_distrib_profile.distrib_name', 'items.contents', 'cities.city_name as dcity', 'states.state_name as dstate', 'ucity.city_name as ucity', 'ustate.state_name as ustate', 'nexus_item_orders.uid', 'nexus_item_orders.status', 'nexus_item_orders.created_at', 'nexus_item_orders.type')->orderBy('nexus_item_orders.created_at', 'DESC')->paginate(6)->toArray();
                //order Auctions
                $ordersAu = Auction::where('nexus_auctions.u_id', Auth::id())->join('nexus_item_orders', 'nexus_item_orders.item_id', 'nexus_auctions.auid')->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_item_orders.uid')->join('nexus_member_addresses', 'nexus_item_orders.addr_id', 'nexus_member_addresses.addid')->leftJoin('cities as ucity', 'nexus_member_addresses.city_id', 'ucity.id')->leftJoin('states as ustate', 'ucity.sid', 'ustate.id')->join('nexus_distrib_profile', 'nexus_distrib_profile.uid', 'nexus_item_orders.distrib_id')->leftJoin('cities', 'nexus_auctions.loc_id', 'cities.id')->leftJoin('states', 'cities.sid', 'states.id')->where('nexus_item_orders.distrib_id', '!=', '0')->select('nexus_item_orders.quantity', 'nexus_item_orders.o_id', 'nexus_item_orders.item_id', 'nexus_item_orders.amount', 'nexus_item_orders.distrib_id', 'nexus_item_orders.service_charge', 'nexus_item_orders.addr_id', 'nexus_member_profile.fname', 'nexus_member_profile.lname', 'nexus_distrib_profile.distrib_name', 'nexus_auctions.description as contents', 'cities.city_name as dcity', 'states.state_name as dstate', 'ucity.city_name as ucity', 'ustate.state_name as ustate', 'nexus_item_orders.uid', 'nexus_item_orders.status', 'nexus_item_orders.created_at', 'nexus_item_orders.type')->paginate(6)->toArray();
                break;

            case 'myself-r':
                $orders = Items::where('items.uid', Auth::id())->join('nexus_item_orders', 'nexus_item_orders.item_id', 'items.item_id')->where('nexus_item_orders.distrib_id', '0')->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_item_orders.uid')->join('nexus_member_addresses', 'nexus_item_orders.addr_id', 'nexus_member_addresses.addid')->join('cities as ucity', 'nexus_member_addresses.city_id', 'ucity.id')->join('states as ustate', 'ucity.sid', 'ustate.id')->join('cities', 'items.loc_id', 'cities.id')->join('states', 'cities.sid', 'states.id')->select('nexus_item_orders.quantity', 'nexus_item_orders.o_id', 'nexus_item_orders.item_id', 'nexus_item_orders.amount', 'nexus_item_orders.service_charge', 'nexus_item_orders.addr_id', 'nexus_member_profile.fname', 'nexus_member_profile.lname', 'items.contents', 'cities.city_name as dcity', 'states.state_name as dstate', 'ucity.city_name as ucity', 'ustate.state_name as ustate', 'nexus_item_orders.uid', 'nexus_item_orders.status', 'nexus_item_orders.created_at', 'nexus_item_orders.type')->paginate(6)->toArray();
                //orders 
                $ordersAu = Auction::where('nexus_auctions.u_id', Auth::id())->join('nexus_item_orders', 'nexus_item_orders.item_id', 'nexus_auctions.auid')->where('nexus_item_orders.distrib_id', '0')->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_item_orders.uid')->join('nexus_member_addresses', 'nexus_item_orders.addr_id', 'nexus_member_addresses.addid')->join('cities as ucity', 'nexus_member_addresses.city_id', 'ucity.id')->join('states as ustate', 'ucity.sid', 'ustate.id')->join('cities', 'nexus_auctions.loc_id', 'cities.id')->join('states', 'cities.sid', 'states.id')->select('nexus_item_orders.quantity', 'nexus_item_orders.o_id', 'nexus_item_orders.item_id', 'nexus_item_orders.amount', 'nexus_item_orders.service_charge', 'nexus_item_orders.addr_id', 'nexus_member_profile.fname', 'nexus_member_profile.lname', 'nexus_auctions.description as contents', 'cities.city_name as dcity', 'states.state_name as dstate', 'ucity.city_name as ucity', 'ustate.state_name as ustate', 'nexus_item_orders.uid', 'nexus_item_orders.status', 'nexus_item_orders.created_at', 'nexus_item_orders.type')->paginate(6)->toArray();
                break;

            case 'myself-s':
                $orders = ItemOrders::where('nexus_item_orders.uid', Auth::id())->where('nexus_item_orders.distrib_id', '0')->where('nexus_item_orders.type', 'item')->join('items', 'nexus_item_orders.item_id', 'items.item_id')->join('nexus_member_profile', 'nexus_member_profile.uid', 'items.uid')->join('cities', 'items.loc_id', 'cities.id')->join('states', 'cities.sid', 'states.id')->join('nexus_member_addresses', 'nexus_item_orders.addr_id', 'nexus_member_addresses.addid')->join('cities as dcity', 'nexus_member_addresses.city_id', 'dcity.id')->join('states as dstate', 'dcity.sid', 'dstate.id')->select('nexus_item_orders.quantity', 'nexus_item_orders.o_id', 'nexus_item_orders.item_id', 'nexus_item_orders.amount', 'nexus_item_orders.service_charge', 'nexus_item_orders.addr_id', 'nexus_member_profile.fname', 'nexus_member_profile.lname', 'items.contents', 'cities.city_name as ucity', 'states.state_name as ustate', 'dcity.city_name as dcity', 'dstate.state_name as dstate', 'items.uid', 'nexus_item_orders.status', 'nexus_item_orders.created_at', 'nexus_item_orders.type')->paginate(6)->toArray();
                //orders auctions
                $ordersAu = ItemOrders::where('nexus_item_orders.uid', Auth::id())->where('nexus_item_orders.distrib_id', '0')->where('nexus_item_orders.type', 'item')->join('nexus_auctions', 'nexus_item_orders.item_id', 'nexus_auctions.auid')->join('nexus_member_profile', 'nexus_member_profile.uid', 'nexus_auctions.u_id')->join('cities', 'nexus_auctions.loc_id', 'cities.id')->join('states', 'cities.sid', 'states.id')->join('nexus_member_addresses', 'nexus_item_orders.addr_id', 'nexus_member_addresses.addid')->join('cities as dcity', 'nexus_member_addresses.city_id', 'dcity.id')->join('states as dstate', 'dcity.sid', 'dstate.id')->select('nexus_item_orders.quantity', 'nexus_item_orders.o_id', 'nexus_item_orders.item_id', 'nexus_item_orders.amount', 'nexus_item_orders.service_charge', 'nexus_item_orders.addr_id', 'nexus_member_profile.fname', 'nexus_member_profile.lname', 'nexus_auctions.description as contents', 'cities.city_name as ucity', 'states.state_name as ustate', 'dcity.city_name as dcity', 'dstate.state_name as dstate', 'nexus_auctions.u_id as uid', 'nexus_item_orders.status', 'nexus_item_orders.created_at', 'nexus_item_orders.type')->paginate(6)->toArray();
                break;

            default:
                break;
        }

        if (sizeof($orders) || sizeof($ordersAu)) {
            if (sizeof($ordersAu)) {
                //merge data
                if (sizeof($orders)) {
                    $data = $orders['data'];
                    $dataAu = $ordersAu['data'];
                    $pos = sizeof($dataAu);

                    foreach ($data as $d) {
                        $dataAu[$pos] = $d;
                        $pos++;
                    }

                    //TO DO -- check pagination size
                    if ($orders['total'] > $ordersAu['total']) {
                        $orders['data'] = $dataAu;
                    }else{
                        $ordersAu['data'] = $dataAu;
                        $orders = $ordersAu;
                    }
                } else {
                    $orders = $ordersAu; //in case no orders on items
                }
            }

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
        }
        return $orders;
    }

    public function cancelOrder(Request $request)
    {
        return ItemOrders::where('o_id', $request->o_id)->update(['status' => 'cancelled']);
    }

    /* ADDRESSES______________________________________________________________________________________*/
    public function fetchAddresses($cityid)
    {
        return Address::where('uid', Auth::id())->where('city_id', $cityid)->select('addid', 'fname', 'lname', 'address', 'contact', 'zip')->get();
    }

    /* NOTIFICATIONS__________________________________________________________________________________ */
    public function fetchNotifications($limit = 0)
    {
        if ($limit) {
            return Auth::user()->notifications()->take($limit)->get();
        }
        return Auth::user()->notifications;
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
