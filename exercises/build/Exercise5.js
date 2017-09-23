var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Exercise5 = React.createClass({
  displayName: 'Exercise5',


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
        'Find all of the different permutations of a string, like "cats", without using any built-in permutation functions'
      ),
      React.createElement('br', null)
    );
  }
});

module.exports = Exercise5;