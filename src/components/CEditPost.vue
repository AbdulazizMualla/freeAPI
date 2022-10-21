<template>
  <c-form :form-name="'Edit post'" :post_edit="post"></c-form>
</template>

<script>
import CForm from "./CForm.vue";
import {store} from "../store";
export default {
  name: "CEditPost",
  beforeRouteEnter(to , from , next){
    if (!store.state.user || store.state.edit_post === null){
      store.state.routeFrom = to.name
      next('/test/login')
    }else {
      next()
    }
  },
  components: {CForm},
  data(){
    return {
      post:[]
    }
  },
  created() {
    this.post = this.$store.state.edit_post
  }
}
</script>

<style scoped>

</style>