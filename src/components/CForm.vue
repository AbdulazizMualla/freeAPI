<template>
  <div class="row  ">
    <div class="col-md-8 border p-4">
      <c-code :user_input="user_input" :res="res" :url_request="url_request" :form-name="formName"/>
    </div>
    <div class="col-md-4  border p-4">
      <div v-if="formName === 'Register'">
        <h4>{{formName}}</h4>
        <form id="register" @submit="register">
          <c-input :name="user_input.name" @getInput="user_input.name =$event" :type="'text'" :placeholder="'name'" :title="'Name'"/>
          <c-input :name="user_input.email" @getInput="user_input.email = $event" :type="'email'" :placeholder="'email'" :title="'Email'"/>
          <c-input :name="user_input.password" @getInput="user_input.password = $event" :type="'password'" :placeholder="'password'" :title="'Password'"/>
          <c-input :name="user_input.password_confirmation" @getInput="user_input.password_confirmation = $event" :type="'password'" :placeholder="'Password confirmation'" :title="'Password confirmation'"/>
          <router-link to="login" class="nav-link text-primary">Already registered? Log in here.</router-link>
          <c-button :type="'submit'" :styl="'btn btn-primary mt-3'" :html="'Register'"/>
        </form>
      </div>
      <div v-if="formName === 'login'">
        <h4>{{formName}}</h4>
        <form id="login" @submit="login">
          <c-input :name="user_input.email" @getInput="user_input.email = $event" :type="'email'" :placeholder="'email'" :title="'Email'"/>
          <c-input :name="user_input.password" @getInput="user_input.password = $event" :type="'password'" :placeholder="'password'" :title="'Password'"/>
          <router-link to="register" class="nav-link text-primary">You do not have an account? Register here</router-link>
          <c-button :type="'submit'" :styl="'btn btn-primary mt-3'" :html="'Login'"/>
        </form>
      </div>
      <div v-if="formName === 'Profile'">
        <h4>{{formName}}</h4>
        <form id="profile" @submit="profile">
          <c-image :src="get_image" :class="'img-fluid rounded-circle border d-block mx-auto w-25'"/>
          <c-input :id="'file'" :name="'file'" @getInput="user_input.photo = $event" :type="'file'" :title="'Add photo'" />
          <hr>
          <c-input :name="'name'" @getInput="user_input.name =$event" :type="'text'" :placeholder="'name'" :title="'Name'" :value="user_input.name"/>
          <c-input :name="'email'" @getInput="user_input.email = $event" :type="'email'" :placeholder="'email'" :title="'Email'" :value="user_input.email"/>
          <c-input :name="'description'" @getInput="user_input.description = $event" :type="'text'" :placeholder="'description'" :title="'description'" :value="user_input.description"/>
          <c-button :type="'submit'" :styl="'btn btn-primary mt-3'" :html="'Save'"/>
        </form>
      </div>
      <div v-if="formName === 'Add photo'">
        <h4>{{formName}}</h4>
        <form id="add-photo" @submit="addPhoto" enctype="multipart/form-data">
          <c-input :id="'file'" :name="'file'" :type="'file'" :title="'Add photo'" />
          <c-input :name="'title'" @getInput="user_input.title =$event" :type="'text'" :placeholder="'Title'" :title="'Title'" :value="user_input.title"/>
          <c-input :name="'description'" @getInput="user_input.description = $event" :type="'text'" :placeholder="'description'" :title="'description'" :value="user_input.description"/>
          <c-button :type="'submit'" :styl="'btn btn-primary mt-3'" :html="'Save'"/>
        </form>
      </div>
      <div v-if="formName === 'Get photos'">
        <form id="photos" @submit="getPhotos">
          <c-button :type="'submit'" :styl="'btn btn-primary mt-3'" :html="formName"/>
        </form>
      </div>
      <div v-if="formName === 'My photos'">
        <form id="my-photos" @submit="myPhotos">
          <c-button :type="'submit'" :styl="'btn btn-primary mt-3'" :html="formName"/>
        </form>
      </div>
      <div v-if="formName === 'Deleted photo'">
        <form id="deleted-photo" @submit="deletedPhoto">
          <c-button :type="'submit'" :styl="'btn btn-primary mt-3'" :html="formName"/>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import CCode from "./CCode.vue";
import CInput from "./CInput.vue";
import CButton from "./CButton.vue";
import CImage from "./CImage.vue";

