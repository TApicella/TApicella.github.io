'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Exercise3 = React.createClass({
  displayName: 'Exercise3',


  propTypes: {
    numbers: React.PropTypes.string
  },

  getInitialState: function getInitialState() {
    return {
      numbers: "",
      dupes: ""
    };
  },

  componentDidMount: function componentDidMount() {
    this.handleChange(this.props.numbers);
  },
  handleChange: function handleChange(numbers) {
    var notdigits = /[^\d ]/;
    numbers = numbers.replace(/[,;]/, " ");
    numbers = numbers.replace(/  +/, " ");
    numbers = numbers.replace(notdigits, "");
    var dupes = this.getDupes(numbers.trim().split(" "));
    var dupestring = dupes.join(" ");
    this.setState({
      numbers: numbers,
      dupes: dupestring
    });
  },


  getDupes: function getDupes(num_array) {
    var dupes = new Set();
    var nums = {};
    //Each time you find a number:
    //If it isn't in nums, add it to nums
    //If it is in nums, add it to dupes
    for (var i = 0; i < num_array.length; i++) {
      n = parseInt(num_array[i]);
      if (n in nums) {
        dupes.add(n);
      } else {
        nums[n] = true;
      }
    }
    var dupearray = Array.from(dupes);
    dupearray.sort(function (a, b) {
      return a - b;
    });
    return dupearray;
  },

  render: function render() {
    var _this = this;

    var defaultstyle = {
      "fontSize": "36px",
      "width": "75%",
      "margin": "0 auto",
      "textAlign": "center"
    };

    var numstyle = {
      "fontSize": "16px",
      "width": "75%",
      "margin": "0 auto",
      "textAlign": "left",
      "border": "1px"
    };

    return React.createElement(
      'div',
      { style: defaultstyle },
      React.createElement(
        'h2',
        null,
        'Given a list of 100 numbers, many values are duplicates - find the duplicate values'
      ),
      React.createElement('br', null),
      React.createElement(
        'div',
        null,
        'Numbers'
      ),
      React.createElement('textarea', { style: numstyle, value: this.state.numbers, onChange: function onChange(event) {
          return _this.handleChange(event.target.value);
        } }),
      React.createElement('br', null),
      React.createElement('br', null),
      React.createElement(
        'div',
        null,
        'Duplicates'
      ),
      React.createElement(
        'div',
        { style: numstyle },
        this.state.dupes
      )
    );
  }
});

module.exports = Exercise3;