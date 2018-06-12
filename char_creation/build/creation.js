'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _DataDisplay = require('./DataDisplay.js');

var _DataDisplay2 = _interopRequireDefault(_DataDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var data = require('../data/data.json');
var settings = require('../data/settings.json');

var MasterDisplay = function (_Component) {
  _inherits(MasterDisplay, _Component);

  function MasterDisplay(props) {
    _classCallCheck(this, MasterDisplay);

    var _this = _possibleConstructorReturn(this, (MasterDisplay.__proto__ || Object.getPrototypeOf(MasterDisplay)).call(this, props));

    _this.state = { data: data };
    return _this;
  }

  _createClass(MasterDisplay, [{
    key: 'prettyJSON',
    value: function prettyJSON(json, maxheight) {
      var data_str = JSON.stringify(json, function (k, v) {
        if (v.constructor === Array) {
          return JSON.stringify(v);
        }
        return v;
      }, "  ");

      var jsonstyle = {
        "height": "" + maxheight + "px",
        "overflow": "auto"
      };
      return _react2.default.createElement(
        'pre',
        { style: jsonstyle },
        data_str
      );
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

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          { style: headerstyle },
          'Character info'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_DataDisplay2.default, { data: this.state.data })
      );
    }
  }]);

  return MasterDisplay;
}(_react.Component);

;

_reactDom2.default.render(_react2.default.createElement(MasterDisplay, null), document.getElementById('creation'));