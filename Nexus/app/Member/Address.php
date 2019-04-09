<?php

namespace App\Member;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = ["uid", "fname", "lname", "contact", "address", "city_id", "zip"];
    protected $table = "nexus_member_addresses";
    protected $primaryKey = "addid";
}
