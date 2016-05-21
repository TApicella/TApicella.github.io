var React = require('react');
var ReactDOM = require('react-dom');
var Experience = require('./experience.js');
var workExperience= require('./work_experience_data.js');
var otherExperience= require('./other_experience_data.js');
var education= require('./education_data.js');

var Experiences = React.createClass({

render: function(){
	var exp_map = {"work" : workExperience, "other" : otherExperience, "education" : education};
	var exp = exp_map[this.props.category];
	var header = this.props.header;
	
	var exp_components = [];
	for (var i = 0; i < exp.length; i++) {
   		exp_components.push(<Experience details={exp[i]}/>);
	}
	return(

		<div>
			<div className="section-header">{header}</div>
			{exp_components}
			<br/><br/>

		</div>
	);
}

});
module.exports = Experiences

