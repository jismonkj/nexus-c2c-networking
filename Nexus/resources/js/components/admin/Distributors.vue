<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <table class="table table-striped">
        <thead>
          <th>Distributor Name</th>
          <th>Head Quarters</th>
          <th>Email</th>
          <th>Contact</th>
        </thead>
        <tbody>
          <tr v-for="user in users" v-bind:key="user.id">
            <td>{{ user.distrib_name }}</td>
            <td>{{ user.headq }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.contact }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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
      postData:{ type: 'distrib'},
    };
  }
};
</script>
