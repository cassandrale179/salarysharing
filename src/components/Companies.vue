<template>
	<div class="companies">
		<div class="left-navbar">
			<h3> Companies </h3>
			<div class="company-name" v-for="company in companies" :key="company">
					{{company}}
			</div>
		</div>
		<div class="company-view">
			<div class="content">
				<div class="content-image">
					<img src="https://logo.clearbit.com/amazon.com" />  
				</div>
				<div class="content-description">
					<h1> Amazon </h1>
				</div>
			</div>
			<table>
					<tr>
							<th>Position</th>
							<th>Salary/Hour</th>
							<th>Location</th>
							<th>Major</th>
							<th>Experience</th>
							<th>Co-op Found</th>
							<th>Citizenship</th>
							<th>Stipend</th>
							<th>Co-op Date</th>
					</tr>
					<tr>
							<td>Software Engineer Development</td>
							<td>50</td>
							<td>Seattle, WA</td>
							<td>Computer Science</td>
							<td>3rd co-op</td>
							<td>Outside</td>
							<td>International</td>
							<td>9,000 housing</td>
							<td>2020</td>
					</tr>
					<tr>
							<td>Software Engineer Development</td>
							<td>50</td>
							<td>Seattle, WA</td>
							<td>Computer Science</td>
							<td>3rd co-op</td>
							<td>Outside</td>
							<td>International</td>
							<td>9,000 housing</td>
							<td>2020</td>
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
    height: 100%;
    width: 20%; 
    top: 0px;
    left: 0px; 
    scroll-behavior: smooth;
		overflow: auto;
		margin-top: 50px;
		position: absolute; 
		z-index: -5;
		padding-top: 2em;
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
		border-right: 3px black solid; 
}

.company-view{
	position: absolute; 
	top: 100px;
	margin-left: 20%; 
	padding-left: 5em; 
	padding-right: 5em; 
	z-index: -5;
}

.company-view h1, h4, p{
    text-align: left; 
}

p{
    margin-top: 0px; 
}

table{
		border: 1px rgba(0,0,0,0.1) solid;
    text-align: left;
    width: 100%; 
    color: black; 
    font-size: 14px; 
}

th, td{
	padding: 0.5em;  
}

td{
	border-top: 1px rgba(0,0,0,0.1) solid;
}

.content {
    width: 100%; 
    overflow: hidden;
		height: 50px;
		display: flex;
		margin-bottom: 20px;
}

.content-image{
	height: 100%; 
	width: 50px;
}

.content img{
	width: 50px;

}

.content-description{
	margin-top: -20px;
	height: 100%; 
	padding-left: 1em; 
}


</style>
