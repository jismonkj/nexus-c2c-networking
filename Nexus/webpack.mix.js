const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
// let whiteListedModules = ['vue', 'vuetify'];

mix.js('resources/js/app.js', 'public/js')
   .js('resources/js/guest.js', 'public/js')
   .js('resources/js/admin.js', 'public/js')
   .js('resources/js/member.js', 'public/js')
   .js('resources/js/distrib.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .sass('resources/sass/animate.scss', 'public/css');