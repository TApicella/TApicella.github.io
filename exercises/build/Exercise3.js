var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Exercise3 = React.createClass({
  displayName: 'Exercise3',


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
        'Given an array of 100 numbers, many values are duplicates - find the duplicate values'
      ),
      React.createElement('br', null)
    );
  }
});

module.exports = Exercise3;