<template>
  <div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
    <div class="ui-block">
      <div class="ui-block-title">
        <h6
          class="title"
          data-toggle="tooltip"
          data-placement="top"
          title
          data-original-title="You build up your circles based on your interests"
        >Your Interests</h6>
      </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="uinterest in userInterests" v-bind:key="uinterest.iid">
        <div class="ui-block">
          <div class="available-widget">
            <div class="h6 title">{{ uinterest.name }}</div>
            <div class="more" @click="delInterest(uinterest.iid)">
              <i class="fa fa-times"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ui-block">
      <div class="ui-block-title">
        <div class="form-group label-floating">
          <label class="control-label">Search here to Add more!</label>
          <input class="form-control" type="text" placeholder v-model="intSrchQuery">
          <span class="material-input"></span>
        </div>
      </div>
      <div class="ui-block-content">
        <div class="row" v-show="querying">
          <div class="col-12 text-center">
            <i class="h5 fa fa-spinner fa-spin form-control-feedback"></i>
          </div>
        </div>
        <div class="row">
          <div class="col-4" v-for="interest in interestList" v-bind:key="interest.id">
          <div class="ui-block">
            <div class="available-widget">
              <div class="h6 title">{{ interest.name }}</div>
              <div class="more" @click="setInterest(interest.id)">
                <i class="fa fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    axios.get("/member/interest").then(response => {
      this.userInterests = response.data;
    });
  },
  data: function() {
    return {
      intSrchQuery: "Gadgets",
      interestList: [],
      userInterests: [],
      querying: false
    };
  },
  watch: {
    intSrchQuery: _.debounce(function() {
      //querying server for interests
      if (this.intSrchQuery != "") {
        //no empty query
        this.querying = true;
        let data = { query: this.intSrchQuery };
        axios.post("/member/interest/search", data).then(response => {
          //query result
          this.interestList = response.data;
          this.querying = false;
        });
      }
    }, 500)
  },
  methods: {
    setInterest: function(id) {
      if (!this.userInterests.find(item => item.interest_id == id)) {
        //rejects if it has already added
        var intName = this.interestList.find(item => item.id == id).name;
        let data = { interest_id: id };

        //update to server
        axios.put("/member/interest", data).then(response => {
          if (response.data) {
            var pid = response.data;
            var obj = { 'interest_id': id, 'iid': pid, 'name': intName };
            this.userInterests.push(obj);
          }
        });
      }
    },
    delInterest: function(id) {
      if (this.userInterests.find(item => item.iid == id)) {
        //rejects if not in the list
        let data = { id: id };

        //update to server
        axios.post("/member/interest/del", data).then(response => {
          //remove locally
          var pos = this.userInterests.findIndex(item => item.iid == id);
          this.userInterests.splice(pos, 1);
          
        });
      }
    }
  }
};
</script>

