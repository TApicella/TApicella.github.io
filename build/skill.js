var React = require('react');
var ReactDOM = require('react-dom');
var SubSkill = require('./subskill.js');
var ReactBootstrap = require('react-bootstrap');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Skill = React.createClass({
	displayName: 'Skill',


	render: function () {
		var header = this.props.skillHeader;
		var subskills = this.props.subskills;
		var subskill_components = [];
		var first_subskill;
		var sectionbreak = this.props.sectionbreak ? React.createElement('br', null) : "";

		for (var i = 0; i < subskills.length; i++) {
			if (i === 0) {
				first_subskill = React.createElement(SubSkill, { content: subskills[i].text, imgs: subskills[i].images, link: subskills[i].link });
			} else {
				subskill_components.push(React.createElement(
					Row,
					{ className: 'show-grid' },
					React.createElement(Col, { md: 3, lg: 3 }),
					React.createElement(
						Col,
						{ md: 9, lg: 6 },
						React.createElement(SubSkill, { content: subskills[i].text, imgs: subskills[i].images, link: subskills[i].link })
					)
				));
			}
		}
		return React.createElement(
			Grid,
			null,
			React.createElement(
				Row,
				{ className: 'show-grid' },
				React.createElement(
					Col,
					{ md: 3, lg: 3 },
					React.createElement(
						'span',
						{ className: 'skill-title' },
						header
					)
				),
				React.createElement(
					Col,
					{ md: 9, lg: 6 },
					first_subskill
				)
			),
			subskill_components,
			sectionbreak
		);
	}

});
module.exports = Skill;