var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Exercise4 = React.createClass({

	getInitialState: function(){
        return {
            mystr: "",
            revstr: ""
        }
    },
    
    componentDidMount(){
        this.handleChange(this.props.default);
    },

	handleChange(value) {
		},

	render: function() {

    var textstyle ={
      "font-size":"36px",
      "width": "75%",
      "margin": "0 auto",
      "text-align": "center"
    };
    return (
      <div style={textstyle}>
        <h2>Given two strings of comma-separated values, sort both lists by the first list alphabetically, and return the second list.</h2>
        <br/>
      </div>
    );
  }
});

module.exports = Exercise4