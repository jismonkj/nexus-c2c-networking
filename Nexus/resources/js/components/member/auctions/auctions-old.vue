<template>
  <div class="container">
    <div class="row">
      <div
        class="col col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 text-center"
        v-if="liveAuctions==''"
      >
        <p>No Current Auctions</p>
      </div>
      <div
        class="col col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6"
        v-for="auction in liveAuctions"
        :key="auction.auid"
      >
        <auctions :auction="auction" mine="false" :highestbid="auction.highestbid" period="old"></auctions>
      </div>
    </div>
  </div>
</template>
<script>
import Auctions from "./auctions-summary.vue";
export default {
  mounted() {
    axios.get("m/auction?type=oldies").then(res => {
      console.log(res.data);  
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
