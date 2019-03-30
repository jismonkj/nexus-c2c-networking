<?php

namespace App\Member;

use Illuminate\Database\Eloquent\Model;

class Friends extends Model
{
    protected $table = 'nexus_friends_circle';
    protected $primaryKey = 'fcid';
    protected $fillable = [
        'uid',
        'fid',
        'status',
        'date_accepted'
    ];

    public function user(){
        return $this->belongsTo('App\User', 'id');
    }
}
