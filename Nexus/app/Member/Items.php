<?php

namespace App\Member;

use Illuminate\Database\Eloquent\Model;

class Items extends Model
{
    protected $fillable = ['uid', 'loc_id','contents', 'price', 'quantity', 'privacy', 'status'];
    protected $primaryKey = "item_id";
    protected $table = "items";
}
