<template>
  <h1 class="text-center text-primary">Pet List</h1>
  <div class="container">
    <div class="row pet-list">
      <div class="col-md-4" v-for="(pet,index) in petList" :key="index">
        <pet-item :pet="pet"></pet-item>
      </div>
    </div>
  </div>
</template>

<script>
import PetItem from "../components/PetItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("pets");
export default {
  components: { PetItem },
  computed: {
    ...mapState({
      petList: (state) => state.petList,
    }),
  },
};
</script>

<style>
</style>