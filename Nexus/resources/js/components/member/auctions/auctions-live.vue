<template>
  <div class="container">
    <div class="row">
      <p v-if="liveAuctions==''">No Current Auctions</p>
      <div
        class="col col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6"
        v-for="auction in liveAuctions"
        :key="auction.auid"
      >
        <auctions :auction="auction" mine="false"></auctions>
      </div>
    </div>
  </div>
</template>
<script>
import Auctions from "./auctions.vue";
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
