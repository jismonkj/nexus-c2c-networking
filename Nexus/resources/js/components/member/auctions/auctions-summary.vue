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
          {{ highestbid }}
        </div>
        <div class="day-week">{{ auction.title }}</div>
        <div class="month-year">
          <a :href="$root.encr(auction.u_id)">{{ auction.fname }} {{ auction.lname }}</a>
          | <a>Base Price: {{ auction.b_price }}</a>
        </div>
        <div
          v-if="period=='upcoming'"
          class="month-year"
        >Starts On: {{ auction.date }} {{ auction.time }}</div>
        <div v-else class="month-year">Event Was On: {{ auction.date }} {{ auction.time }}</div>
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
        <div class="card" v-show="period!='upcoming'">
          <div class="card-header text-left" role="tab" id="headingOne-1">
            <div class="event-time">
              <time datetime="2004-07-24T18:18">{{ auction.time }} {{ setTime(auction.amOrPm) }}</time>
            </div>
            <h6 class="mb-0 title">Auction Started</h6>
          </div>
        </div>
      </div>
      <!-- //bidding summary -->
      <section class="bidding-summary" v-if="period=='old' && auction.winner != 0 || period=='bidded' && auction.winner != 0">
        <div class="ui-block">
          <!-- Birthday Item -->

          <div class="birthday-item inline-items">
            <div class="author-thumb">
              <img src="theme/img/avatar20-sm.jpg" alt="author">
            </div>
            <div class="birthday-author-name">
              <a
                :href="$root.encr(auction.winner.uid)"
                class="h6 author-name"
              >{{ auction.winner.fname }} {{ auction.winner.lname }}</a>

              <div class="birthday-date">
                {{ auction.winner.mobile}}
                <i class="fas fa-mobile"></i>
              </div>
              <div
                class="birthday-date"
              >{{ auction.winner.city_name }} {{ auction.winner.state_name }} {{ auction.winner.country_name }}</div>
            </div>
            <a
            v-if="auction.winner.uid == $root.$data.user.id"
              href
              @click.prevent="notifyMember(auction.winner.uid)"
              class="btn btn-sm bg-blue"
            >Status</a>
          </div>

          <!-- ... end Birthday Item -->
        </div>
      </section>
      <section v-if="period=='old' && auction.winner == 0 || period=='bidded' && auction.winner == 0">
        <div class="ui-block">
          <div class="birthday-item inline-items">
            No Results
          </div>
        </div>
      </section>

    </div>
  </div>
</template>
<script>
import AuctionEvents from "./au-events-passive.vue";
export default {
  mounted() {
    //
  },
  props: ["auction", "mine", "highestbid", "period"],
  data: function() {
    return {};
  },
  components: {
    AuctionEvents
  },
  methods: {
    setTime: function(amOrPm) {
      return amOrPm ? " am" : " pm";
    },
    notifyMember(uid){
      alert(uid);
    }
  }
};
</script>
