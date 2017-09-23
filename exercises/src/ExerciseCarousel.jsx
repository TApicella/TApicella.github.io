var React = require('react');
var ReactDOM = require('react-dom');
var Glyphicon = require('react-bootstrap').Glyphicon;
var _ = require('lodash');

var Exercise1 = require('./Exercise1.js');
var Exercise2 = require('./Exercise2.js');
var Exercise3 = require('./Exercise3.js');
var Exercise4 = require('./Exercise4.js');
var Exercise5 = require('./Exercise5.js');

var ExerciseCarousel = React.createClass({
	render: function() {
    var e3_numbers = this.props.data.exercise_3.numbers.join(" ");
    var exercises = {
      0: <Exercise1 default={this.props.data.exercise_1.mystring}/>,
      1: <Exercise2 first_hash={this.props.data.exercise_2.first_hash} 
                    second_hash={this.props.data.exercise_2.second_hash}
                    prettyJSON={this.props.prettyJSON}/>,
      2: <Exercise3 numbers={e3_numbers}/>,
      3: <Exercise4 list1={this.props.data.exercise_4.list1} list2={this.props.data.exercise_4.list2}/>,
      4: <Exercise5/>
    }

  	var textstyle ={
      "font-size":"36px",
      "width": "400px",
      "margin": "0 auto",
      "text-align": "center"
    };
    var headerstyle ={
      "width":"300px"
    };
    return (
      <div>
        <div style={textstyle}>
          <Glyphicon glyph="chevron-left" onClick={this.props.prev}></Glyphicon>
          <span style={headerstyle}>{this.props.ex_header}</span>
          <Glyphicon glyph="chevron-right" onClick={this.props.next}></Glyphicon>
        </div>
        {exercises[this.props.ex]}
      </div>
    );
  }
});

module.exports = ExerciseCarousel