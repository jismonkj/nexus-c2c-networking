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
            $table->integer("u_id");
            $table->enum("privacy", ["private", "public"]);
            $table->string("date", 60);
            $table->string("time", 20);
            $table->boolean("amOrPm");
            $table->string("hours", 15);
            $table->string("b_price", 15);
            $table->text("description");
            $table->integer("loc_id");
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
