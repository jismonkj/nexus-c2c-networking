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
            $table->integer('uid')->unique();
            $table->string('fname', '60');
            $table->string('lname', '60');
            $table->string('website', '60')->nullable();
            $table->enum('gender', ['male', 'female'])->default('male');
            $table->string('status_text')->nullable();
            $table->date('dob');
            $table->integer('city_id');
            $table->integer('state_id');
            $table->integer('country_id');
            $table->string('mobile', '15');
            $table->string('about_you')->nullable();
            $table->string('birth_place')->nullable();
            $table->enum('relationship', ['single', 'married', 'open'])->default('single');
            $table->string('facebook')->nullable();
            $table->string('twitter')->nullable();
            $table->string('rss_feed')->nullable();
            $table->string('dribble')->nullable();  
            $table->string('spotify')->nullable();
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
