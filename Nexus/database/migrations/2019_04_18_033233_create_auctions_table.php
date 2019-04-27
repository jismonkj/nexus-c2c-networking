<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAuctionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nexus_auctions', function (Blueprint $table) {
            $table->increments('auid');
            $table->string("title");
            $table->enum("privacy", ["private", "public"]);
            $table->string("date", 60);
            $table->string("time", 20);
            $table->boolean("amOrPm");
            $table->string("hours", 15);
            $table->string("description");
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
        Schema::dropIfExists('auctions');
    }
}