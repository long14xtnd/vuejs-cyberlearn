<template>
  <div class="card text-left">
    <img class="card-img-top" :src="proItem.urlImage" alt="" />
    <div class="card-body">
      <h4 class="card-title">{{ proItem.nameProduct }}</h4>
    </div>
    <p>{{ multiple }}</p>
  </div>
</template>

<script>
export default {
  props: {
    urlImage: String,
    nameProduct: String,
    proItem: {
      type: Object,
      required: true,
    },
    multiple: {
      type: [String, Number],
      required: false,
      default: 100,
      validator(value) {
       if(value.length >3){
         return true
       }else{ 
         return false
       }
      }
    },
  },
};
</script>

<style>
</style>
