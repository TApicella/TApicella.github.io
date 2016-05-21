var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Exp = React.createClass({
	displayName: 'Exp',


	render: function () {
		var title = this.props.details.title;
		var location = this.props.details.location;
		var dates = this.props.details.dates;
		var content = this.props.details.content;
		return React.createElement(
			Grid,
			null,
			React.createElement(
				Row,
				{ className: 'show-grid' },
				React.createElement(
					Col,
					{ md: 12 },
					React.createElement(
						'span',
						{ className: 'exp-title' },
						title
					)
				)
			),
			React.createElement(
				Row,
				{ className: 'show-grid' },
				React.createElement(
					Col,
					{ md: 9 },
					React.createElement(
						'span',
						{ className: 'exp-location' },
						location
					)
				),
				React.createElement(
					Col,
					{ md: 3, className: 'exp-dates' },
					React.createElement(
						'span',
						null,
						dates
					)
				)
			),
			React.createElement(
				Row,
				{ className: 'show-grid' },
				React.createElement(
					Col,
					{ md: 12 },
					React.createElement(
						'span',
						{ className: 'exp-content' },
						content
					)
				)
			),
			React.createElement('br', null)
		);
	}

});
module.exports = Exp;