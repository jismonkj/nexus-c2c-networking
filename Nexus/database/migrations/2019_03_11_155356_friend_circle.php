<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class FriendCircle extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nexus_friends_circle', function (Blueprint $table) {
            $table->increments('fcid');
            $table->integer('uid');
            $table->integer('fid');
            $table->enum('status', ['request', 'active', 'blocked', 'removed', 'cancelled'])->default('request');
            $table->dateTime('date_accepted')->nullable();
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
        //
    }
}
