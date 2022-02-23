<template>
  <h1>SecondComponent</h1>
  <p>{{ msg }}</p>
  <LocalComponent />
</template>

<script>
import LocalComponent from "./LocalComponent.vue";
export default {
  data() {
    return {
      msg: "đoàn hải long đã tạo ra component thứ 2",
    };
  },
  components: {
    LocalComponent,
  },
};
</script>

<style>
</style>