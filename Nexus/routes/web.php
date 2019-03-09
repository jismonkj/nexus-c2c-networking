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
_________________________________________________________________*/

//places
Route::resource('/country', 'CountryController');
Route::resource('/state', 'StateController');
Route::resource('/city', 'CityController');
Route::post('/user/info', 'HomeController@getUserInfo');

/* member routes
____________________________________________________________________*/

Route::resource('/member/profile', 'Member\ProfileController');
Route::post('/member/password/change', 'Member\ProfileController@changePassword');

/* admin routes
____________________________________________________________________*/

Route::resource('/admin', 'Admin\AdminController');
Route::post('/admin/users/list', 'Admin\AdminController@listUsers');




// testing routes
//___________________________________
Route::get('/test', 'Member\ProfileController@index');

// end testing routes ________________________