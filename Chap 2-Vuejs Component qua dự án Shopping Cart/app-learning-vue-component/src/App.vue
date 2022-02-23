<template>
  <h1>Hello World</h1>
  <FirstComponent></FirstComponent>
  <FirstComponent />
  <first-component></first-component>
  <first-component />
  <SecondComponent></SecondComponent>
  <ProductList />
  <hr />
  <br />
  <br />
  <DemoSlots>
    <template v-slot:default>
      <p>
        Anh nói em lày trong tất cả những cái thằng tán em ấy thì anh là thằng
        đẹp trai nhất và hoàng tử chỉ có anh thôi em hiểu chưa nhỉ còn em biết
        cái tịnh cảm anh dành cho em nó lớn lao như rồi í rì
      </p>
    </template>

    <template #header>
      <h1>Header</h1>
    </template>
    <template #one>
      <p>Section one</p>
    </template>
    <template #two>
      <p>Section two</p>
    </template>
    <template #footer>
      <h1>Footer</h1>
    </template>
  </DemoSlots>
  <hr />
  <br />
  <br />
  

  <DemoDynamic />
</template>

<script>
import ProductList from "./components/ProductList.vue";
import SecondComponent from "./components/SecondComponent.vue";
import FirstComponent from "./components/FirstComponent.vue";
import DemoSlots from "./components/DemoSlots.vue";
import DemoDynamic from "./components/DemoDynamic.vue";
export default {
  name: "App",
  components: {
    FirstComponent,
    SecondComponent,
    ProductList,
    DemoSlots,
    DemoDynamic
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
