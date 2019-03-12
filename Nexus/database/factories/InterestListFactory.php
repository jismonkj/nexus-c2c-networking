<?php

use Faker\Generator as Faker;
use App\User;
use App\Commons\Interest;





$factory->define(App\Member\InterestList::class, function (Faker $faker) {
    $users = User::select('id')->get();
    $interests = Interest::select('id')->get();
    
    return [
        "uid"=> $faker->randomElement($users),
        "interest_id"=>$faker->randomElement($interests),
    ];
});
