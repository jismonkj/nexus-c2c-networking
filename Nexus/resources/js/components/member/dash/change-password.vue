<template>
  <div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
    <div class="ui-block">
      <div class="ui-block-title">
        <h6 class="title">Change Password</h6>
      </div>
      <div class="ui-block-content">
        <!-- Change Password Form -->
        <form @submit.prevent="updatePassword">
          <div class="row">
            <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="form-group label-floating">
                <label class="control-label">Confirm Current Password</label>
                <input class="form-control" placeholder type="password" v-model="currPassword">
                <span class="material-input"></span>
              </div>
            </div>

            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="form-group label-floating is-empty">
                <label class="control-label">Your New Password</label>
                <input class="form-control" placeholder type="password" v-model="newPassword">
                <span class="material-input"></span>
              </div>
            </div>
            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="form-group label-floating is-empty">
                <label class="control-label">Confirm New Password</label>
                <input class="form-control" placeholder type="password" v-model="confirmPassword">
                <span class="material-input"></span>
              </div>
            </div>

            <div class="col col-lg-12 col-sm-12 col-sm-12 col-12">
              <div class="remember">
                <!-- <div class="checkbox">
										<label>
											<input name="optionsCheckboxes" type="checkbox"><span class="checkbox-material"><span class="check"></span></span>
											Remember Me
										</label>
                </div>-->
                <!-- <a href="#" class="forgot">Forgot my Password</a> -->
              </div>
            </div>

            <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <button class="btn btn-primary btn-lg full-width">{{ chngPswdBtnTitle }}</button>
            </div>
          </div>
        </form>

        <!-- ... end Change Password Form -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      currPassword: "",
      newPassword: "",
      confirmPassword: "",
      chngPswdBtnTitle: "Change Password Now!"
    };
  },
  methods: {
    updatePassword: function() {
      //match entered passwords
      if (
        this.newPassword == "" ||
        this.currPassword == "" ||
        this.confirmPassword == ""
      ) {
        this.notify("Some Fields Are Empty");
      } else if (this.newPassword == this.currPassword) {
        this.notify("You cannot use the same password again!");
      } else if (this.newPassword != this.confirmPassword) {
        this.notify("Passwords do not match!");
      } else {
        //update password
        axios.post("member/password/change", this.$data).then(response => {
          this.notify(
            response.data != 0
              ? "Password has changed!"
              : "Wrong current password"
          );
        });
      }
    },
    notify: function(text) {
      this.chngPswdBtnTitle = text;
      setTimeout(() => {
        this.chngPswdBtnTitle = "Change Password Now";
      }, 5000);
    }
  }
};
</script>
