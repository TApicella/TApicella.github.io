var React = require('react');
var ReactDOM = require('react-dom');

var Exercise3 = React.createClass({

  propTypes: { 
    numbers: React.PropTypes.string
  },

	getInitialState: function(){
    return {
      numbers:"",
      dupes:""
    };
  },

	componentDidMount(){
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

  getDupes: function(num_array){
    var dupes = new Set();
    var nums = {};
    //Each time you find a number:
    //If it isn't in nums, add it to nums
    //If it is in nums, add it to dupes
    for(var i=0; i<num_array.length; i++){
      n = parseInt(num_array[i]);
      if(n in nums){
        dupes.add(n);
      }
      else{
        nums[n] = true;
      }
    }
    var dupearray = Array.from(dupes);
    dupearray.sort(function(a, b){return a - b});
    return dupearray;
  },

	render: function() {

    var defaultstyle ={
      "fontSize":"36px",
      "width": "75%",
      "margin": "0 auto",
      "textAlign": "center"
    };

    var numstyle ={
      "fontSize":"16px",
      "width": "75%",
      "margin": "0 auto",
      "textAlign": "left",
      "border":"1px"
    };

    return (
      <div style={defaultstyle}>
        <h2>Given a list of 100 numbers, many values are duplicates - find the duplicate values</h2>
        <br/>
        <div>Numbers</div>
        <textarea style={numstyle} value={this.state.numbers} onChange={(event) =>this.handleChange(event.target.value)} />
        <br/>
        <br/>
        <div>Duplicates</div>
        <div style={numstyle}>{this.state.dupes}</div>
      </div>
    );
  }
});

module.exports = Exercise3;