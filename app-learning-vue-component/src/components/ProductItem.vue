<template>
  <div class="card text-left">
    <img class="card-img-top" :src="proItem.urlImage" alt="" />
    <div class="card-body">
      <h4 class="card-title">{{ proItem.nameProduct }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    urlImage: String,
    nameProduct: String,
    proItem: Object,
  },
};
</script>

<style>
</style>
