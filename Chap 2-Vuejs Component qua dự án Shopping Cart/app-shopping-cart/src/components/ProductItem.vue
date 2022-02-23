<template>
  <div class="card text-left mt-3 text-center">
    <img class="card-img-top" :src="productItem.image" alt="" />
    <div class="card-body">
      <h4 class="card-title">{{ productItem.name }}</h4>
      <p class="card-text text-danger font-weight-bold">
        {{ productItem.price }} ₫
      </p>
    </div>
    <div class="text-center mb-3">
      <button class="btn btn-danger ml-2" @click="handleBuy(productItem)">
        Mua
      </button>
      <button class="btn btn-primary ml-2" @click="hanldeOpenModalDetail">
        Chi tiết
      </button>
    </div>
  </div>
  <teleport to="#app">
    <app-modal
      :isOpen="isOpenModalDetail"
      :handleCloseModal="handleCloseModalDetail"
    >
      <product-detail :productDetail="productItem"></product-detail>
    </app-modal>
  </teleport>
</template>

<script>
import ProductDetail from "./ProductDetail.vue";
export default {
  components: { ProductDetail },
  data() {
    return {
      isOpenModalDetail: false,
    };
  },
  props: {
    productItem: {
      type: Object,
    },
  },
  methods: {
    handleBuy(productItem) {
      console.log(productItem);
      this.$emit("handle-buy", productItem);
    },
    hanldeOpenModalDetail() {
      this.isOpenModalDetail = true;
    },
    handleCloseModalDetail() {
      this.isOpenModalDetail = false;
    },
  },
};
</script>

<style>
</style>