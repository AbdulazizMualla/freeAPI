<template>
<pre class='code code-css '>
<label>Request</label>
<code>
  <div v-if="formName === 'Profile' || formName === 'Add photo' || formName === 'Add post'">
    <span class="js-comment" v-if="formName === 'Profile'">// form id = profile</span><span class="js-comment" v-if="formName === 'Add photo'">// form id = add-photo</span><span class="js-comment" v-if="formName === 'Add post'">// form id = add_post</span>
    <span class="js-comment" v-if="name">// input type="text" name="name" value="{{name}}"</span>
    <span class="js-comment" v-if="email">// input type="email" name="email" value="{{email}}"</span>
    <span class="js-comment" v-if="title">// input type="text" name="title" value="{{title}}"</span>
     <span class="js-comment" v-if="post_title">// input type="text" name="post_title" value="{{post_title}}"</span>
    <span class="js-comment" v-if="description">// input type="text" name="description" value="{{description}}"</span>
     <span class="js-comment" v-if="post_body">// textarea name="post_body" value="{{post_body}}"</span>
    <span class="js-comment" v-if="formName === 'Profile' || formName === 'Add photo'">// input type="file" name="file"</span>

     <span class="js-function">let <span class="js-punctuation">form</span><span class="js-punctuation"> = </span><span class="js-key">document</span><span class="js-punctuation">.</span><span class="js-method">getElementById</span><span class="js-punctuation">(</span><span class="js-string">'form id'</span><span class="js-punctuation">)</span>
     <span class="js-function">let </span><span class="js-punctuation">formData</span><span class="js-punctuation"> = </span><span class="js-function">new </span><span class="js-key">FormData</span><span class="js-punctuation">(</span><span class="js-punctuation">form</span><span class="js-punctuation">)</span>
     </span>
     <span class="js-function">fetch<span class="js-punctuation">(</span><span class="js-string">'{{url_request}}'</span><span class="js-function">,</span> <span class="js-punctuation"> {</span>
           <span class="js-key">method<span class="js-punctuation">:</span> <span class="js-string">'POST'</span><span class="js-function">,</span></span>
           <span class="js-key">headers <span class="js-punctuation">:</span><span class="js-punctuation"> {</span></span>
                     <span class="js-string">'Accept' <span class="js-punctuation">:</span><span class="js-string">'application/json'</span><span class="js-function">,</span></span>
                     <span class="js-string">'Authorization' <span class="js-punctuation">:</span><span class="js-string">"{{access_token}}" </span><span class="js-function">,</span></span>
                     <span class="js-punctuation">}</span>
           <span class="js-key">body <span class="js-punctuation">:</span> <span class="js-punctuation">formData</span><span class="js-function">,</span></span>
         <span class="js-punctuation">}<span class="js-punctuation">)</span></span>
  </span>
  </div>
  <div v-else-if="formName === 'Get photos' || formName === 'Get posts'">
    <span class="js-function">fetch<span class="js-punctuation">(</span><span class="js-string">'{{url_request}}'</span><span class="js-function">,</span> <span class="js-punctuation"> {</span><span class="js-key">method<span class="js-punctuation">:</span> <span class="js-string">'GET'</span> <span class="js-punctuation">}<span class="js-punctuation">)</span></span></span></span>
  </div>
  <div v-else-if="formName === 'My photos' || formName === 'Deleted photo' || formName === 'My posts' || formName === 'Deleted posts'">
    <span class="js-function">fetch<span class="js-punctuation">(</span><span class="js-string">'{{url_request}}'</span><span class="js-function">,</span> <span class="js-punctuation"> {</span>
            <span class="js-key">method<span class="js-punctuation">:</span> <span class="js-string">'GET'</span>
            <span class="js-key">headers <span class="js-punctuation">:</span><span class="js-punctuation"> {</span></span>
                      <span class="js-string">'Authorization' <span class="js-punctuation">:</span><span class="js-string">{{access_token}} </span><span class="js-function">,</span></span>
                     <span class="js-punctuation">}</span>
        <span class="js-punctuation">}<span class="js-punctuation">)</span></span></span></span>
  </div>
  <div v-else>
   <span class="js-function">let <c-span :styl="'js-punctuation'" :html="'data '"/><c-span :styl="'js-punctuation'" :html="'= '"/> <c-span :styl="'js-punctuation'" :html="'{'"/><c-span v-if="name" :styl="'js-key'" :html="'name'"/><span class="js-punctuation" v-if="name">:</span><span class="js-string" v-if="name">'{{name}}'</span><span class="js-function" v-if="name && email">, </span><span class="js-key" v-if="email">email</span><span class="js-punctuation" v-if="email">:</span><span class="js-string" v-if="email">'{{email}}'</span><span class="js-function" v-if="email && password">, </span><span class="js-key" v-if="password">password</span><span class="js-punctuation"  v-if="password">:</span><span class="js-string"  v-if="password">'{{password}}'</span><span class="js-function"  v-if="password && password_confirmation">, </span><span class="js-key"  v-if="password_confirmation">password_confirmation</span><span class="js-punctuation" v-if="password_confirmation">:</span><span class="js-string" v-if="password_confirmation">'{{password_confirmation}}'</span><span class="js-key"  v-if="description">description</span><span class="js-punctuation" v-if="description">:</span><span class="js-string" v-if="description">'{{description}}'</span><span class="js-punctuation">}</span>
   <span class="js-function">let</span><span class="js-punctuation"> json </span><span class="js-punctuation">= </span> <span class="js-key">JSON</span><span class="js-punctuation">.</span><span class="js-method">stringify</span><span class="js-punctuation">(data)</span>
   </span>
   <span class="js-function">fetch<span class="js-punctuation">(</span><span class="js-string">'{{url_request}}'</span><span class="js-function">,</span> <span class="js-punctuation"> {</span>
           <span class="js-key">method<span class="js-punctuation">:</span> <span class="js-string">'POST'</span><span class="js-function">,</span></span>
           <span class="js-key">headers <span class="js-punctuation">:</span><span class="js-punctuation"> {</span></span>
                      <span class="js-string">'Accept' <span class="js-punctuation">:</span><span class="js-string">'application/json'</span><span class="js-function">,</span></span>
                      <span class="js-string">'content-type'<span class="js-punctuation">:</span><span class="js-string">'application/json'</span></span>
                     <span class="js-punctuation">}</span>
           <span class="js-key">body <span class="js-punctuation">:</span> <span class="js-punctuation">json</span><span class="js-function">,</span></span>
         <span class="js-punctuation">}<span class="js-punctuation">)</span></span>
    </span>
  </div>
</code>
</pre>
</template>

<script>
import CSpan from "./CSpan.vue";
export default {
  components:{CSpan},
  props:{
    name:{type:String},
    email:{type:String},
    password:{type:String},
    password_confirmation:{type:String},
    description: {type:String},
    post_body: {type:String},
    post_title: {type:String},
    title:{type:String},
    url_request: {type:String},
    formName: {type:String}
  },
  data(){
    return{
      access_token: this.$store.state.access_token,
    }
  }
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
.js-comment{
  color: #afabab;
}
</style>