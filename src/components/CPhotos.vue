<template>
<c-form :form-name="'Get photos'" @getValue="getValue($event)"/>

  <div class="row mt-5" v-if="photos.data">
    <div class="py-5" v-if="photos.meta.to !== photos.meta.total">
      <c-button :type="'click'" :styl="'btn btn-success'" :html="'Brows more'" @click="getResult"></c-button>
    </div>

    <div class="col-12 col-md-4 mb-3" v-for="photo in photos.data">
      <c-card show-photo-header="showPhotoHeader">
        <template v-slot:header>
        <span><c-image :src="photo.user.profile.file_url" :styl="'img-fluid rounded-circle border mx-auto'"/></span> <span> {{photo.user.name}}</span>
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
import CCard from "./CCard.vue";
import CImage from "./CImage.vue";
import CForm from "./CForm.vue";
import CButton from "./CButton.vue";
export default {
  components: {CButton, CForm, CImage, CCard},

  data(){
    return {
      photos: [],
    }
  },


  methods:{
     getValue(result){
        this.photos = result
     },
     async getResult(){
       if (this.photos.meta.to !== this.photos.meta.total){
         let res = await fetch(this.photos.links.next , {
           method: 'GET',
         })

         let result = await res.json();
         result.data.forEach(x => {
           this.photos.data.push(x)
         })

         this.photos.links = result.links
         this.photos.meta = result.meta
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