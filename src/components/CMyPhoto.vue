<template>
    <c-form :form-name="'My photos'" @myPhotos="myPhoto($event)"/>
  <div class="row mt-5" v-if="myPhotos.user">
    <div class="alert alert-success" v-if="message">{{message}}</div>
    <div class="col-12 col-md-4 mb-3" v-for="photo in myPhotos.user.photos">

      <c-card show-photo-header="showPhotoHeader">
        <template v-slot:header class="justify-content-between">

            <span><c-image :src="myPhotos.user.profile.file_url" :styl="'img-fluid rounded-circle border mx-auto'"/></span> <span> {{myPhotos.user.name}}</span><span class="float-md-end"><i @click="deleteItem(photo.id)" class="fa fa-trash"></i></span>
        </template>
        <template v-slot:body>


          <div class="thumbnail"  :style="{backgroundImage: `url(${photo.photo_url})`}">

          </div>
          <div>{{photo.title}}</div>
        </template>
        <template v-slot:footer>
          <div>{{photo.description}}</div>
        </template>
      </c-card>
    </div>

  </div>

</template>

<script>
import {store} from "../store";
import CImage from "./CImage.vue";
import CCard from "./CCard.vue";
import CForm from "./CForm.vue";

export default {
  components: {CCard, CImage , CForm},
  beforeRouteEnter(to , from , next){
    if (!store.state.user){
      alert('You need login first')
      next('/test/login')
    }else {
      next()
    }
  },
  data(){
    return {
      myPhotos: [],
      message: ''
    }
  },

  methods:{
    showMessage(msg){
      this.message = msg;
      setTimeout( () => {
        this.message = '';
      }, 5000 )

    },
    removePhotoOnPage(photoId){
      let photoIndex = this.myPhotos.user.photos.findIndex( elm => {
        return elm.id === photoId;
      })
      this.myPhotos.user.photos.splice(photoIndex , 1)
    },
    myPhoto(result){
      this.myPhotos = result
    },
    async deleteItem(photoId){
      let res = await fetch(this.$store.state.url_my_photo_delete+photoId , {
        method: 'DELETE',
        headers:{
          'Accept': 'application/json',
          'Authorization':  this.$store.state.access_token,
        },
      })
      if (res.ok){
        let result = await res.json()
        this.removePhotoOnPage(photoId)
        this.showMessage(result.message);
      }else {
        console.log(res)
      }
    }
  }
}
</script>
<style scoped>
.thumbnail{
  height: 200px;
  background-size: cover;
  background-position: center center;

}
</style>