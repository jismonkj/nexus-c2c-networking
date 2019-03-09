<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <table class="table table-striped">
        <thead>
          <th>Name</th>
          <th>City</th>
          <th>Email</th>
        </thead>
        <tbody>
          <tr v-for="user in users" v-bind:key="user.id">
            <td>{{ user.fname+" "+user.lname }}</td>
            <td>{{ user.city_name }}</td>
            <td>{{ user.email }}</td>
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
      postData:{ type: 'members'},
    };
  }
};
</script>
