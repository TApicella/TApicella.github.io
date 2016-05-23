var React = require('react');
var ReactDOM = require('react-dom');
var Skill = require('./skill.js');
var programmingSkills = require('../data/programming_skills_data.js');
var technicalSkills = require('../data/technical_skills_data.js');

var Skills = React.createClass({
	displayName: 'Skills',


	render: function () {
		var skills_map = { "programming": programmingSkills, "technical": technicalSkills };
		var skills = skills_map[this.props.category];
		var header = this.props.header;
		var sidebar_width = this.props.width - 1170 * 0.80; //The 0.80 comes from the fact that my bootstrap col total is 9/12 of the container width
		var sidebar_style = {
			position: 'absolute',
			top: '0px',
			right: '0px',
			height: '100%',
			backgroundColor: 'blue'
		};
		sidebar_style.width = sidebar_width;
		var sidebar = this.props.width > 1200 ? React.createElement('span', { style: sidebar_style }) : "";

		var skill_components = [];
		for (var i = 0; i < skills.length; i++) {
			skill_components.push(React.createElement(Skill, { skillHeader: skills[i].title, subskills: skills[i].subskills, sectionbreak: this.props.sectionbreak }));
		}
		return React.createElement(
			'div',
			{ className: 'section' },
			sidebar,
			React.createElement(
				'div',
				{ className: 'section-header' },
				header
			),
			skill_components,
			React.createElement('br', null),
			React.createElement('br', null)
		);
	}

});
module.exports = Skills;