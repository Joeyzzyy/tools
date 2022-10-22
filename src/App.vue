<template>
  <div id="app">
    <InstallLinkGenerator msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import InstallLinkGenerator from './components/InstallLinkGenerator.vue'

export default {
  name: 'App',
  components: {
    InstallLinkGenerator
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
