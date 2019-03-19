<?php

use Faker\Generator as Faker;
use App\User;
use App\Country;

$factory->define(App\Member\Profile::class, function (Faker $faker) {
    $users = User::select('id')->get();
    $countries = Country::select('id')->get();
    $relStatus = ['single', 'married', 'open'];

    return [
        'about_you' => $faker->sentence(), 
        'birth_place' => $faker->streetName, 
        'country_id' => $faker->randomElement($countries),
        'created_at' => "2019-03-12 02:54:56", 
        'dob' => $faker->date(),
        'facebook' => $faker->url, 
        'fname' => $faker->firstName(), 
        'gender' => $faker->randomElement(['male', 'female']), 
        'lname' => $faker->lastName, 
        'mobile' => $faker->phoneNumber, 
        'relationship' => $faker->randomElement($relStatus),
        'rss_feed' => $faker->url, 
        'spotify' => $faker->url, 
        'twitter' => $faker->url, 
        'updated_at' => now(), 
        'website' => $faker->url,  
        'dribble' => $faker->url,  
        'uid' => $faker->randomElement($users)
    ];
});
