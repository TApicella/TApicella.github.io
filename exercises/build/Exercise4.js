var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Exercise4 = React.createClass({
  displayName: 'Exercise4',


  getInitialState: function () {
    return {
      mystr: "",
      revstr: ""
    };
  },

  componentDidMount() {
    this.handleChange(this.props.default);
  },

  handleChange(value) {},

  render: function () {

    var textstyle = {
      "font-size": "36px",
      "width": "75%",
      "margin": "0 auto",
      "text-align": "center"
    };
    return React.createElement(
      'div',
      { style: textstyle },
      React.createElement(
        'h2',
        null,
        'Given two strings of comma-separated values, sort both lists by the first list alphabetically, and return the second list.'
      ),
      React.createElement('br', null)
    );
  }
});

module.exports = Exercise4;