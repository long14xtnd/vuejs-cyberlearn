<template>
  <button
    class="btn btn-primary"
    @click="handleSetSelectedComponent('DangChieu')"
  >
    Đang chiếu
  </button>
  <button
    class="btn btn-danger"
    @click="handleSetSelectedComponent('SapChieu')"
  >
    Sắp chiếu
  </button>

  <!-- <div v-if="selectedComponent === 'Đang Chiếu'"><DangChieu />  |</div>
  <div v-if="selectedComponent === 'Sắp Chiếu'"> <SapChieu /> </div> -->

  <div>
    <h3>Kỹ thuật Dynamic Component trong vue</h3>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import DangChieu from "./DangChieu.vue";
import SapChieu from "./SapChieu.vue";
export default {
  data() {
    return {
      selectedComponent: "DangChieu",
    };
  },
  methods: {
    handleSetSelectedComponent(com) {
      this.selectedComponent = com;
    },
  },

  components: {
    DangChieu,
    SapChieu,
  },
};
</script>

<style>
</style>