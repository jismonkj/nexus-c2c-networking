<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nexus_member_profile', function (Blueprint $table) {
            $table->integer('uid')->index();
            $table->string('fname', '60');
            $table->string('lname', '60');
            $table->enum('gender', ['male', 'female']);
            $table->string('status_text');
            $table->date('dob');
            $table->integer('city_id');
            $table->integer('state_id');
            $table->integer('country_id');
            $table->string('mobile', '15');
            $table->string('bio');
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
        Schema::dropIfExists('members');
    }
}
