var React = require('react');
var ReactDOM = require('react-dom');

var Exercise2 = React.createClass({

  propTypes: { 
    first_hash: React.PropTypes.object,
    second_hash: React.PropTypes.object,
    prettyJSON: React.PropTypes.func 
  },

	getInitialState: function(){
    return {
      "merged_str":""
    };
  },

  componentDidMount: function(){
    this.setMergedHash(this.props.first_hash, this.props.second_hash);
  },
    
  mergeHashes: function(a, b){
    var newhash = {};
    var mergeHashes = this.mergeHashes;
    //First, iterate through the first object
    Object.keys(a).forEach(function(key,index) {
      var val = a[key];
      if(!(key in b)){
        newhash[key] = val;
      }
      else{
        //Check if the value is a primitive
        if(val !== Object(val)){
          newhash[key] = b[key];
        }
        else if(val.constructor === Array){ //Fast method of typechcking
          newhash[key] = val.concat(b[key]); 
        }
        else{  
          //This assumes that everything else is a JS object that can be handled by this function, which I think is reasonable given the requirements
          newhash[key] = mergeHashes(val, b[key]);
        }
      }
    });
    //Now add any values in b but not in a 
    Object.keys(b).forEach(function(key,index) {
      if(!(key in newhash)){
        newhash[key] = b[key];
      }
    });
    
    return newhash;
  },
  
  setMergedHash: function(a, b){
    var newhash = this.mergeHashes(a, b);
    merged_str = this.props.prettyJSON(newhash, 300);
    this.setState({merged_str: merged_str});
  },

	render: function() {

    var bothstyle = {
      "width": "100%",
      "margin": "0 auto",
      "display": "flex",
      "justifyContent": "center"
    };

    var jsonstyle = {
      "width": "30%",
      "textAlign":"left",
      "margin":"30px"
    };

    var btnstyle = {
      "width": "30%",
      "textAlign":"left",
      "marginLeft":"30px"
    };

    var defaultstyle ={
      "fontSize":"36px",
      "width": "75%",
      "margin": "0 auto",
      "textAlign": "center"
    };

    var first_str = this.props.prettyJSON(this.props.first_hash, 300);
    var second_str = this.props.prettyJSON(this.props.second_hash, 300);
    
    return (
      <div style={defaultstyle}>
        <h2>Write a function that takes two hashes, merges them together, and returns the result.</h2>
        <div style={bothstyle}>
          <span style={jsonstyle}>First hash: {first_str}</span>
          <span style={jsonstyle}>Second hash: {second_str}</span>
          <span style={jsonstyle}>Merged hash: {this.state.merged_str}</span>
        </div>
        <br/>
      </div>
    );
  }
});

module.exports = Exercise2;