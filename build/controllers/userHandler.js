"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UserDb = _interopRequireDefault(require("../models/UserDb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Users = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} loan object
   */
  user: function user(req, res) {
    if (!req.body.firstName && !req.body.lastName && !req.body.email && !req.body.password) {
      res.json({
        status: 400,
        err: 'All fields are required'
      });
    }

    var signUp = _UserDb["default"].userSignup(req.body);

    res.json({
      status: 200,
      data: signUp
    });
  },
  newUser: function newUser(req, res) {
    if (!req.body.email && !req.body.password) {
      res.json({
        status: 400,
        err: 'All fields required'
      });
    }

    var signIn = _UserDb["default"].userSignin(req.body);

    res.json({
      status: 200,
      data: signIn
    });
  }
};
var _default = Users;
exports["default"] = _default;