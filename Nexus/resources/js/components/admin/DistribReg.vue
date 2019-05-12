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
            <button
              class="btn"
              :class="{'btn-danger':invalid, 'btn-primary':!invalid}"
              @click="saveDistributor"
            >{{ saveBtnText }}</button>
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
      saveBtnText: "Save Distributor",
      errors: [],
      //validation rules
      rules: {
        email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        password: /^(?=.*\d).{4,10}$/,
        fname: /[a-z]{1,10}/,
        // lname: /[A-z][a-z]+/,
        dob: /(\d{4})-(\d{2})-(\d{2})/,
        gender: /^male$|^female$/
      },
      invalid:true
    };
  },
  methods: {
    saveDistributor: function() {
      if (!this.invalid) {
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
            this.resetDistributor();
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
    var len = Object.keys(this.errors).length;
      if(len > 0 ){
        this.invalid = true;
      }else if(this.email == "" || this.distrib_name == "" || this.headq == "" || this.service_charge == "" || this.website == "" || this.contact == ""){
        this.invalid = true;
      }
      else{
        this.invalid = false;
      }
    },
    notify: function(text) {
      this.saveBtnText = text;
      setTimeout(() => {
        this.saveBtnText = "Save Distributor";
      }, 5000);
    }
  },
  watch: {
    email() {
      if (!this.rules.email.test(this.email) || this.email.length < 7) {
        this.errors.email = true;
        this.notify("Invalid Email!");
      } else {
        this.saveBtnText = "Save Distributor";
        delete this.errors.email;
      }

      this.validateFormData();
    },
    distrib_name() {
      if (
        !this.rules.fname.test(this.distrib_name) ||
        this.distrib_name.length < 3
      ) {
        this.errors.name = true;
        this.notify("Invalid Distributor Name");
      } else {
        this.saveBtnText = "Save Distributor";
        delete this.errors.name;
      }
      this.validateFormData();
    },
    headq() {
      if (!this.rules.fname.test(this.headq) || this.headq.length < 3) {
        this.errors.headq = true;
        this.notify("Invalid Head Quarters");
      } else {
        this.saveBtnText = "Save Distributor";
        delete this.errors.headq;
      }
      this.validateFormData();
    },
    service_charge() {
      if (this.service_charge > 40 || isNaN(this.service_charge) || this.service_charge < 1) {
        this.service_charge = 1;
        this.errors.service_charge = true;
        this.notify("Invalid Service Charge");
      } else {
        delete this.errors.service_charge;
        this.saveBtnText = "Save Distributor";
      }
      this.validateFormData();
    },
    contact() {
      if (this.contact.length != 10 || isNaN(this.contact)) {
        this.errors.contact = true;
        this.notify("Invalid Contact Number");
      } else {
        this.saveBtnText = "Save Distributor";
        delete this.errors.contact;
      }
      this.validateFormData();
    },
    website() {
      if (this.website.length < 4) {
        this.errors.website = true;
        this.notify("Invalid Website");
      } else {
        this.saveBtnText = "Save Distributor";
        delete this.errors.website;
      }
      this.validateFormData();
    }
  }
};
</script>
