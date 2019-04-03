<template>
  <main class="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
    <div class="ui-block">
      <!-- News Feed Form  -->
      <div class="news-feed-form">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active inline-items"
              data-toggle="tab"
              href="#home-1"
              role="tab"
              aria-expanded="true"
            >
              <svg class="olymp-status-icon">
                <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-status-icon"></use>
              </svg>

              <span>Sell Item</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link inline-items"
              data-toggle="tab"
              href="#profile-1"
              role="tab"
              aria-expanded="false"
            >
              <svg class="olymp-multimedia-icon">
                <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-multimedia-icon"></use>
              </svg>

              <span>You need something?</span>
            </a>
          </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
          <div class="tab-pane active" id="home-1" role="tabpanel" aria-expanded="true">
            <form>
              <div class="author-thumb">
                <img
                  :src="'storage/'+$root.$data.user.myAvatar"
                  alt="author"
                  class="smaller avatar"
                >
              </div>
              <div class="form-group with-icon label-floating is-empty">
                <label class="control-label">Share what you are thinking here...</label>
                <textarea class="form-control" v-model="itemContent"></textarea>
                <span class="material-input"></span>
              </div>
              <div class="row">
                <div class="col p-0">
                  <div class="form-group with-icon label-floating is-empty">
                    <label class="control-label">Price</label>
                    <input type="text" class="form-control" v-model="itemPrice">
                    <span class="material-input"></span>
                  </div>
                </div>
                <div class="col p-0">
                  <div class="form-group with-icon label-floating is-empty">
                    <label class="control-label">Quantity</label>
                    <input type="text" class="form-control" v-model="itemQuantity">
                    <span class="material-input"></span>
                  </div>
                </div>
                <div class="col p-0">
                  <div class="form-group with-icon label-floating is-empty">
                    <label class="control-label">Location</label>
                    <input type="text" class="form-control" v-model="itemLocation">
                    <span class="material-input"></span>
                  </div>
                </div>
              </div>
              <div class="add-options-message">
                <a
                  href="#"
                  @click.prevent="dropZoneActive=true"
                  class="options-message"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD PHOTOS"
                >
                  <svg
                    class="olymp-camera-icon"
                    data-toggle="modal"
                    data-target="#update-header-photo"
                  >
                    <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-camera-icon"></use>
                  </svg>
                  <div class="label-avatar bg-blue" v-if="imgCount>0">{{ imgCount }}</div>
                </a>

                <button
                  class="btn btn-primary btn-md-2"
                  @click.prevent="postItem"
                >{{ itemSubmitBtn }}</button>
                <button
                  class="btn btn-md-2 btn-border-think btn-transparent c-grey"
                  @click.prevent="resetItemPost"
                >Reset</button>
              </div>
            </form>
          </div>

          <div class="tab-pane" id="profile-1" role="tabpanel" aria-expanded="true">
            <form>
              <div class="author-thumb">
                <img src="theme/img/author-page.jpg" alt="author">
              </div>
              <div class="form-group with-icon label-floating is-empty">
                <label class="control-label">Share what you are thinking here...</label>
                <textarea class="form-control" placeholder></textarea>
                <span class="material-input"></span>
              </div>
              <div class="add-options-message">
                <a
                  href="#"
                  class="options-message"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD PHOTOS"
                >
                  <svg
                    class="olymp-camera-icon"
                    data-toggle="modal"
                    data-target="#update-header-photo"
                  >
                    <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-camera-icon"></use>
                  </svg>
                </a>
                <a
                  href="#"
                  class="options-message"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="TAG YOUR FRIENDS"
                >
                  <svg class="olymp-computer-icon">
                    <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-computer-icon"></use>
                  </svg>
                </a>

                <a
                  href="#"
                  class="options-message"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD LOCATION"
                >
                  <svg class="olymp-small-pin-icon">
                    <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-small-pin-icon"></use>
                  </svg>
                </a>

                <button class="btn btn-primary btn-md-2">Post Status</button>
                <button class="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- ... end News Feed Form  -->
    </div>

    <div id="newsfeed-items-grid">
      <div class="ui-block" v-for="story in stories" v-bind:key="story.item_id">
        <article class="hentry post has-post-thumbnail">
          <div class="post__author author vcard inline-items">
            <img :src="story.avatar" alt="author">
            <div class="author-date">
              <a :href="$root.encr(story.item_id)" class="h6 post__author-name fn">{{story.fname+" "+story.lname}}</a>
              <div class="post__date">
                <time datetime="2004-07-24T18:18" class="published">{{ story.created_at }}</time>
              </div>
            </div>
            <div class="more">
              <svg class="olymp-three-dots-icon">
                <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
              </svg>
              <ul class="more-dropdown">
                <li>
                  <a href="#">Edit Post</a>
                </li>
                <li>
                  <a href="#">Delete Post</a>
                </li>
                <li>
                  <a href="#">Turn Off Notifications</a>
                </li>
                <li>
                  <a href="#">Select as Featured</a>
                </li>
              </ul>
            </div>
          </div>
          <p>
            {{ story.contents }}
          </p>
          <div class="post-thumb">
            <div class="row">
              <div class="col p-1" v-for="imgPath in story.itemImages" v-bind:key="imgPath.path">
                <img :src="'storage/'+imgPath.path" alt="photo">
              </div>
            </div>
          </div>
          <div class="post-additional-info inline-items">
            <a href="#" class="post-add-icon inline-items">
              <svg class="olymp-heart-icon">
                <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
              </svg>
              <span>{{ story.likes }}</span>
            </a>
            <div class="comments-shared">
              <a href="#" class="post-add-icon inline-items">
                <svg class="olymp-speech-balloon-icon">
                  <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use>
                </svg>
                <span>264</span>
              </a>
            </div>
          </div>
          <!-- //side icons -->
          <div class="control-block-button post-control-button">
            <a href="#" @click.prevent="loveOnItem(story.item_id)" class="btn btn-control">
              <svg class="olymp-like-post-icon">
                <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
              </svg>
            </a>
            <a href="#" class="btn btn-control">
              <svg class="olymp-share-icon">
                <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>

    <a
      id="load-more-button"
      href="#"
      class="btn btn-control btn-more"
      data-load-link="items-to-load.html"
      data-container="newsfeed-items-grid"
    >
      <svg class="olymp-three-dots-icon">
        <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
      </svg>
    </a>

    <!-- //modal -->
    <div class="modal-backdrop" v-show="dropZoneActive">
      <div class="modal">
        <div class="modal-dialog window-popup update-header-photo" role="document">
          <div class="modal-content" style="display: none;">
            <a
              href="#"
              class="close icon-close"
              data-dismiss="modal"
              @click.prevent="dropZoneActive=false"
              aria-label="Close"
            >
              <svg class="olymp-close-icon">
                <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
              </svg>
            </a>

            <div class="modal-header">
              <h6 class="title">Update Header Photo</h6>
            </div>

            <div class="modal-body">
              <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
            </div>

            <div class="modal-footer">
              <button class="btn btn-primary" @click.prevent="dropZoneUpload">Upload</button>
              <button class="btn btn-secondary" @click.prevent="dropZoneClearAll">Clear</button>
              <button class="btn btn-default" @click.prevent="dropZoneActive=false">x</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
