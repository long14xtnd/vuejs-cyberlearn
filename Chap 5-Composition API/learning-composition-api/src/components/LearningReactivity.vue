<template>
  <div class="card text-left mt-2">
    <div class="card-body text-center">
      <h4 class="card-title">{{ user.name }}</h4>
      <p class="card-text">{{ user.age }}</p>
    </div>
  </div>
</template>

<script>
import { ref, reactive, isRef } from "@vue/reactivity";
export default {
  /**
   * Để sử dụng được composition API ta dùng setup,nó sẽ chứa data,methods,watch,computed
   * Cái hay ở đây là giúp cho việc đọc code dễ dàng hơn,thay vì phải chia ra thằng data chứa dữ liệu,thằng created để tính toán thay đổi thì h đây ra khai báo nó trong cùng một thằng setup
   *
   */


  setup() {
    let userName = ref("Đoàn Hải Long"); //ref ở đây chính là tham chiếu dữ liệu,ví dụ ta có 1 cốc nc và 1 cốc copy của nó,ta đổ đầy nc vào cốc gốc thì cốc copy nó cũng đầy theo
    // console.log(username)
    let userAge = ref(21);

    let user = reactive({
      name: "Đoàn Hải Long",
      age: 22,
    });
    setTimeout(() => {
      userName.value = "Đoàn Hải Ngãi";
      userAge.value = 25;
      user.name = "Nguyễn Nhật Minh";
      user.age = 28;

      console.log(isRef(userName.value));
    }, 2000);
    return { userName, userAge, user }; //return ở đây để cho template có thể lấy được dữ liệu và sử dụng interpolation
  },
  // data() {
  //     return {
  //         username : "Đoàn Hải Long"
  //     }
  // },
  // created(){
  //     setTimeout(() =>{
  //         this.username="Đoàn Minh Hải"
  //     },2000)
  // }
};
</script>

<style>
</style>