<?php

namespace App\Member;

use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
    protected $table = 'tags';
    protected $fillable = ['item_id', 'interest_id'];
    public $timestamps = false;
}
