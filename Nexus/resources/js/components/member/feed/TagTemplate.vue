<template>
  <div>
    <div class="pl-5">
      <b class="pl-4">{{ item.name}}</b>
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