<template>
  
    <div class="menu">
       <!-- <img class="icon" src="https://img.icons8.com/android/24/000000/menu.png"/>  -->
    </div>
    

</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      msg: ''
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

</style>
