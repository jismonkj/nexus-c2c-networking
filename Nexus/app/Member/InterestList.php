<?php

namespace App\Member;

use Illuminate\Database\Eloquent\Model;

class InterestList extends Model
{
    protected $fillable = ['uid', 'interest_id'];
    public $timestamps = false;
    protected $table = 'member_interest_lists';
    protected $primaryKey = 'iid';

    public function user(){
        $this->belongsTo('App\User', 'uid');
    }
}
