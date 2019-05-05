<template>
  <div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
    <div class="ui-block">
      <div class="ui-block-title">
        <h6 class="title">Purchased Items</h6>
        <a href="#" class="more">
          <svg class="olymp-three-dots-icon">
            <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
          </svg>
        </a>
      </div>

      <!-- Notification List Frien Requests -->
      <ul class="notification-list friend-requests">
        <li v-if="sentOrders == ''">
          <div class="notification-event">No purchase history</div>
        </li>
        <li v-for="order in sentOrders" v-bind:key="order.id" :class="{'au-order-bg':order.type =='auction'}">
          <div class="author-thumb">
            <img :src="'storage/'+order.uavatar" alt="author">
          </div>
          <div class="notification-event">
            <a
              :href="$root.encr(order.uid)"
              class="h6 notification-friend"
            >{{ order.fname+" "+order.lname }}</a>
            <span class="chat-message-item">{{ order.contents.substring(0, 30) }}</span>
          </div>
          <div class="notification-event">
            Quantity: {{ order.quantity }}
            <br>
            Price: {{ order.quantity * order.amount }}
          </div>
          <div class="notification-event">
            Service Charge: {{ (order.quantity * order.amount) * (order.service_charge/100) }}
            <br>Grand Total:
            <b>{{ (order.quantity * order.amount) * (order.service_charge/100) + (order.quantity * order.amount) }}</b>
          </div>
          <div class="notification-event">
            {{ order.distrib_name }}
            <br>
            {{ order.ucity}}, {{ order.ustate}}
            <i class="fas fa-angle-double-right"></i>
            {{ order.dcity}}, {{ order.dstate}}
          </div>
          <span class="notification-icon">
            <button
              v-show="order.status=='fresh'"
              class="bg-blue btn"
              data-toggle="tooltip"
              data-placement="left"
              data-original-title="Cancel"
            >
              <i class="far fa-stop-circle"></i>
            </button>
            <button
              v-show="order.status=='ontheway'"
              class="btn bg-breez"
              data-toggle="tooltip"
              data-placement="left"
              data-original-title="On The Way"
              @click="getDeliSecret(order.o_id)"
            >
              <i class="fas fa-truck"></i>
            </button>
            <button v-show="order.status=='token'" 
            data-toggle="tooltip"
              data-placement="right"
              data-original-title="Click to Refresh"
              @click="getDeliSecret(order.o_id)"
            class="btn bg-breez">{{ deliToken }}</button>
            <button
              v-show="order.status=='delivered'"
              class="btn bg-green"
              data-toggle="tooltip"
              data-placement="right"
              data-original-title="Delivered"
            >
              <i class="far fa-check-circle"></i>
            </button>
          </span>
        </li>
      </ul>
      <!-- ... end Notification List Frien Requests -->
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    axios.get("order/history/sent").then(res => {
      this.sentOrders = res.data.data;
      this.totalPages = res.data.data.total;
      this.nextPageUrl = res.data.data.next_page_url;
    });
  },
  data: function() {
    return {
      totalPages: 0,
      nextPageUrl: "",
      sentOrders: [],
      deliToken: ""
    };
  },
  methods: {
    getDeliSecret: function(o_id) {
      //generate token
      var digits = "0123456789";
      let token = "";
      for (let i = 0; i < 6; i++) {
        token += digits[Math.floor(Math.random() * 10)];
      }
      var index = this.sentOrders.findIndex(order => order.o_id == o_id);
      this.deliToken = "Token: "+token;
      this.sentOrders[index].status = "token";

      //update server
      axios
        .post("store/token", { 'uid': o_id, 'token': token, 'type': "delivery" })
        .then(res => {
          console.log(res.data);
          
          if (res.data) {
            //
          }
        });
    }
  }
};
</script>

