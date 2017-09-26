var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Exercise4 = React.createClass({

  propTypes: { 
    list1: React.PropTypes.array,
    list2: React.PropTypes.array
  },

  //Stubs
	getInitialState: function(){
    return {
    };
  },
    
  componentDidMount(){
  },

  sortByFirst(zipped){
    return zipped.sort(function(a, b) {
      var word1 = a[0].toUpperCase();
      var word2 = b[0].toUpperCase();
      if (word1 < word2) {
        return -1;
      }
      else if (word1 > word2) {
        return 1;
      }
      else{
        return 0;
      }
    });
  },

	render: function() {

    var textstyle ={
      "fontSize":"36px",
      "width": "75%",
      "margin": "0 auto",
      "textAlign": "center"
    };

    var wrapperstyle = {
      "width": "100%",
      "margin": "0 auto",
      "display": "flex",
      "justifyContent": "center"
    };

    var headerstyle = {
      "width": "50%",
      "fontSize":"24px",
      "fontWeight":"bold",
      "textAlign":"center",
      "margin":"20px"
    };

    var resultstyle = {
      "width": "100%",
      "fontSize":"24px",
      "fontWeight":"normal",
      "textAlign":"left",
      "margin":"20px"
    };

    var zippedList = _.zip(this.props.list1, this.props.list2);
    var sortedList = this.sortByFirst(zippedList);
    var unZippedList = _.unzip(sortedList);

    //Modify to display more cleanly
    var strlist1 = "["+this.props.list1.join(", ")+"]";
    var strlist2 = "["+this.props.list2.join(", ")+"]";
    var sentence1 = "\""+unZippedList[0].join(" ")+"\"";
    var sentence2 = "\""+unZippedList[1].join(" ")+"\"";

    return (
      <div style={textstyle}>
        <h2>Given two lists of values, sort both lists by the first list alphabetically, and return the second list.</h2>
        <br/>
        <div style={wrapperstyle}>
          <div style={headerstyle}>List 1 
            <div style={resultstyle}>{strlist1}</div>
          </div>
          <div style={headerstyle}>List 2 
            <div style={resultstyle}>{strlist2}</div>
          </div>
        </div>
        <div style={wrapperstyle}>
          <div style={headerstyle}>Sentence 1 
            <div style={resultstyle}>{sentence1}</div>
          </div>
          <div style={headerstyle}>Sentence 2 
            <div style={resultstyle}>{sentence2}</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Exercise4;