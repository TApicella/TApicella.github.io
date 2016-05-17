var React = require('react');
var ReactDOM = require('react-dom');
var SubSkill = require('./programming_subskill.js');

var ProgrammingSkill = React.createClass({
	displayName: 'ProgrammingSkill',


	render: function () {
		var header = this.props.skillHeader;
		var subskills = this.props.subskills;
		var subskill_components = [];

		for (var i = 0; i < subskills.length; i++) {
			subskill_components.push(React.createElement(SubSkill, { content: subskills[i].text, imgs: subskills[i].images, link: subskills[i].link }));
		}
		return React.createElement(
			'div',
			null,
			React.createElement(
				'span',
				{ className: 'skill-title' },
				header
			),
			subskill_components,
			React.createElement('br', null),
			React.createElement('br', null)
		);
	}

});
module.exports = ProgrammingSkill;