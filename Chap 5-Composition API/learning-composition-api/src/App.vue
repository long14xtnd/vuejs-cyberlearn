<template>
  <main>
    <div class="container">
      <img alt="Vue logo" src="./assets/logo.png" />
      <learning-reactivity></learning-reactivity>
      <learning-props image="https://kenh14cdn.com/203336854389633024/2021/2/8/photo-1-161280295473824491863.jpg"></learning-props>
      <learning-methods></learning-methods>
      <learning-computed></learning-computed>
      <learning-watch></learning-watch>
    </div>
  </main>
</template>

<script>
import LearningReactivity from "./components/LearningReactivity.vue";
import LearningProps from "./components/LearningProps.vue";
import LearningMethods from "./components/LearningMethods.vue";
import LearningComputed from "./components/LearningComputed.vue";
import LearningWatch from "./components/LearningWatch.vue";
export default {
  name: "App",
  components: {
    LearningReactivity,
    LearningProps,
    LearningMethods,
    LearningComputed,
    LearningWatch
  },
  data() {
    return {
      url: "https://kenh14cdn.com/203336854389633024/2021/2/8/photo-1-161280295473824491863.jpg",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