//vue dropzone
import vue2Dropzone from "vue2-dropzone";
export default {
  mounted(){
    axios.get('/feed').then(res => { this.stories = res.data;} );
  },
  data: function() {
    return {
      stories:[],
      numberOnlyPattern: /^\d+(,\d{1,2})?$/,
      itemSubmitBtn: "Post Item",
      imgCount: 0,
      dropZoneActive: false,
      dropzoneOptions: {
        url: "images/items",
        paramName: "image",
        maxFiles: 4,
        thumbnailWidth: 140,
        thumbnailHeight: 120,
        maxFilesize: 0.5,
        acceptedFiles: "image/*",
        params: { x_token: Math.ceil(Math.random() * 100000) },
        autoProcessQueue: false
      },
      itemContent: "",
      itemQuantity: "",
      itemPrice: "",
      itemLocation: ""
    };
  },
  components: {
    "vue-dropzone": vue2Dropzone
  },
  watch: {
    itemPrice: function() {
      if (!this.numberOnlyPattern.test(this.itemPrice)) {
        this.notify("Invalid Price");
        this.itemPrice = "";
      }
    },
    itemQuantity: function() {
      if (!this.numberOnlyPattern.test(this.itemQuantity)) {
        this.notify("Invalid Quantity");
        this.itemQuantity = "";
      }
    },
    itemLocation: function() {
      if (this.numberOnlyPattern.test(this.itemLocation)) {
        this.notify("Invalid Location");
        this.itemPrice = "";
      }
    }
  },
  methods: {
    dropZoneUpload: function() {
      this.$refs.myVueDropzone.processQueue();
      this.imgCount = this.$refs.myVueDropzone.getAcceptedFiles().length;
    },
    dropZoneClearAll: function() {
      this.$refs.myVueDropzone.removeAllFiles();
      this.imgCount = 0;
    },
    postItem: function() {
      if (this.validate("item")) {
        //post item
        axios
          .post("/items", {
            x_token: this.dropzoneOptions.params.x_token,
            contents: this.itemContent,
            price: this.itemPrice,
            quantity: this.itemQuantity,
            privacy: "1",
            status: "1",
            loc_id: 12
          })
          .then(res => this.afterPostingItem(res));
      }
    },
    afterPostingItem: function(res) {
      if (res) {
        this.notify("Updated");
        this.dropZoneClearAll();
        this.imgCount = 0;
      } else {
        this.notify("Err! Network");
      }
    },
    resetItemPost: function() {
      this.itemContent = "";
      this.itemPrice = "";
      this.itemQuantity = "";
      this.itemLocation = "";
      this.dropZoneClearAll(); //clear dropzone
    },
    validate: function(type) {
      switch (type) {
        case "item":
          if (
            this.itemContent == "" ||
            this.itemQuantity == "" ||
            this.itemPrice == "" ||
            this.itemLocations == ""
          ) {
            this.notify("Empty fields left behind!");
            return false;
          }
          break;
      }

      return true;
    },
    notify: function(text) {
      this.itemSubmitBtn = text;
      setTimeout(() => {
        this.itemSubmitBtn = "Post Item";
      }, 5000);
    },
    loveOnItem:function(id){
      var pos = this.stories.findIndex(item => item.item_id == id);
      //axios
      axios.get('item/like/'+this.stories[pos].item_id).then(res => {
        console.log(res.data);
        
        this.stories[pos].likes = res.data;
      });
      
    }
  }
};
</script>
