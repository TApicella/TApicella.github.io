var React = require('react');
var ReactDOM = require('react-dom');
var Skill = require('./skill.js');
var programmingSkills = require('./programming_skills_data.js');
var technicalSkills = require('./technical_skills_data.js');

var Skills = React.createClass({
	displayName: 'Skills',


	render: function () {
		var skills_map = { "programming": programmingSkills, "technical": technicalSkills };
		var skills = skills_map[this.props.category];
		var header = this.props.header;

		var skill_components = [];
		for (var i = 0; i < skills.length; i++) {
			skill_components.push(React.createElement(Skill, { skillHeader: skills[i].title, subskills: skills[i].subskills }));
		}
		return React.createElement(
			'div',
			null,
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