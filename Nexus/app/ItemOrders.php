<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ItemOrders extends Model
{
    protected $primaryKey = "oid";
    protected $table = "nexus_item_orders";
    protected $fillable = ["uid", "item_id", "quantity", "amount", "distrib_id", "service_charge", "addr_id", "type", "status"];
}
