var React = require('react');
var ReactDOM = require('react-dom');
var Skill = require('./programming_skill.js');
var skillsData = require('./programming_skills_data.js');
var ProgrammingSkills = React.createClass({
	displayName: 'ProgrammingSkills',


	render: function () {
		var skills = skillsData;

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
				'Programming and Software Development'
			),
			skill_components,
			React.createElement('br', null),
			React.createElement('br', null)
		);
	}

});
module.exports = ProgrammingSkills;