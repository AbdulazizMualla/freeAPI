<template>
  <div class="row mt-5 " v-if="posts.data">
    <div class="col-12 mb-3 border border-1 p-0" v-for="posts in posts.data">
      <div class="post-author">
        <span ><c-image  :src="posts.user.profile &&  posts.user.profile.file_url !== '' ? posts.user.profile.file_url : undefined" :styl="'img-fluid rounded-circle border mx-auto'"/></span> <br><span class="text-primary"> {{posts.user.name}}</span>
      </div>
      <div class="post">
        <h2>{{posts.post_title}} <span style="font-size: 20px">: {{posts.created_at}}</span></h2>
        <p>{{posts.post_body}}</p>
        <c-button :type="'click'" :styl="'btn btn-primary m-1'" :html="'reply'"></c-button>
        <c-button :type="'click'" :styl="'btn btn-danger m-1'" :html="'delete'"></c-button>
        <c-button :type="'click'" :styl="'btn btn-info m-1'" :html="'edit'"></c-button>

        <div class="p-3 m-2 border border-1 " v-for="comment in posts.comments">
          <div class="comment-author">
            <span ><c-image :src="comment.user.profile &&  comment.user.profile.file_url !== ''? comment.user.profile.file_url : undefined" :styl="'img-fluid rounded-circle border mx-auto'"/></span> <br><span  class="text-primary"> {{comment.user.name}}</span>
            <p>{{comment.comment_body}}</p>
          </div>
        </div>

      </div>

    </div>
    <div class="py-5" v-if="posts.meta.to !== posts.meta.total && posts.meta.to !== null">
      <c-button :type="'click'" :styl="'btn btn-success'" :html="'Brows more'" @click="getResult"></c-button>
    </div>
  </div>
</template>

<script>
import CImage from "./CImage.vue";
import CButton from "./CButton.vue";
export default {
  name: "CPostTemp",
  components: {CButton, CImage},
  props : {
    posts: {required:true,type:Object}
  },

  methods: {
    async getResult(){
      if (this.posts.meta.to !== this.posts.meta.total){
        let res = await fetch(this.posts.links.next , {
          method: 'GET',
          headers:{
            'Accept': 'application/json',
            'Authorization':  this.$store.state.access_token,
          }
        })

        let result = await res.json();
        result.data.forEach(x => {
          this.posts.data.push(x)
        })

        this.posts.links = result.links
        this.posts.meta = result.meta
      }


    }
  }

}
</script>

<style scoped>
.post-author{
  float: right;
  padding: 30px;

}
.post {
  padding: 30px;
}
</style>