var React = require('react');
var ReactDOM = require('react-dom');
var Skill = require('./skill.js');
var programmingSkills= require('../data/programming_skills_data.js');
var technicalSkills= require('../data/technical_skills_data.js');

var Skills = React.createClass({

render: function(){
	var skills_map = {"programming" : programmingSkills, "technical" : technicalSkills};
	var skills = skills_map[this.props.category];
	var header = this.props.header;
	var sidebar_width = this.props.width - (1170*0.80); //The 0.80 comes from the fact that my bootstrap col total is 9/12 of the container width
	var sidebar_style = {
		position: 'absolute',
		top: '0px',
		right: '0px',
		height: '100%',
		backgroundColor: 'blue'
	};
	sidebar_style.width = sidebar_width;
	var sidebar = this.props.width > 1200 ? <span style={sidebar_style}></span> : "";

	var skill_components = [];
	for (var i = 0; i < skills.length; i++) {
   		skill_components.push(<Skill skillHeader={skills[i].title} subskills={skills[i].subskills} sectionbreak={this.props.sectionbreak}/>);
	}
	return(

		<div className="section">
        	{sidebar}
			<div className="section-header">{header}</div>
			{skill_components}
			<br/><br/>

		</div>
	);
}

});
module.exports = Skills

