<template>
  <div class="row">
    <div class="col-md-4">
      <div class="panel panel-default">
        <div class="panel-heading">
          On Items
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
        <div class="panel-body timeline-container">
          <ul class="timeline">
            <li v-for="item in memberTransactions" :key="item.trid">
              <div class="timeline-badge primary">
                <em v-if="item.orderid != null" class="glyphicon glyphicon-shopping-cart" title="Order Payment"></em>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="timeline-title">
                    {{ item.dfname }} {{ item.dlname }} 
                    <em class="glyphicon glyphicon-chevron-right"></em>
                    {{ item.cfname }} {{ item.clname }}
                  </h4>
                </div>
                <div class="timeline-body">
                  <p>
                    Amount: {{ item.amount }} | Date: {{ item.created_at }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
     <div class="col-md-4">
      <div class="panel panel-default">
        <div class="panel-heading">
          Distributors
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
        <div class="panel-body timeline-container">
          <ul class="timeline">
            <li v-for="item in distribTransactions" :key="item.trid">
              <div class="timeline-badge warning">
                <em v-if="item.orderid != null" class="glyphicon glyphicon-shopping-cart" title="Order Payment"></em>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="timeline-title">
                    {{ item.dfname }} {{ item.dlname }} 
                    <em class="glyphicon glyphicon-chevron-right"></em>
                    {{ item.distrib_name }}
                  </h4>
                </div>
                <div class="timeline-body">
                  <p>
                    Amount: {{ item.amount }} | Date: {{ item.created_at }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
     <div class="col-md-4">
      <div class="panel panel-default">
        <div class="panel-heading">
          Wallet Transfers
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
        <div class="panel-body timeline-container">
          <ul class="timeline">
            <!-- credits -->
            <li v-for="item in walletTransfers" :key="item.trid">
              <div class="timeline-badge primary">
                <em class="glyphicon glyphicon-log-in" title="Credit Transfer"></em>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="timeline-title">
                    {{ item.cfname }} {{ item.clname }} 
                    <em class="glyphicon glyphicon-chevron-right"></em>
                  </h4>
                </div>
                <div class="timeline-body">
                  <p>
                    Amount: {{ item.amount }} | Date: {{ item.created_at }}
                  </p>
                </div>
              </div>
            </li>
<!-- //debits -->
             <li v-for="item in walletTransfers2" :key="item.trid">
              <div class="timeline-badge danger">
                <em class="glyphicon glyphicon-log-out" title="Debit Transfer"></em>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="timeline-title">
                    {{ item.cfname }} {{ item.clname }} 
                    <em class="glyphicon glyphicon-chevron-right"></em>
                  </h4>
                </div>
                <div class="timeline-body">
                  <p>
                    Amount: {{ item.amount }} | Date: {{ item.created_at }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  mounted(){
    axios.get('adm/transactions').then(res => {
      this.memberTransactions = res.data.member;
      this.distribTransactions = res.data.distributor;
      this.walletTransfers = res.data.transferCredits;
      this.walletTransfers2 = res.data.transferDebits;
    });
  },
  data:function(){
    return {
      memberTransactions:[],
      distribTransactions:[],
      walletTransfers:[],
      walletTransfers2:[],
    };
  }
}
</script>
