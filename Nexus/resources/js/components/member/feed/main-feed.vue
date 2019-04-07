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
              </div>
              <div class="row">
                <div class="col p-0">
                  <div class="form-group with-icon label-floating is-empty">
                    <label class="control-label">Search for Location</label>
                  <v-autocomplete
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
      <!-- //post item -->
      <div class="ui-block" v-for="story in stories" v-bind:key="story.item_id">
        <article class="hentry post has-post-thumbnail">
          <div class="post__author author vcard inline-items">
            <img :src="story.avatar" alt="author">
            <div class="author-date">
              <a
                :href="$root.encr(story.xid)"
                class="h6 post__author-name fn"
              >{{story.fname+" "+story.lname}}</a>
              <div class="post__date">
                <time datetime="2004-07-24T18:18" class="published">{{ story.created_at }}</time>
              </div>
            </div>
          </div>
          <p>{{ story.contents }}</p>
          <div class="post-thumb">
            <div class="row">
              <div class="col p-1" v-for="imgPath in story.itemImages" v-bind:key="imgPath.path">
                <img :src="'storage/'+imgPath.path" alt="photo">
              </div>
            </div>
          </div>
          <div class="post-additional-info inline-items">
            <a href="#" class="post-add-icon inline-items user-liked-font" v-show="story.liked">
              <svg class="olymp-heart-icon">
                <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
              </svg>
              <span>{{ story.likes }}</span>
            </a>

            <a href="#" class="post-add-icon inline-items" v-show="!story.liked">
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
            <a
              href="#"
              @click.prevent="loveOnItem(story.item_id)"
              class="btn btn-control user-liked"
              v-show="story.liked"
              data-toggle="tooltip"
              data-placement="left"
              title="Unlike"
            >
              <svg class="olymp-like-post-icon">
                <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
              </svg>
            </a>
            <a
              href="#"
              @click.prevent="loveOnItem(story.item_id)"
              class="btn btn-control"
              v-show="!story.liked"
              data-toggle="tooltip"
              data-placement="left"
              title="Like"
            >
              <svg class="olymp-like-post-icon">
                <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
              </svg>
            </a>
            <a
              href="#"
              class="btn btn-control"
              @click.prevent="showBuyModal(story.item_id)"
              data-toggle="tooltip"
              data-placement="left"
              title="Buy"
              v-if="$root.$data.user.id!=story.xid"
            >
              <svg class="olymp-share-icon">
                <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>

   
    <div class="text-center" v-show="loading">
   loading..
     <span class="fa btn-more fa-spin fa-circle-notch">
    </span>
    </div>
    
    
    <div class="text-center" v-show="!loading">
    no more stories for now!
    </div>

    

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

    <transition leave-active-class="animate fade" enter-active-class="animate fade">
      <modal-buy v-show="isBuyModalVisible" ref="modalBuy"></modal-buy>
    </transition>
  </main>
</template>
<script>
import Autocomplete from "v-autocomplete";
import ItemTemplate from "./ItemTemplate.vue";
Vue.use(Autocomplete);

//modal buy
import ModalBuy from "../../utils/modal-buy.vue";
//vue dropzone
import vue2Dropzone from "vue2-dropzone";
export default {
  mounted() {
    axios.get("/feed").then(res => {
      this.stories = res.data.data;
      this.scrollPages = res.data.total;
      this.next_url = res.data.next_page_url;
      this.currentPage = 1;
    });
    this.scroll();
  },
  data: function() {
    return {
      //infinite scroll
      next_url:"",
      scrollPages:"",
      currentPage:0,
      loading:true,
      //infinite scroll end
      //autocomplete
      item: "",
      items: [],
      template: ItemTemplate,
      inputAttrs:{
        // placeholder:"search for location",
        class:"form-control"
      },
      //auto-complete-end
      stories: [],
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
      //buy modal
      buyItemId: "",
      isBuyModalVisible: false
    };
  },
  components: {
    "vue-dropzone": vue2Dropzone,
    "modal-buy": ModalBuy
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
    //infinite scroll
    scroll:function(){
      window.onscroll = () => {
        let bottomOfWindow = Math.floor(document.documentElement.scrollTop) + window.innerHeight >= document.documentElement.offsetHeight - 100 && Math.floor(document.documentElement.scrollTop) + window.innerHeight <= document.documentElement.offsetHeight + 100;

        if(bottomOfWindow){
            if(this.currentPage < this.scrollPages){
              this.currentPage++;
              var url = "/feed?page="+(this.currentPage);
              this.loading = true;
                axios.get(url).then(res => {
                  var data = res.data.data;
                  this.loading = false;
                  data.forEach(story => {
                    this.stories.push(story);
                  });
                  this.next_url = res.data.next_page_url;
                  // this.currentPage++;
              });
            }
        }
      };
    },
    //auto complete
    getLabel(item) {
      this.placeId = item.city_id;
      return item.city_name;
    },
    updateItems(text) {
      axios.get("location/search/" + text).then(response => {
        this.items = response.data;
      });
    },
    //auto complete end
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
            loc_id: this.item.id
          })
          .then(res => this.afterPostingItem(res));
      }
    },
    afterPostingItem: function(res) {
      if (res) {
        this.item = "";
        this.itemContent = "",
        this.itemQuantity = "",
        this.itemPrice = "",
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
      this.item = "";
      this.dropZoneClearAll(); //clear dropzone
    },
    validate: function(type) {
      switch (type) {
        case "item":
          if (
            this.itemContent == "" ||
            this.itemQuantity == "" ||
            this.itemPrice == ""
          ) {
            this.notify("Empty fields left behind!");
            return false;
          }

          if(this.item == null || this.item == ""){
             this.notify("Choose Location");
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
    loveOnItem: function(id) {
      var pos = this.stories.findIndex(item => item.item_id == id);
      //axios
      axios.get("item/like/" + this.stories[pos].item_id).then(res => {
        this.stories[pos].liked = res.data.liked;
        this.stories[pos].likes = res.data.likes;
      });
    },
    showBuyModal: function(itemId) {
      this.buyItemId = itemId;
      var pos = this.stories.findIndex(item => item.item_id == itemId);
      this.isBuyModalVisible = true;
      this.$refs.modalBuy.yes(this.stories[pos]);
    }
  }
};
</script>
