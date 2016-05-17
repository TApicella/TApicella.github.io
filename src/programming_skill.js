var React = require('react');
var ReactDOM = require('react-dom');
var SubSkill = require('./programming_subskill.js')

var ProgrammingSkill = React.createClass({

render: function(){
	var header = this.props.skillHeader;
	var subskills = this.props.subskills;
	var subskill_components = [];


	for (var i = 0; i < subskills.length; i++) {
   		subskill_components.push(<SubSkill content={subskills[i].text} imgs={subskills[i].images} link={subskills[i].link}/>);
	}
	return(
		<div>
			<span className="skill-title">{header}</span>
			{subskill_components}
			<br/><br/>
		</div>
	);
}

});
module.exports = ProgrammingSkill