"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _loanHandler = _interopRequireDefault(require("../../controllers/loanHandler"));

var _repaymentHandler = _interopRequireDefault(require("../../controllers/repaymentHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loanRoute = function loanRoute(expressApp) {
  expressApp.post('/api/v1/loans', _loanHandler["default"].application);
  expressApp.get('/api/v1/loans', _loanHandler["default"].getAll);
  expressApp.get('/api/v1/loans/:id', _loanHandler["default"].getOne);
  expressApp.put('/api/v1/loans/:id', _loanHandler["default"].updateOne); // repayment routes.

  expressApp.post('/api/v1/loans/repayment', _repaymentHandler["default"].repay);
  expressApp.get('/api/v1/loan/repayment', _repaymentHandler["default"].viewall);
  expressApp.get('/api/v1/bystatus', _loanHandler["default"].getAllRepaid);
};

var _default = loanRoute;
exports["default"] = _default;