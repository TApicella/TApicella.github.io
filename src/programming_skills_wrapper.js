var React = require('react');
var ReactDOM = require('react-dom');
var Skill = require('./programming_skill.js');
var skillsData = require('./programming_skills_data.js');
var ProgrammingSkills = React.createClass({

render: function(){
	var skills = skillsData;
	var skillsbkp = [
					{
						title: "Web Development",
						subskills: [
				   			{
				   				text: "Helped develop a web-based report submission application with a focus on administrative interfaces",
				   		 		images:[
				   		 		{
				   		 			name: "manage_controllers", 
				   		 			controls:[
				   		 			{
				   		 				text:"HTML/GSP: ",
				   		 	    		type:"link",
				   		 	    		url: "https://github.com/metridoc/metridoc-grails/blob/master/metridoc-grails-core/grails-app/views/manageReport/_manageReportIndex.gsp"
				   		 	 		},
				   		 	 		{
				   		 	 	 		text:"Javascript: ",
				   		 	 	 		type:"link",
				   		 	 	 		url: "https://github.com/metridoc/metridoc-grails/blob/master/metridoc-grails-core/web-app/manageReport/js/manageReport.js"
				   		 	 		}]
				   		 		},
				   		 		{
				   		 			name: "rid_admin_form", 
				   		 			controls:[
				   		 			{
				   		 				text:"Groovy: ",
				   		 	     		type:"link",
				   		 	     		url: "https://github.com/metridoc/metridoc-grails/blob/master/metridoc-grails-rid/grails-app/controllers/metridoc/rid/RidAdminBaseController.groovy"
				   		 			},
				   		 			{
				   		 		 		text:"HTML/GSP: ",
				   		 	     		type:"link",
				   		 	     		url: "https://github.com/metridoc/metridoc-grails/blob/master/metridoc-grails-rid/grails-app/views/ridAdminBase/_baseListWithLibUnit.gsp"
				   		 	 		}]
				   		 		}],
				   		 		link:"https://github.com/metridoc/metridoc-grails"
				   			},
				   			{
				   				text: "Helped develop a web-based report submission application with a focus on administrative interfaces",
				   		 		images:[
				   		 		{
				   		 			name: "manage_controllers", 
				   		 			controls:[
				   		 			{
				   		 				text:"HTML/GSP: ",
				   		 	    		type:"link",
				   		 	    		url: "https://github.com/metridoc/metridoc-grails/blob/master/metridoc-grails-core/grails-app/views/manageReport/_manageReportIndex.gsp"
				   		 	 		},
				   		 	 		{
				   		 	 	 		text:"Javascript: ",
				   		 	 	 		type:"link",
				   		 	 	 		url: "https://github.com/metridoc/metridoc-grails/blob/master/metridoc-grails-core/web-app/manageReport/js/manageReport.js"
				   		 	 		}]
				   		 		},
				   		 		{
				   		 			name: "rid_admin_form", 
				   		 			controls:[
				   		 			{
				   		 				text:"Groovy: ",
				   		 	     		type:"link",
				   		 	     		url: "https://github.com/metridoc/metridoc-grails/blob/master/metridoc-grails-rid/grails-app/controllers/metridoc/rid/RidAdminBaseController.groovy"
				   		 			},
				   		 			{
				   		 		 		text:"HTML/GSP: ",
				   		 	     		type:"link",
				   		 	     		url: "https://github.com/metridoc/metridoc-grails/blob/master/metridoc-grails-rid/grails-app/views/ridAdminBase/_baseListWithLibUnit.gsp"
				   		 	 		}]
				   		 		}],
				   		 		link:"https://github.com/metridoc/metridoc-grails"
				   			}
						]
				  }, 
				  {
				  	title: "Web Development",
						subskills: [
				   			{
				   				text: "Helped develop a web-based report submission application with a focus on administrative interfaces",
				   		 		images:[
				   		 		{
				   		 			name: "manage_controllers", 
				   		 			controls:[
				   		 			{
				   		 				text:"HTML/GSP: ",
				   		 	    		type:"link",
				   		 	    		url: "https://github.com/metridoc/metridoc-grails/blob/master/metridoc-grails-core/grails-app/views/manageReport/_manageReportIndex.gsp"
				   		 	 		},
				   		 	 		{
				   		 	 	 		text:"Javascript: ",
				   		 	 	 		type:"link",
				   		 	 	 		url: "https://github.com/metridoc/metridoc-grails/blob/master/metridoc-grails-core/web-app/manageReport/js/manageReport.js"
				   		 	 		}]
				   		 		},
				   		 		{
				   		 			name: "rid_admin_form", 
				   		 			controls:[
				   		 			{
				   		 				text:"Groovy: ",
				   		 	     		type:"link",
				   		 	     		url: "https://github.com/metridoc/metridoc-grails/blob/master/metridoc-grails-rid/grails-app/controllers/metridoc/rid/RidAdminBaseController.groovy"
				   		 			},
				   		 			{
				   		 		 		text:"HTML/GSP: ",
				   		 	     		type:"link",
				   		 	     		url: "https://github.com/metridoc/metridoc-grails/blob/master/metridoc-grails-rid/grails-app/views/ridAdminBase/_baseListWithLibUnit.gsp"
				   		 	 		}]
				   		 		}],
				   		 		link:"https://github.com/metridoc/metridoc-grails"
				   			}
				   		]
				   	}
				  ];
	var skill_components = [];
	for (var i = 0; i < skills.length; i++) {
   		skill_components.push(<Skill skillHeader={skills[i].title} subskills={skills[i].subskills}/>);
	}
	return(

		<div>
			<div className="section-header">Programming and Software Development</div>
			{skill_components}
			<br/><br/>

		</div>
	);
}

});
module.exports = ProgrammingSkills