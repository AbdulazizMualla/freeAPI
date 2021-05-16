<template>
  <button :type="type" :class="styl">{{html}}</button>
</template>
<script>
export default {
  props:{
    type:{type: String,required:true},
    styl:{type: String,required:true},
    html:{type: String,required:true}
  }
}
</script>

<style scoped>

</style>