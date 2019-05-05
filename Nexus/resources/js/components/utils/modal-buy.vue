<template>
  <div class="modal-backdrop">
    <div class="modal buy">
      <div class="modal-dialog window-popup update-header-photo" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="post__author author vcard inline-items mb-0">
              <img v-if="story.avatar==null" src="storage/img/avatar5-sm.jpg" alt="author">
              <img v-else :src="'storage/'+story.avatar" alt="author">
              <div class="author-date">
                <a
                  :href="$root.encr(story.uid)"
                  class="h6 post__author-name fn"
                >{{ story.fname+" "+story.lname }}</a>
                <div class="post__date">
                  <time :datetime="story.created_at" class="published">{{ story.created_at }}</time>
                </div>
              </div>
            </div>
            <a
              href="#"
              @click.prevent="close"
              data-toggle="tooltip"
              data-placement="left"
              title="Close"
              class="p-2"
            >
              <span class="fa fa-times"></span>
            </a>
          </div>

          <div class="modal-body">
            <!-- //item details -->
            <div class="ui-block">
              <article class="hentry post has-post-thumbnail">
                <!-- //payee header -->

                <!-- item post summary -->
                <div class="story-block" v-if="!showFindDistribForm">
                  <pre v-if="type=='item'">{{ story.contents }}</pre>
                  <pre v-else>{{ story.description }}</pre>
                  <div class="post-thumb">
                    <div class="row">
                      <div
                        class="col p-1"
                        v-for="imgPath in story.itemImages"
                        v-bind:key="imgPath.path"
                      >
                        <img :src="'storage/'+imgPath.path" alt="photo">
                      </div>
                    </div>
                  </div>
                  <div class="cover" v-if="type=='item'">
                    <div class="row" v-if="story.quantity > 0">
                      <div class="col-6 text-right">
                        <label for="quantity">Quantity Required:</label>
                      </div>
                      <div class="col-3">
                        <input type="text" name="quantity" v-model="itemQuantity" class="py-1">
                      </div>
                      <div class="col-3">
                        <button
                          class="btn m-0 px-3 py-1"
                          @click="showDistrib"
                          :class="{'btn-primary':readyForRoute, 'btn-disabled':!readyForRoute}"
                        >{{ buyButton }}</button>
                      </div>
                    </div>
                    <div class="row" v-else>
                      <div class="col text-right">
                        <span class="alert alert-danger">
                          <i class="fas fa-exclamation-triangle"></i>
                          Sold Out
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="row" v-else>
                    <div class="col text-right">
                      <button
                        class="btn m-0 px-3 py-1"
                        @click="showDistrib"
                        :class="{'btn-primary':readyForRoute, 'btn-disabled':!readyForRoute}"
                      >
                      Confirm Buy
                      </button>
                    </div>
                  </div>
                </div>

                <!-- delivery address -->
                <div class="story-block" v-else-if="showPayForm">
                  <div class="row">
                    <div class="col-8">
                      <div class="row">
                        <div class="col">
                          <div class="form-group label-floating">
                            <label class="control-label">First Name</label>
                            <input
                              class="form-control"
                              placeholder
                              type="text"
                              v-model="currAddress.fname"
                            >
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group label-floating">
                            <label class="control-label">Last Name</label>
                            <input
                              class="form-control"
                              placeholder
                              type="text"
                              v-model="currAddress.lname"
                            >
                          </div>
                        </div>
                      </div>
                      <div class="form-group label-floating">
                        <label class="control-label">Address</label>
                        <input
                          class="form-control"
                          placeholder
                          type="text"
                          v-model="currAddress.address"
                        >
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group label-floating">
                            <label class="control-label">Contact</label>
                            <input
                              class="form-control"
                              placeholder
                              type="tel"
                              v-model="currAddress.contact"
                            >
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group label-floating">
                            <label class="control-label">PIN Code</label>
                            <input
                              class="form-control"
                              placeholder
                              type="number"
                              v-model="currAddress.zip"
                            >
                          </div>
                        </div>
                      </div>
                      <span
                        class="h5 pr-3 py-2 pl-0"
                      >{{ item.city_name}}, {{ item.state_name}}, {{ item.country_name}}</span>
                    </div>
                    <div class="col-4">
                      <h5 class="font-weight-light">Saved Addresses</h5>
                      <address v-for="address in storedAddresses" :key="address.addid" class="mb-0">
                        <button
                          class="btn btn-purple full-width mb-2"
                          @click="changeAddress(address)"
                        >
                          {{ address.address }}
                          <br>
                          <small>PIN: {{ address.zip }}</small>
                        </button>
                      </address>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">
                      <div class="card">
                        <h5 class="mb-0">Order Summary:</h5>
                        <ul class="your-profile-menu h5 font-weight-light p-0 border-0">
                          <li>
                            Price:
                            <b>{{ parseFloat(story.price) * itemQuantity }} Rs.</b> |
                            Delivery:
                            <b>{{ Math.round(delCharge) }} Rs.</b> |
                            Grand Total:
                            <h5>{{ grandTotal }} Rs.</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-4">
                      <button
                        href="#"
                        class="btn btn-blue mb-0 full-width"
                        @click="payForItem"
                        v-show="!onProcess"
                      >
                        <span>Pay</span>
                        <div class="ripple-container"></div>
                      </button>
                      <div class="text-center" v-show="onProcess">processing...</div>
                    </div>
                  </div>
                </div>

                <!-- transaction summary after completeion -->
                <div class="story-block" v-else-if="transComplete">
                  <div class="row">
                    <div class="col">
                      <div class="alert alert-success mb-2">
                        <h5 class="mb-0">
                          <span class="far fa-check-circle"></span>
                          Order has successfully sent!
                          <a
                            href="#/account/orders-sent"
                          >VIEW</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="card">
                        <h6 class="mb-0">Delivery Address</h6>
                        <ul class="your-profile-menu">
                          <li>
                            <b>{{ currAddress.fname }} {{ currAddress.lname }}</b>
                          </li>
                          <li>{{ currAddress.address }}</li>
                          <li>
                            {{ item.city_name }}
                            , {{ item.state_name}}, {{ item.country_name }}
                          </li>
                          <li>
                            <span class="fas fa-phone"></span>
                            {{ currAddress.contact }},
                            pin: {{ currAddress.zip }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card">
                        <h6 class="mb-0">Order Summary</h6>
                        <ul class="your-profile-menu">
                          <li>
                            Price:
                            <b>{{ parseFloat(story.price) * itemQuantity }} Rs.</b>
                          </li>
                          <li>
                            Delivery:
                            <b>{{ Math.round(delCharge) }} Rs.</b>
                          </li>
                          <li>Grand Total: {{ grandTotal }} Rs.</li>
                          <br>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- //choose courier -->
                <div class="story-block" v-else>
                  <!-- pay -->
                  <div class="row">
                    <div class="col-6">
                      <div class="radio">
                        <h5>How do you plan to deliver?</h5>
                        <label>
                          <input
                            type="radio"
                            name="deliveryOption"
                            v-model="deliveryOption"
                            value="courier"
                          >
                          <span class="circle"></span>
                          <span class="check"></span>
                          Opt a Courier Service
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="deliveryOption"
                            v-model="deliveryOption"
                            value="myself"
                          >
                          <span class="circle"></span>
                          <span class="check"></span>
                          Myself
                        </label>
                      </div>Delivery Frm:
                      <h5>{{ story.city_name }}</h5>
                      , {{ story.state_name}}, {{ story.country_name }}
                      <br>Delivery To:
                      <span v-if="deliLocSelected">
                        <h5>{{ item.city_name }}</h5>
                        , {{ item.state_name}}, {{ item.country_name }}
                      </span>
                      <div class="form-group with-icon label-floating is-empty">
                        <label class="control-label">Search for Location</label>
                        <v-autocomplete
                          :auto-select-one-item="false"
                          :min-len="2"
                          :items="items"
                          v-model="item"
                          :get-label="getLabel"
                          :component-item="template"
                          @update-items="updateItems"
                          @item-selected="itemSelected"
                          :wait="300"
                          :value="item"
                          :input-attrs="inputAttrs"
                        ></v-autocomplete>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-6">
                      <!-- available couriers -->
                      <p v-show="noAvailableDistributors">Sorry, No courier services are available.</p>

                      <h4
                        class="font-weight-light cursor-pointer"
                        v-for="distributor in distributors"
                        v-bind:key="distributor.distrib_id"
                        @click="distribSelected(distributor.distrib_id, distributor.service_charge)"
                      >
                        <span
                          class="badge py-2 px-4 mx-1"
                          :class="{'badge-secondary':isShown(distributor.distrib_id), 'badge-primary':!isShown(distributor.distrib_id)}"
                        >
                          {{ distributor.distrib_name }}
                          <br>
                          <small>Service Charge: {{ Math.round((story.price * itemQuantity) * (distributor.service_charge / 100)) }}</small>
                        </span>
                      </h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6 offset-6">
                      <button class="btn mb-1 btn-secondary" @click="close">Cancel</button>
                      <button
                        class="btn mb-1"
                        :class="{'btn-success':readyForPay,'btn-disabled':!readyForPay }"
                        @click="showPay"
                      >Proceed to Pay</button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ItemTemplate from "../member/feed/ItemTemplate.vue";

export default {
  props: ["story", "type"],
  mounted() {
    this.buyButtton = this.story.price;
    axios.get("/my/wallet").then(res => {
      this.walletBalance = res.data;
    });
  },
  data: function() {
    return {
      itemQuantity: 1,
      buyButton: "Buy Now",
      showFindDistribForm: false,
      showPayForm: "",
      transComplete: false,
      deliLocSelected: false,
      distributors: [],
      noAvailableDistributors: false,
      selectedDistribId: null,
      serviceCharge: 0,
      storedAddresses: [],
      //autocomplete
      item: "",
      items: [],
      template: ItemTemplate,
      inputAttrs: {
        class: "form-control"
      },
      //auto-complete-end
      walletBalance: 0,
      delCharge: 0,
      onProcess: false,
      readyForRoute: true,
      //address --------
      currAddress: {
        fname: "",
        lname: "",
        address: "",
        contact: "",
        zipcode: ""
      },
      //address - end
      deliveryOption: "courier"
    };
  },
  methods: {
    isShown: function(index) {
      return index == this.selectedDistribId;
    },
    //auto complete
    getLabel(item) {
      return item.city_name;
    },
    updateItems(text) {
      axios.get("location/search/" + text).then(response => {
        this.items = response.data;
      });
    },
    itemSelected: function(item) {
      this.noAvailableDistributors = false;
      if (this.deliveryOption == "courier") {
        axios
          .get("find/distributor/" + item.id + "/" + this.story.loc_id)
          .then(res => {
            this.distributors = res.data;
            if (this.distributors.length == 0) {
              this.noAvailableDistributors = true;
            }
          });
      } else {
        this.selectedDistribId = 0;
      }
    },
    //auto complete end
    close() {
      this.$root.$data.isBuyModalVisible = false;
      this.showFindDistribForm = false;
      this.showPayForm = false;
      this.transComplete = false;
    },
    notify: function(text, postText) {
      this.buyButton = text;
      setTimeout(() => {
        this.buyButton = postText;
      }, 5000);
    },
    showDistrib: function() {
      this.showFindDistribForm = true;
    },
    distribSelected: function(distribId, serviceCharge) {
      this.selectedDistribId = distribId;
      this.serviceCharge = serviceCharge;
      this.delCharge =
        this.story.price * this.itemQuantity * (serviceCharge / 100);
    },
    showPay: function() {
      if (this.delCharge != null) {
        axios.get("stored/addresses/" + this.item.id).then(res => {
          this.storedAddresses = res.data;
        });
        this.showPayForm = true;
      }
    },
    payForItem: function() {
      this.onProcess = true;
      var data = {
        //order
        item_id: this.story.item_id,
        quantity: this.itemQuantity,
        amount: this.story.price,
        distrib_id: this.selectedDistribId,
        service_charge: this.serviceCharge,
        userid: this.story.uid,
        address: {
          fname: this.currAddress.fname,
          lname: this.currAddress.lname,
          contact: this.currAddress.contact,
          address: this.currAddress.address,
          city_id: this.item.id,
          zip: this.currAddress.zip
        },
        type:this.type
      };

      axios.post("place/order", data).then(res => {
        if (res.data) {
          this.onProcess = false;
          this.showPayForm = false;
          this.transComplete = true;
          this.walletBalance = res.data;
        }
      });
    },
    changeAddress: function(address) {
      this.currAddress = address;
    }
  },
  watch: {
    itemQuantity: function() {
      if (this.itemQuantity > 0) {
        //should not be zero
        if (this.itemQuantity < parseInt(this.story.quantity) + 1) {
          //should meet the quantity available
          this.readyForRoute = true;
          this.buyButton = "Buy For $ " + this.story.price * this.itemQuantity;
          return;
        } else {
          this.notify("Max:" + this.story.quantity, "Buy Item");
        }
      } else if (this.itemQuantity != "") {
        this.itemQuantity = 1;
      }
      this.readyForRoute = false;
    },
    deliveryOption: function() {
      if (this.item != "" && this.deliveryOption == "myself") {
        this.selectedDistribId = 0;
      } else {
        this.selectedDistribId = null;
      }
    }
  },
  computed: {
    readyForPay: function() {
      return this.selectedDistribId != null;
    },
    grandTotal: function() {
      return parseFloat(this.story.price) + parseFloat(this.delCharge);
    }
  }
};
</script>