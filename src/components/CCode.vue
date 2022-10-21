<template>
  <div class="row justify-content-center" v-if="res !== null" style="display: block">
    <div class="col-md-12">
        <pre class='code code-css '>
      <label> Response</label>
      <code >
        <span style="max-width: 500px">{{res}}</span>
      </code>
    </pre>
    </div>
  </div>
  <div class="row justify-content-center">

    <div class="col-md-12">
      <c-req-pre :comment_body="comment_body" :post_title="post.post_title" :post_body="post.post_body" :form-name="formName" :_method="post._method" :name="user_input.name" :email="user_input.email" :password="user_input.password" :password_confirmation="user_input.password_confirmation" :url_request="url_request" :description="user_input.description" :title="user_input.title"/>
    </div>
  </div>

</template>

<script>
import CSpan from "./CSpan.vue";
import CReqPre from "./CReqPre.vue";
export default {
  components: {CReqPre, CSpan},
  props:{
    user_input:{type:Object},
    post:{type:Object},
    res: {type:Object},
    url_request: {type:String},
    formName: {type:String},
    comment_body: {type:String}
  },
}
</script>
<style scoped>
pre {
  background: #333;
  white-space: pre;
  word-wrap: break-word;
  overflow: auto;
}

pre.code {
  margin: 20px 25px;
  border-radius: 4px;
  border: 1px solid #292929;
  position: relative;
}

pre.code label {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 13px;
  color: #ddd;
  position: absolute;
  left: 1px;
  top: 15px;
  text-align: center;
  width: 60px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: none;
}

pre.code code {
  font-family: "Inconsolata","Monaco","Consolas","Andale Mono","Bitstream Vera Sans Mono","Courier New",Courier,monospace;
  display: block;
  margin: 0 0 0 60px;
  /*padding: 15px 16px 14px;*/
  border-left: 1px solid #555;
  overflow-x: auto;
  font-size: 13px;
  line-height: 19px;
  color: #ddd;
  max-height: 600px;
}

/*pre::after {
  content: "Copy";
  padding: 0;
  width: auto;
  height: auto;
  position: absolute;
  right: 18px;
  top: 14px;
  font-size: 12px;
  color: #ddd;
  line-height: 20px;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  transition: all 0.3s ease;
}*/

pre:hover::after {
  opacity: 0;
  visibility: visible;
}

.js-function{
  color: #f08d49;
}
.js-punctuation{
  color: #ccc;
}
.js-string{
  color: #7ec699;
}
.js-key{
  color: #8868b9;
}
.js-method{
  color: #F3D568FF;
}
</style>