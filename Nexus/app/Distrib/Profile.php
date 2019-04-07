<?php

namespace App\Distrib;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $table = "nexus_distrib_profile";
    protected $primaryKey = 'uid';

    protected $fillable = ['uid', 'distrib_name', 'headq', 'service_charge', 'website', 'contact'];

    public function user()
    {
        return $this->belongsTo('App\User', 'id');
    }
}
