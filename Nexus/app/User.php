<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email', 'password', 'type', 'status', 'email_verified_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    // relationships
    public function profile()
    {
        return $this->hasOne('App\Member\Profile', 'uid');
    }

    public function distribProfile()
    {
        return $this->hasOne('App\Distrib\Profile', 'uid');
    }

    public function interests(){
        return $this->hasMany('App\Member\InterestList', 'uid');
    }


    # friends
    public function friendListPrimary()
    {
        return $this->hasMany('App\Member\Friends', 'uid');
    }
    
    public function friendListSecondary()
    {
        return $this->hasMany('App\Member\Friends', 'fid');
    }

    public function friends()
    {
        return $this->friendListPrimary->merge($this->friendListSecondary);
    }

    public function friendsOne()
    {
        return $this->hasMany('App\Member\Friends', 'uid')->join('users', 'nexus_friends_circle.fid', 'users.id')->where('nexus_friends_circle.status', 'active')->select('users.id', 'users.email');    
    }

    public function friendsTwo()
    {
        return $this->hasMany('App\Member\Friends', 'fid')->join('users', 'nexus_friends_circle.uid', 'users.id')->where('nexus_friends_circle.status', 'active')->select('users.id', 'users.email');    
    }

    public function receivesBroadcastNotificationsOn()
    {
        return 'user'.$this->id;
    }
}
