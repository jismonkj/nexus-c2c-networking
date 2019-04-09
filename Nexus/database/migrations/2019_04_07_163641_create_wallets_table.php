<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWalletsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nexus_wallet_trans', function (Blueprint $table) {
            $table->increments('trid');
            $table->integer('uid');
            $table->integer('refid');
            $table->integer('orderid')->nullable();
            $table->float('amount');
            $table->enum('type', ['member', 'distributor', 'order', 'transfer'])->default('order');
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
        Schema::dropIfExists('wallets');
    }
}
