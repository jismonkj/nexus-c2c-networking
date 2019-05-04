<template>
  <div class="outer">
    <div class="header-spacer header-spacer-small"></div>
    <!-- Main Header Groups -->

    <div class="main-header">
      <div class="content-bg-wrap bg-group"></div>
      <div class="container">
        <div class="row">
          <div class="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
            <div class="main-header-content">
              <h1>Manage your Auctions</h1>
              <p>
                Welcome to your friends groups! Do you wanna know what your close friends have been up to? Groups
                will let you easily manage your friends and put the into categories so when you enter you’ll only
                see a newsfeed of those friends that you placed inside the group. Just click on the plus button below and start now!
              </p>
            </div>
          </div>
        </div>
      </div>

      <img class="img-bottom" src="theme/img/group-bottom.png" alt="friends">
    </div>

    <!-- ... end Main Header Groups -->

    <div class="container">
      <div class="row">
        <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="ui-block responsive-flex">
            <div class="ui-block-title">
              <ul class="nav nav-tabs calendar-events-tabs" role="tablist">
                <li class="nav-item">
                  <router-link
                    to="/auctions/live"
                    class="nav-link"
                  >Current Auctions
                  <div class="ripple-container"></div>
                  </router-link>
                </li>

                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    to="/auctions/mine"
                  >
                    My Current Events
                    <!-- <span class="items-round-little bg-breez">2</span> -->
                    <div class="ripple-container"></div>
                  </router-link>
                </li>

                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    to="/auctions/old"
                  >
                    Oldies
                    <!-- <span class="items-round-little bg-breez">2</span> -->
                    <div class="ripple-container"></div>
                  </router-link>
                </li>
                
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    to="/auctions/upcoming"
                  >
                    Upcoming
                    <!-- <span class="items-round-little bg-breez">2</span> -->
                    <div class="ripple-container"></div>
                  </router-link>
                </li>
                
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    to="/auctions/bidded"
                  >
                    Bidded Auctions
                    <!-- <span class="items-round-little bg-breez">2</span> -->
                    <div class="ripple-container"></div>
                  </router-link>
                </li>
              </ul>
              <a href="#" class="more">
                <svg class="olymp-three-dots-icon">
                  <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main Content Groups -->

    <router-view></router-view>

    <!-- ... end Main Content Groups -->
  </div>
</template>
<script>
</script>
