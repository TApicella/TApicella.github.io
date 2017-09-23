var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Exercise5 = React.createClass({
  displayName: 'Exercise5',

  //Implementation of Heap's algorithm: https://en.wikipedia.org/wiki/Heap%27s_algorithm

  newperms: [], //Temporary tracker of permutations
  getInitialState: function () {
    return {
      mystr: "",
      permutations: []
    };
  },

  componentDidMount() {
    this.handleChange(this.props.default);
  },

  handleChange(value) {
    this.newperms = [];
    var myarray = value.split("");
    var size = value.length;
    this.getPermutations(myarray, size);
    this.setState({
      mystr: value,
      permutations: this.newperms
    });
  },

  swap(myarray, x, y) {
    var temp = myarray[x];
    myarray[x] = myarray[y];
    myarray[y] = temp;
    return myarray;
  },

  getPermutations(myarray, size) {
    if (size == 1) {
      this.newperms.push(myarray.join(""));
    } else {
      for (var i = 0; i < size; i++) {
        this.getPermutations(myarray, size - 1);
        if (size % 2 == 0) {
          myarray = this.swap(myarray, i, size - 1);
        } else {
          myarray = this.swap(myarray, 0, size - 1);
        }
      }
    }
  },

  render: function () {

    var textstyle = {
      "font-size": "36px",
      "width": "75%",
      "margin": "0 auto",
      "text-align": "center"
    };

    var permstyle = {
      "font-size": "24px",
      "width": "100%",
      "margin": "0 auto",
      "text-align": "center",
      "height": "500px",
      "overflow": "auto"
    };

    var permstring = "";
    for (var i = 0; i < this.state.permutations.length; i++) {
      permstring += this.state.permutations[i] + " ";
    }
    return React.createElement(
      'div',
      { style: textstyle },
      React.createElement(
        'h2',
        null,
        'Find all of the different permutations of a string, like "cats", without using any built-in permutation functions'
      ),
      React.createElement('br', null),
      React.createElement(
        'div',
        null,
        'String'
      ),
      React.createElement('textarea', { style: textstyle, value: this.state.mystr, onChange: event => this.handleChange(event.target.value) }),
      React.createElement('br', null),
      React.createElement(
        'div',
        null,
        this.state.permutations.length,
        ' Permutations'
      ),
      React.createElement(
        'div',
        { style: permstyle },
        permstring
      )
    );
  }
});

module.exports = Exercise5;