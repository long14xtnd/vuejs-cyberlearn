<template>
  <h1 class="text-center text-success">Pet Detail</h1>
  <p>{{ $route.params.petID }}</p>
  <div class="row">
    <div class="col-md-4">
      <div class="card text-left">
        <img class="card-img-top img-thumbnail" :src="petDetail.image" alt="" />
        <div class="card-body">
          <h4 class="card-title">{{ petDetail.name }}</h4>
          <p class="card-text">{{ petDetail.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("pets");
export default {
  computed: {
    ...mapState({
      petDetail: (state) => state.petDetail,
    }),
  },
  methods: {
    ...mapActions({
      getPetID: "getPetItemByIdAction",
    }),
  },
  created() {
    this.getPetID(this.$route.params.petID);
  },
};
</script>

<style>
</style>