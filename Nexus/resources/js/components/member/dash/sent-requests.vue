<template>
  <div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
    <div class="ui-block">
      <div class="ui-block-title">
        <h6 class="title">Sent Friend Requests</h6>
        <a href="#" class="more">
          <svg class="olymp-three-dots-icon">
            <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
          </svg>
        </a>
      </div>

      <!-- Notification List Frien Requests -->
      <ul class="notification-list friend-requests">
        <li v-if="sentRequests == ''">
          <div class="notification-event">No Pending Sent Friend Requests</div>
        </li>
        <li v-for="user in sentRequests" v-bind:key="user.id">
          <div class="author-thumb">
            <img src="theme/img/avatar15-sm.jpg" alt="author">
          </div>
          <div class="notification-event">
            <a
              :href="$root.encr(user.uid)"
              class="h6 notification-friend"
            >{{ user.fname+" "+user.lname }}</a>
            <span class="chat-message-item">Mutual Friend: Sarah Hetfield</span>
          </div>
          <span class="notification-icon">
            <a href="#" class="accept-request request-del" @click.prevent="delRequest(user.uid)">
              <span class="icon-minus">
                <svg class="olymp-happy-face-icon">
                  <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
                </svg>
              </span>
            </a>
          </span>
        </li>

        <transition-group enter-active-class="animate fade">
          <li class="accepted" v-for="user in removed" v-bind:key="user.uid">
            <div class="author-thumb">
              <img src="theme/img/avatar17-sm.jpg" alt="author">
            </div>
            <div class="notification-event">
              You removed
              <a href="#" class="h6 notification-friend">{{ user.fname+" "+user.lname }}</a>'s friend request.
            </div>
          </li>
        </transition-group>
      </ul>
      <!-- ... end Notification List Frien Requests -->
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    axios
      .get("member/friends/sent")
      .then(response => {
        this.sentRequests = response.data;
      })
      .catch(error => {
        this.sentRequests = "";
      });
  },
  data: function() {
    return {
      sentRequests: {},
      removed: []
    };
  },
  methods: {
    acceptRequest: function(uid) {
      //   server update
      axios.put("member/friends/active", { uid: uid }).then(response => {
        //   console.log(response.data);
        //	ui update
        var index = this.sentRequests.findIndex(item => item.uid == uid);
        var user = this.sentRequests.splice(index, 1);
        this.accepted.push(user[0]);
      });
    },
    delRequest: function(uid) {
      //   server update
      axios.delete("member/friends/" + uid).then(response => {
        //   console.log(response.data);
        //	ui update
        var index = this.sentRequests.findIndex(item => item.uid == uid);
        var user = this.sentRequests.splice(index, 1);
        this.removed.push(user[0]);
      });
    }
  }
};
</script>

