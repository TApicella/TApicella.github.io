var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Exercise4 = React.createClass({
  displayName: 'Exercise4',


  getInitialState: function () {
    return {};
  },

  componentDidMount() {},

  handleChange(value) {},

  sortByFirst(zipped) {
    return zipped.sort(function (a, b) {
      var word1 = a[0].toUpperCase();
      var word2 = b[0].toUpperCase();
      if (word1 < word2) {
        return -1;
      } else if (word1 > word2) {
        return 1;
      } else {
        return 0;
      }
    });
  },

  render: function () {

    var textstyle = {
      "font-size": "36px",
      "width": "75%",
      "margin": "0 auto",
      "text-align": "center"
    };

    var wrapperstyle = {
      "width": "100%",
      "margin": "0 auto",
      "display": "flex",
      "justify-content": "center"
    };

    var resultstyle = {
      "width": "50%",
      "font-size": "24px",
      "text-align": "left",
      "margin": "20px",
      "border": "3px"
    };

    var zippedList = _.zip(this.props.list1, this.props.list2);
    var sortedList = this.sortByFirst(zippedList);
    var unZippedList = _.unzip(sortedList);
    var strlist1 = "[" + this.props.list1.join(", ") + "]";
    var strlist2 = "[" + this.props.list2.join(", ") + "]";
    var sentence1 = "\"" + unZippedList[0].join(" ") + "\"";
    var sentence2 = "\"" + unZippedList[1].join(" ") + "\"";
    return React.createElement(
      'div',
      { style: textstyle },
      React.createElement(
        'h2',
        null,
        'Given two lists of values, sort both lists by the first list alphabetically, and return the second list.'
      ),
      React.createElement('br', null),
      React.createElement(
        'div',
        { style: wrapperstyle },
        React.createElement(
          'div',
          { style: resultstyle },
          'List 1: ',
          strlist1
        ),
        React.createElement(
          'div',
          { style: resultstyle },
          'List 2: ',
          strlist2
        )
      ),
      React.createElement(
        'div',
        { style: wrapperstyle },
        React.createElement(
          'div',
          { style: resultstyle },
          'Sorted sentence 1: ',
          sentence1
        ),
        React.createElement(
          'div',
          { style: resultstyle },
          'Sorted sentence 2: ',
          sentence2
        )
      )
    );
  }
});

module.exports = Exercise4;