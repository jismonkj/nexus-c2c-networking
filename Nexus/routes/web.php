<?php

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
Auth::routes();
Route::get('/', 'Auth\LoginController@showLoginForm');
Route::view('/some', 'some');
Route::get('/home', 'HomeController@index')->name('nexushome');

/* common routes
_________________________________________________________________
___________________________________________________________________ */

//places
Route::resource('/country', 'CountryController');
Route::resource('/state', 'StateController');
Route::resource('/city', 'CityController');
Route::post('/user/info', 'HomeController@getUserInfo');

/* member routes
____________________________________________________________________
________________________________________________________________________*/

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

/* admin routes
_____________________________________________________________________________
______________________________________________________________________________*/

Route::resource('/admin', 'Admin\AdminController');
Route::post('/admin/users/list', 'Admin\AdminController@listUsers');




/* testing routes
___________________________________ _________________________________________
_______________________________________________________________________________*/
Route::get('/test', 'HomeController@test');

// end testing routes ________________________