"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _masterRoute = _interopRequireDefault(require("./routes/masterRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 4000;
app.use(_bodyParser["default"].json());
(0, _masterRoute["default"])(app);
app.listen(port, function () {
  console.log('server is running on port 4000 ');
});
var _default = app;
exports["default"] = _default;