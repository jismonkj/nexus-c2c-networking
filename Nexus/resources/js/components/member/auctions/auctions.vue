<template>
  <div class="today-events calendar">
    <div class="today-events-thumb">
      <div class="date">
        <div
          class="day-number"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Current Highest Bid"
        >
          <i class="fas fa-rupee-sign"></i>
          {{ highest }}
        </div>
        <div class="day-week">{{ auction.title }}</div>
        <div class="month-year">
          <a :href="$root.encr(auction.u_id)">{{ auction.fname }} {{ auction.lname }}</a>
        </div>
        <div class="month-year">Ends In: {{ timer }}</div>
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
            <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-plus-icon"></use>
          </svg>
        </a>
      </div>
      <div class="list-events">
        <auction-events v-bind:auid="auction.auid" :events="auction.events"></auction-events>
        <div class="card">
          <div class="card-header text-left" role="tab" id="headingOne-1">
            <div class="event-time">
              <time datetime="2004-07-24T18:18">{{ auction.time }} {{ setTime(auction.amOrPm) }}</time>
            </div>
            <h6 class="mb-0 title">Auction Has Just Started</h6>
          </div>
        </div>
      </div>
      <!-- //bidding button -->
      <div class="bid form-group label-floating">
        <label class="control-label" :class="{ 'au-warning':bidErr}">
          Bid Here: Starting From
          <i class="fas fa-rupee-sign"></i>
          {{ highest }}
        </label>
        <input
          class="form-control"
          placeholder
          type="number"
          @keyup.enter="bidAuction(auction.auid)"
          v-model="bidPrice"
          :disabled="expired || mine"
        >
        <span class="bid-input" v-show="bidding">
          <i class="fas fa-spinner fa-pulse"></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import AuctionEvents from "./auction-events.vue";
export default {
  mounted() {
    var time = this.auction.time.split(":");
    var hours = this.auction.hours.split(":");
    var date = this.auction.date;

    var end = new Date();
    end.setHours(time[0]);
    end.setMinutes(time[1]);

    var setHours = end.getHours() + parseInt(hours[0]);
    var setMinutes = end.getMinutes() + parseInt(hours[1]);
    end.setHours(setHours);
    end.setMinutes(setMinutes);

    //timer for auction
    let intervelId = setInterval(() => {
      var start = new Date();
      var val = this.timeDifference(start, end);
      if (!val) {
        val = "Expired";
        this.expired = true;
        clearInterval(intervelId);
      }
      this.timer = val;
    }, 1000);
  },
  props: ["auction", "mine", "highestbid"],
  data: function() {
    return {
      bidPrice: "",
      timer: "__:__:__s",
      expired: false,
      bidErr: false,
      highest: this.highestbid,
      bidding: false
    };
  },
  components: {
    AuctionEvents
  },
  methods: {
    setTime: function(amOrPm) {
      return amOrPm ? " am" : " pm";
    },
    bidAuction(auid) {
      //price check
      if (this.bidPrice > this.highest) {
        this.bidding = true;
        this.bidErr = false;
        axios
          .post("m/auction/bid", { auid: auid, bidprice: this.bidPrice })
          .then(res => {
            this.bidding = false;
          });
      } else {
        this.bidErr = true;
      }
    },
    timeDifference(start, end) {
      var startHours = start.getHours();
      var startMinutes = start.getMinutes();
      var startSeconds = start.getSeconds();

      var endHours = end.getHours();
      var endMinutes = end.getMinutes();
      var endSeconds = end.getSeconds();
      var ampm = startHours >= 12 ? "pm" : "am";
      startHours = startHours % 12;
      startHours = startHours ? startHours : 12; // the hour '0' should be '12'
      startMinutes = startMinutes < 10 ? "0" + startMinutes : startMinutes;

      if (startHours != endHours) {
        startHours += 1;
      }

      var hours = endHours - startHours;
      if (endMinutes == 0) {
        var minutes = endMinutes - startMinutes + 60;
      } else if (startMinutes == 0) {
        var minutes = endMinutes - startMinutes - 60;
      } else {
        var minutes = endMinutes - startMinutes;
      }

      var seconds = Math.abs(startSeconds - 60);

      if (hours == 0 && minutes == 0) {
        return false;
      }

      var strTime = hours + ":" + minutes + ":" + seconds + "s";
      return strTime;
    }
  }
};
</script>
