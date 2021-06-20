<template>
  <c-form :form-name="'Add photo'"></c-form>
</template>

<script>
import CForm from "./CForm.vue";
import {store} from "../store";
export default {
  components: {CForm},
  beforeRouteEnter(to , from , next){
    if (!store.state.user){
      store.state.routeFrom = to.name
      next('/test/login')
    }else {
      next()
    }
  }
}
</script>

<style scoped>

</style>