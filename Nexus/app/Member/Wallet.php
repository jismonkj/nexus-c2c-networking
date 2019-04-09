<?php

namespace App\Member;

use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    protected $table = "nexus_wallet_trans";
    protected $fillable = ["uid", "refid", "amount", "type", 'orderid'];
    protected $primaryKey = "trid";

}
