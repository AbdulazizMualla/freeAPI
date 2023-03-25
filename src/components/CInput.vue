<template>
  <div class="form-group">
    <label >{{title}}</label>
    <input :id="id" :type="type" :name="name" class="form-control"  :placeholder="`Enter ${placeholder}`" :value="value" @input="sendInput">
  </div>
</template>
<script>
export default {

  props:{
    name: {
      type:String,
      required:true
    },
    type:{
      type:String,
      required: true
    },
    placeholder:{
      type:String
    },
    value:{type:String},
    title:{type:String},
    id:{type:String}
  },
  methods:{
    sendInput(e){
      this.$emit('getInput' , e.target.value)
    }
  }
}
</script>
<style scoped>

</style>