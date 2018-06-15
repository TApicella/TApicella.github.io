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
    return _this;
  }

  _createClass(Carousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
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

      var labelstyle = {
        //"minWidth": "400px",
        "width": "50%",
        "display": "flex",
        "justifyContent": "center"
      };

      var subheaderstyle = {
        "fontSize": "24px",
        "width": "100%",
        "margin": "0 auto",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
      };

      var textboxstyle = {
        "minWidth": "400px",
        "display": "flex",
        "justifyContent": "center"
      };
      var textstyle = {
        "minWidth": "200px",
        "width": "50%"
      };

      var bold = {
        "fontWeight": "bold"
      };

      var italic = {
        "fontStyle": "italic"
      };

      var passdata = this.props.data;
      //const datalength = this.props.data.length.toString();
      var path = this.props.path;
      var depth = this.props.depth + 1;
      var mydata = JSON.stringify(this.props.data);
      var text = this.props.data.text;
      var textlist = [];
      if (text) {
        textlist = this.props.data.text.split('\n');
      }
      var textelements = [];
      var boldme = /<b>([\w: ]+)<b>/;
      var italicme = /<i>([\w: ]+)<i>/;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = textlist[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var textline = _step.value;

          var b = boldme.exec(textline);
          var i = italicme.exec(textline);
          if (b) {
            textelements.push(_react2.default.createElement(
              'div',
              { style: bold },
              b[1]
            ));
          } else if (i) {
            textelements.push(_react2.default.createElement(
              'div',
              { style: italic },
              i[1]
            ));
            textelements.push(_react2.default.createElement('br', null));
          } else {
            textelements.push(_react2.default.createElement(
              'div',
              null,
              textline
            ));
            textelements.push(_react2.default.createElement('br', null));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var sublabel = void 0;
      if (this.props.data.sublabel) {
        sublabel = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { style: subheaderstyle },
            _react2.default.createElement(
              'div',
              { style: labelstyle },
              this.props.data.sublabel
            )
          ),
          _react2.default.createElement('br', null)
        );
      }

      var textbox = void 0;
      if (textelements.length > 0) {
        textbox = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { style: textboxstyle },
            _react2.default.createElement(
              'div',
              { style: textstyle },
              textelements
            )
          )
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: headerstyle },
          _react2.default.createElement(_angleLeft2.default, { onClick: this.props.prev }),
          _react2.default.createElement(
            'div',
            { style: labelstyle },
            _react2.default.createElement(
              'div',
              null,
              this.props.data.label
            )
          ),
          _react2.default.createElement(_angleRight2.default, { onClick: this.props.next })
        ),
        sublabel,
        textbox,
        _react2.default.createElement(_DataDisplay2.default, { dataobj: passdata, path: path, updatePath: this.props.updatePath, depth: depth })
      );
    }
  }]);

  return Carousel;
}(_react.Component);

;

exports.default = Carousel;