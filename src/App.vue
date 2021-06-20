<template>
<navbar></navbar>
  <router-view/>

</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components:{Navbar},
  data(){
    return {
      result : {
        user: JSON.parse(localStorage.getItem('user')),
        access_token:localStorage.getItem('token')
      }
    }
  },
  created() {
    if (localStorage.getItem('user') && localStorage.getItem('token')){
      this.$store.dispatch('updateValueToken' , this.result)
    }
  }

}
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
