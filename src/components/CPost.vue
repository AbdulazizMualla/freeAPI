<template>
  <c-form :form-name="'Get posts'" @getValue="getValue($event)"/>
  <c-post-temp :posts="posts"/>
</template>
<script>
import CForm from "./CForm.vue";
import CPostTemp from "./CPostTemp.vue";
export default {
  components: {CPostTemp, CForm},
  data(){
    return {
      posts: []
    }
  },
  methods: {
    getValue(result){
      this.posts = result
    }
  }
}
</script>

<style scoped>
.post-author{
  float: right;
  padding: 30px;

}
.post {
  padding: 30px;
}
</style>