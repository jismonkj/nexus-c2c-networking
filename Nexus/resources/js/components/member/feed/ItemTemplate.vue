<template>
  <div>
    <div class="pl-5">
      <b class="pl-4">{{ item.city_name }}</b>
      <span v-if="item.state_name">, {{ item.state_name }}</span>
      <span v-if="item.country_name">, {{ item.country_name}}</span>
    </div>

    <abbr></abbr>
  </div>
</template>

<script>
export default {
  props: {
    item: { required: true },
    searchText: { required: true }
  }
};
</script>