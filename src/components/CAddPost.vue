<template>
  <c-form :form-name="'Add post'"></c-form>
</template>

<script>
import CForm from "./CForm.vue";
export default {
  name: "CAddPost",
  components: {CForm},
  mounted() {
    console.log()
  }
}
</script>

<style scoped>

</style>