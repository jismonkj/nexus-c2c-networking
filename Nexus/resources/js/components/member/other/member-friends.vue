<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="ui-block responsive-flex">
            <div class="ui-block-title">
              <div class="h6 title">Friend Circle ({{ friends.length }})</div>
              <form class="w-search">
                <div class="form-group with-button is-empty">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Search Friends..."
                    v-model="searchInput"
                  >
                  <button>
                    <svg class="olymp-magnifying-glass-icon">
                      <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use>
                    </svg>
                  </button>
                  <span class="material-input"></span>
                </div>
              </form>
              <a href="#" class="more">
                <svg class="olymp-three-dots-icon">
                  <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- #//friends -->
    <div class="container">
      <div class="row">
        <div class="col-3" v-for="friend in friends" v-bind:key="friend.uid">
          <div class="ui-block">
            <!-- Friend Item -->
            <div class="friend-item">
              <div class="friend-header-thumb">
                <img src="theme/img/friend1.jpg" alt="friend">
              </div>

              <div class="friend-item-content">
                <div class="more">
                  <svg class="olymp-three-dots-icon">
                    <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                  </svg>
                  <ul class="more-dropdown">
                    <li>
                      <a href="#">Report Profile</a>
                    </li>
                    <li>
                      <a href="#">Block Profile</a>
                    </li>
                  </ul>
                </div>
                <div class="friend-avatar">
                  <div class="author-thumb">
                    <img src="theme/img/avatar1.jpg" alt="author">
                  </div>
                  <div class="author-content">
                    <a
                      href="#" @click.prevent="updatePage(friend.uid)"
                      class="h5 author-name"
                    >{{ friend.fname+" "+friend.lname }}</a>
                    <div class="country">{{ friend.city_name }} , {{ friend.country_name}}</div>
                  </div>
                  <div>
                    <span>Friends Since:</span>
                    <div class="color-secondary">{{ friend.date_accepted }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- ... end Friend Item -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
       id: this.$route.params.id,
      friends: {},
      searchInput: "",
      friendStore: "",
      pattern: ""
    };
  },
  mounted() {
    //get friend list
    axios
      .post("member/friend_circle", { mid: window.atob(this.id) })
      .then(response => {
        console.log(response.data);
        
        this.friendStore = response.data;
        this.friends = this.friendStore;
      });
  },
  watch: {
    searchInput: _.debounce(function() {
      var pattern = new RegExp("^" + this.searchInput, "i");
      this.friends = this.friendStore.filter(function(el) {
        return pattern.test(el.fname) || pattern.test(el.lname);
      });
    }, 500)
  },
  methods:{
    updatePage:function(id){
      window.location.href = this.$root.encr(id);    
      this.$parent.id = id;
      this.$parent.getUserInfo(id);
    }
  }
};
</script>
