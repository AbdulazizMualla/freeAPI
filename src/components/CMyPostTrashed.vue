<template>
  <c-form :form-name="'Deleted posts'" @deletedPost="deletedPost($event)"/>
  <c-post-temp :posts="posts" @deletedPost="deletedPost($event)"/>
</template>

<script>
import CForm from "./CForm.vue";
import CPostTemp from "./CPostTemp.vue";
export default {
  components: {CPostTemp, CForm},
  data() {
    return {
      posts : []
    }
  },
  methods:{
    deletedPost(result){
      this.posts = result
    },
  }
}
</script>

<style scoped>

</style>