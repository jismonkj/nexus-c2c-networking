<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class FileStore extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nexus_file_store', function (Blueprint $table) {
            $table->increments('storeid');
            $table->string('path');
            $table->enum('type', ['cover', 'avatar', 'dist', 'items', 'auctions']);
            $table->string('refid', 25);
            $table->timestamp('uploaded_on');
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
