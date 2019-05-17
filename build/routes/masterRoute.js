"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userRoute = _interopRequireDefault(require("./user/userRoute"));

var _loanRoute = _interopRequireDefault(require("./loan/loanRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routeMaster = function routeMaster(app) {
  (0, _userRoute["default"])(app);
  (0, _loanRoute["default"])(app);
};

var _default = routeMaster;
exports["default"] = _default;