<template>
  <main>
    <div class="container">
      <img alt="Vue logo" src="./assets/logo.png" />
      <learning-reactivity></learning-reactivity>
      <learning-props
        image="https://kenh14cdn.com/203336854389633024/2021/2/8/photo-1-161280295473824491863.jpg"
      ></learning-props>
      <learning-methods></learning-methods>
      <learning-computed></learning-computed>
      <learning-watch></learning-watch>
      <learning-ref-template></learning-ref-template>
      <learning-provide-inject></learning-provide-inject>
    </div>
  </main>
</template>

<script>
import LearningReactivity from "./components/LearningReactivity.vue";
import LearningProps from "./components/LearningProps.vue";
import LearningMethods from "./components/LearningMethods.vue";
import LearningComputed from "./components/LearningComputed.vue";
import LearningWatch from "./components/LearningWatch.vue";
import LearningRefTemplate from "./components/LearningRefTemplate.vue";
import LearningProvideInject from "./components/LearningProvideInject.vue";
import { provide,ref } from "vue";
export default {
  name: "App",
  components: {
    LearningReactivity,
    LearningProps,
    LearningMethods,
    LearningComputed,
    LearningWatch,
    LearningRefTemplate,
    LearningProvideInject,
  },
  setup() {
    const age = ref(22)
    // provide("name", "Đoàn Hải Long"); 
    //cứ sau 5s tăng tuổi lên 1
    setInterval(()=>{
     age.value += 1
    }
    ,5000)
     provide("age", age);
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
