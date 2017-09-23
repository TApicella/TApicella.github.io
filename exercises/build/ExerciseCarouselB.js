var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var Carousel = require("react-bootstrap").Carousel;

var ExerciseCarousel = React.createClass({
  displayName: 'ExerciseCarousel',

  getInitialState() {
    return {
      index: 0
    };
  },

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex
    });
  },

  render() {
    var carStyle = {};
    carStyle["width"] = "50%";

    return React.createElement(
      Carousel,
      { activeIndex: this.state.index, onSelect: this.handleSelect, style: carStyle },
      React.createElement(
        Carousel.Item,
        null,
        React.createElement(
          'p',
          null,
          'Item 1'
        ),
        React.createElement(
          Carousel.Caption,
          null,
          React.createElement(
            'h3',
            null,
            'First slide label'
          ),
          React.createElement(
            'p',
            null,
            'Nulla vitae elit libero, a pharetra augue mollis interdum.'
          )
        )
      ),
      React.createElement(
        Carousel.Item,
        null,
        React.createElement(
          'p',
          null,
          'Item 2'
        ),
        React.createElement(
          Carousel.Caption,
          null,
          React.createElement(
            'h3',
            null,
            'Second slide label'
          ),
          React.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          )
        )
      ),
      React.createElement(
        Carousel.Item,
        null,
        React.createElement(
          'p',
          null,
          'Item 3'
        ),
        React.createElement(
          Carousel.Caption,
          null,
          React.createElement(
            'h3',
            null,
            'Third slide label'
          ),
          React.createElement(
            'p',
            null,
            'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
          )
        )
      )
    );
  }
});

module.exports = ExerciseCarousel;