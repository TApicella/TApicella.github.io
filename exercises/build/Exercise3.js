var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Exercise3 = React.createClass({
  displayName: 'Exercise3',


  getInitialState: function () {
    return {
      numbers: "",
      dupes: ""
    };
  },

  componentDidMount() {
    this.handleChange(this.props.numbers);
  },

  handleChange(numbers) {
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

  getDupes: function (num_array) {
    var dupes = new Set();
    var nums = {};
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

  render: function () {

    var textstyle = {
      "font-size": "36px",
      "width": "75%",
      "margin": "0 auto",
      "text-align": "center"
    };

    var numstyle = {
      "font-size": "16px",
      "width": "75%",
      "margin": "0 auto",
      "text-align": "left",
      "border": "1px"
    };
    return React.createElement(
      'div',
      { style: textstyle },
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
      React.createElement('textarea', { style: numstyle, value: this.state.numbers, onChange: event => this.handleChange(event.target.value) }),
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