<!DOCTYPE html>
<html lang="en">

<head>
    <title>Nexus Home</title>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
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
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/animate.css') }}">



</head>

<body>
    <div id="memberApp">

        <!-- Header-BP -->
        <header class="header" id="site-header">
            <div class="page-title">
                <router-link to="/" class="logo">
                    <div class="img-wrap">
                        <svg viewBox="0 0 250 134" width="48.00000000000001%" height="48.00000000000001%">
                            <defs id="SvgjsDefs1205"></defs>
                            <g id="SvgjsG1206" featurekey="root" fill="#3f4257"></g>
                            <g id="SvgjsG1207" featurekey="symbol1" fill="#ffffff" transform="matrix(0.9722222222222222,0,0,0.9722222222222222,-0.2652765909830723,18.3597215546502)">
                                <path d="M14.03,50.03l13.5,13.5l13.5-13.5l-13.5-13.5L14.03,50.03 M27.53,32.03l18,18l-18,18l-18-18L27.53,32.03" style="fill-rule: evenodd; clip-rule: evenodd;"></path>
                                <path d="M27.53,54.53l4.5-4.5l-4.5-4.5l-4.5,4.5L27.53,54.53 M18.53,50.03l9-9l9,9l-9,9L18.53,50.03" style="fill-rule: evenodd; clip-rule: evenodd;"></path>
                                <path d="M68.03,72.53l-18-18l-18,18l18,18L68.03,72.53 M72.53,72.53l-22.5,22.5l-22.5-22.5l22.5-22.5L72.53,72.53" style="fill-rule: evenodd; clip-rule: evenodd;"></path>
                                <path d="M59.03,72.53l-9-9l-9,9l9,9L59.03,72.53 M63.53,72.53l-13.5,13.5l-13.5-13.5l13.5-13.5L63.53,72.53" style="fill-rule: evenodd; clip-rule: evenodd;"></path>
                                <polyline points="54.53,72.53 50.03,77.03 45.53,72.53 50.03,68.03 54.53,72.53 " style="fill-rule: evenodd; clip-rule: evenodd;"></polyline>
                                <path d="M41.03,27.53l9,9l9-9l-9-9L41.03,27.53 M36.53,27.53l13.5-13.5l13.5,13.5l-13.5,13.5L36.53,27.53" style="fill-rule: evenodd; clip-rule: evenodd;"></path>
                                <polyline points="45.53,27.53 50.03,23.03 54.53,27.53 50.03,32.03 45.53,27.53 " style="fill-rule: evenodd; clip-rule: evenodd;"></polyline>
                                <path d="M72.53,45.53l-4.5,4.5l4.5,4.5l4.5-4.5L72.53,45.53 M81.53,50.03l-9,9l-9-9l9-9L81.53,50.03" style="fill-rule: evenodd; clip-rule: evenodd;"></path>
                            </g>
                            <g id="SvgjsG1208" featurekey="text1" fill="#ffffff" transform="matrix(3.6614693187826806,0,0,3.6614693187826806,101.03789173834235,-6.824480432318204)">
                                <path d="M17.22 7.859999999999999 c0 0 -0.86 -0.46 -1.36 -0.44 c-0.64 0.04 -1.86 -0.16 -5.16 4.3 c-2.5 3.38 -4.62 7.08 -6.52 10.68 c2.06 -4.94 3.1 -6.94 3.72 -8.28 c1.56 -3.34 3.16 -7.38 0.32 -9.12 c-2.3 -1.4 -8.42 0.88 -10.44 6.06 c-3.46 8.92 5.5 8.7 5.5 8.7 s-4.62 9.62 -3.36 10.84 c0.78 0.74 2.08 0.9 2.04 0.62 c-0.44 -3.22 6.6 -14.94 9.08 -18.26 c1.32 -1.76 2.28 -2.8 2.94 -3.4 l-0.26 0.42 c-1.5 2.64 -6.62 13.12 -5.4 14.2 c1.06 0.98 2.2 0.9 2.26 0.6 c0.04 -0.14 -0.44 -0.28 0.22 -2.82 c0.3 -1.18 1.88 -6.38 4.56 -11.36 c0.62 -1.18 1.86 -2.74 1.86 -2.74 z M7.6 5.359999999999999 c1.82 0.64 -0.06 4.62 -1.58 8.04 c-1.48 3.26 -2.66 5.74 -2.66 5.74 s-7.56 0.62 -4.5 -7.24 c1.62 -4.2 6.48 -7.32 8.74 -6.54 z M14.28 21.259999999999998 c0.64 0 4.5 -3.14 3.52 -4.96 c-0.12 -0.24 -0.84 -0.88 -1.6 -0.96 c-0.88 -0.12 -1.92 0.8 -2.4 1.3 c-1.62 2.2 -2.1 4.32 -1.94 5.42 c0.16 1.6 1.28 1.94 1.76 1.94 c1.3 0 2.74 -1.44 3.36 -2.56 c0.36 -0.68 0.36 -1.16 0.36 -1.16 s-0.62 0.88 -1.74 1.78 c-0.52 0.42 -1.08 0.86 -1.64 0.96 c-0.52 0.12 -0.64 -0.34 -0.58 -1.1 c0.06 -0.68 0.24 -0.96 0.24 -0.96 s0 0.3 0.66 0.3 z M16.98 16.12 c0 0 0 0.62 -0.46 1.44 c-1.92 2.7 -2.72 2.56 -2.72 2.56 s0.48 -1.58 1.46 -2.74 c0.94 -1.1 1.72 -1.26 1.72 -1.26 z M18.2 16.6 c0 0 0.66 -0.92 1.88 -0.98 c1.04 -0.06 1.7 2.98 1.7 2.98 s2.72 -2.7 3.14 -2.9 c0.42 -0.22 0.82 0.02 0.82 0.02 l-3.7 3.72 s0.44 1.42 0.82 2.58 c0.72 2.24 2.12 -0.7 2.36 -0.9 c0.46 -0.38 0.48 -0.22 0.48 -0.22 s-1.14 1.96 -1.56 2.38 c-2 2 -3.04 -0.22 -3.6 -2.34 c0 0 -2.62 2.9 -3.14 3.04 c-0.7 0.18 -0.84 -0.04 -0.84 -0.04 l3.7 -3.68 s-0.46 -1.98 -1.1 -3.06 c-0.34 -0.58 -0.96 -0.6 -0.96 -0.6 z M29.78 23.12 c1.12 -0.04 2.74 -3.08 2.74 -3.08 s-0.86 3.58 -2.36 3.96 c-0.52 0.12 -0.98 0 -1.58 -0.58 c-0.48 -0.48 -0.42 -1.68 -0.42 -1.72 c-0.02 0.06 -1.52 2.18 -1.96 2.3 c-0.38 0.1 -1.18 0 -1.74 -0.58 c-0.26 -0.3 -0.22 -2.06 0.32 -3.7 c0.58 -1.82 1.74 -3.62 2.2 -3.84 c0.94 -0.38 1.42 0.42 1.42 0.42 s-1.32 2.12 -2.04 3.98 c-0.54 1.38 -0.78 2.92 -0.54 2.84 c1.28 -0.36 2.64 -4.98 4.44 -6.92 c0.76 -0.8 1.76 0.42 1.76 0.42 s-1 1.72 -1.7 3.48 c-0.58 1.48 -0.74 3.02 -0.54 3.02 z M40.64 19.2 c0 0 -0.12 -0.42 -1 -0.34 c-1.24 0.1 -2.7 1.06 -3.86 1.9 c-0.68 -0.98 -6.38 -3.5 1.58 -5.1 c0.54 -0.1 0.46 0.22 0.48 0.24 c0.22 -0.12 0.62 -2.94 -2.76 -1.6 c-6.28 2.5 -0.98 5.62 -0.48 7.18 c0 0 -2.26 1.56 -4.38 3.76 c-1.76 1.8 -3.4 4.16 -3.5 5.66 c-0.04 0.68 1.56 1.58 2.26 1.46 c5 -0.88 9.72 -7.34 7.36 -10.82 c0 0 1.46 -1.4 4.3 -2.34 z M34.92 22.34 c0 0 0.68 2.04 -1.96 5.32 c-1.5 1.84 -4.36 3.66 -4.78 3.2 c-0.82 -0.88 4.34 -6.96 6.74 -8.52 z"></path>
                            </g>
                            <g id="SvgjsG1209" featurekey="text3" fill="#ffffff" transform="matrix(0.47564138135418316,0,0,0.47564138135418316,134.23773057409255,98.22751179189117)">
                                <path d="M10.78 16.44 c4.02 -1.96 4.4 -4.82 4.32 -5.22 c-0.08 -0.38 -0.58 -3.88 -6.94 -1.48 c-8.8 3.38 -10.84 9.4 -10.76 10.04 c0.06 0.56 1.24 2.54 2.14 2.72 c1.98 0.26 5.9 -1.6 8.16 -2.46 c1.16 -0.44 1.76 -0.1 1.76 -0.1 s-2.74 1.52 -4.72 3.34 c-1.9 1.72 -2.92 3.32 -2.96 3.82 c-0.06 0.44 0.64 2.06 1.88 2.24 c1.66 0.3 4.08 -1.22 5.36 -2.8 c2.7 -3.14 2.64 -5.46 2.3 -6.6 c0.3 -0.16 1.18 -0.78 1.8 -1.38 c0.26 -0.22 0.46 -1 0.46 -1 l-2.76 1.58 c-0.38 -0.34 -1.02 -0.68 -2.52 -0.46 c-3.56 0.4 -8.62 3.06 -9.56 1.84 c-0.24 -0.28 1.74 -4.32 6.34 -7.16 c7.08 -4.36 9.24 -2.94 9.18 -2.68 c-0.52 2.78 -5.3 4.52 -5.32 4.86 c-0.06 0.4 0.86 1.4 1.84 0.9 z M5.32 24.6 c2.02 -1.96 4.82 -3.7 4.82 -3.7 s0.22 1.86 -1.76 3.92 c-3.28 3.3 -5.34 2.64 -5.34 2.64 s0.94 -1.5 2.28 -2.86 z M19.1 8.44 c0.58 -0.54 0.84 -0.58 0.96 -0.54 c-0.26 -0.16 -1.2 -0.58 -2.32 0.36 c-0.84 0.66 -2 2.54 -3.06 4.76 l-2.26 0.12 s-0.12 0.9 0.26 1.08 c0.24 0.1 0.92 0.08 1.46 0.04 c-1.76 4.16 -2.92 8.98 -1.02 9.68 c1.22 0.44 2.76 -1.5 3.12 -2.14 c0.52 -0.96 0.42 -1.66 0.34 -1.52 c-0.26 0.52 -1.84 3.12 -2.72 2.9 c-0.46 -0.12 -0.3 -1.86 0.32 -3.96 c0.72 -2.4 1.68 -4.96 1.68 -4.96 s-0.14 -0.04 1.32 -0.1 c1.4 -0.06 1.72 -0.04 1.72 -0.04 s-0.02 -1 -0.6 -1.06 c-1.14 -0.12 -1.78 -0.06 -1.78 -0.06 s1.44 -3.42 2.58 -4.56 z M20.060000000000002 7.899999999999999 l0.08 0.06 s-0.02 -0.04 -0.08 -0.06 z M22.099999999999998 22.7 c-0.08 -0.12 0.48 -3.16 1.7 -5.18 c0.44 -0.8 0.84 -1.34 0.84 -1.34 s-0.76 -0.58 -1.36 -0.4 c-0.56 0.12 -0.9 1.04 -0.9 1.04 s-1.7 -1.38 -2.68 -0.52 c-3.3 2.82 -3.32 6.52 -3.08 7 c0.18 0.5 1.26 0.8 1.72 0.74 c0.46 -0.08 2.2 -2.58 2.2 -2.58 s-0.26 1.56 0.16 2.16 c0.18 0.2 1.1 0.54 1.54 0.38 c1.92 -0.64 2.9 -5.58 2.9 -5.58 s-0.94 1.8 -1.82 3.04 c-0.5 0.7 -1.18 1.34 -1.22 1.24 z M20.46 17.38 c0.8 -0.86 1.48 -0.08 1.48 -0.08 s-1.42 2.62 -2.68 4.38 c-0.52 0.74 -1.04 1.22 -1.04 1.22 s-0.28 -2.76 2.24 -5.52 z M27.66 15.9 c0 0 -0.12 0.12 -0.5 0.82 c-1.24 2.5 -2.04 5.92 -1.84 5.84 c0.62 -0.16 4.18 -6.74 5.26 -7.2 c0.96 -0.44 1.38 0.1 1.38 0.1 s-0.22 0.3 -0.92 1.42 c-2.66 4.38 -4.26 11.88 -4.5 13.44 c-0.06 0.36 0.02 0.72 0.02 0.72 s-0.68 0.14 -1.52 -0.36 c-0.56 -0.36 1.78 -8.58 1.78 -8.58 s-0.9 1.28 -1.4 1.66 c-0.28 0.22 -1.2 0.56 -1.56 -0.1 c-0.32 -0.58 -0.7 -2.46 1.7 -7.44 c0.52 -1.1 2.1 -0.32 2.1 -0.32 z  M45.7 15.94 c0 0 1.7 -1.66 2.72 -3.82 c1.12 -2.36 1.54 -5.22 1.24 -5.38 c-0.26 -0.16 -1.92 -0.42 -5.42 4.92 c-3.82 5.88 -5.86 12.58 -3.48 13.74 c2.28 1.1 5.12 -0.96 6.68 -3.04 c0.8 -1.08 1.36 -2.04 1.36 -2.04 c0.04 0.28 0.16 0.9 -0.08 1.58 c-0.22 0.68 -3.7 5.3 -7.3 4.16 c-0.98 -0.3 -2.86 -1.4 -3.36 -3.58 c-0.96 -4.2 5.16 -16.26 9.86 -16.64 c1 -0.1 2.2 0.48 3.06 1.68 c0.88 1.18 -1.36 7.1 -2.78 8.2 s-2.5 0.22 -2.5 0.22 z M55.980000000000004 18.68 c0.1 -0.34 -0.16 -0.64 -0.16 -0.64 s-0.1 0.22 -0.5 0.52 c-0.32 0.26 -0.98 0.64 -0.98 0.64 s0.66 -2.4 0.16 -3.08 c-0.22 -0.32 -1.38 -0.84 -2.14 -0.72 c-2.24 0.28 -3.1 3.58 -3.1 3.58 s-0.48 -0.08 -0.72 0.82 c-0.92 3.14 0.4 4.36 2.04 4.18 c2.44 -0.28 3.46 -3.68 3.46 -3.68 s0.26 -0.08 0.9 -0.56 c0.52 -0.4 0.98 -0.86 1.04 -1.06 z M53.4 16.240000000000002 c0.28 0.02 -0.04 3.5 -0.58 3.92 c-0.3 0.22 -1.6 0.42 -1.54 -0.3 c0.08 -2.06 1.84 -3.62 2.12 -3.62 z M50.48 20.58 c0 0 -0.06 0.42 0.94 0.52 c0.56 0.06 1.1 -0.2 1.1 -0.2 s-1.06 2.74 -2.26 2.54 c-0.82 -0.14 0.22 -2.86 0.22 -2.86 z M60.34 22.58 c0.44 -1.84 2.14 -5.4 2.14 -5.58 c0.02 -0.22 -0.94 -0.86 -1.42 -0.76 c-0.46 0.1 -1.36 0.96 -2.58 2.3 c-1.08 1.18 -1.88 2.46 -1.88 2.46 s0.38 -1.18 0.96 -2.46 c0.64 -1.5 1.28 -2.7 1.28 -2.7 s-0.36 -0.56 -1.46 -0.1 c-1.1 0.42 -3.48 6.96 -3.1 7.7 c0.38 0.72 1.52 0.56 1.52 0.56 s0.92 -1.86 2.12 -3.56 c1.3 -1.82 2.86 -3.34 2.86 -3.34 s-2.76 5.34 -2.02 6.44 c0.22 0.28 1.32 0.54 1.6 0.46 c0.42 -0.12 1.82 -1.74 2.18 -2.38 c0.66 -1.16 0.46 -2.32 0.46 -2.32 c-0.52 1.28 -2.04 3.1 -2.66 3.28 z M67.67999999999999 22.58 c0.44 -1.84 2.14 -5.4 2.14 -5.58 c0.02 -0.22 -0.94 -0.86 -1.42 -0.76 c-0.46 0.1 -1.36 0.96 -2.58 2.3 c-1.08 1.18 -1.88 2.46 -1.88 2.46 s0.38 -1.18 0.96 -2.46 c0.64 -1.5 1.28 -2.7 1.28 -2.7 s-0.36 -0.56 -1.46 -0.1 c-1.1 0.42 -3.48 6.96 -3.1 7.7 c0.38 0.72 1.52 0.56 1.52 0.56 s0.92 -1.86 2.12 -3.56 c1.3 -1.82 2.86 -3.34 2.86 -3.34 s-2.76 5.34 -2.02 6.44 c0.22 0.28 1.32 0.54 1.6 0.46 c0.42 -0.12 1.82 -1.74 2.18 -2.38 c0.66 -1.16 0.46 -2.32 0.46 -2.32 c-0.52 1.28 -2.04 3.1 -2.66 3.28 z M71.82000000000001 21.259999999999998 c0.64 0 4.5 -3.14 3.52 -4.96 c-0.12 -0.24 -0.84 -0.88 -1.6 -0.96 c-0.88 -0.12 -1.92 0.8 -2.4 1.3 c-1.62 2.2 -2.1 4.32 -1.94 5.42 c0.16 1.6 1.28 1.94 1.76 1.94 c1.3 0 2.74 -1.44 3.36 -2.56 c0.36 -0.68 0.36 -1.16 0.36 -1.16 s-0.62 0.88 -1.74 1.78 c-0.52 0.42 -1.08 0.86 -1.64 0.96 c-0.52 0.12 -0.64 -0.34 -0.58 -1.1 c0.06 -0.68 0.24 -0.96 0.24 -0.96 s0 0.3 0.66 0.3 z M74.52 16.12 c0 0 0 0.62 -0.46 1.44 c-1.92 2.7 -2.72 2.56 -2.72 2.56 s0.48 -1.58 1.46 -2.74 c0.94 -1.1 1.72 -1.26 1.72 -1.26 z M76.68 20.68 c-0.08 0.06 0.62 0.86 1.22 0.7 c0.6 -0.14 1.86 -2.3 2.2 -4.06 c0.2 -0.84 -0.68 -1.56 -1.1 -1.78 c-0.68 -0.36 -2.76 1.22 -3.8 3.12 c-0.88 1.6 -0.78 3.28 -0.74 3.58 c0.06 0.62 0.94 1.7 1.84 1.78 c1.52 0.14 3.02 -1.76 3.82 -3 c0.9 -1.36 0.96 -2.06 0.96 -2.06 c-0.02 0.02 -1.66 2.14 -3.44 3.38 c-1.02 0.74 -1.98 0.86 -2.08 0.6 c-0.78 -2.3 3.12 -6.6 3.56 -6.32 c0.58 0.36 -1.34 3.12 -2.44 4.06 z M87.58000000000001 8.44 c0.58 -0.54 0.84 -0.58 0.96 -0.54 c-0.26 -0.16 -1.2 -0.58 -2.32 0.36 c-0.84 0.66 -2 2.54 -3.06 4.76 l-2.26 0.12 s-0.12 0.9 0.26 1.08 c0.24 0.1 0.92 0.08 1.46 0.04 c-1.76 4.16 -2.92 8.98 -1.02 9.68 c1.22 0.44 2.76 -1.5 3.12 -2.14 c0.52 -0.96 0.42 -1.66 0.34 -1.52 c-0.26 0.52 -1.84 3.12 -2.72 2.9 c-0.46 -0.12 -0.3 -1.86 0.32 -3.96 c0.72 -2.4 1.68 -4.96 1.68 -4.96 s-0.14 -0.04 1.32 -0.1 c1.4 -0.06 1.72 -0.04 1.72 -0.04 s-0.02 -1 -0.6 -1.06 c-1.14 -0.12 -1.78 -0.06 -1.78 -0.06 s1.44 -3.42 2.58 -4.56 z M88.54 7.899999999999999 l0.08 0.06 s-0.02 -0.04 -0.08 -0.06 z M87.20000000000002 21.259999999999998 c0.64 0 4.5 -3.14 3.52 -4.96 c-0.12 -0.24 -0.84 -0.88 -1.6 -0.96 c-0.88 -0.12 -1.92 0.8 -2.4 1.3 c-1.62 2.2 -2.1 4.32 -1.94 5.42 c0.16 1.6 1.28 1.94 1.76 1.94 c1.3 0 2.74 -1.44 3.36 -2.56 c0.36 -0.68 0.36 -1.16 0.36 -1.16 s-0.62 0.88 -1.74 1.78 c-0.52 0.42 -1.08 0.86 -1.64 0.96 c-0.52 0.12 -0.64 -0.34 -0.58 -1.1 c0.06 -0.68 0.24 -0.96 0.24 -0.96 s0 0.3 0.66 0.3 z M89.9 16.12 c0 0 0 0.62 -0.46 1.44 c-1.92 2.7 -2.72 2.56 -2.72 2.56 s0.48 -1.58 1.46 -2.74 c0.94 -1.1 1.72 -1.26 1.72 -1.26 z M99.66000000000001 10.76 c0.56 -1.18 0.96 -1.42 0.96 -1.42 s-1.44 -0.7 -2.28 0.7 c-0.86 1.46 -2.44 5.5 -2.84 6.56 c-0.5 -0.34 -1.78 -1.06 -2.56 -0.38 c-2.7 2.36 -3.18 6.58 -2.98 7.08 c0.22 0.54 1.3 0.8 1.76 0.74 c0.46 -0.08 2.22 -2.66 2.22 -2.66 s-0.32 1.66 -0.06 2.14 c0.46 0.78 1.42 0.42 1.42 0.42 s0.54 -0.12 1.18 -1.2 c0.82 -1.48 1.48 -3.52 1.48 -3.52 s-0.58 1.18 -1.68 2.5 c-0.34 0.4 -0.62 0.62 -0.86 0.76 c0.58 -2.98 2.7 -8.34 4.24 -11.72 z M93.86000000000001 17.34 c0.8 -0.88 1.34 -0.08 1.34 -0.08 s-1.3 2.64 -2.56 4.42 c-0.52 0.74 -1.06 1.22 -1.06 1.22 s0.24 -3.34 2.28 -5.56 z"></path>
                            </g>
                        </svg>
                    </div>
                </router-link>
                <h6>

                </h6>
            </div>

            <div class="header-content-wrapper">
                <!-- <form class="search-bar w-search notification-list friend-requests">
                    <div class="form-group with-button">
                        <input class="form-control js-user-search" placeholder="Search here people or pages..." type="text">
                        <button>
                            <svg class="olymp-magnifying-glass-icon">
                                <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon') }}"></use>
                            </svg>
                        </button>
                    </div>
                </form> -->

                <!-- <a href="#" class="link-find-friend">Find Friends</a> -->

                <div class="control-block">
                    <!-- event notification -->
                    <div class="control-icon more has-items">
                        <svg class="olymp-thunder-icon">
                            <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-thunder-icon"></use>
                        </svg>

                        <div class="label-avatar bg-primary">8</div>

                        <div class="more-dropdown more-with-triangle triangle-top-center">
                            <div class="ui-block-title ui-block-title-small">
                                <h6 class="title">Notifications</h6>
                            </div>

                            <div class="mCustomScrollbar" data-mcs-theme="dark">
                                <ul class="notification-list">
                                    <li :class="{ 'un-read':(notify.read_at == null) }" v-for="notify in notifications" :key="notify.id">
                                        <div class="author-thumb">
                                            <img src="theme/img/avatar63-sm.jpg" alt="author">
                                        </div>
                                        <div class="notification-event">
                                            <div v-html="notify.data.message"></div>
                                            <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">9 hours ago</time></span>
                                        </div>
                                        <span class="notification-icon">
                                            <svg class="olymp-happy-face-icon">
                                                <use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
                                            </svg>
                                        </span>

                                        <div class="more">
                                            <svg class="olymp-three-dots-icon">
                                                <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                            </svg>
                                            <svg class="olymp-little-delete">
                                                <use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use>
                                            </svg>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <a href="#/account/notifications" class="view-all bg-primary">View All Notifications</a>
                        </div>
                    </div>
                    <!-- end event notifications -->

                    <div class="author-page author vcard inline-items more">
                        <div class="author-thumb">
                            <img alt="author" :src="'storage/'+user.myAvatar" class="avatar small">
                            <span class="icon-status online"></span>
                            <div class="more-dropdown more-with-triangle">
                                <div class="mCustomScrollbar" data-mcs-theme="dark">
                                    <div class="ui-block-title ui-block-title-small">
                                        <h6 class="title">Your Account</h6>
                                    </div>

                                    <ul class="account-settings">
                                        <li>
                                            <router-link to="/account/personal-info" class="author-name fn">

                                                <svg class="olymp-menu-icon">
                                                    <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-menu-icon') }}"></use>
                                                </svg>

                                                <span>Profile Settings</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <a href="#" @click.prevent="isWalletModalVisible=true">
                                                <svg class="olymp-star-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE">
                                                    <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-star-icon') }}"></use>
                                                </svg>

                                                <span>Wallet</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                                <svg class="olymp-logout-icon">
                                                    <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-logout-icon') }}"></use>
                                                </svg>

                                                <span>Log Out</span>
                                            </a>

                                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                                @csrf
                                            </form>
                                        </li>
                                    </ul>

                                    <!-- <div class="ui-block-title ui-block-title-small">
                                        <h6 class="title">Chat Settings</h6>
                                    </div>

                                    <ul class="chat-settings">
                                        <li>
                                            <a href="#">
                                                <span class="icon-status online"></span>
                                                <span>Online</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span class="icon-status away"></span>
                                                <span>Away</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span class="icon-status disconected"></span>
                                                <span>Disconnected</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <span class="icon-status status-invisible"></span>
                                                <span>Invisible</span>
                                            </a>
                                        </li>
                                    </ul> -->

                                    <div class="ui-block-title ui-block-title-small">
                                        <h6 class="title">Custom Status</h6>
                                    </div>

                                    <form class="form-group with-button custom-status" @submit.prevent="setMyStatus">
                                        <input class="form-control" placeholder="" type="text" value="Space Cowboy" name="status_text" v-model="newUserStatus">

                                        <button class="bg-purple" type="submit">
                                            <svg class="olymp-check-icon">
                                                <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-check-icon') }}"></use>
                                            </svg>
                                        </button>
                                    </form>

                                    <!-- <div class="ui-block-title ui-block-title-small">
                                        <h6 class="title">About Olympus</h6>
                                    </div>

                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span>Terms and Conditions</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>FAQs</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>Careers</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>Contact</span>
                                            </a>
                                        </li>
                                    </ul> -->
                                </div>

                            </div>
                        </div>
                        <router-link to="/profile/about" class="author-name fn">

                            <div class="author-title">
                                @{{ user.uname }}<svg class="olymp-dropdown-arrow-icon">
                                    <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon') }}"></use>
                                </svg>
                            </div>
                            <span class="author-subtitle">
                                @{{ user.status_text }}
                            </span>

                        </router-link>
                    </div>

                </div>
            </div>

        </header>
        <!-- ... end Header-BP -->


        <!-- Responsive Header-BP -->
        <header class="header header-responsive" id="site-header-responsive">
            <div class="header-content-wrapper">
                <ul class="nav nav-tabs mobile-app-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#request" role="tab">
                            <div class="control-icon has-items">
                                <svg class="olymp-happy-face-icon">
                                    <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon') }}"></use>
                                </svg>
                                <div class="label-avatar bg-blue">6</div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#notification" role="tab">
                            <div class="control-icon has-items">
                                <svg class="olymp-thunder-icon">
                                    <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-thunder-icon') }}"></use>
                                </svg>
                                <div class="label-avatar bg-primary">8</div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#search" role="tab">
                            <svg class="olymp-magnifying-glass-icon">
                                <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon') }}"></use>
                            </svg>
                            <svg class="olymp-close-icon">
                                <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-close-icon') }}"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Tab panes -->
            <div class="tab-content tab-content-responsive">

                <div class="tab-pane " id="request" role="tabpanel">

                    <div class="mCustomScrollbar" data-mcs-theme="dark">
                        <div class="ui-block-title ui-block-title-small">
                            <h6 class="title">FRIEND REQUESTS</h6>
                            <a href="#">Find Friends</a>
                            <a href="#">Settings</a>
                        </div>
                        <ul class="notification-list friend-requests">
                            <li>
                                <div class="author-thumb">
                                    <img src="{{ asset('theme/img/avatar55-sm.jpg') }}" alt="author">
                                </div>
                                <div class="notification-event">
                                    <a href="#" class="h6 notification-friend">Tamara Romanoff</a>
                                    <span class="chat-message-item">Mutual Friend: Sarah Hetfield</span>
                                </div>
                                <span class="notification-icon">
                                    <a href="#" class="accept-request">
                                        <span class="icon-add without-text">
                                            <svg class="olymp-happy-face-icon">
                                                <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon') }}"></use>
                                            </svg>
                                        </span>
                                    </a>

                                    <a href="#" class="accept-request request-del">
                                        <span class="icon-minus">
                                            <svg class="olymp-happy-face-icon">
                                                <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon') }}"></use>
                                            </svg>
                                        </span>
                                    </a>

                                </span>

                                <div class="more">
                                    <svg class="olymp-three-dots-icon">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon') }}"></use>
                                    </svg>
                                </div>
                            </li>
                            <li>
                                <div class="author-thumb">
                                    <img src="{{ asset('theme/img/avatar56-sm.jpg') }}" alt="author">
                                </div>
                                <div class="notification-event">
                                    <a href="#" class="h6 notification-friend">Tony Stevens</a>
                                    <span class="chat-message-item">4 Friends in Common</span>
                                </div>
                                <span class="notification-icon">
                                    <a href="#" class="accept-request">
                                        <span class="icon-add without-text">
                                            <svg class="olymp-happy-face-icon">
                                                <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon') }}"></use>
                                            </svg>
                                        </span>
                                    </a>

                                    <a href="#" class="accept-request request-del">
                                        <span class="icon-minus">
                                            <svg class="olymp-happy-face-icon">
                                                <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon') }}"></use>
                                            </svg>
                                        </span>
                                    </a>

                                </span>

                                <div class="more">
                                    <svg class="olymp-three-dots-icon">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon') }}"></use>
                                    </svg>
                                </div>
                            </li>
                            <li class="accepted">
                                <div class="author-thumb">
                                    <img src="{{ asset('theme/img/avatar57-sm.jpg') }}" alt="author">
                                </div>
                                <div class="notification-event">
                                    You and <a href="#" class="h6 notification-friend">Mary Jane Stark</a> just became
                                    friends.
                                    Write on <a href="#" class="notification-link">her wall</a>.
                                </div>
                                <span class="notification-icon">
                                    <svg class="olymp-happy-face-icon">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon') }}"></use>
                                    </svg>
                                </span>

                                <div class="more">
                                    <svg class="olymp-three-dots-icon">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon') }}"></use>
                                    </svg>
                                    <svg class="olymp-little-delete">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-little-delete') }}"></use>
                                    </svg>
                                </div>
                            </li>
                            <li>
                                <div class="author-thumb">
                                    <img src="{{ asset('theme/img/avatar58-sm.jpg') }}" alt="author">
                                </div>
                                <div class="notification-event">
                                    <a href="#" class="h6 notification-friend">Stagg Clothing</a>
                                    <span class="chat-message-item">9 Friends in Common</span>
                                </div>
                                <span class="notification-icon">
                                    <a href="#" class="accept-request">
                                        <span class="icon-add without-text">
                                            <svg class="olymp-happy-face-icon">
                                                <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon') }}"></use>
                                            </svg>
                                        </span>
                                    </a>

                                    <a href="#" class="accept-request request-del">
                                        <span class="icon-minus">
                                            <svg class="olymp-happy-face-icon">
                                                <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon') }}"></use>
                                            </svg>
                                        </span>
                                    </a>

                                </span>

                                <div class="more">
                                    <svg class="olymp-three-dots-icon">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon') }}"></use>
                                    </svg>
                                </div>
                            </li>
                        </ul>
                        <a href="#" class="view-all bg-blue">Check all your Events</a>
                    </div>

                </div>

                <div class="tab-pane " id="notification" role="tabpanel">

                    <div class="mCustomScrollbar" data-mcs-theme="dark">
                        <div class="ui-block-title ui-block-title-small">
                            <h6 class="title">Notifications</h6>
                            <a href="#">Mark all as read</a>
                            <a href="#">Settings</a>
                        </div>

                        <ul class="notification-list">
                            <li>
                                <div class="author-thumb">
                                    <img src="{{ asset('theme/img/avatar62-sm.jpg') }}" alt="author">
                                </div>
                                <div class="notification-event">
                                    <div><a href="#" class="h6 notification-friend">Mathilda Brinker</a> commented on
                                        your new
                                        <a href="#" class="notification-link">profile status</a>.</div>
                                    <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">4
                                            hours ago</time></span>
                                </div>
                                <span class="notification-icon">
                                    <svg class="olymp-comments-post-icon">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon') }}"></use>
                                    </svg>
                                </span>

                                <div class="more">
                                    <svg class="olymp-three-dots-icon">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon') }}"></use>
                                    </svg>
                                    <svg class="olymp-little-delete">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-little-delete') }}"></use>
                                    </svg>
                                </div>
                            </li>

                            <li class="un-read">
                                <div class="author-thumb">
                                    <img src="{{ asset('theme/img/avatar63-sm.jpg') }}" alt="author">
                                </div>
                                <div class="notification-event">
                                    <div>You and <a href="#" class="h6 notification-friend">Nicholas Grissom</a> just
                                        became
                                        friends. Write on <a href="#" class="notification-link">his wall</a>.</div>
                                    <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">9
                                            hours ago</time></span>
                                </div>
                                <span class="notification-icon">
                                    <svg class="olymp-happy-face-icon">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon') }}"></use>
                                    </svg>
                                </span>

                                <div class="more">
                                    <svg class="olymp-three-dots-icon">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon') }}"></use>
                                    </svg>
                                    <svg class="olymp-little-delete">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-little-delete') }}"></use>
                                    </svg>
                                </div>
                            </li>

                            <li class="with-comment-photo">
                                <div class="author-thumb">
                                    <img src="{{ asset('theme/img/avatar64-sm.jpg') }}" alt="author">
                                </div>
                                <div class="notification-event">
                                    <div><a href="#" class="h6 notification-friend">Sarah Hetfield</a> commented on
                                        your <a href="#" class="notification-link">photo</a>.</div>
                                    <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">Yesterday
                                            at 5:32am</time></span>
                                </div>
                                <span class="notification-icon">
                                    <svg class="olymp-comments-post-icon">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-comments-post-icon') }}"></use>
                                    </svg>
                                </span>

                                <div class="comment-photo">
                                    <img src="{{ asset('theme/img/comment-photo1.jpg') }}" alt="photo">
                                    <span>“She looks incredible in that outfit! We should see each...”</span>
                                </div>

                                <div class="more">
                                    <svg class="olymp-three-dots-icon">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon') }}"></use>
                                    </svg>
                                    <svg class="olymp-little-delete">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-little-delete') }}"></use>
                                    </svg>
                                </div>
                            </li>

                            <li>
                                <div class="author-thumb">
                                    <img src="{{ asset('theme/img/avatar65-sm.jpg') }}" alt="author">
                                </div>
                                <div class="notification-event">
                                    <div><a href="#" class="h6 notification-friend">Green Goo Rock</a> invited you to
                                        attend to
                                        his event Goo in <a href="#" class="notification-link">Gotham Bar</a>.</div>
                                    <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">March
                                            5th at 6:43pm</time></span>
                                </div>
                                <span class="notification-icon">
                                    <svg class="olymp-happy-face-icon">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon') }}"></use>
                                    </svg>
                                </span>

                                <div class="more">
                                    <svg class="olymp-three-dots-icon">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon') }}"></use>
                                    </svg>
                                    <svg class="olymp-little-delete">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-little-delete') }}"></use>
                                    </svg>
                                </div>
                            </li>

                            <li>
                                <div class="author-thumb">
                                    <img src="{{ asset('theme/img/avatar66-sm.jpg') }}" alt="author">
                                </div>
                                <div class="notification-event">
                                    <div><a href="#" class="h6 notification-friend">James Summers</a> commented on your
                                        new <a href="#" class="notification-link">profile status</a>.</div>
                                    <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">March
                                            2nd at 8:29pm</time></span>
                                </div>
                                <span class="notification-icon">
                                    <svg class="olymp-heart-icon">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-heart-icon') }}"></use>
                                    </svg>
                                </span>

                                <div class="more">
                                    <svg class="olymp-three-dots-icon">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon') }}"></use>
                                    </svg>
                                    <svg class="olymp-little-delete">
                                        <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-little-delete') }}"></use>
                                    </svg>
                                </div>
                            </li>
                        </ul>

                        <a href="#" class="view-all bg-primary">View All Notifications</a>
                    </div>

                </div>

                <div class="tab-pane " id="search" role="tabpanel">


                    <form class="search-bar w-search notification-list friend-requests">
                        <div class="form-group with-button">
                            <input class="form-control js-user-search" placeholder="Search here people or pages..." type="text">
                        </div>
                    </form>


                </div>

            </div>
            <!-- ... end  Tab panes -->

        </header>
        <!-- ... end Responsive Header-BP -->

        @yield('content')


        <a class="back-to-top" href="#">
            <img src="{{ asset('theme/svg-icons/back-to-top.svg') }}" alt="arrow" class="back-icon">
        </a>


        <transition leave-active-class="animate fade" enter-active-class="animate fade">
            <modal-wallet v-show="isWalletModalVisible" ref="modalWallet"></modal-wallet>
        </transition>
        <transition leave-active-class="animate fade" enter-active-class="animate fade">
            <notify-bar ref="notify"></notify-bar>
        </transition>

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
    <script src="{{ asset('theme/js/material.min.js') }}"></script>
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
    <script src="{{ asset('js/member.js') }}"></script>
</body>

</html>