<template>
  <div class="row">
    <div class="col-md-7">
      <div class="panel panel-default">
        <div class="panel-body tabs">
          <ul class="nav nav-pills">
            <li class="active">
              <a href="#pilltab1" data-toggle="tab">Fresh</a>
            </li>
            <li>
              <a href="#pilltab2" data-toggle="tab">Collected</a>
            </li>
            <li>
              <a href="#pilltab3" data-toggle="tab">Delivered</a>
            </li>
          </ul>

          <div class="tab-content distrib">
            <!-- //new orderss -->
            <div class="tab-pane fade in active" id="pilltab1">
              <ul class="dist-order-list">
                <li class="left clearfix more" v-for="order in freshOrders" :key="order.o_id">
                  <div class="chat-body clearfix">
                    <div class="header">
                      <strong class="primary-font">
                        {{ order.ffname }} {{ order.flname }}
                        <i
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>
                        {{ order.tfname }} {{ order.tlname }}
                      </strong>
                      <small class="text-muted">{{ order.created_at}}</small>
                    </div>
                    <p>From: {{ order.fcity_name }}, {{ order.fstate_name }}, {{ order.fcountry_name }}</p>
                    <button
                      class="btn btn-primary"
                      v-show="order.status=='fresh'"
                      @click="collectForDelivery(order.o_id)"
                    >Collect</button>
                    <button class="btn btn-primary" @click="showMore(order.o_id, 'fresh')">More</button>
                  </div>
                </li>
              </ul>
            </div>

            <!-- //delivered orders -->
            <div class="tab-pane fade" id="pilltab2">
              <ul class="dist-order-list">
                <li class="left clearfix more" v-for="order in collectedOrders" :key="order.o_id">
                  <div class="chat-body clearfix">
                    <div class="header">
                      <strong class="primary-font">
                        {{ order.ffname }} {{ order.flname }}
                        <i
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>
                        {{ order.tfname }} {{ order.tlname }}
                      </strong>
                      <small class="text-muted">{{ order.created_at}}</small>
                    </div>
                    <p>From: {{ order.fcity_name }}, {{ order.fstate_name }}, {{ order.fcountry_name }}</p>
                    <button
                      class="btn btn-primary"
                      v-show="order.status=='ontheway'"
                      @click="itemDelivered(order.o_id)"
                    >Deliver</button>

                    <div class="alert bg-danger" role="alert" v-show="order.status=='delivery'">
                      <div class="row">
                        <div class="col-md-4">
                          <em class="fa fa-md fa-warning">&nbsp;</em>
                          <br>Enter Delivery PIN:
                        </div>
                        <div class="col-md-4">
                          <input
                            type="number"
                            name="deliveryPin"
                            v-model="deliveryPin"
                            class="form-control"
                          >
                        </div>
                        <div class="col-md-4">
                          <button
                            class="btn btn-primary btn-lg"
                            @click="verifySecret(order.o_id)"
                          >Verify</button>
                          <em
                            class="fa fa-lg fa-close distrib-close"
                            @click="order.status='ontheway'"
                          ></em>
                        </div>
                      </div>
                    </div>

                    <button class="btn btn-success" v-show="order.status=='delivered'">
                      <i class="fa fa-check"></i>
                    </button>
                    <button class="btn btn-primary" @click="showMore(order.o_id, 'coll')">More</button>
                  </div>
                </li>
              </ul>
            </div>

            <!-- //cancelled orders -->
            <div class="tab-pane fade" id="pilltab3">
              <ul class="dist-order-list">
                <li class="left clearfix more" v-for="order in deliveredOrders" :key="order.o_id">
                  <div class="chat-body clearfix">
                    <div class="header">
                      <strong class="primary-font">
                        {{ order.ffname }} {{ order.flname }}
                        <i
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>
                        {{ order.tfname }} {{ order.tlname }}
                      </strong>
                      <small class="text-muted">{{ order.created_at}}</small>
                    </div>
                    <p>From: {{ order.fcity_name }}, {{ order.fstate_name }}, {{ order.fcountry_name }}</p>
                    <button class="btn btn-primary" @click="showMore(order.o_id, 'del')">More</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- //order details -->
    <div class="col-md-5">
      <div class="panel distrib panel-default">
        <div class="panel-heading">Order Details</div>
        <div class="panel-body">
          <div class="col-md-6">
            <strong>Collection Address</strong>
            <address>
              {{ delAddress.ffname }} {{ delAddress.flname }}
              <br>
              {{ delAddress.fcontact }}
              <br>
              <span v-show="delAddress.fcity_name!=''">{{ delAddress.fcity_name }}</span>
              <span v-show="delAddress.fstate_name!=''">{{','+ delAddress.fstate_name }}</span>
              <span v-show="delAddress.fcountry_name!=''">{{','+ delAddress.fcountry_name }}</span>
            </address>
            <strong>Delivery Address</strong>
            <address>
              {{ delAddress.tfname }} {{ delAddress.tlname }}
              <br>
              {{ delAddress.taddress }}
              <br>
              {{ delAddress.tcontact }}
              <br>
              <span v-show="delAddress.tcity_name!=''">{{ delAddress.tcity_name }}</span>
              <span v-show="delAddress.tstate_name!=''">{{','+ delAddress.tstate_name }}</span>
              <span v-show="delAddress.tcountry_name!=''">{{','+ delAddress.tcountry_name }}</span>
              <br>
              {{ delAddress.tzip }}
            </address>

            <br>
            <strong>Updated On:</strong>
            <br>
            {{ delAddress.updated_at }}
          </div>
          <div class="col-md-6">
            <strong>Order Summary</strong>
            <br>
            {{ (delAddress.contents != " ")?delAddress.contents.split('\n')[0]:"" }}
            <br>
            <span v-show="delAddress.quantity!=''">{{ delAddress.quantity }} Nos.</span>
            <span v-show="delAddress.amount!=''">{{ delAddress.amount * delAddress.quantity }} Rs.</span>
            <span
              v-show="delAddress.service_charge!=''"
            >{{ (delAddress.amount * delAddress.quantity) * (delAddress.service_charge/100) }} Rs.</span>
            <br>
            <br>
            <br>

            <strong>Grand Total</strong>

            : {{ (delAddress.amount * delAddress.quantity) + (delAddress.amount * delAddress.quantity) * (delAddress.service_charge/100)}}
          </div>
          <button class="btn btn-primary d-bottom">Print</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    //fresh
    axios.get("orders/fresh").then(res => {
      this.freshOrders = res.data.data;
      this.freshTotalPages = res.data.data.total;
      this.freshNextUrl = res.data.data.next_page_url;
    });
    //collected
    axios.get("orders/ontheway").then(res => {
      this.collectedOrders = res.data.data;
      this.collectedTotalPages = res.data.data.total;
      this.collectedhNextUrl = res.data.data.next_page_url;
    });
    //delivered
    axios.get("orders/delivered").then(res => {
      this.deliveredOrders = res.data.data;
      this.deliveredTotalPages = res.data.data.total;
      this.deliveredNextUrl = res.data.data.next_page_url;
    });
  },
  data: function() {
    return {
      freshOrders: null,
      collectedOrders: null,
      deliveredOrders: null,
      deliveryPin: "",
      delAddress: {
        tfname: "",
        tlname: "",
        tcontact: "",
        taddress: "",
        tzip: "",
        tcity_name: "",
        tstate_name: "",
        tcountry_name: "",
        fcity_name: "",
        fstate_name: "",
        fcountry_name: "",
        contents: "",
        amount: "",
        quantity: "",
        service_charge: ""
      }
    };
  },
  methods: {
    showMore: function($oid, $type) {
      switch ($type) {
        case "fresh":
          //find index
          var index = this.freshOrders.findIndex(item => item.o_id == $oid);
          //set address data
          this.delAddress = this.freshOrders[index];
          break;
        case "del":
          //find index
          var index = this.deliveredOrders.findIndex(item => item.o_id == $oid);
          //set address data
          this.delAddress = this.deliveredOrders[index];
          break;
        case "coll":
          //find index
          var index = this.collectedOrders.findIndex(item => item.o_id == $oid);
          //set address data
          this.delAddress = this.collectedOrders[index];
          break;

        default:
          break;
      }
    },
    collectForDelivery: function(oid) {
      axios.post("orders/status/update/ontheway", { o_id: oid }).then(res => {
        //find index
        var index = this.freshOrders.findIndex(item => item.o_id == oid);
        //set status
        this.freshOrders[index].status = "ontheway";
      });
    },
    itemDelivered: function(oid) {
      //find index
      var index = this.collectedOrders.findIndex(item => item.o_id == oid);
      //set status
      this.collectedOrders[index].status = "delivery";
    },
    verifySecret: function(oid) {
      if (this.deliveryPin != "") {
        axios
          .post("orders/status/update/delivered", {
            o_id: oid,
            uid: oid,
            token: this.deliveryPin,
            type: "delivery"
          })
          .then(res => {
            //find index
            var index = this.collectedOrders.findIndex(
              item => item.o_id == oid
            );
            //set status
            this.collectedOrders[index].status = "delivered";
          });
      }
    }
  }
};
</script>
