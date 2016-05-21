var React = require('react');
var ReactDOM = require('react-dom');
var Skill = require('./programming_skill.js');
var skillsData = require('./programming_skills_data.js');
var ProgrammingSkills = React.createClass({

render: function(){
	var skills = skillsData;
	
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