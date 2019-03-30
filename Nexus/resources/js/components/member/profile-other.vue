<template>
<div>
  <div class="container">
    <div class="header-spacer"></div>
    <div class="row">
      <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="ui-block">
          <div class="top-header">
            <div class="top-header-thumb">
              <img src="theme/img/top-header1.jpg" alt="nature">
            </div>
            <div class="profile-section">
              <div class="row">
                <div class="col col-lg-5 col-md-5 col-sm-12 col-12">
                  <ul class="profile-menu">
                    <li>
                      <a href="" class="active">Timeline</a>
                    </li>
                    <li>
                      <router-link :to="'/user/'+encr_f(userProfile.uid)+'/about'">About</router-link>
                    </li>
                    <li>
                      <router-link :to="'/user/'+encr_f(userProfile.uid)+'/friends'">Friends</router-link>
                    </li>
                  </ul>
                </div>
                <div class="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                  <ul class="profile-menu">
                    <li>
                      <a href="07-ProfilePage-Photos.html">Photos</a>
                    </li>
                    <li>
                      <a href="09-ProfilePage-Videos.html">Videos</a>
                    </li>
                    <li>
                      <div class="more">
                        <svg class="olymp-three-dots-icon">
                          <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                        </svg>
                        <ul class="more-dropdown more-with-triangle">
                          <li>
                            <a href="#">Report Profile</a>
                          </li>
                          <li>
                            <a href="#">Block Profile</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="control-block-button">
                <a v-if="connected==true" href="" class="btn btn-control bg-blue" data-toggle="tooltip"
                  data-placement="bottom"
                  title="Friends">
                  <svg class="olymp-happy-face-icon">
                    <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
                  </svg>
                </a>               
                <a v-if="connected==3" @click.prevent="delFriendReq(userProfile.uid)" href="" class="btn btn-control bg-secondary" data-toggle="tooltip"
                  data-placement="bottom"
                  title="Cancel Friend Request">
                  <svg class="olymp-happy-face-icon">
                    <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
                  </svg>
                </a>               
                <a v-if="connected==false" @click.prevent="sendFriendReq(userProfile.uid)" href="" class="btn btn-control bg-blue" data-toggle="tooltip"
                  data-placement="bottom"
                  title="Send Friend Request">
                  <svg class="olymp-happy-face-icon">
                    <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
                  </svg>
                </a>               
             </div>
            </div>
            <div class="top-header-author">
              <a class="author-thumb">
                <img src="theme/img/author-main1.jpg" alt="author">
              </a>
              <div class="author-content">
                <a
                  class="h4 author-name"
                >{{ userProfile.fname+" "+userProfile.lname }}</a>
                <div
                  class="country"
                >{{ userProfile.city_name}}, {{ userProfile.state_name }}, {{ userProfile.country_name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view>
    <!-- //content -->
  </router-view>
  </div>
</template>
<script>
export default {
  mounted() {
    this.getUserInfo(window.atob(this.id));
  },
  data: function() {
    return {
      id: this.$route.params.id,
      userProfile: "",
      connected: false
    };
  },
  methods: {
    encr_f: function(uid) {
      return window.btoa(uid);
    },
    sendFriendReq: function($mid) {
      //push server update
      axios.post("member/friends", { 'fid': $mid }).then(response => {
         //change icon
      this.connected = 3;
      this.userProfile.connected = 3;
      });
      
    },
    delFriendReq: function($mid) {
      //push server update
      axios.delete("member/friends/" + $mid ).then(response => {
        //change icon
        this.connected = false;
        this.userProfile.connected = false;
      });
    },
    getUserInfo:function(id){
       // get user info
    axios.get("/member/profile/" + id).then(response => {
      this.userProfile = response.data;
      this.connected = this.userProfile.connected;
    });
    }
  }
};
</script>
