<template>
  <span :class="styl">{{html}}</span>
</template>
<script>
export default {
  props:{
    styl:{type:String,required:true},
    html:{type:String,required:true}
  },
}
</script>
<style scoped>
.js-function{
  color: #f08d49;
}
.js-punctuation{
  color: #ccc;
}
.js-string{
  color: #7ec699;
}
.js-key{
  color: #8868b9;
}
.js-method{
  color: #F3D568FF;
}
</style>