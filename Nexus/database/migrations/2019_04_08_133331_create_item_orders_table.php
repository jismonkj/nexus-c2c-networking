<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nexus_item_orders', function (Blueprint $table) {
            $table->increments('oid');
            $table->integer('uid');
            $table->integer('item_id');
            $table->string('quantity', 5);
            $table->string('amount', 8);
            $table->integer('distrib_id')->nullable();
            $table->string('service_charge');
            $table->integer('addr_id');
            $table->enum('type', ['auction', 'item'])->default("item");
            $table->enum('status', ['fresh', 'ontheway', 'delivered', 'rejected', 'cancelled', 'err'])->default("fresh");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('item_orders');
    }
}
