<template>
  <div class="modal-backdrop">
    <div class="modal auction">
      <div class="modal-dialog window-popup create-auction" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="title">Start an Auction</h6>
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
            <!-- event creation first form 
            --------------------------------------->
            <section v-show="!afterEventCreation && !uploadFiles">
              <div class="form-group label-floating">
                <label class="control-label">Auction Title</label>
                <input
                  class="form-control"
                  placeholder
                  value="Take Querty to the Veterinarian"
                  type="text"
                  v-model="title"
                >
                <span class="material-input"></span>
              </div>
              <div class="row">
                <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                  <div class="form-group label-floating">
                    <label class="control-label">Set Event Reach</label>
                    <select class v-model="privacy">
                      <option value="private">Friends' Event</option>
                      <!-- <option value="public">Public Event</option> -->
                    </select>
                  </div>
                </div>
                <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                  <div class="form-group date-time-picker label-floating">
                    <label class="control-label">Auction Date</label>
                    <input name="date" value="26/03/2016" type="date" v-model="date">
                    <span class="input-group-addon">
                      <svg class="olymp-calendar-icon icon">
                        <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-calendar-icon"></use>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col col-lg-3 col-md-3 col-sm-12 col-12">
                  <div class="form-group label-floating">
                    <label class="control-label">Event Time</label>
                    <input placeholder value="09:00" type="time" v-model="time">
                  </div>
                </div>
                <div class="col col-lg-3 col-md-3 col-sm-12 col-12">
                  <div class="form-group label-floating">
                    <label class="control-label">AM-PM</label>
                    <select v-model="amOrPm">
                      <option value="am">AM</option>
                      <option value="pm">PM</option>
                    </select>
                  </div>
                </div>
                <div class="col col-lg-3 col-md-3 col-sm-12 col-12">
                  <div class="form-group label-floating">
                    <label class="control-label">Auction Hours</label>
                    <select placeholder value="09:00" type="time" v-model="hours">
                      <option value="01:00">1 Hour</option>
                      <option value="02:00">2 Hours</option>
                    </select>
                  </div>
                </div>
                <div class="col col-lg-3 col-md-3 col-sm-12 col-12">
                  <div class="form-group label-floating">
                    <label class="control-label">Base Price</label>
                    <input class="form-control" placeholder type="number" v-model="b_price">
                  </div>
                </div>
              </div>
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
                  :wait="300"
                  :value="item"
                  :input-attrs="inputAttrs"
                ></v-autocomplete>
                <span class="material-input"></span>
              </div>
              <div class="form-group label-floating">
                <label class="control-label">Event Details</label>

                <textarea v-model="description" class="form-control" placeholder>I need to take Querty for a check up and ask the doctor if he needs a new tank.
					    </textarea>
                <span class="material-input"></span>
              </div>
              <button
                class="btn btn-breez btn-lg full-width my-4"
                @click="showUpldFiles"
              >{{ nextStepBtnTxt }}</button>
            </section>
            <!-- //file uploads 
            --------------------------->
            <section v-show="uploadFiles && !afterEventCreation">
              <div class="row">
                <div class="col">
                  <vue-dropzone ref="myVueDropzoneX" id="dropzoneX" :options="dropzoneOptions">//</vue-dropzone>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <button
                    class="btn btn-breez btn-lg full-width my-4"
                    @click="uploadFiles=false"
                  >Back</button>
                </div>
                <div class="col">
                  <button
                    class="btn btn-primary btn-lg full-width my-4"
                    @click="createEvent"
                  >{{ eventCreateBtnTxt }}</button>
                </div>
              </div>
            </section>
            <!-- summary 
            ---------------------------->
            <section v-show="afterEventCreation" class="p-4">
              <div class="alert alert-success">
                {{ title }}
                <router-link to="actions/upcoming"></router-link>
              </div>
              <h6>
                <time>On {{date}} At {{ time }} {{ amOrPm}}</time>
              </h6>
              <p>
                <strong v-if="privacy == 'private'">Friend's Event</strong>
                <strong v-else>A Public event</strong>
                That ends in
                <strong>{{ hours }}</strong> hours.
              </p>
              <pre>{{ description }}</pre>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//vue dropzone
import vue2Dropzone from "vue2-dropzone";
import ItemTemplate from "../member/feed/ItemTemplate.vue";

var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate() + 1;

