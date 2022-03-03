<template>
  <div class="user-item">
    <h3>{{ user.name }}</h3>
    <a href="">
      <img :src="user.avatar" class="img-thumbnail" alt="" />
    </a>
    <div class="type-pet">
      <span
        v-for="(type, index) in user.typePets"
        :key="index"
        class="badge badge-secondary ml-2"
        >{{ type }}</span
      >
    </div>
    <button class="btn btn-info" @click="handleClickDetailUser">Detail</button>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
  methods: {
    handleClickDetailUser() {
      //đây là cách sử dụng do vue nó tạo ra,ta truyền id của user lên url rồi từ đó lấy ra được dữ liệu của user detail
      this.$router.push({
        name: "user-detail",
        params: {
          userID: this.user.id,
        },
      });
    },
  },
  
};
</script>

<style>
.user-item {
  max-width: 500px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 22px;
}
</style>