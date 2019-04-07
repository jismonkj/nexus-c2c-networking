<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="panel panel-default">
        <!-- <div class="panel-heading">Distributor Registration Form</div> -->
        <div class="panel-body">
          <div class="col-md-6">
            <div class="form-group">
              <label>Distributor Email</label>
              <input class="form-control" type="email" v-model="email">
            </div>
            <div class="form-group">
              <label>Distributor Name</label>
              <input type="text" class="form-control" v-model="distrib_name">
            </div>
            <div class="form-group">
              <label>Head Quarters</label>
              <input type="text" class="form-control" v-model="headq">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Service Charge in Percentage</label>
              <input type="number" class="form-control" v-model="service_charge">
            </div>
            <div class="form-group">
              <label>Website</label>
              <input type="text" class="form-control" v-model="website">
            </div>
            <div class="form-group">
              <label>Contact</label>
              <input type="tel" class="form-control" v-model="contact">
            </div>
            <button class="btn btn-primary" @click="saveDistributor">{{ saveBtnText }}</button>
            <button class="btn btn-secondary" @click="resetDistributor">Reset</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // axios.post("/admin/distributor/list", this.postData).then(response => {
    //   this.users = response.data;
    // });
  },
  data: function() {
    return {
      postData: { type: "distributor" },
      email: "",
      distrib_name: "",
      headq: "",
      service_charge: "",
      website: "",
      contact: "",
      saveBtnText: "Save Distributor"
    };
  },
  methods: {
    saveDistributor: function() {
      if (this.validateFormData()) {
        var data = {
          email: this.email,
          distrib_name: this.distrib_name,
          headq: this.headq,
          service_charge: this.service_charge,
          website: this.website,
          contact: this.contact
        };
        //save distrib data
        axios.post("admin/add/distrib", data).then(res => {
          if (!res.data) {
            this.notify("Email Already Exists");
          } else {
            this.notify("Distributor Has Added!");
          }
        });
      }
    },
    resetDistributor: function() {
      this.email = "";
      this.distrib_name = "";
      this.headq = "";
      this.service_charge = "";
      this.website = "";
      this.contact = "";
    },
    validateFormData: function() {
      if (this.email == "") {
        this.notify("Email is required");
        return false;
      }

      return true;
    },
    notify: function(text) {
      this.saveBtnText = text;
      setTimeout(() => {
        this.saveBtnText = "Save Distributor";
      }, 5000);
    }
  }
};
</script>
