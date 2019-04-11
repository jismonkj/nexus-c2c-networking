<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tokens extends Model
{
    protected $fillable = ['uid', 'token', 'type'];
    protected $table = 'nexus_tokens';
}
