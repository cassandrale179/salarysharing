<template>
    <div class="companies">
        <div class="left-navbar">
            <h3> Companies </h3>
            <div class="company-name" v-for="company in companies" :key="company">
                {{company}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Companies',
  data () {
    return {
      companies: ["Amazon", "BookBub", "Bristol Myers Squibb", "Google", "Facebook", "Amazon", "Microsoft", "Princeton Plasma Physics Lab", 
      "Amazon", "BookBub", "Bristol Myers Squibb", "Google", "Facebook", "Amazon", "Microsoft", "Princeton Plasma Physics Lab",
      "Amazon", "BookBub", "Bristol Myers Squibb", "Google", "Facebook", "Amazon", "Microsoft", "Princeton Plasma Physics Lab"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.left-navbar{
    border-right: 1px rgba(0,0,0,0.1) solid;
    position: fixed;
    height: 100%;
    width: 20%; 
    top: 0px;
    left: 0px; 
    scroll-behavior: smooth;
    overflow: auto;
     
}

.companies h3{
    text-align: left;
    padding-left: 1em;
}

.company-name{
    text-align: left; 
    padding-top: 0.5em; 
    padding-bottom: 0.5em; 
    padding-left: 1.2em;
    color: rgba(40, 55, 71,0.5); 

}

.company-name:hover{
    background: rgba(242, 243, 244, 0.5); 
    color: rgba(0,0,0,0.7); 
}







</style>
