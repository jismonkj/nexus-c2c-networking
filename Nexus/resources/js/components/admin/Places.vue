<template>
  <div class="row">
    <div class="col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading">Country
          <ul class="pull-right panel-settings panel-button-tab-right">
            <li class="dropdown">
              <a class="pull-right dropdown-toggle" data-toggle="dropdown" href="#">
                <em class="fa fa-cogs"></em>
              </a>
              <ul class="dropdown-menu dropdown-menu-right">
                <li>
                  <ul class="dropdown-settings">
                    <li>
                      <a href="">
                        <em class="fa fa-cog"></em> Settings 1
                      </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="">
                        <em class="fa fa-cog"></em> Settings 2
                      </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="">
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
           <transition-group leave-active-class="animated fadeOutDown">
              <li class="todo-list-item" v-for="country in this.countries" v-bind:key="country.id">
              <div class="checkbox">
                <i class="fa fa-check-square"></i>
                <!-- <input type="checkbox" id="checkbox-1"> -->
                <label for="checkbox-1">{{ country.country_name }}</label>
              </div>
              <div class="pull-right action-buttons">
                <a class="pencil" @click="editCountry(country.id)">
                  <em class="fa fa-pencil"></em>
                </a>
                |
                <a class="trash" @click="delCountry(country.id)">
                  <em class="fa fa-trash"></em>
                </a>
              </div>
            </li>
           </transition-group>
          </ul>
        </div>
        <div class="panel-footer">
          <div class="input-group" v-if="!showCountryEdit">
            <input
              id="btn-input"
              type="text"
              class="form-control input-md"
              placeholder="Add New Country"
              v-model="newCountry"
            >
            <span class="input-group-btn">
              <button class="btn btn-primary btn-md" @click="storeCountry" id="btn-add">Add</button>
            </span>
          </div>
          <div class="input-group" v-if="showCountryEdit">
            <input
              id="btn-edit"
              type="text"
              class="form-control input-md"
              placeholder="Edit Country"
              v-model="updateCountry"
            >
            <span class="input-group-btn">
              <button
                class="btn btn-primary btn-md"
                @click="updateCountryFn"
                id="btn-updateCountry"
              >Save</button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!--/.col-->
    <div class="col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading">States
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
          <ul class="todo-list">
            <li class="todo-list-item" v-for="state in this.states" v-bind:key="state.id">
              <div class="checkbox">
                <i class="fa fa-check-square"></i>
                <!-- <input type="checkbox" id="checkbox-1"> -->
                <label for="checkbox-1">{{ state.state_name }}</label>
              </div>
              <div class="pull-right action-buttons">
                <a href="" class="pencil" @click="editState(state.id)">
                  <em class="fa fa-pencil"></em>
                </a>
                |
                <a href="" class="trash" @click="delState(state.id)">
                  <em class="fa fa-trash"></em>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div class="panel-footer">
          <div class="input-group" v-if="!showStateEdit">
            <input
              id="btn-input"
              type="text"
              class="form-control input-md"
              placeholder="Add New State"
              v-model="newState"
            >
            <span class="input-group-btn">
              <button class="btn btn-primary btn-md" @click="storeState" id="btn-add">Add</button>
            </span>
          </div>
          <div class="input-group" v-if="showStateEdit">
            <input
              id="btn-edit"
              type="text"
              class="form-control input-md"
              placeholder="Edit State"
              v-model="updateState"
            >
            <span class="input-group-btn">
              <button class="btn btn-primary btn-md" @click="updateStateFn" id="btn-update">Save</button>
            </span>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">City
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
          <ul class="todo-list">
            <li class="todo-list-item" v-for="city in this.cities" v-bind:key="city.id">
              <div class="checkbox">
                <i class="fa fa-check-square"></i>
                <!-- <input type="checkbox" id="checkbox-1"> -->
                <label for="checkbox-1">{{ city.city_name }}</label>
              </div>
              <div class="pull-right action-buttons">
                <a class="pencil" @click="editCity(city.id)">
                  <em class="fa fa-pencil"></em>
                </a>
                |
                <a class="trash" @click="delCity(city.id)">
                  <em class="fa fa-trash"></em>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div class="panel-footer">
          <div class="input-group" v-if="!showCityEdit">
            <input
              id="btn-input"
              type="text"
              class="form-control input-md"
              placeholder="Add New City"
              v-model="newCity"
            >
            <span class="input-group-btn">
              <button class="btn btn-primary btn-md" @click="storeCity" id="btn-addCity">Add</button>
            </span>
          </div>
          <div class="input-group" v-if="showCityEdit">
            <input
              id="btn-edit"
              type="text"
              class="form-control input-md"
              placeholder="Edit City"
              v-model="updateCity"
            >
            <span class="input-group-btn">
              <button class="btn btn-primary btn-md" @click="updateCityFn" id="btn-updateCity">Save</button>
            </span>
          </div>
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
    axios.get("/country").then(response => {
      this.countries = response.data;
    });
  },
  data: function() {
    return {
      countries: [],
      states: [],
      cities: [],
      newCountry: "",
      newState: "",
      newCity: "",
      showCountryEdit: false,
      showStateEdit: false,
      showCityEdit: false,
      updateCountry: "",
      updateState: "",
      updateCity: "",
      updateCountryKey: "",
      updateStateKey: "",
      updateCityKey: "",
      seldState: -1,
      seldCountry: -1
    };
  },
  computed: {
    newCountryObj: function() {
      var obj = {};
      obj.country_name = this.newCountry;
      obj._token = this.$parent.csrftoken;
      return obj;
    },
    updateCountryObj: function() {
      var obj = {
        country_name: this.updateCountry,
        _token: this.$parent.csrftoken
      };
      return obj;
    },
    newStateObj: function() {
      var obj = {};
      obj.cid = this.seldCountry;
      obj.state_name = this.newState;
      obj._token = this.$parent.csrftoken;
      return obj;
    },
    updateStateObj: function() {
      var obj = {
        state_name: this.updateState,
        _token: this.$parent.csrftoken
      };
      return obj;
    },
    newCityObj: function() {
      var obj = {};
      obj.sid = this.seldState;
      obj.city_name = this.newCity;
      obj._token = this.$parent.csrftoken;
      return obj;
    },
    updateCityObj: function() {
      var obj = { city_name: this.updateCity, _token: this.$parent.csrftoken };
      return obj;
    }
  },
  watch: {
    seldState: function() {
      this.showCityEdit = false;
      this.getCityList();
    },
    seldCountry: function() {
      this.showCityEdit = false;
      this.cities = {};
      this.seldState = -1;
      this.getStateList();
    }
  },
  methods: {
    //Resource | Country
    delCountry: function(key) {
      //   this.states.pop();
      //delete item
      axios.delete("/country/" + key).then(response => {
        // delete item
        this.countries.splice(this.countries.findIndex(item => item.id === key), 1);
      });
    },
    storeCountry: function() {
      //store item
      axios.post("/country", this.newCountryObj).then(response => {
        // push item
        var dataObj = {};
        dataObj.id = response.data;
        dataObj.country_name = this.newCountry;
        this.countries.push(dataObj);
        this.newCountry = "";
      });
    },
    editCountry: function(key) {
      this.showCountryEdit = true;
      this.updateCountry = this.countries.find(item => item.id == key).country_name;
      this.updateCountryKey = key;
    },
    updateCountryFn: function() {
      axios
        .put("/country/" + this.updateCountryKey, this.updateCountryObj)
        .then(response => {
          //update list and change input
          this.countries.find(
            item => item.id == this.updateCountryKey
          ).country_name = this.updateCountry;
          this.showCountryEdit = false;
        });
    },
    //Resource | State
    delState: function(key) {
      //   this.states.pop();
      //delete item
      axios.delete("/state/" + key).then(response => {
        // delete item
        this.states.splice(this.states.findIndex(item => item.id === key), 1);
      });
    },
    storeState: function() {
      //store item
      axios.post("/state", this.newStateObj).then(response => {
        // push item
        var dataObj = {};
        dataObj.id = response.data;
        dataObj.state_name = this.newState;
        this.states.push(dataObj);
        this.newState = "";
      });
    },
    editState: function(key) {
      this.showStateEdit = true;
      this.updateState = this.states.find(item => item.id == key).state_name;
      this.updateStateKey = key;
    },
    updateStateFn: function() {
      axios
        .put("/state/" + this.updateStateKey, this.updateStateObj)
        .then(response => {
          //update list and change input
          this.states.find(
            item => item.id == this.updateStateKey
          ).state_name = this.updateState;
          this.showStateEdit = false;
        });
    },
    //Resource | City
    delCity: function(key) {
      //delete item
      axios.delete("/city/" + key).then(response => {
        // delete item
        this.cities.splice(this.cities.findIndex(item => item.id === key), 1);
      });
    },
    storeCity: function() {
      //store item
      axios.post("/city", this.newCityObj).then(response => {
        // push item
        var dataObj = {};
        dataObj.id = response.data;
        dataObj.city_name = this.newCity;
        this.cities.push(dataObj);
        this.newCity = "";
      });
    },
    editCity: function(key) {
      this.showCityEdit = true;
      this.updateCity = this.cities.find(item => item.id == key).city_name;
      this.updateCityKey = key;
    },
    updateCityFn: function() {
      axios
        .put("/city/" + this.updateCityKey, this.updateCityObj)
        .then(response => {
          //update city list and change input
          this.cities.find(
            item => item.id == this.updateCityKey
          ).state_name = this.updateCity;
          this.showCityEdit = false;
        });
    },
    getCityList: function() {
      axios.get("/city/" + this.seldState).then(response => {
        this.cities = response.data;
      });
    },
    getStateList: function() {
      axios.get("/state/" + this.seldCountry).then(response => {
        this.states = response.data;
      });
    }
  }
};
</script>
