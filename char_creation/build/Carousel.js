'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _DataDisplay = require('./DataDisplay.js');

var _DataDisplay2 = _interopRequireDefault(_DataDisplay);

var _angleLeft = require('react-icons/lib/fa/angle-left');

var _angleLeft2 = _interopRequireDefault(_angleLeft);

var _angleRight = require('react-icons/lib/fa/angle-right');

var _angleRight2 = _interopRequireDefault(_angleRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _this.state = { index: 0 };
    _this.next = _this.next.bind(_this);
    _this.prev = _this.prev.bind(_this);
    return _this;
  }

  _createClass(Carousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var index = 0;
      var depth = this.props.depth;
      if (this.props.path.length > depth) {
        index = this.props.path[depth];
        this.props.updatePath(depth, index);
      }
      this.setState({ index: index });
    }
  }, {
    key: 'next',
    value: function next() {
      var newindex = void 0;
      if (this.state.index === this.props.datalen - 1) {
        newindex = 0;
      } else {
        newindex = this.state.index + 1;
      }
      this.setState({ index: newindex });
      this.props.updatePath(this.props.depth, newindex);
    }
  }, {
    key: 'prev',
    value: function prev() {
      var newindex = void 0;
      if (this.state.index === 0) {
        newindex = this.props.datalen - 1;
      } else {
        newindex = this.state.index - 1;
      }
      this.setState({ index: newindex });
      this.props.updatePath(this.props.depth, newindex);
    }
  }, {
    key: 'render',
    value: function render() {
      var defaultstyle = {
        "fontSize": "36px",
        "width": "400px",
        "margin": "0 auto",
        "textAlign": "center"
      };

      var headerstyle = {
        "fontSize": "36px",
        "width": "100%",
        "margin": "0 auto",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
      };

      var passdata = this.props.data;
      //const datalength = this.props.data.length.toString();
      var path = this.props.path;
      var depth = this.props.depth + 1;
      var mydata = JSON.stringify(this.props.data);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: headerstyle },
          _react2.default.createElement(_angleLeft2.default, { onClick: this.prev }),
          _react2.default.createElement(
            'div',
            null,
            this.props.label
          ),
          _react2.default.createElement(_angleRight2.default, { onClick: this.next })
        ),
        _react2.default.createElement(_DataDisplay2.default, { data: passdata, path: path, updatePath: this.props.updatePath, depth: depth })
      );
    }
  }]);

  return Carousel;
}(_react.Component);

;

exports.default = Carousel;