<?php

namespace App\Commons;

use Illuminate\Database\Eloquent\Model;

class Interest extends Model
{
    protected $fillable = ['name'];
    public $timestamps = false;
}
