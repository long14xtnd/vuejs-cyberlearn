<template>
  <div class="card text-left mt-3 text-center">
    <img
      class="card-img-top"
      :src="productItem.image"
      alt=""
    />
    <div class="card-body">
      <h4 class="card-title">{{ productItem.name }}</h4>
      <p class="card-text text-danger font-weight-bold">
        {{ productItem.price }} ₫
      </p>
    </div>
    <div class="text-center mb-3">
      <button class="btn btn-danger ml-2" @click="handleBuy(productItem)">Mua</button>
      <button class="btn btn-primary ml-2">Chi tiết</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productItem: {
      type: Object,
    },
  },
  methods: {
    handleBuy(productItem){
      console.log(productItem);
      this.$emit("handle-buy",productItem);
    }
  }
};
</script>

<style>
</style>