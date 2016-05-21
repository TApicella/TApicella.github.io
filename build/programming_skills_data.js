var manage_controllers = {
	name: "manage_controllers",
	controls: [{
		text: "HTML/GSP: ",
		type: "link",
		url: "https://github.com/metridoc/metridoc-grails/blob/master/metridoc-grails-core/grails-app/views/manageReport/_manageReportIndex.gsp"
	}, {
		text: "Javascript: ",
		type: "link",
		url: "https://github.com/metridoc/metridoc-grails/blob/master/metridoc-grails-core/web-app/manageReport/js/manageReport.js"
	}]
};

var rid_admin_form = {
	name: "rid_admin_form",
	controls: [{
		text: "Groovy: ",
		type: "link",
		url: "https://github.com/metridoc/metridoc-grails/blob/master/metridoc-grails-rid/grails-app/controllers/metridoc/rid/RidAdminBaseController.groovy"
	}, {
		text: "HTML/GSP: ",
		type: "link",
		url: "https://github.com/metridoc/metridoc-grails/blob/master/metridoc-grails-rid/grails-app/views/ridAdminBase/_baseListWithLibUnit.gsp"
	}]
};

var skills = [{
	title: "Python",
	subskills: [{
		text: "Preferred programming language for all scripting and personal projects"
	}, {
		text: "Experienced with web I/O and browser libraries for scripting, accessing data via APIs, and scraping web pages"
	}, {
		text: "Familiar with using Python to read and write to Excel files"
	}, {
		text: "Used TKinter to create personal file management application "
	}]
}, {
	title: "Web Development",
	subskills: [{
		text: "Helped develop a web-based report submission application with a focus on administrative interfaces",
		images: [manage_controllers, rid_admin_form],
		link: "https://github.com/metridoc/metridoc-grails"
	}, {
		text: "Proficient with basic MVC web application development in Grails and associated skillsets, including HTML, CSS, and JS"
	}, {
		text: "Basic experience with database management in MySQL"
	}]
}, {
	title: "Javascript",
	subskills: [{
		text: "Designed an improved interactive resume using React.js"
	}, {
		text: "Previously made a partial interactive resume using JQuery"
	}, {
		text: "Used Javascript and JQuery to generate user friendly customizable data tables and statistical details from database queries"
	}, {
		text: "Currently building a small personal application in Node.js using Express, Handlebars, React, and Mongoose "
	}]
}, {
	title: "Java",
	subskills: [{
		text: "Moderate skill with creating software using Swing-based GUI"
	}, {
		text: "Experienced in using Apache POI to work with Excel files"
	}]
}, {
	title: "Bash",
	subskills: [{
		text: "Comfortable using basic UNIX commands to view, sort, move, append, and perform simple I/O on files, and writing simple scripts"
	}]
}];

module.exports = skills;