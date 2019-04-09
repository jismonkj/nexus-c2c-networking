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
                <h6>Nexus | Stay Connected Start Buying</h6>
            </div>

            <div class="header-content-wrapper">
                <form class="search-bar w-search notification-list friend-requests">
                    <div class="form-group with-button">
                        <input class="form-control js-user-search" placeholder="Search here people or pages..." type="text">
                        <button>
                            <svg class="olymp-magnifying-glass-icon">
                                <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon') }}"></use>
                            </svg>
                        </button>
                    </div>
                </form>

                <a href="#" class="link-find-friend">Find Friends</a>

                <div class="control-block">

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