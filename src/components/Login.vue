<template>
    <div v-if="alertLogin.message" id="al">
      <c-alert :message="alertLogin.message" :styl="alertLogin.styl"/>
    </div>
    <c-form :form-name="'login'"></c-form>
</template>
<script>
import CForm from "./CForm.vue";
import CAlert from "./CAlert.vue";
import {store} from "../store.js";
export default {
  components: {CAlert, CForm},
  beforeRouteLeave(to , from , next){
    if (!store.state.user){
      if (to.name === 'profile' || to.name === 'add-photo' || to.name === 'my-photo' || to.name === 'trash'){
        this.runAlert(to.name)
      }
    }
    next()
  },
  data(){
    return {
      alertLogin: {}
    }
  },

  mounted() {
    const name = this.$store.state.routeFrom;
    if (name === 'profile' || name === 'add-photo' || name === 'my-photo' || name === 'trash' ){
      this.runAlert(name)
    }
  },
  methods:{
    runAlert(name){
      this.alertLogin = {
        styl:'alert alert-warning alert-dismissible fade show',
        message: 'You need login first before moving to '+name+' page'
      }
      setTimeout(() => {
        const elm = document.getElementById('al');
        elm.style.visibility = 'hidden';
        elm.style.opacity = '0';
        elm.style.transition = 'visibility 0s 2s, opacity 2s linear'
        setTimeout(()=>{this.alertLogin = {}
          this.$store.state.routeFrom = ''},2000)
      }, 2000)
    }
  }
}
</script>

<style scoped></style>