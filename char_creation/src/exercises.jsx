var React = require('react');
var ReactDOM = require('react-dom');
var ExerciseCarousel = require('./ExerciseCarousel.js');
var data = require('../data/data.json');


var Exes = React.createClass({

	getInitialState: function() {
    return {
    	data: data,
      exercise: 1
    };
  },
  
  next: function(){
    var newex;
    if(this.state.exercise===5){
      newex=1;
    }
    else{
      newex = this.state.exercise+1;
    }
    this.setState({exercise: newex});
  },

  prev: function(){
    var newex;
    if(this.state.exercise===1){
      newex=5;
    }
    else{
      newex = this.state.exercise-1;
    }
    this.setState({exercise: newex});
  },

  prettyJSON: function(json, maxheight){
    var data_str = JSON.stringify(json, function(k,v){
      if(v.constructor === Array){
        return JSON.stringify(v);
      }
    return v;
    }, "  ");

    var jsonstyle = {
      "height": ""+maxheight+"px",
      "overflow":"auto"
    }  
    return <pre style={jsonstyle}>{data_str}</pre>;
  },

  render: function() {

		var exercise_str = "Exercise "+(this.state.exercise);

    var headerstyle = {
      "fontSize":"36px",
      "width": "100%",
      "margin": "0 auto",
      "textAlign": "center"
    };

    var subheaderstyle = {
      "fontSize":"16px",
      "width": "100%",
      "margin": "0 auto",
      "textAlign": "center"
    };

		return(
    	<div className="exercises">
        <h1 style={headerstyle}>
          Tom Apicella's Code Challenge
        </h1>
        <h3 style={subheaderstyle}>
          Click the exercise header to go to the source code
        </h3>
        <br/>
        <ExerciseCarousel ex={this.state.exercise} ex_header={exercise_str} 
                          data={this.state.data} next={this.next} prev={this.prev}
                          prettyJSON={this.prettyJSON}/>
    	</div>
  	);
  }
});

ReactDOM.render(<Exes/>, document.getElementById('exercises'));