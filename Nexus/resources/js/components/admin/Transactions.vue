<template>
  <div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          Members
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
  </div>
</template>

<script>
export default{
  mounted(){
    axios.get('adm/transactions').then(res => {
      console.log(res.data);
      this.memberTransactions = res.data.member;
    });
  },
  data:function(){
    return {
      memberTransactions:[]
    };
  }
}
</script>
