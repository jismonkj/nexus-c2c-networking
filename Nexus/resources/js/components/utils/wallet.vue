<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-dialog window-popup update-header-photo" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="title">Wallet</h5>
            <a
              href="#"
              @click.prevent="close"
              data-toggle="tooltip"
              data-placement="left"
              title="Close"
            >
              <span class="fa fa-times"></span>
            </a>
          </div>

          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="alert alert-primary h4">
                    Balance:
                    <span class="badge badge-primary">{{ walletBalance }}</span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4 offset-6">
                  <input type="number" v-model="transferAmount" class="form-control py-2" placeholder="Credit Money">
                </div>
                <div class="col-2">
                  <button class="btn btn-primary" @click="transferMoney">Transfer</button>
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
  data:function(){
    return {
      walletBalance:"",
      transferAmount:0
    };
  },
  mounted(){
    axios.get('/my/wallet').then(res => {
      this.walletBalance = res.data;
    });
  },
  methods: {
    close() {
      this.$parent.isWalletModalVisible = false;
    },
    transferMoney:function(){
      var data = {'uid':'0', 'amount':this.transferAmount, 'type':'transfer'};
      axios.post('my/wallet/credit', data).then(res => {
        if(res.data){
          this.walletBalance = res.data;
        }
      });
    }
  }
};
</script>