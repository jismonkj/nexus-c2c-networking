<?php

namespace App\Member;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $table = "nexus_member_profile";
    protected $timestamp = false;
    protected $primaryKey = 'uid';
    // protected $fillable = ['uid', 'fname', 'lname', 'gender', 'status_text', 'dob',];

    public function User()
    {
        return $this->belongsTo('App\User', 'id');
    }
}
