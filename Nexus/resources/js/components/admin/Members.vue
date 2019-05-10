<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <table class="table table-striped">
        <thead>
          <th>Name</th>
          <th>Place</th>
          <th>Email</th>
          <th>-</th>
        </thead>
        <tbody>
          <tr v-for="user in users" v-bind:key="user.id">
            <td>{{ user.fname+" "+user.lname }}</td>
            <td>{{ user.city_name }}, {{ user.state_name }}, {{ user.country_name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="viewProfile(user.id)" class="btn btn-sm btn-primary" title="Profile">
                <i class="fa fa-user"></i>
              </button>
              <button
                v-if="user.status=='active'"
                @click="blockOrUnblockUser(user.id)"
                class="btn btn-sm btn-danger"
                title="Block User"
              >
                <i class="fa fa-ban"></i>
              </button>
              <button
                v-if="user.status=='ban'"
                @click="blockOrUnblockUser(user.id)"
                class="btn btn-sm btn-info"
                title="Unblock User"
              >
                <i class="fa fa-circle"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- //modal profile -->
    <transition leave-active-class="animate fade">
      <div class="modal-backdrop" v-show="showProfile">
        <div class="modal show">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                {{userProfile.fname }} {{ userProfile.lname }}
                <button
                  class="close"
                  @click="closeProfile"
                >
                  <i class="fa fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-5">
                      <img :src="'storage/'+userProfile.avatar" alt style="max-width:200px">
                    </div>
                    <div class="col-md-7">
                      <p>{{ userProfile.about_you }}</p>
                      <div class="panel panel-primary">                        
                        <div class="panel-body">
                          <i class="fa fa-birthday-cake"></i>
                          {{ userProfile.dob }} | 
                          <i class="fa fa-heart"></i>
                          {{ userProfile.relationship }}<br/>
                          <i
                            class="fa fa-phone"
                          ></i>
                          {{ userProfile.mobile }}
                        </div>
                      </div>
                      <a :href="'https://facebook.com/'+userProfile.facebook">
                        <i class="fa fa-facebook"></i>
                      </a> |
                      <a :href="'https://twitter.com/'+userProfile.twitter">
                        <i class="fa fa-twitter"></i>
                      </a> |
                      <a :href="'https://dribbble.com/'+userProfile.dribbble">
                        <i class="fa fa-dribbble"></i>
                      </a> |
                      <a :href="userProfile.website">
                        <i class="fa fa-external-link"></i>
                      </a>
                      <br/>
                      Profile Created On: {{ userProfile.created_at }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- modal profile ends -->
  </div>
</template>

<script>
export default {
  mounted() {
    axios.post("/admin/users/list", this.postData).then(response => {
      this.users = response.data;
    });
  },
  data: function() {
    return {
      users: "",
      userProfile: [],
      postData: { type: "members" },
      showProfile: false
    };
  },
  methods: {
    blockOrUnblockUser(id) {
      var index = this.users.findIndex(user => user.id == id);
      var status = this.users[index].status;
      if (status != "ban") {
        //block user
        axios
          .put("/admin/" + id, { type: "user", status: "ban" })
          .then(data => {
            // update ui
            this.users[index].status = "ban";
          });
      } else if (status == "ban") {
        //unblock user
        axios
          .put("/admin/" + id, { type: "user", status: "active" })
          .then(data => {
            //update ui
            this.users[index].status = "active";
          });
      }
    },
    viewProfile: function(id) {
      //get profile
      axios.get("/admin/" + id, { type: "user" }).then(res => {
        console.log(res.data);
        this.userProfile = res.data;
      });
      this.showProfile = true;
    },
    closeProfile() {
      this.showProfile = false;
    }
  }
};
</script>
