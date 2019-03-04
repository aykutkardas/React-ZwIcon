"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _icons = require("./icons");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  display: "inline-block",
  width: "1em",
  height: "1em",
  strokeWidth: 0,
  stroke: "currentColor",
  fill: "currentColor"
};

var ZwIcon = function ZwIcon(_ref) {
  var icon = _ref.icon,
      props = (0, _objectWithoutProperties3.default)(_ref, ["icon"]);

  var iconPath = _icons2.default[icon];
  var iconViewBox = "0 0 24 24";

  var attributes = (0, _extends3.default)({}, props);

  attributes.className = (props.className || "") + (" icon icon-" + icon);
  attributes.viewBox = iconViewBox;
  attributes.style = (0, _extends3.default)({}, style, props.style || {});

  var path = _react2.default.createElement("path", {
    d: iconPath
  });

  return _react2.default.createElement("svg", attributes, path);
};

exports.default = ZwIcon;