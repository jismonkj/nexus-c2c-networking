<template>
  <div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
    <div class="ui-block">
      <div class="ui-block-title">
        <h6 class="title">Notification History</h6>
        <a href="#" class="more">
          <svg class="olymp-three-dots-icon">
            <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
          </svg>
        </a>
      </div>

      <!-- Notification List Frien Requests -->
      <ul class="notification-list friend-requests">
        <li v-if="notifications == ''">
          <div class="notification-event">Empty</div>
        </li>
        <li v-for="notification in notifications" v-bind:key="notification.id">
          <div class="author-thumb">
            <img src="theme/img/avatar15-sm.jpg" alt="author">
          </div>
          <div class="notification-event" v-html="notification.data.message"></div>
          <span class="notification-icon"></span>
        </li>
      </ul>
      <!-- ... end Notification List Frien Requests -->
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    axios.get("m/notifications").then(response => {
      this.notifications = response.data;
    });
  },
  data: function() {
    return {
      notifications: ""
    };
  }
};
</script>

