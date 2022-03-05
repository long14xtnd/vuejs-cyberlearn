<template>
  <div class="card text-left mt-2">
    <div class="card-body text-center">
      <h4 class="card-title">Computed</h4>
      <div class="form-group">
        <label>First Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="first name"
          
          v-model="firstName"
        />
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="last name"
        
          v-model="lastName"
        />
      </div>
      <p class="badge badge-secondary">Họ và tên : {{ fullName }}</p>
    </div>
  </div>
</template>

<script>
import { ref,computed } from "vue"; //muốn sử dụng dược computed trong composition api thì phải khai báo 
export default {
  setup() {
      //đầu tiên ta tạo ra 2 biến là firstName và lastName có giá trị rỗng 
    const firstName = ref("");
    const lastName = ref("");
    //tiếp theo ta dùng @input là một thuộc tính đặc biệt của vue để bắt được sự kiện ng dùng nhập
    //sau đó lưu giá trị ng dùng nhập vào firstName và lastName 
    function setFirstName(event) {
      firstName.value = event.target.value; //đầu ti
      //  console.log(firstName)
      console.log(event.target.value);
    }
    function setLastName(event) {
      lastName.value = event.target.value;
      console.log("setLastName");
    }
    //chỗ này để lấy ra được fullName thì cần tạo ra một cái computed 
    //cái computed hay ở chỗ nó chỉ thực hiện tính toán lại khi mà thằng firstName hoặc lastName thay đổi dữ liệu làm cho việc tối ưu trang web trở nên hiệu quả hơn
    const fullName = computed(() => lastName.value + " " + firstName.value);
    return { setFirstName, setLastName, firstName, lastName, fullName };
  },
};
</script>

<style>
</style>