<?php

namespace App\Member;

use Illuminate\Database\Eloquent\Model;

class Auction extends Model
{
    protected $primaryKey = "auid";
    protected $table = "nexus_auctions";
    protected $fillable = ["title", "privacy", "date", "time", "amOrPm", "hours", "description"];
}
