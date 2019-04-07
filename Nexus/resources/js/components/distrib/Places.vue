<template>
  <div class="row">
    <div class="col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading">
          Available Delivery Locations
          <ul class="pull-right panel-settings panel-button-tab-right">
            <li class="dropdown">
              <a class="pull-right dropdown-toggle" data-toggle="dropdown" href="#">
                <em class="fa fa-cogs"></em>
              </a>
              <ul class="dropdown-menu dropdown-menu-right">
                <li>
                  <ul class="dropdown-settings">
                    <li>
                      <a href>
                        <em class="fa fa-cog"></em> Settings 1
                      </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href>
                        <em class="fa fa-cog"></em> Settings 2
                      </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href>
                        <em class="fa fa-cog"></em> Settings 3
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <span class="pull-right clickable panel-toggle panel-button-tab-left">
            <em class="fa fa-toggle-up"></em>
          </span>
        </div>
        <div class="panel-body">
          <div class="form-group">
            <label>Select Country</label>
            <select class="form-control" v-model="seldCountry">
              <option value="-1">--Select Country--</option>
              <option
                v-for="country in this.countries"
                v-bind:key="country.id"
                v-bind:value="country.id"
              >{{ country.country_name}}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Select State</label>
            <select class="form-control" v-model="seldState">
              <option value="-1">--Select State--</option>
              <option
                v-for="state in this.states"
                v-bind:key="state.id"
                v-bind:value="state.id"
              >{{ state.state_name}}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Select City</label>
            <select class="form-control" v-model="seldCity">
              <option value="-1">--Select City--</option>
              <option
                v-for="city in this.cities"
                v-bind:key="city.id"
                v-bind:value="city.id"
              >{{ city.city_name}}</option>
            </select>
          </div>
        </div>
        <div class="panel-footer">
          <div class="input-group">
            <input
              id="btn-input"
              type="text"
              class="form-control input-md"
              placeholder="Add New Location"
              v-model="newLandMark"
            >
            <span class="input-group-btn">
              <button class="btn btn-primary btn-md" @click="storeLandMark" id="btn-add">Add</button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!--/.col-->
    <div class="col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading">
          Locations / Land Marks
          <ul class="pull-right panel-settings panel-button-tab-right">
            <li class="dropdown">
              <a class="pull-right dropdown-toggle" data-toggle="dropdown" href="#">
                <em class="fa fa-cogs"></em>
              </a>
              <ul class="dropdown-menu dropdown-menu-right">
                <li>
                  <ul class="dropdown-settings">
                    <li>
                      <a href="#">
                        <em class="fa fa-cog"></em> Settings 1
                      </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">
                        <em class="fa fa-cog"></em> Settings 2
                      </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">
                        <em class="fa fa-cog"></em> Settings 3
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <span class="pull-right clickable panel-toggle panel-button-tab-left">
            <em class="fa fa-toggle-up"></em>
          </span>
        </div>
        <div class="panel-body">
          <ul class="todo-list">
            <li
              class="todo-list-item"
              v-for="landMark in this.landMarks"
              v-bind:key="landMark.dcid"
            >
              <div class="checkbox">
                <i class="fa fa-check-square"></i>
                <!-- <input type="checkbox" id="checkbox-1"> -->
                <label for="checkbox-1">{{ landMark.landmark }}</label>
              </div>
              <div class="pull-right action-buttons">
                <a href class="trash" @click.prevent="delLandMark(landMark.dcid)">
                  <em class="fa fa-trash"></em>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--/.col-->
    <div class="col-sm-12">
      <p class="back-link">
        Lumino Theme by
        <a href="https://www.medialoot.com">Medialoot</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    //load country list
    axios.get("/country").then(response => {
      this.countries = response.data;
    });
    //
    // axios.get("/country").then(response => {
    //   this.landMarks = response.data;
    // });
  },
  data: function() {
    return {
      countries: [],
      states: [],
      cities: [],
      landMarks: [],
      seldState: -1,
      seldCountry: -1,
      seldCity: -1,
      newLandMark: ""
    };
  },
  computed: {},
  watch: {
    seldState: function() {
      this.getCityList();
    },
    seldCountry: function() {
      this.cities = {};
      this.seldState = -1;
      this.getStateList();
    },
    seldCity: function() {
      // getLandMarks
      this.getLandMarks();
    }
  },
  methods: {
    getCityList: function() {
      axios.get("/city/" + this.seldState).then(response => {
        this.cities = response.data;
      });
    },
    getStateList: function() {
      axios.get("/state/" + this.seldCountry).then(response => {
        this.states = response.data;
      });
    },
    getLandMarks: function() {
      axios.get("/distrib/list/landm/" + this.seldCity).then(response => {
        this.landMarks = response.data;
      });
    },
    storeLandMark: function() {
      if (this.seldCity != -1) {
        axios
          .post("/distrib/store/landm", {
            landmark: this.newLandMark,
            city_id: this.seldCity
          })
          .then(res => {
            this.landMarks.push(res.data);
          });
      } else {
        this.newLandMark = "Please select a state";
        setTimeout(() => {
          this.newLandMark = "";
        }, 2000);
      }
    },
    delLandMark: function(key) {
      axios.get("/distrib/del/landm/" + key).then(res => {
        this.landMarks.splice(
          this.landMarks.findIndex(item => item.dcid === key),
          1
        );
      });
    }
  }
};
</script>
