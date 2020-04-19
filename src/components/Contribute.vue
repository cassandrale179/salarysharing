<template>
  
    <div class="contribute">
        <!-- <h1> Contribute </h1> -->
        <!-- <div id="form">
            <p class="header"> Company name: </p>
            <input />
            <p class="header"> Salary / Hour: </p>
            <p class="subheader"> If your position is unpaid, please write 0. </p>
            <input />

        </div> -->
        
       <iframe class="airtable-embed" src="https://airtable.com/embed/shrOOQTlhmGmDJDmn?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="833" style="background: transparent; border: 0px solid #ccc;"></iframe> 
    </div>
    

</template>

<script>
export default {
  name: 'Contribute',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contribute{
    padding-left: 20em; 
    padding-right: 20em; 
    padding-bottom: 10em; 
}
#form{
    background: rgba(229, 231, 233, 0.2); 
    text-align: left; 
    padding-top: 3em; 
    padding-left: 7em; 
    padding-right: 7em; 
    padding-bottom: 3em; 
    
}

input{
    height: 30px; 
    width: 100%; 
    border: 2px solid rgba(229, 231, 233, 0.8); 
    /* border: none;  */
}

.header{
    font-size: 20px; 
}



</style>
