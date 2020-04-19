<template>
    <div id="mainview">
      <h1>Salary Sharing for Drexel Co-op</h1>
      <p> <b>Disclaimer: </b> This is a user-generated list, not moderated by Drexel University beyond merging duplicate entries. </p>
      <iframe class="airtable-embed" src="https://airtable.com/embed/shrGrb3WKB2nUoCyt?backgroundColor=teal&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>
      <md-button class="btn-position"></md-button>
    </div>
</template>

<script>
import Button from '../shared/Button.vue' 

export default {
  name: 'Main',
  components: {
    'md-button': Button, 
  }, 
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#mainview{
  padding-left: 10em; 
  padding-right: 10em; 
  height: 500px; 
}

.btn-position{
  margin-top: 2em; 
}

</style>
