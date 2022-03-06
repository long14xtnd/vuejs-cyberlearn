<template>
  <div class="card text-left mt-2">
    <div class="card-body text-center">
      <h4 class="card-title">Ref Template</h4>

      <input type="text" id="age" name="age" value="20" ref="tagInput" />
   
      <p>{{ username }}</p>
      <button class="btn btn-primary" @click="handleClick">Click</button>
    </div>
  </div>
</template>

<script>
/**
 * Luồng xử lý sẽ như sau,đầu tiên nó đọc trên template trước,và thấy có thằng ref="tagInput"
 * thằng tagInput này lấy được từ setup nó đang return về,lúc đầu tagInput khởi tạo bằng null nhưng khi nó
 * được DOM rồi thì lúc này giá trị của nó chính là cái thẻ input
 */
import { ref } from "vue";
export default {
  setup() {

    const tagInput = ref(null);
    function handleClick() {
      console.log(tagInput.value.name);
      tagInput.value.focus() //mỗi lần bấm vào nút click nó auto focus vào ô input 
    }
    return { tagInput, handleClick };
  },
};
</script>

<style>
</style>