<template>
  <c-form :form-name="'My posts'" @getValue="getValue($event)"/>
  <c-post-temp :posts="posts" @getValue="getValue($event)"/>
</template>

<script>
import CForm from "./CForm.vue";
import CPostTemp from "./CPostTemp.vue";
export default {
  name: "CMyPost",
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