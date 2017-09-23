var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var ExerciseCarousel = require('./ExerciseCarousel.js');
var data = require('../data/data.json');

var Exes = React.createClass({
  displayName: 'Exes',


  getInitialState: function () {
    return {
      data: data,
      exercise: 0
    };
  },
  /*
  	componentDidMount: function() {
  		//Callback to actually set the state once the data is loaded
  		var cb = function(data, caller){
  			caller.setState({
  				data: data
  			});
  		};
  
  		//Call to load the csv data
  		this.getData = datasource.getData(cb, this);
      },
  
      componentWillUnmount: function() {
      	this.getData.abort();
    	},*/

  next: function () {
    this.setState({ exercise: (this.state.exercise + 1) % 5 });
  },

  prev: function () {
    var newex;
    if (this.state.exercise === 0) {
      newex = 4;
    } else {
      newex = this.state.exercise - 1;
    }
    this.setState({ exercise: newex });
  },

  prettyJSON: function (json, maxheight) {
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

  render: function () {
    var exercise_str = "Exercise " + (this.state.exercise + 1);
    var headerstyle = {
      "font-size": "36px",
      "width": "100%",
      "margin": "0 auto",
      "text-align": "center"
    };
    var datastyle = {
      "width": "50%"
    };
    var data = this.prettyJSON(this.state.data, datastyle);
    if (this.state.data) {

      return React.createElement(
        'div',
        { className: 'exercises' },
        React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            { style: headerstyle },
            'Tom Apicella\'s Code Challenge'
          )
        ),
        React.createElement('br', null),
        React.createElement(ExerciseCarousel, { ex: this.state.exercise, ex_header: exercise_str,
          data: this.state.data, next: this.next, prev: this.prev,
          prettyJSON: this.prettyJSON })
      );
    } else {
      return React.createElement(
        'div',
        null,
        'Loading...'
      );
    }
  }
});

ReactDOM.render(React.createElement(Exes, null), document.getElementById('exercises'));