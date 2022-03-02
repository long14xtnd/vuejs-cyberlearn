<template>
  <header>
    <the-header></the-header>
  </header>
  <main>
    <!-- chỗ này phải dùng <router-view></router-view> vì bây giờ view sẽ hiển thị dựa theo url của chúng ta chứ ko phải gọi từng thằng component ra nữa-->
    <router-view></router-view>
  </main>
  <footer></footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
</style>
