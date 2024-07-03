const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/react')
   .react()
   // .sass('resources/sass/app.scss', 'public/css')
   .version();
