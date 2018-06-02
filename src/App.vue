<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p v-text="age"></p>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data (){
    return {
      age:'<a>This year is 18 old</a>'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
