<?php

namespace App\Member;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $table = "nexus_member_profile";
    protected $timestamp = false;
    protected $primaryKey = 'uid';

    protected $fillable = ['uid', 'about_you', 'birth_place', 'city_id', 'country_id', 'dob', 'dribble', 'facebook', 'fname', 'gender', 'lname', 'status_text', 'mobile', 'relationship', 'rss_feed', 'spotify', 'state_id', 'twitter', 'website'];

    public function user()
    {
        return $this->belongsTo('App\User', 'id');
    }
}
