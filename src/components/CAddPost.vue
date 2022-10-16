<template>
  <c-form :form-name="'Add post'"></c-form>
</template>

<script>
import CForm from "./CForm.vue";
import {store} from "../store";
export default {
  name: "CAddPost",
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