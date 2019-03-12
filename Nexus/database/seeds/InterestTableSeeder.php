<?php

use Illuminate\Database\Seeder;
use App\Commons\Interest;


class InterestTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Interest::class, 12)->create();
    }
}
