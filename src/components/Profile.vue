<template>
  <c-form :form-name="'Profile'"></c-form>
</template>

<script>
import CForm from "./CForm.vue";
import {store} from "../store.js";

export default {
  components: {CForm},

  beforeRouteEnter(to , from , next){

    if (!store.state.user.id){
      alert('You need login first')
      next('/test/login')
    }else {
      next()
    }
  }

}

</script>

<style scoped>

</style>