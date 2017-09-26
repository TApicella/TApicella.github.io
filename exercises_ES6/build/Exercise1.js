var React = require('react');
var ReactDOM = require('react-dom');

var Exercise1 = React.createClass({
  displayName: 'Exercise1',


  propTypes: {
    default: React.PropTypes.string
  },

  getInitialState: function () {
    return {
      mystr: "",
      revstr: ""
    };
  },

  componentDidMount: function () {
    this.handleChange(this.props.default);
  },

  handleChange: function (value) {
    var result = []; //Array to store the reversed letters
    var ins_index = 0; //Initially, insert new letters at the beginning of the array

    for (var i = 0; i < value.length; i++) {
      var c = value[i];
      if (c === " ") {
        //When you have a space, start inserting new letters just after the space 
        ins_index = i + 1;
      }
      result.splice(ins_index, 0, c);
    }

    var revstr = result.join("");
    this.setState({
      mystr: value,
      revstr: revstr
    });
  },
  /* This above algorithm is fun because it only goes through the original string once.
     Another algorithm using reduce:
        var reverseWord = function(word){
          var result = "";
          for(var i=0; i<word.length; i++){
            result = word.charAt(i)+result;
          }
          return result
        }
        var reverseWords2 = function(mystring){
        var strarray = mystring.split(" ")
        //Flip the first word since it won't get hit as curr
        strarray[0] = reverseWord(strarray[0])  
        return strarray.reduce(function(acc, curr) {
          return acc +" "+ reverseWord(curr);
        });
      } */

  render: function () {

    var defaultstyle = {
      "fontSize": "36px",
      "width": "75%",
      "margin": "0 auto",
      "textAlign": "center"
    };

    return React.createElement(
      'div',
      { style: defaultstyle },
      React.createElement(
        'h2',
        null,
        'Given a string, reverse each word in the string'
      ),
      React.createElement('br', null),
      React.createElement('textarea', { style: defaultstyle, value: this.state.mystr, onChange: event => this.handleChange(event.target.value) }),
      React.createElement('br', null),
      React.createElement(
        'div',
        null,
        this.state.revstr
      )
    );
  }
});

module.exports = Exercise1;