<template>
  <div id="app">
    <app-menu-view />
    <router-view/>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App', 
  components: {
    'app-main-view': Main, 
    'app-menu-view': Menu,  
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
}
</style>
