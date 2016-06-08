var React = require('react');
var ReactDOM = require('react-dom');
var SubSkill = require('./subskill.js')
var ReactBootstrap = require('react-bootstrap');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Skill = React.createClass({

render: function(){
	var header = this.props.skillHeader;
	var subskills = this.props.subskills;
	var subskill_components = [];
	var first_subskill;
	var sectionbreak = this.props.sectionbreak ? <br/> : "";

	for (var i = 0; i < subskills.length; i++) {
		if(i === 0){
			first_subskill = <SubSkill content={subskills[i].text} imgs={subskills[i].images} link={subskills[i].link}/>;
		}
		else{
   			subskill_components.push(<Row className="show-grid"><Col md={3} lg={3}></Col><Col md={9} lg={6}><SubSkill content={subskills[i].text} imgs={subskills[i].images} link={subskills[i].link}/></Col></Row>);
   		}
	}
	return(
		<Grid>
			<Row className="show-grid">
				<Col md={3} lg={3}><span className="skill-title">{header}</span></Col>
				<Col md={9} lg={6}>{first_subskill}</Col>
			</Row>
			{subskill_components}
			{sectionbreak}
		</Grid>
	);
}

});
module.exports = Skill

