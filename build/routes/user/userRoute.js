"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userHandler = _interopRequireDefault(require("../../controllers/userHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRoute = function userRoute(expressApp) {
  expressApp.post('/api/v1/auth/signUp', _userHandler["default"].user);
  expressApp.post('/api/v1/auth/signin', _userHandler["default"].newUser);
  expressApp.patch('/api/v1/users/useremail/verify');
};

var _default = userRoute;
exports["default"] = _default;