<template>
  <div class="card text-left mt-2">
    <div class="card-body text-center">
      <h4 class="card-title">Props</h4>
      <img :src="image" alt="" class="img-thumbnail" />
    </div>
  </div>
</template>

<script>
import { toRefs } from '@vue/reactivity';
export default {
  props: {
    image: {
      type: Object,
    },
  },
  setup(props) {
    /**
     * khi mà nhận dữ liệu từ component cha,component sẽ dùng props và khai báo nó trong thằng setup để sử dụng
     * 
     */
    const img = toRefs(props) //chỗ này bóc tách props
    console.log(img);
  },
};
</script>

<style>
</style>