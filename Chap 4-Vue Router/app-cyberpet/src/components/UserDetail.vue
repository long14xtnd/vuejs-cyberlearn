<template>
  <h1>User Detai</h1>
  <!-- get param userID từ url xuống bằng cách $route.params.userID -->
  <p>{{ $route.params.userID }}</p>
  <div class="row">
    <div class="col-md-5">
      <img :src="userDetail.avatar" class="img-thumbnail" alt="" />
    </div>
    <div class="col-md-7">
      <p class="badge bg-secondary"> {{ userDetail.email }}</p>
      <p class="badge bg-secondary" v-for="(pet, index) in userDetail.typePets" :key="index">{{ pet }}</p>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("users");
export default {
  computed: {
    ...mapState({
      userDetail: (state) => state.userDetail,
    }),
  },
  methods: {
    ...mapActions({
      getUserById: "getUserByIdAction",
    }),
  },
  created() {
    console.log(this.$route.params.userID);
    this.getUserById(this.$route.params.userID);
  },
  mounted() {
    console.log(this.userDetail);
  },
};
</script>

<style>
</style>