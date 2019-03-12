<?php

use Faker\Generator as Faker;

$factory->define(App\Commons\Interest::class, function (Faker $faker) {
    return [
        "name" => $faker->word
    ];
});
