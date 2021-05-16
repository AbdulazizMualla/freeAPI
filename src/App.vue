<template>
<navbar></navbar>
  <router-view/>

</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components:{Navbar},


}
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
