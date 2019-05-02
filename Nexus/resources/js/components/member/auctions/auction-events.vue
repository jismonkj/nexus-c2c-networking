<template>
  <div class="cover-root">
    <div class="card" v-for="event in events" :key="event.biid">
      <div class="card-header text-left" role="tab" id="headingOne-1">
        <div class="event-time">
          <time datetime="2004-07-24T18:18">{{ event.updated_at }}</time>
        </div>
        <p class="mb-0 title"><b>{{ event.fname }} {{ event.lname }}</b> has bidded <i class="fas fa-rupee-sign"></i>{{ event.bidprice }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["auid", "events"],
  mounted() {
    window.echo.channel("auction" + this.auid).listen("BiddingPlaced", e => {
      var event = e.data;
      event.fname = e.fname;
      event.lname = e.lname;
      this.events.unshift(event);
    });
  },
  data: function() {
    return {
      // events: []
    };
  }
};
</script>
