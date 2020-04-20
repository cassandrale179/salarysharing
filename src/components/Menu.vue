<template>
  <div class="horizontal-menu">
    <div class="navigaton">
      <div class="navigation-link"> Contribute </div>
      <div class="navigation-link"> Companies </div>
      <div class="navigation-link"> Home </div>
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

.horizontal-menu{
  height: 40px;
  padding-top: 1em; 
  padding-right: 2em; 
}

.navigation-link{
  display: inline-block;
  color: white; 
  float: right; 
  margin-left: 2em; 
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7); 
}

.navigation-link:hover{
  color: rgba(255, 255, 255, 1); 
  border-bottom: 3px rgba(255, 255, 255, 1) solid; 
  height: 40px;
}

</style>


