<?php

use Illuminate\Database\Seeder;
use App\Member\InterestList;

class InterestListTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(InterestList::class, 12)->create();
    }
}
