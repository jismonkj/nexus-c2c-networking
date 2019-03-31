<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FileStore extends Model
{
    public $primaryKey = 'storeid';
    protected $table = 'nexus_file_store';
    protected $fillable = ['path', 'type', 'refid'];
    public $timestamps = false;
}
