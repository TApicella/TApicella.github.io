'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ExerciseCarousel = require('./ExerciseCarousel.js');
var data = require('../data/data.json');

var Exes = React.createClass({
  displayName: 'Exes',


  getInitialState: function getInitialState() {
    return {
      data: data,
      exercise: 1
    };
  },

  next: function next() {
    var newex;
    if (this.state.exercise === 5) {
      newex = 1;
    } else {
      newex = this.state.exercise + 1;
    }
    this.setState({ exercise: newex });
  },

  prev: function prev() {
    var newex;
    if (this.state.exercise === 1) {
      newex = 5;
    } else {
      newex = this.state.exercise - 1;
    }
    this.setState({ exercise: newex });
  },

  prettyJSON: function prettyJSON(json, maxheight) {
    var data_str = JSON.stringify(json, function (k, v) {
      if (v.constructor === Array) {
        return JSON.stringify(v);
      }
      return v;
    }, "  ");

    var jsonstyle = {
      "height": "" + maxheight + "px",
      "overflow": "auto"
    };
    return React.createElement(
      'pre',
      { style: jsonstyle },
      data_str
    );
  },

  render: function render() {

    var exercise_str = "Exercise " + this.state.exercise;

    var headerstyle = {
      "fontSize": "36px",
      "width": "100%",
      "margin": "0 auto",
      "textAlign": "center"
    };

    var subheaderstyle = {
      "fontSize": "16px",
      "width": "100%",
      "margin": "0 auto",
      "textAlign": "center"
    };

    return React.createElement(
      'div',
      { className: 'exercises' },
      React.createElement(
        'h1',
        { style: headerstyle },
        'Tom Apicella\'s Code Challenge'
      ),
      React.createElement(
        'h3',
        { style: subheaderstyle },
        'Click the exercise header to go to the source code'
      ),
      React.createElement('br', null),
      React.createElement(ExerciseCarousel, { ex: this.state.exercise, ex_header: exercise_str,
        data: this.state.data, next: this.next, prev: this.prev,
        prettyJSON: this.prettyJSON })
    );
  }
});

ReactDOM.render(React.createElement(Exes, null), document.getElementById('exercises'));