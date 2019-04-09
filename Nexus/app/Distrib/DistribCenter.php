<?php

namespace App\Distrib;

use Illuminate\Database\Eloquent\Model;

class DistribCenter extends Model
{
    protected $table = "nexus_distrib_centers";
    public $timestamps = false;
    protected $primaryKey = 'dcid';

    protected $fillable = ['landmark', 'distrib_id', 'city_id'];
}
