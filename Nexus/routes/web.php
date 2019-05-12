<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */
Auth::routes(['verify' => true]);
Route::get('/', 'Auth\LoginController@showLoginForm');
Route::view('/some', 'some');
Route::get('/home', 'HomeController@index')->name('nexushome');

/* COMMON
_________________________________________________________________
___________________________________________________________________ */
//block info
Route::get('/disabled', function(){
    if(Auth::user()->status != "ban"){
        return redirect('/home');
    }
    return view("disabled");
});
//walkthrough
Route::view('/walkthrough', 'walk');
//places
Route::resource('/country', 'CountryController');
Route::resource('/state', 'StateController');
Route::resource('/city', 'CityController');
//mail 
Route::post('/check/mail/exists', 'GuestController@checkIfMailExists');

/* MEMBER
____________________________________________________________________
________________________________________________________________________*/
Route::post('/user/basicinfo', 'HomeController@getUserBasicInfo');
Route::post('/user/info', 'HomeController@getUserInfo');
Route::resource('/member/profile', 'Member\ProfileController');
Route::post('/member/password/change', 'Member\ProfileController@changePassword');
# -- interests
Route::post('member/interest/search', 'Member\MemberController@searchInt');
Route::put('member/interest', 'Member\MemberController@setUserInterest');
Route::post('member/interest/del', 'Member\MemberController@delUserInterest');
Route::get('member/interest', 'Member\MemberController@getUserInterests');
# -- status
Route::post('member/status/text', 'Member\MemberController@updateStatus');
# -- friends
Route::resource('member/friends', 'Member\FriendCircleController');
Route::get('member/fsuggestions', 'Member\FriendCircleController@getFriendSuggestions');
Route::post('member/friend_circle', 'Member\FriendCircleController@getMemberFriendCircle');
# -- items
Route::resource('items', 'Member\ItemsController');
# -- feed
Route::get('feed/', 'HomeController@fetchMemberFeed');
Route::get('item/like/{itemId}', 'HomeController@addLikes');
Route::get('location/search/{query}', 'Member\MemberController@locationSearch');
Route::get('tags/search/{query}', 'Member\MemberController@tagSearch');
Route::get('find/distributor/{to}/{from}', 'Member\MemberController@findDistributors');
# -- wallet
Route::get('my/wallet', 'Member\MemberController@fetchBalance');
Route::post('my/wallet/{type}', 'Member\MemberController@walletTransaction');
# -- orders
Route::post("place/order", "Member\MemberController@placeOrder");
Route::get("order/history/{type}", "Member\MemberController@orderHistory");
Route::post("order/cancel", "Member\MemberController@cancelOrder");
Route::post("store/token", "HomeController@storeToken");
Route::post("verify/token", "HomeController@verifyToken");
# -- addresses
Route::get('stored/addresses/{cityid}', 'Member\MemberController@fetchAddresses');
# -- auctions
Route::resource('m/auction/', 'Member\AuctionController');
Route::post('m/auction/bid', 'Member\AuctionController@bidAuction');
# -- notifications
Route::get('m/notifications/{limit?}', 'Member\MemberController@fetchNotifications');

/* DISTRIBUTOR
_____________________________________________________________________________
______________________________________________________________________________*/
# -- landmarks
Route::post('/distrib/store/landm', 'Distrib\DistribController@storeLandMark');
Route::get('/distrib/del/landm/{lid}', 'Distrib\DistribController@delLandMark');
Route::get('/distrib/list/landm/{cityid}', 'Distrib\DistribController@listLandMarks');
# -- pay history
Route::get('/distrib/transactions', 'Distrib\DistribController@payHistory');
# -- profile
Route::get('/distrib/profile', 'Distrib\DistribController@distribProfile');
# -- orders
Route::get('orders/{type}', 'Distrib\DistribController@fetchOrders');
Route::post('orders/status/update/{type}', 'Distrib\DistribController@changeOrderStatus');

/* ADMIN
_____________________________________________________________________________
______________________________________________________________________________*/

Route::resource('/admin', 'Admin\AdminController');
Route::post('/admin/users/list', 'Admin\AdminController@listUsers');
Route::post('/admin/add/distrib', 'Admin\AdminController@addDistrib');
Route::get('/adm/transactions', 'Admin\AdminController@allTransactions');
# -- orders

/* FILES
______________________________________________________________________________
_______________________________________________________________________________*/
# -- images
Route::post('images/upload', 'FileController@imageCollect');
Route::post('images/url', 'FileController@getImageUrl');
// Route::post('images/items', 'FileController@itemImagesCollect');
// Route::post('images/auctions', 'FileController@itemImagesCollect');
Route::post('store/files', 'FileController@collectFiles');

/* testing routes
___________________________________ _________________________________________
_______________________________________________________________________________*/
Route::get('/test', 'HomeController@test');
Route::get('/te', 'GuestController@checkIfMailExists');

// end testing routes ________________________

// Broadcast::routes();