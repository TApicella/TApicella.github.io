var React = require('react');
var ReactDOM = require('react-dom');
var Experience = require('./experience.js');
var workExperience= require('../data/work_experience_data.js');
var otherExperience= require('../data/other_experience_data.js');
var education= require('../data/education_data.js');

var Experiences = React.createClass({

render: function(){
	var exp_map = {"work" : workExperience, "other" : otherExperience, "education" : education};
	var exp = exp_map[this.props.category];
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

	var exp_components = [];
	for (var i = 0; i < exp.length; i++) {
   		exp_components.push(<Experience details={exp[i]}/>);
	}
	return(

		<div className="section">
			{sidebar}
			<div className="section-header">{header}</div>
			{exp_components}
			<br/><br/>

		</div>
	);
}

});
module.exports = Experiences

