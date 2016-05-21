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
				  	title: "Database interaction",
					subskills: [
					{
						text: "MySQL Workstation, SquirrelSQL, some Oracle and MSSQL experience"
					}]
				},
				{
					title: "Code deployment",
					subskills: [
					{
				 		text: "Jenkins, Git/Subversion, some use of Divshot, Codeship, Firebase"
				 	}]
				}, 
				{
				  	title: "Visual design",
					subskills: [
					{
				 		text: "Adobe Photoshop, primarily used for photo editing and touchups"
				 	}]
				 },
				 {
				  	title: "Software development",
					subskills: [
					{
						text: "Sublime, Eclipse, IntelliJ, basic familiarity with Vim"
					}]
				 },
				 {
				  	title: "Office tools",
					subskills: [
					{
						text: "MS Word, Powerpoint, Google collaboration suite"
					}]
				 },
				 {
				  	title: "Data analysis",
					subskills: [
					{
						text: "Origin, Mathematica, Excel"
					}]
				 },
				 {
				  	title: "Operating systems",
					subskills: [
					{
						text: "Windows, OSX, Ubuntu and Mint Linux"
					}]
				 }];

module.exports = skills