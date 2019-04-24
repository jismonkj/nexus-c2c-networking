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
            <section v-show="!afterEventCreation">
              <div class="form-group label-floating">
                <label class="control-label">Auction Title</label>
                <input
                  class="form-control"
                  placeholder
                  value="Take Querty to the Veterinarian"
                  type="text"
                  v-model="auction.title"
                >
                <span class="material-input"></span>
              </div>
              <div class="row">
                <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                  <div class="form-group label-floating">
                    <label class="control-label">Set Event Reach</label>
                    <select class v-model="auction.privacy">
                      <option value="private">Friends' Event</option>
                      <option value="public">Public Event</option>
                    </select>
                  </div>
                </div>
                <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                  <div class="form-group date-time-picker label-floating">
                    <label class="control-label">Auction Date</label>
                    <input name="date" value="26/03/2016" type="date" v-model="auction.date">
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
                    <input
                      class="form-control"
                      placeholder
                      value="09:00"
                      type="time"
                      v-model="auction.time"
                    >
                  </div>
                </div>
                <div class="col col-lg-3 col-md-3 col-sm-12 col-12">
                  <div class="form-group label-floating">
                    <label class="control-label">AM-PM</label>
                    <select v-model="auction.amOrPm">
                      <option value="am">AM</option>
                      <option value="pm">PM</option>
                    </select>
                  </div>
                </div>
                <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                  <div class="form-group label-floating">
                    <label class="control-label">Auction Hours</label>
                    <input
                      class="form-control"
                      placeholder
                      value="09:00"
                      type="time"
                      v-model="auction.hours"
                    >
                  </div>
                </div>
              </div>

              <div class="form-group label-floating">
                <label class="control-label">Event Details</label>

                <textarea v-model="auction.description" class="form-control" placeholder>I need to take Querty for a check up and ask the doctor if he needs a new tank.
					    </textarea>
                <span class="material-input"></span>
              </div>
            </section>

            <section v-show="afterEventCreation">
              <div class="alert alert-success">{{ auction.title }}</div>
              <time>{{auction.date}} | {{ auction.time }} {{ auction.amOrPm}}</time>
              <span v-if="auction.privacy == 'private'">Friends' Event</span>
              <span v-else>Public Event</span>
              <span>{{ auction.hours }}</span>
              <pre>{{ auction.description }}</pre>
            </section>

          <div class="row">
            <div class="col">
              <vue-dropzone
                ref="myVueDropzoneX"
                id="dropzoneX"
                :options="dropzoneOptions"
                :vdropzone-error="error"
              >//</vue-dropzone>
            </div>
          </div>
          <button class="btn btn-breez btn-lg full-width my-4" @click="createEvent">Create Event</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//vue dropzone
import vue2Dropzone from "vue2-dropzone";
var date = new Date();
var month = date.getMonth().toString();
var day = date.getDate().toString();

var currDate =
  date.getFullYear() +
  "-" +
  (month.length > 1 ? month : "0" + month) +
  "-" +
  (day.length > 1 ? day : "0" + day);

export default {
  mounted(){
    this.afterEventCreation = false;
  },
  data: function() {
    return {
      auction: {
        title: "",
        privacy: "private",
        date: currDate,
        time: "09:00",
        amOrPm: "pm",
        hours: "01:00",
        description: "",
        refid: ""
      },
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
      afterEventCreation: false
    };
  },
  components: {
    "vue-dropzone": vue2Dropzone
  },
  methods: {
    close: function() {
      this.$parent.showAuctionModal = false;
    },
    createEvent: function() {
      console.log(this.$refs.myVueDropzoneX.processQueue());
      // if (this.$refs.myVueDropzoneX.processQueue()) {
      this.auction.refid = this.dropzoneOptions.params.x_token;
      //ajax
      axios.post("m/auction/", this.auction).then(res => {
        if (res.data) {
          this.afterEventCreation = true;
        }
      });
      // }
    }
  }
};
</script>
