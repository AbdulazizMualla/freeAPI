<template>
  <c-form :form-name="'My posts'" @getValue="getValue($event)"/>
  <c-post-temp :posts="posts" @getValue="getValue($event)"/>
</template>

<script>
import CForm from "./CForm.vue";
import CPostTemp from "./CPostTemp.vue";
import {store} from "../store";
export default {
  name: "CMyPost",
  beforeRouteEnter(to , from , next){
    if (!store.state.user){
      store.state.routeFrom = to.name
      next('/test/login')
    }else {
      next()
    }
  },
  components: {CPostTemp, CForm},
  data() {
    return {
      posts : []
    }
  },
  methods:{
    getValue(result){
      this.posts = result
    },
  }
}
</script>

<style scoped>

</style>