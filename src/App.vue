<template>
  <div id="app">
    <div id="menu" class="card">
      <app-menu-view />
    </div>
    <div id="main">
      <router-view />
    </div>
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

#main{
  margin-top: 80px;
}

#menu{
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background: rgba(23, 32, 42, 1); 
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}


</style>
