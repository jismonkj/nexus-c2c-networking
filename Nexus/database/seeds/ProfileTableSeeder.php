<?php

use Illuminate\Database\Seeder;
use App\Member\Profile;

class ProfileTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Profile::class, 12)->create();
    }
}
