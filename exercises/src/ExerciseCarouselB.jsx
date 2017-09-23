var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var Carousel = require("react-bootstrap").Carousel;

var ExerciseCarousel = React.createClass({
	getInitialState() {
    return {
      index: 0
    };
  },

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
    });
  },

  render() {
  	var carStyle = {};
  	carStyle["width"] = "50%";
  	
    return (
      <Carousel activeIndex={this.state.index} onSelect={this.handleSelect} style={carStyle}>
        <Carousel.Item>
          <p>Item 1</p>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <p>Item 2</p>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <p>Item 3</p>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
});

module.exports = ExerciseCarousel