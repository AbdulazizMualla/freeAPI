<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="item in navbar_item_left">
              <router-link :to="item.route" class="nav-link">
                <i :class="`fa fa-${item.icon}`"></i>
                {{$t(item.name)}}
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" @click="changeLocale('ar' , 'rtl')" v-if="getLocale === 'en'">عربي</a>
              <a class="nav-link" @click="changeLocale('en' , 'ltr')"  v-if="getLocale === 'ar'">English</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>

export default {
  data(){
    return {

      navbar_item_left: [
        {
          name: 'Home',
          route: '/',
          icon: 'home'
        },
        {
          name: 'Documentations',
          route: '/doc',
          icon: 'file'
        },
        {
          name: 'Test online',
          route: '/test',
          icon: 'wave-square'
        },

      ],
    }
  },
  computed:{
    getLocale(){
      return this.$i18n.locale
    }
  },
  methods:{
    changeLocale(locale , dir){
        localStorage.setItem('locale' , locale)
      localStorage.setItem('dir' , dir)
        document.getElementsByTagName('html')[0].setAttribute('dir' , dir)
        this.$i18n.locale = locale
    }
  }
}
</script>
<style scoped>
router-link{
cursor: pointer;

}
.navbar{
  background-color: white!important;
}
.nav-link{
  color: #3498db!important;
}
</style>