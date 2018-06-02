<template>
  <div class="vue_home">
      <p>{{msg}}</p>
      <button @click="emitMyEvent">emit</button>
  </div>
</template>

<script>
export default {
  name:'Home',
  data (){
      return {
          msg:'我的类名用class声明，我是一段纯文字。。。'
      }
  },
  methods:{
      emitMyEvent (){
          this.$emit('myEvent',this.msg)
      }
  }
}
</script>
<style scoped>
.vue_home>p{
    color:green;
}
</style>

