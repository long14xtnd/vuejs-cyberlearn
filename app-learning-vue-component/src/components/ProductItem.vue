<template>
  <div class="card text-left">
    <img class="card-img-top" :src="proItem.urlImage" alt="" />
    <div class="card-body">
      <h4 class="card-title">{{ proItem.nameProduct }}</h4>
      <button class="btn btn-primary" @click="handleDetail(proItem)">
        Detail
      </button>
    </div>
    <p>{{ user }}</p>
  </div>
</template>

<script>
export default {
  inject: ["user"],
  methods: {
    handleDetail(proItem) {
      // console.log(proItem);
      this.$emit("custom-handle-detail", proItem);
    },
  },
  props: {
    urlImage: String,
    nameProduct: String,
    proItem: {
      type: Object,
      required: true,
    },
    multiple: {
      type: [String, Number],
      required: false,
      default: 100,
      validator(value) {
        if (value.length > 3) {
          return true;
        } else {
          return false;
        }
      },
    },
  },
};
</script>

<style>
</style>
