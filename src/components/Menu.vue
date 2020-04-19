<template>
    <div class="menu">
       <img v-on:click="open()" class="icon" src="https://img.icons8.com/android/24/000000/menu.png"/> 
       <div class="menu-bar" v-if="clicked">
         <ul>
            <li> Home </li> 
            <li> Contribute </li> 
            <li> Companies </li>  
            <li> Privacy Policy </li>  
          </ul>
          <!-- <span> 
            <img class="icon-nav" src="https://img.icons8.com/material-outlined/24/000000/test.png"/> 
            <p>Contribute </p></span> -->
        </div>  
    </div>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    open : function (){
      if (this.$data.clicked == false){
        this.$data.clicked = true; 
      } else {
        this.$data.clicked = false; 
      }
      console.log(this.$data.clicked); 
    }
  }, 
  data () {
    return {
      clicked: false, 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
    position: fixed;
    top: 0; 
    right: 0; 

}
.icon{
    padding-top: 1em; 
    padding-right: 1em; 
    width: 20px; 
}
.icon-nav{
    width: 20px; 
}
li{
  text-align: left; 
  color: black; 
}
.menu-bar{
  padding: 0.2em; 
  position: fixed;
  top: 10; 
  right: 0; 
  border: 1px rgba(0,0,0,0.2) solid; 
  margin-right: 1em; 
  width: 10em;
  height: 10em; 
  text-align: left;
}

</style>
