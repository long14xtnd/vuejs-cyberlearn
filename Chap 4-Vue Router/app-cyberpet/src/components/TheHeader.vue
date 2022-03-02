<template>
  <nav class="p-3 mb-2 bg-dark text-white">
      <ul class="d-flex justify-content-center align-items-center">
          <li>
              <!-- chỗ này nếu dùng thẻ a href thì khi chuyển giữa các trang sẽ bị load lại nên ta phải sử dụng router-link để khi chuyển giữa các trang ko bị load  -->
              <router-link to="/users" class="mx-3">User</router-link>
          </li>
          <li>
              <router-link to="/pets"  class="mx-3">Pet</router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
ul{
    list-style: none;
   
}
a{
    display: block;
    padding:5px 15px;
    color:unset;
     text-decoration: none;
}
a:hover{
     text-decoration: none;
    color: #00FF33;
    
}
.active{
    color: #00FF33;
    border-bottom: 2px solid #00FF33;
}
</style>