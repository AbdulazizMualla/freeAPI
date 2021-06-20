<template>
  <div :class="styl">
    <strong><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Attention: </strong>{{message}}
  </div>
</template>
<script>
export default {
  props:{
    message:{
      type:String,
      required:true
    },
    styl: {
      required: true,
      type:String
    }
  }
}
</script>

<style scoped>

</style>