var currDate =
  date.getFullYear() +
  "-" +
  (month.length > 1 ? month : "0" + month) +
  "-" +
  (day.length > 1 ? day : "0" + day);

export default {
  mounted() {
    this.afterEventCreation = false;
  },
  data: function() {
    return {
      eventCreateBtnTxt: "Create Event",
      nextStepBtnTxt: "Next",
      //auction details
      title: "",
      privacy: "private",
      date: currDate,
      time: "09:00",
      amOrPm: "pm",
      hours: "01:00",
      b_price: "250",
      description: "",
      refid: "",
      //auction details - end
      //autocomplete
      item: null,
      items: [],
      template: ItemTemplate,
      inputAttrs: {
        class: "form-control"
      },
      //auto-complete-end
      dropzoneOptions: {
        url: "store/files",
        paramName: "file",
        maxFiles: 4,
        thumbnailWidth: 140,
        thumbnailHeight: 120,
        maxFilesize: 0.5,
        acceptedFiles: "image/*",
        params: {
          _token: $("#csrf-token").attr("content"),
          x_token: Math.ceil(Math.random() * 100000),
          type: "auctions"
        },
        autoProcessQueue: false
      },
      afterEventCreation: false,
      uploadFiles: false,
      validInputs: false
    };
  },
  watch: {
    date: function() {
      this.validInputs = true;
      var date = this.date.split("-");
      if (date.length == 0) {
        this.notify("Invalid date");
        this.date = currDate;
        return;
      }

      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth() + 1;
      var todate = today.getDate();

      //check month
      if (year > date[0]) {
        this.validInputs = false;
        this.notify("Invalid Year");
        this.date = currDate;
        return;
      }

      //check month
      if (month > date[1] && year == date[0]) {
        this.validInputs = false;
        this.notify("Invalid Month");
        this.date = currDate;
        return;
      }

      //date
      if (todate > date[2] && month == date[1]) {
        this.validInputs = false;
        this.notify("Invalid Date");
        this.date = currDate;
        return;
      }
    },
    title() {
      this.validInputs = true;
      if (this.title.length < 5) {
        this.notify("Make your title more meaningful");
        this.validInputs = false;
      }

      if (this.title.length > 60) {
        this.notify("Make your title precise");
        this.validInputs = false;
      }
    },
    description() {
      this.validInputs = true;
      if (this.description.length < 120 || this.description == "") {
        this.notify("Description shouldn't be less than 120 chars");
        this.validInputs = false;
      }
    },
    time() {
      var time = this.time.split(":");
      if (time[0] > 12) {
        this.time = "12:" + time[1];
      }
    },
    b_price() {
      if (this.b_price < 250) {
        this.notify("Min. base price shouldn't be less than 250");
        this.b_price = 250;
      }
    }
  },
  components: {
    "vue-dropzone": vue2Dropzone
  },
  methods: {
    showUpldFiles: function() {
      if (this.validInputs && this.item != null) {
        this.uploadFiles = true;
      } else {
        this.notify("Invalid Fields");
      }
    },
    close: function() {
      if (this.afterEventCreation) {
        this.title = "";
        this.description = "";
        this.afterEventCreation = false;
      }
      this.$parent.showAuctionModal = false;
    },
    createEvent: function() {
      this.eventCreateBtnTxt = "Please wait..";
      this.$refs.myVueDropzoneX.processQueue();
      // if (this.$refs.myVueDropzoneX.processQueue()) {
      this.refid = this.dropzoneOptions.params.x_token;

      var auction = {
        title: this.title,
        privacy: this.privacy,
        date: this.date,
        time: this.time,
        amOrPm: this.amOrPm,
        hours: this.hours,
        b_price: this.b_price,
        description: this.description,
        refid: this.refid,
        loc_id:this.item.id
      };
      //ajax
      axios
        .post("m/auction/", auction)
        .then(res => {
          if (res.data) {
            this.afterEventCreation = true;
            this.uploadFiles = false;
          }
        })
        .catch(err => {
          this.eventCreateBtnTxt = "Err! Network";
        });
      // }
    },
    notify: function(text) {
      this.nextStepBtnTxt = text;
      setTimeout(() => {
        this.nextStepBtnTxt = "Go";
      }, 3000);
    },
    //auto complete
    getLabel(item) {
      return item.city_name;
    },
    updateItems(text) {
      axios.get("location/search/" + text).then(response => {
        this.items = response.data;
      });
    }
    //auto complete end
  }
};
</script>
