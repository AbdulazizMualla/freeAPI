<template>
  <img :src="src" :class="styl" class="imageShowPhoto" alt="">
</template>
<script>
export default {

  props:{
    src:{type:String},
    styl:{type:String}
  },
}
</script>
<style scoped>
.imageShowPhoto{
  width: 50px;
}
</style>