let blanket = document.getElementById('blanket');
export default {

  components:{CImage, CButton, CInput, CCode},
  props:{
    formName:{type:String}
  },
  computed:{
    blanket(){
      return document.getElementById('blanket')
    },
    url_request(){
      if (this.formName === 'Register'){
        return this.$store.state.url_register;
      }else if (this.formName === 'login') {
        return this.$store.state.url_login;
      }else if (this.formName === 'Profile'){
        return this.$store.state.url_profile;
      }else if (this.formName === 'Add photo'){
        return this.$store.state.url_add_photo;
      }else if (this.formName === 'Get photos'){
        return this.$store.state.url_photos;
      }else if (this.formName === 'My photos'){
        return this.$store.state.url_my_photos;
      }else if (this.formName === 'Deleted photo'){
        return  this.$store.state.url_my_photo_deleted;
      }
    },
    get_image(){
      if (this.$store.state.user.profile && this.$store.state.user.profile.file_url){
        return this.$store.state.user.profile.file_url
      }
      return '/users/icon-user.png'
    }
  },
  data(){
    return{
      user_input: {
        name: '',
        email: '',
        password:'',
        password_confirmation:'',
        description:'',
        photo: '',
        title: ''
      },
      res: null,
    }
  },
  mounted() {
    if (this.$route.name === 'profile'){
      this.user_input.name = this.$store.state.user.name
      this.user_input.email = this.$store.state.user.email
      this.user_input.description = this.$store.state.user.profile ? this.$store.state.user.profile.description : ''
    }
  },
  methods:{
    async deletedPhoto(e){
      e.preventDefault();
      this.blanket.style.display = 'block'
      let res  = await fetch(this.$store.state.url_my_photo_deleted , {
        method: 'GET',
        headers:{
          'Authorization':  this.$store.state.access_token,
        },
      })
      this.blanket.style.display = 'none'
      let result = await res.json();
      this.res = result
      this.$emit('deletedPhoto' , result)
    },
    async myPhotos(e){
      e.preventDefault();
      this.blanket.style.display = 'block'
      let res  = await fetch(this.$store.state.url_my_photos , {
        method: 'GET',
        headers:{
          'Authorization':  this.$store.state.access_token,
        },
      })
      this.blanket.style.display = 'none'
      let result = await res.json();
      this.res = result
      this.$emit('myPhotos' , result)
    },
    async getPhotos(e){
      e.preventDefault()
      this.blanket.style.display = 'block'
      let res = await fetch(this.$store.state.url_photos , {
        method: 'GET',
      })
      this.blanket.style.display = 'none'
      let result = await res.json();
      this.res = result
      this.$emit('getValue' , result)
    },
    async addPhoto(e){
      e.preventDefault()
      let addPhoto = document.getElementById('add-photo');
      let formData = new FormData(addPhoto);
      this.blanket.style.display = 'block'
      let res = await fetch(this.$store.state.url_add_photo , {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Authorization':  this.$store.state.access_token,
        },
        body: formData
      })
      this.blanket.style.display = 'none'
      let result = await res.json();
      this.res = result;
    },
    async profile (e){
      e.preventDefault()
      let profile = document.getElementById('profile');
      let formData = new FormData(profile);
      this.blanket.style.display = 'block'
      let res = await fetch(this.$store.state.url_profile , {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Authorization':  this.$store.state.access_token,
        },
        body: formData
      })
      this.blanket.style.display = 'none'
     if (res.ok){
       let result = await res.json();
       this.res = result;
       this.$store.dispatch('updateValueToken' , result)
     }else {
       let result = await res.json();
       this.res = result;
     }
    },

    async login(e){
      let {target} = e;
      e.preventDefault()
      if (target && target.id === 'login'){
        this.blanket.style.display = 'block'
        let data = this.user_input;
        let json = JSON.stringify(data);
        let res = await fetch(this.$store.state.url_login , {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'content-type' : 'application/json'
          },
          body: json

        })
        this.blanket.style.display = 'none'
        if (res.ok){
          let result = await res.json();
          this.res = result;
          this.$store.dispatch('updateValueToken' , result)
        }else {
          let result = await res.json();
          this.res = result;
        }

      }
    },

    async register(e){
      let {target} = e;
      e.preventDefault()
      if (target && target.id === 'register'){
        this.blanket.style.display = 'block'
        let data = this.user_input;
        let json = JSON.stringify(data);
        let res = await fetch(this.$store.state.url_register , {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'content-type' : 'application/json'
          },
          body: json

        })
        this.blanket.style.display = 'none'
        if (res.ok){
          let result = await res.json();
          this.res = result
          this.$store.dispatch('updateValueToken' , result)
        }else {
          let result = await res.json();
          this.res = result
        }
      }
    }
  }
}
</script>

<style scoped>

</style>