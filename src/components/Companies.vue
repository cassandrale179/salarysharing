<template>
    <div class="companies">
        <div class="left-navbar">
            <h3> Companies </h3>
            <div class="company-name" v-for="company in companies" :key="company">
                {{company}}
            </div>
        </div>
        <div class="company-view">
            <h1> Amazon </h1>
            <table>
                <tr>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>Location</th>
                    <th>Major</th>
                    <th>Experience</th>
                    <th>Co-op Found</th>
                    <th>Citizenship</th>
                    <th>Extra notes</th>
                    <th>Co-op Date</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
                </table>
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

.company-view{
    margin-left: 20%; 
    padding-left: 5em; 
    padding-right: 5em; 
}

.company-view h1, h4, p{
    text-align: left; 
}

p{
    margin-top: 0px; 
}



table{
    text-align: left;
    border: 1px rgba(0,0,0,0.1) solid;
    width: 100%; 
    padding: 0.5em; 
    color: black; 
}



/* .card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
} 

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}  */








</style>
