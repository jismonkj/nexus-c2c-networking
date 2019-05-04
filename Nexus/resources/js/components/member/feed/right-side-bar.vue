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
          <auctions v-for="auction in liveAuctions" :key="auction.auid" :auction="auction" :mine="false" :highestbid="auction.b_price">
          </auctions>
          <!-- ... end Today Events -->
        </div>

        <div class="ui-block">
          <!-- W-Action -->
          <div class="widget w-action">
            <div class="content">
              <!-- <span>Find More Auctions</span> -->
              <a href="#/auctions/live" class="btn btn-bg-secondary btn-md">Auctions</a>
            </div>
          </div>

          <!-- ... end W-Action -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Auctions from '../auctions/auctions.vue';
export default {
  mounted() {
    axios.get("m/auction?type=minimal").then(res => {
      this.liveAuctions = res.data;
    });
  },
  data: function() {
    return {
      liveAuctions: [],
    };
  },
  components:{
    Auctions
  },
};
</script>
