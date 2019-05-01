<?php

namespace App\Member;

use Illuminate\Database\Eloquent\Model;

class Bidding extends Model
{
    protected $table = 'nexus_biddings';
    protected $primaryKey = 'biid';
    protected $fillable = ['auid', 'uid', 'bidprice'];
}
