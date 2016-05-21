var React = require('react');
var ReactDOM = require('react-dom');
var Experience = require('./experience.js');
var workExperience = require('./work_experience_data.js');
var otherExperience = require('./other_experience_data.js');
var education = require('./education_data.js');

var Experiences = React.createClass({
	displayName: 'Experiences',


	render: function () {
		var exp_map = { "work": workExperience, "other": otherExperience, "education": education };
		var exp = exp_map[this.props.category];
		var header = this.props.header;

		var exp_components = [];
		for (var i = 0; i < exp.length; i++) {
			exp_components.push(React.createElement(Experience, { details: exp[i] }));
		}
		return React.createElement(
			'div',
			null,
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