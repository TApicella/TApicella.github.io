var manage_controllers = {  
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
				   		};

var rid_admin_form = {
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
		   		 		};

var skills = [
				{
					title: "Web Development",
					subskills: [
					{
						text: "Helped develop a web-based report submission application with a focus on administrative interfaces",
				 		images:[manage_controllers, rid_admin_form],
				 		link:"https://github.com/metridoc/metridoc-grails"
					},
					{
						text: "Helped develop a web-based report submission application with a focus on administrative interfaces",
				 		images:[manage_controllers, rid_admin_form],
				 		link:"https://github.com/metridoc/metridoc-grails"
					}]
				}, 
				{
				  	title: "Web Development",
					subskills: [
					{
						text: "Helped develop a web-based report submission application with a focus on administrative interfaces",
				 		images:[manage_controllers, rid_admin_form],
				 		link:"https://github.com/metridoc/metridoc-grails"
					}]
				 }];

module.exports = skills