var React = require('react');
var ReactDOM = require('react-dom');
var Skill = require('./skill.js');
var programmingSkills= require('./programming_skills_data.js');
var technicalSkills= require('./technical_skills_data.js');

var Skills = React.createClass({

render: function(){
	var skills_map = {"programming" : programmingSkills, "technical" : technicalSkills};
	var skills = skills_map[this.props.category];
	var header = this.props.header;
	
	var skill_components = [];
	for (var i = 0; i < skills.length; i++) {
   		skill_components.push(<Skill skillHeader={skills[i].title} subskills={skills[i].subskills} sectionbreak={this.props.sectionbreak}/>);
	}
	return(

		<div>
			<div className="section-header">{header}</div>
			{skill_components}
			<br/><br/>

		</div>
	);
}

});
module.exports = Skills

