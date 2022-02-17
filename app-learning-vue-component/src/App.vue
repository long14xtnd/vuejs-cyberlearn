<template>
  <h1>Hello World</h1>
  <FirstComponent></FirstComponent>
  <FirstComponent />
  <first-component></first-component>
  <first-component />
  <SecondComponent></SecondComponent>
  <ProductList />
</template>

<script>
import ProductList from "./components/ProductList.vue";
import SecondComponent from "./components/SecondComponent.vue";
import FirstComponent from "./components/FirstComponent.vue";
export default {
  name: "App",
  components: {
    FirstComponent,
    SecondComponent,
    ProductList,
  },
  provide() {
    return {
      user: "Trong tất cả những cái thằng tán em ấy thì anh là thằng đẹp zaii nhất và hoàng tử chỉ có anh thôi",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
