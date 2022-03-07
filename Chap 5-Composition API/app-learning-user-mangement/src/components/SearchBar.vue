<template>
  <div class="form-group">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        v-model="searchName"
      />
      <div class="input-group-append">
        <button
          class="btn btn-sm btn-gradient-primary"
          type="button"
          @click="handleClickSearch(searchName)"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import  { useStore } from 'vuex'

import { ref } from "vue";
// import { createNamespacedHelpers } from "vuex";
// const { mapActions } = createNamespacedHelpers("user");

export default {
  setup() {
    const { searchName } = ref("");
    const store = useStore()
    function handleClickSearch(searchName){
      store.dispatch("user/setSearchNameAction",searchName)
    }
    return{ searchName,handleClickSearch}
  },
  // state() {
  //   return {
  //     searchName: "",
  //   };
  // },

  // methods: {
  //   // handleClickSearch() {
  //   //   // this.$store.commit("setSearchNameMutation", this.searchName);
  //   //    this.$store.dispatch("setSearchNameAction", this.searchName);
  //   // },
  //   ...mapActions({
  //     handleClickSearch: "setSearchNameAction",
  //   }),
  // },
};
</script>

<style></style>
