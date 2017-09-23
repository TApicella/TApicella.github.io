var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var Button = require('react-bootstrap').Button;

var Exercise2 = React.createClass({

	getInitialState: function(){
        return {
          "merged_str":""
        }
    },

  componentDidMount(){
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
        else{  //This assumes that everything else is a JS object that can be handled by this function, which I think is reasonable given the requirements
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
      "justify-content": "center"
    };

    var jsonstyle = {
      "width": "30%",
      "text-align":"left",
      "margin":"30px"
    };

    var btnstyle = {
      "width": "30%",
      "text-align":"left",
      "margin-left":"30px"
    };

    var textstyle ={
      "font-size":"36px",
      "width": "75%",
      "margin": "0 auto",
      "text-align": "center"
    };
    var first_str = this.props.prettyJSON(this.props.first_hash, 300);
    var second_str = this.props.prettyJSON(this.props.second_hash, 300);
    
    return (
      <div>
        <h2 style={textstyle}>Write a function that takes two hashes, merges them together, and returns the result.</h2>
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

module.exports = Exercise2