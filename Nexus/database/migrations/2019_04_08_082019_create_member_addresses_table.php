<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMemberAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nexus_member_addresses', function (Blueprint $table) {
            $table->increments('addid');
            $table->integer('uid');
            $table->string('fname', 60);
            $table->string('lname', 60);
            $table->string('contact', 15);
            $table->string('address');
            $table->integer('city_id');
            $table->string('zip', 15);
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
        Schema::dropIfExists('member_addresses');
    }
}
