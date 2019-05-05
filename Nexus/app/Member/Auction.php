<?php

namespace App\Member;

use Illuminate\Database\Eloquent\Model;

class Auction extends Model
{
    protected $primaryKey = "auid";
    protected $table = "nexus_auctions";
    protected $fillable = ["title", "u_id", "privacy", "loc_id", "date", "time", "amOrPm", "hours", "b_price", "description"];

    // public function receivesBroadcastNotificationsOn()
    // {
    //     return 'auction'.$this->id;
    // }
}
