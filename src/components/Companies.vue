<template>
	<div class="companies">
		<!-- The left nvaigation bar that display a list of companies --> 
		<div class="left-navbar">
			<h3> Companies </h3>
			<div v-on:click="renderCompanyView(company)" 
				  class="company-name" 
				  v-for="company in companies" 
				  :key="company">
				{{company}}
			</div>
		</div>
		<!-- The main view that display the company's profile and picture -->  
		<div class="company-view">
			<div class="content">
				<div class="content-image">
					<img v-bind:src="current_logo" @error="imageLoadError" /> 
				</div>
				<div class="content-description">
					<h1> {{current_company}} </h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

/** Import AirTable component */
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyMe1oF4ZaD5ACJA'
});
var base = Airtable.base('appDHoS6dAv53FsW5');
let companies_value = []; 

base('Table 1').select({
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
		if (!companies_value.includes(record.get('Name'))){
			companies_value.push(record.get('Name'));
		}
    });
	fetchNextPage();
}, function done(err) {
    if (err) { console.error(err); return; }
});

/* Company component */ 
export default {
  name: 'Companies',
  methods: {
	  /** Render the main view with company data nd logo */
	  renderCompanyView: function(company){
		  if (company.toLowerCase().includes('drexel')){
				this.$data.current_logo = `https://logo.clearbit.com/drexel.com`;  
		  } else {
				this.$data.current_company = company; 
				let company_nowhitespace = company.replace(/\s/g, ''); 
				this.$data.current_logo = `https://logo.clearbit.com/${company_nowhitespace}.com`; 
		  }
	  }, 

	  /** Handle if image doesn't render here */
	  imageLoadError: function(){
		this.$data.current_logo = 'https://paailajob.com/uploads/employer/profileImg/default.jpg'; 
	  }
  }, 
  data () {
    return {
	  /* The list of companies from Drexel co-op*/ 
	  companies: companies_value,  
	  /* The current company being displayed on the page */   
	  current_company: 'Amazon',
	  current_logo: 'https://logo.clearbit.com/amazon.com'
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
	padding-bottom: 2em; 
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


	<!-- <table>
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
				</table> -->