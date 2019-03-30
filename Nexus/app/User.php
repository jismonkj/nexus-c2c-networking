<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email', 'password', 'type', 'status'
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

}
