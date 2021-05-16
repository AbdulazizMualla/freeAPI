<template>
  <div class="m-3" id="test">
    <div class="row" >
      <div class="col-lg-2 border mt-2 sidebar js-fullheight" >
        <div class="">
          <h3><u>User</u></h3>
            <div  v-for="item in routesUser">

              <router-link :to="item.route" class="nav-link text-secondary" >
                <i :class="item.icon" aria-hidden="true"></i>
                 <span class="p-1">{{item.name}}</span>
              </router-link>
            </div>
        </div>
        <div>
          <h3><u>Photos</u></h3>
          <div  v-for="item in routesPhoto">
            <router-link :to="item.route" class="nav-link text-secondary" >
              <i :class="item.icon" aria-hidden="true"></i>
              <span class="p-1">{{item.name}}</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-10" >
        <div>
          <h2>Introduction:</h2>
          <p class="text-secondary">Here you can choose one of the items in the menu on the left of the page and learn how to send data using JavaScript programming language and communicate with the server through the API for the purpose of learning.
            You can also create an application and link to this API to have your application users log into
            your application and save their photos or take notes.</p>
          <div class="container">
            <router-view/>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
<script>

export default {

  data(){
    return {
      routesUser: [
        {
          name: 'register',
          route: '/test/register',
          icon: 'fa fa-user-plus'
        },
        {
          name: 'login',
          route: '/test/login',
          icon: 'fa fa-sign-in-alt'
        },
        {
          name: 'profile',
          route: '/test/profile',
          icon: 'fa fa-info-circle'
        }
      ],
      routesPhoto: [
        {
          name:'photos',
          route: '/test/photos',
          icon: 'fa fa-images'
        },
        {
          name:'add photos',
          route: '/test/add-photo',
          icon: 'fa fa-cloud-upload-alt'
        },
        {
          name: 'my photos',
          route: '/test/my-photo',
          icon: 'fa fa-images'
        }
        ,
        {
          name: 'trash',
          route: '/test/trash',
          icon: 'fa fa-trash-alt'
        }
      ],

    }
  },


  mounted() {
    let fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height() - 100);

        $(window).resize(function(){

          $('.js-fullheight').css('height', $(window).height() - 100);

        });

      };
      fullHeight();
  },


}
</script>

<style scoped>
#test{
  direction: ltr;
}
.sidebar {
  height: 100%;
  padding: 5px;
  background: #FFFAF0;
}
</style>