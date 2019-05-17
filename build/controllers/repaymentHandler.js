"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RepaymentDb = _interopRequireDefault(require("../models/RepaymentDb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var repayment = {
  repay: function repay(req, res) {
    var repayRecord = _RepaymentDb["default"].repay(req.body);

    res.json({
      status: 200,
      data: repayRecord
    });
  },
  viewall: function viewall(req, res) {
    var allrepayments = _RepaymentDb["default"].getAll();

    res.json({
      status: 200,
      data: allrepayments
    });
  }
};
var _default = repayment;
exports["default"] = _default;