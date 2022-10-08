<template>
  <img :src="src" :class="styl" class="imageShowPhoto" alt="N/A">
</template>
<script>
export default {
  props:{
    src:{type:String, default:'/users/icon-user.png'},
    styl:{type:String}
  },
}
</script>
<style scoped>
.imageShowPhoto{
  width: 50px;
}
</style>