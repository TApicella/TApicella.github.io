'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Glyphicon = require('react-bootstrap').Glyphicon;

var Exercise1 = require('./Exercise1.js');
var Exercise2 = require('./Exercise2.js');
var Exercise3 = require('./Exercise3.js');
var Exercise4 = require('./Exercise4.js');
var Exercise5 = require('./Exercise5.js');

var ExerciseCarousel = React.createClass({
  displayName: 'ExerciseCarousel',


  propTypes: {
    ex: React.PropTypes.number,
    ex_header: React.PropTypes.string,
    data: React.PropTypes.object,
    prettyJSON: React.PropTypes.func
  },

  render: function render() {
    var e3_numbers = this.props.data.exercise_3.numbers.join(" ");
    var exercises = {
      1: React.createElement(Exercise1, { 'default': this.props.data.exercise_1.mystring }),
      2: React.createElement(Exercise2, { first_hash: this.props.data.exercise_2.first_hash,
        second_hash: this.props.data.exercise_2.second_hash,
        prettyJSON: this.props.prettyJSON }),
      3: React.createElement(Exercise3, { numbers: e3_numbers }),
      4: React.createElement(Exercise4, { list1: this.props.data.exercise_4.list1, list2: this.props.data.exercise_4.list2 }),
      5: React.createElement(Exercise5, { 'default': this.props.data.exercise_5.default })
    };
    var url = "https://github.com/TApicella/TApicella.github.io/blob/master/exercises/src/Exercise" + this.props.ex + ".jsx";

    var defaultstyle = {
      "fontSize": "36px",
      "width": "400px",
      "margin": "0 auto",
      "textAlign": "center"
    };
    var headerstyle = {
      "width": "300px"
    };

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { style: defaultstyle },
        React.createElement(Glyphicon, { glyph: 'chevron-left', onClick: this.props.prev }),
        React.createElement(
          'span',
          { style: headerstyle },
          React.createElement(
            'a',
            { href: url, target: '_blank' },
            this.props.ex_header
          )
        ),
        React.createElement(Glyphicon, { glyph: 'chevron-right', onClick: this.props.next })
      ),
      exercises[this.props.ex]
    );
  }
});

module.exports = ExerciseCarousel;