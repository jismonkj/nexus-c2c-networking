<template>
  <div>
    <div class="header-spacer"></div>
    <div class="container">
      <div class="row">
        <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="ui-block">
            <div class="top-header top-header-favorit">
              <div class="top-header-thumb">
                <img :src="'storage/'+this.$parent.$data.user.myCover" alt="nature">
                <div class="top-header-author">
                  <div class="author-thumb">
                    <img :src="'storage/'+this.$parent.$data.user.myAvatar" alt="author">
                  </div>
                  <div class="author-content">
                    <a href="#" class="h3 author-name">{{ this.$parent.$data.user.uname }}</a>
                    <div class="country">{{ this.$parent.$data.user.status_text }}</div>
                  </div>
                </div>
              </div>
              <div class="profile-section">
                <div class="row">
                  <div class="col col-xl-8 m-auto col-lg-8 col-md-12">
                    <ul class="profile-menu">
                      <li>
                        <router-link to>Timeline</router-link>
                      </li>
                      <li>
                        <router-link to="/profile/about">About</router-link>
                      </li>
                      <li>
                        <router-link to>Auctions</router-link>
                      </li>
                      <li>
                        <router-link to>Items</router-link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="control-block-button">
                  <div class="btn btn-control bg-primary more">
                    <svg class="olymp-settings-icon">
                      <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-settings-icon"></use>
                    </svg>

                    <ul class="more-dropdown more-with-triangle triangle-bottom-right">
                      <li>
                        <a href="#" @click.prevent="toggleShow">Update Profile Photo</a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#update-header-photo"
                        >Update Header Photo</a>
                      </li>
                      <li>
                        <router-link to="/account/personal-info">Account Settings</router-link>
                      </li>
                    </ul>
                    <div class="ripple-container"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <!-- <modal-photo v-show="isModalVisible"></modal-photo> -->
    <!-- <a class="btn" >set avatar</a> -->
    <my-upload field="image"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="show"
		:width="630"
		:height="220"
		url="images/upload"
		:params="{_token:$root.csrftoken}"
    lang-type="en"
    noCircle='true'
    method="post"
		img-format="png"></my-upload>
	<img :src="imgDataUrl">
  </div>
</template>
<script>
import myUpload from "vue-image-crop-upload";

export default {
  mounted(){
    //
  },
  data: function() {
    return {
      user:'',
      show: false,
      imgDataUrl: "", // the datebase64 url of created image
    };
  },
  components: {
    "my-upload": myUpload
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------");
      this.imgDataUrl = imgDataUrl;
    },
    /**
     * upload success
     *
     * [param] jsonData  server api return data, already json encode
     * [param] field
     */
    cropUploadSuccess(jsonData, field) {
      this.coverUrl = "storage/"+jsonData;
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log(status);
      console.log("field: " + field);
    }
  }
};
</script>
