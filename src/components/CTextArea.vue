<template>
  <div class="form-group">
    <label :for="name">{{title}}</label>
    <textarea :id="id" :name="name" class="form-control" v-model="value"  @input="sendInput"></textarea>

  </div>
</template>
<script>
export default {

  props:{
    name: {
      type:String,
      required:true
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