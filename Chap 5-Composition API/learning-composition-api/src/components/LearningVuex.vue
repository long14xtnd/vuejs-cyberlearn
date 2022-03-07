<template>
  <div class="card text-left mt-2">
    <div class="card-body text-center">
      <h4 class="card-title">VueX</h4>
      <p class="badge badge-secondary">Count :{{ count }}</p>
      <div>
        <button class="btn btn-danger" @click="incrementCount">
          Increment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    function incrementCount() {
      store.dispatch("incrementAction");
    }
    return {
      count,
      incrementCount,
    };
  },
};
</script>

<style>
</style>