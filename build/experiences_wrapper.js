var React = require('react');
var ReactDOM = require('react-dom');
var Experience = require('./experience.js');
var workExperience = require('../data/work_experience_data.js');
var otherExperience = require('../data/other_experience_data.js');
var education = require('../data/education_data.js');

var Experiences = React.createClass({
	displayName: 'Experiences',


	render: function () {
		var exp_map = { "work": workExperience, "other": otherExperience, "education": education };
		var exp = exp_map[this.props.category];
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

		var exp_components = [];
		for (var i = 0; i < exp.length; i++) {
			exp_components.push(React.createElement(Experience, { details: exp[i] }));
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
			exp_components,
			React.createElement('br', null),
			React.createElement('br', null)
		);
	}

});
module.exports = Experiences;