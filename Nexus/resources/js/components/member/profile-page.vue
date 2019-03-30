<template>
  <div>
    <div class="header-spacer"></div>
    <div class="container">
      <div class="row">
        <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="ui-block">
            <div class="top-header top-header-favorit">
              <div class="top-header-thumb">
                <img src="theme/img/top-header2.jpg" alt="nature">
                <div class="top-header-author">
                  <div class="author-thumb">
                    <img src="theme/img/author-main2.jpg" alt="author">
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
                        <a href="#" @click.prevent="isModalVisible=true">Update Profile Photo</a>
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
    <modal-photo v-show="isModalVisible"></modal-photo>
  </div>
</template>
<script>
export default {
  data: function() {
    return { isModalVisible: false };
  }
};
</script>
