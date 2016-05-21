var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Exp = React.createClass({

render: function(){
	var title = this.props.details.title;
	var location = this.props.details.location;
	var dates = this.props.details.dates;
	var content = this.props.details.content;		
	return(
		<Grid>
			<Row className="show-grid">
				<Col md={12}><span className="exp-title">{title}</span></Col>
			</Row>
			<Row className="show-grid">
				<Col md={9}><span className="exp-location">{location}</span></Col>
				<Col md={3} className="exp-dates"><span>{dates}</span></Col>
			</Row>
			<Row className="show-grid">
				<Col md={12}><span className="exp-content">{content}</span></Col>
			</Row>
			<br/>
		</Grid>
	);
}

});
module.exports = Exp

