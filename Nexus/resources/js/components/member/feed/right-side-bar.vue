<template>
  <div class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-12">
    <div class="crumina-sticky-sidebar" style>
      <div class="sidebar__inner" style="position: relative;">
        <div class="ui-block">
          <!-- W-Birthsday-Alert -->
          <div class="widget w-birthday-alert">
            <div class="content">
              <a href="#" class="h4 title">Start An Auction</a>
              <p>
                <button
                  class="btn btn-primary"
                  @click="$parent.$refs.mainFeed.showAuctionModal=true"
                >Create Auction</button>
              </p>
            </div>
          </div>

          <!-- ... end W-Birthsday-Alert -->
        </div>
        
        <div class="ui-block">
          <div class="ui-block-title">
            <h6 class="title">Auctions Live!</h6>
          </div>
          <!-- Today Events -->
          <div class="today-events calendar">
            <div class="today-events-thumb">
              <div class="date">
                <div class="day-number">26</div>
                <div class="day-week">Saturday</div>
                <div class="month-year">March, 2016</div>
              </div>
            </div>
            <div class="list">
              <div class="control-block-button">
                <a
                  href="#"
                  class="btn btn-control bg-breez"
                  data-toggle="modal"
                  data-target="#create-event"
                >
                  <svg class="olymp-plus-icon">
                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-plus-icon"></use>
                  </svg>
                </a>
              </div>
              <div class="card">
                <div class="card-header text-left" role="tab" id="headingOne-1">
                  <div class="event-time">
                    <time datetime="2004-07-24T18:18">9:00am</time>
                  </div>
                  <h5 class="mb-0 title">Breakfast at the Agency</h5>
                </div>
                <div
                  class="card-body text-left"
                >Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!</div>
              </div>
            </div>
          </div>
          <!-- ... end Today Events -->
        </div>

        <div class="ui-block">
          <!-- W-Action -->
          <div class="widget w-action">
            <img src="theme/img/logo.png" alt="Olympus">
            <div class="content">
              <h4 class="title">OLYMPUS</h4>
              <span>THE BEST SOCIAL NETWORK THEME IS HERE!</span>
              <a href="01-LandingPage.html" class="btn btn-bg-secondary btn-md">Register Now!</a>
            </div>
          </div>

          <!-- ... end W-Action -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
