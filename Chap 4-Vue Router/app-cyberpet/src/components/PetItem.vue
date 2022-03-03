<template>
  <div class="card text-left" style="width : 18rem;">
    <img class="card-img-top" :src="pet.image" alt="">
    <div class="card-body">
      <h4 class="card-title">{{pet.name}}</h4>
      <span class="badge badge-secondary">{{pet.type}}</span>
      <p class="card-text">{{ pet.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
props: {
    pet:{
        type:Object,
    }
}
}
</script>

<style>

</style>