<template>
  <div class="card">
    <div :class="`card-header ${showPhotoHeader}`">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    showPhotoHeader: {
      type: String
    },
    data(){
      return {

      }
    }
  }
}
</script>
<style scoped>
.showPhotoHeader{
  color: white;
  background-color: #555555;
}
</style>