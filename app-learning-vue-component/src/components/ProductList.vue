<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3" v-for="(productItem,index) in proList" :key="index">
        <ProductItem  :proItem="productItem"/>
      </div>
      <!-- <div class="col-md-3">
        <ProductItem />
      </div>
      <div class="col-md-3">
        <ProductItem />
      </div>
      <div class="col-md-3">
        <ProductItem />
      </div> -->
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  data() {
    return {
      proList: [
        {
          urlImage:
            "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1285796573.jpeg",
          nameProduct: "Xiaomi 11T Pro 5G",
        },
        {
          urlImage:
            "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1118768515.jpeg",
          nameProduct: "Xiaomi 11 Lite 5G NE 8/128GB (phiên bản Swarovski) ",
        },
        {
          urlImage:
            "https://cdn1.viettelstore.vn/Images/Product/ProductImage/876530269.jpeg",
          nameProduct: "Xiaomi Redmi 9A 2/32GB ",
        },
        {
          urlImage:
            "https://cdn1.viettelstore.vn/Images/Product/ProductImage/521339146.jpeg",
          nameProduct: "Xiaomi 11 Lite 5G NE 8/128GB",
        },
      ],
    };
  },
  components: {
    ProductItem,
  },
};
</script>

<style>
</style>