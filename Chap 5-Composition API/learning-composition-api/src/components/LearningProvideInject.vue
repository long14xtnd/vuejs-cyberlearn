<template>
  <div class="card text-left mt-2">
    <div class="card-body text-center">
      <h4 class="card-title">Provide Inject</h4>
      <p>{{ name }}--{{ age }}</p>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const name = inject("name","Đoàn Minh Hải"); //chỗ này nếu như provide ko có giá trị thì ta cho nó giá trị mặc định là Đoàn Minh Hải
     const age = inject("age")
    return { name, age };
  },
};
</script>

<style>
</style>