'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Carousel = require('./Carousel.js');

var _Carousel2 = _interopRequireDefault(_Carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataDisplay = function (_Component) {
  _inherits(DataDisplay, _Component);

  function DataDisplay(props) {
    _classCallCheck(this, DataDisplay);

    var _this = _possibleConstructorReturn(this, (DataDisplay.__proto__ || Object.getPrototypeOf(DataDisplay)).call(this, props));

    _this.state = { index: 0 };
    return _this;
  }

  _createClass(DataDisplay, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var index = 0;
      var depth = this.props.depth;
      if (this.props.path.length > depth) {
        index = this.props.path[depth];
        this.props.updatePath(depth, index);
      }
      this.next = this.next.bind(this);
      this.prev = this.prev.bind(this);
    }
  }, {
    key: 'next',
    value: function next() {
      var newindex = 0;
      if (this.props.dataobj.data) {
        var datalen = this.props.dataobj.data.length;
        if (this.state.index >= datalen - 1) {
          newindex = 0;
        } else {
          newindex = this.state.index + 1;
        }
      }
      this.setState({ index: newindex });
      this.props.updatePath(this.props.depth, newindex);
    }
  }, {
    key: 'prev',
    value: function prev() {
      var newindex = 0;
      if (this.props.dataobj.data) {
        var datalen = this.props.dataobj.data.length;
        if (this.state.index === 0) {
          newindex = datalen - 1;
        } else if (this.state.index >= datalen - 1) {
          newindex = datalen - 2; //Special case for having a path index greater than possible
        } else {
          newindex = this.state.index - 1;
        }
      }
      this.setState({ index: newindex });
      this.props.updatePath(this.props.depth, newindex);
    }
  }, {
    key: 'render',
    value: function render() {

      var headerstyle = {
        "fontSize": "36px",
        "width": "100%",
        "margin": "0 auto",
        "textAlign": "center"
      };

      var subheaderstyle = {
        "fontSize": "16px",
        "width": "100%",
        "margin": "0 auto",
        "textAlign": "center"
      };

      var depth = this.props.depth;
      var sources = this.props.dataobj;
      var path = this.props.path;

      var index = void 0,
          passdata = void 0,
          datalen = void 0;
      if (path.length > depth) {
        index = path[depth];
      } else {
        index = 0;
      }
      if (sources.data) {
        datalen = sources.data.length;
        if (index >= datalen) {
          //Special case for having a path index greater than possible
          index = datalen - 1;
        }
        passdata = sources.data[index];
      } else {
        passdata = null;
        datalen = 0;
      }

      var mydata = JSON.stringify(this.props.dataobj);

      var label = sources.label;
      var text = sources.text;

      if (passdata) {
        return _react2.default.createElement(
          'div',
          { className: 'display-carousel' },
          _react2.default.createElement('br', null),
          _react2.default.createElement(_Carousel2.default, { data: passdata, depth: depth, path: path,
            prev: this.prev, next: this.next, updatePath: this.props.updatePath })
        );
      } else {
        return _react2.default.createElement('div', { className: 'display-paragraph' });
      }
    }
  }]);

  return DataDisplay;
}(_react.Component);

;

exports.default = DataDisplay;