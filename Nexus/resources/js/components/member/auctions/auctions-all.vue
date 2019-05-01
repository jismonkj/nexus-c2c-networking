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
              <h1>Manage your Friend Groups</h1>
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

    <!-- Main Content Groups -->

    <div class="container">
      <div class="row">
        <div
          class="col col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6"
          v-for="auction in liveAuctions"
          :key="auction.auid"
        >
          <auctions :auction="auction"></auctions>
        </div>
      </div>
    </div>

    <!-- ... end Main Content Groups -->
  </div>
</template>
<script>
import Auctions from "../../utils/auctions.vue";
export default {
  mounted() {
    axios.get("m/auction?type=y").then(res => {
      this.liveAuctions = res.data;
    });
  },
  data: function() {
    return {
      liveAuctions: []
    };
  },
  components: {
    Auctions
  }
};
</script>
