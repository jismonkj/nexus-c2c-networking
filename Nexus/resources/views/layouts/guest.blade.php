<!DOCTYPE html>
<html lang="en">

<head>

    <title>Welcome to Nexus</title>

    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <!-- CSRF Token -->
    <meta id="csrf-token" name="csrf-token" content="{{ csrf_token() }}">
    <!-- Main Font -->
    <script src="{{ asset('theme/js/webfontloader.min.js') }}"></script>

    <script>
        WebFont.load({
            google: {
                families: ['Roboto:300,400,500,700:latin']
            }
        });
    </script>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="{{ asset('theme/Bootstrap/dist/css/bootstrap-reboot.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('theme/Bootstrap/dist/css/bootstrap.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('theme/Bootstrap/dist/css/bootstrap-grid.css') }}">

    <!-- Main Styles CSS -->
    <link rel="stylesheet" type="text/css" href="{{ asset('theme/css/main.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('theme/css/fonts.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/theme.css') }}">



</head>

<body class="landing-page">
    <div id="guestApp">
        @yield('content')
    </div>

    <!-- JS Scripts -->
    <script src="{{ asset('theme/js/jquery-3.2.1.js') }}"></script>
    <script src="{{ asset('theme/js/jquery.appear.js') }}"></script>
    <script src="{{ asset('theme/js/jquery.mousewheel.js') }}"></script>
    <script src="{{ asset('theme/js/perfect-scrollbar.js') }}"></script>
    <script src="{{ asset('theme/js/jquery.matchHeight.js') }}"></script>
    <script src="{{ asset('theme/js/svgxuse.js') }}"></script>
    <script src="{{ asset('theme/js/imagesloaded.pkgd.js') }}"></script>
    <script src="{{ asset('theme/js/Headroom.js') }}"></script>
    <script src="{{ asset('theme/js/velocity.js') }}"></script>
    <script src="{{ asset('theme/js/ScrollMagic.js') }}"></script>
    <script src="{{ asset('theme/js/jquery.waypoints.js') }}"></script>
    <script src="{{ asset('theme/js/jquery.countTo.js') }}"></script>
    <script src="{{ asset('theme/js/popper.min.js') }}"></script>
    <!-- <script src="{{ asset('theme/js/material.min.js') }}"></script> -->
    <script src="{{ asset('theme/js/bootstrap-select.js') }}"></script>
    <script src="{{ asset('theme/js/smooth-scroll.js') }}"></script>
    <script src="{{ asset('theme/js/selectize.js') }}"></script>
    <script src="{{ asset('theme/js/swiper.jquery.js') }}"></script>
    <script src="{{ asset('theme/js/moment.js') }}"></script>
    <script src="{{ asset('theme/js/daterangepicker.js') }}"></script>
    <script src="{{ asset('theme/js/simplecalendar.js') }}"></script>
    <script src="{{ asset('theme/js/fullcalendar.js') }}"></script>
    <script src="{{ asset('theme/js/isotope.pkgd.js') }}"></script>
    <script src="{{ asset('theme/js/ajax-pagination.js') }}"></script>
    <script src="{{ asset('theme/js/Chart.js') }}"></script>
    <script src="{{ asset('theme/js/chartjs-plugin-deferred.js') }}"></script>
    <script src="{{ asset('theme/js/circle-progress.js') }}"></script>
    <script src="{{ asset('theme/js/loader.js') }}"></script>
    <script src="{{ asset('theme/js/run-chart.js') }}"></script>
    <script src="{{ asset('theme/js/jquery.magnific-popup.js') }}"></script>
    <script src="{{ asset('theme/js/jquery.gifplayer.js') }}"></script>
    <script src="{{ asset('theme/js/mediaelement-and-player.js') }}"></script>
    <script src="{{ asset('theme/js/mediaelement-playlist-plugin.min.js') }}"></script>
    <script src="{{ asset('theme/js/sticky-sidebar.js') }}"></script>

    <script src="{{ asset('theme/js/base-init.js') }}"></script>
    <script defer src="{{ asset('theme/fonts/fontawesome-all.js') }}"></script>

    <script src="{{ asset('theme/Bootstrap/dist/js/bootstrap.bundle.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/guest.js') }}"></script>
    <!-- <script src="{{ asset('js/guest.js') }}"></script> -->
</body>

</html> 