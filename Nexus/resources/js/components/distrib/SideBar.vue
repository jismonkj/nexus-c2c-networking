<template>
  <div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar">
    <div class="profile-sidebar">
      <div class="profile-userpic">
        <img src="http://placehold.it/50/30a5ff/fff" class="img-responsive" alt>
      </div>
      <div class="profile-usertitle">
        <div class="profile-usertitle-name">Distributor</div>
        <div class="profile-usertitle-status">
          <span class="indicator label-success"></span>Online
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="divider"></div>
    <form role="search">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Search">
      </div>
    </form>
    <ul class="nav menu">
      <li v-bind:class="{ active : activeTab == 'Dashboard' }" @click="setBreadCumb('Dashboard')">
        <router-link to="dashboard">
          <a href>
            <em class="fa fa-dashboard">&nbsp;</em>
            Dashboard
          </a>
        </router-link>
      </li>
      <li v-bind:class="{ active : activeTab == 'Places' }" @click="setBreadCumb('Places')">
        <router-link to="places">
          <a href>
            <em class="fa fa-dashboard">&nbsp;</em>
            Places
          </a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    setBreadCumb: function(title) {
      this.$parent.breadCumbPath = title;
      this.activeTab = title;
    }
  },
  data: function() {
    return { activeTab: false };
  }
};
</script>
