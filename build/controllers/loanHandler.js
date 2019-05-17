"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = _interopRequireDefault(require("uuid"));

var _AppData = _interopRequireDefault(require("../models/AppData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-len */
var loan = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} loan object
   */
  application: function application(req, res) {
    var applicant = _AppData["default"].loanApplication(req.body);

    res.json({
      status: 200,
      data: applicant
    });
  },
  getByStatus: function getByStatus(req, res) {
    var _req$query = req.query,
        status = _req$query.status,
        repaid = _req$query.repaid;
    var loanStatus = [];
    var response = null;

    _AppData["default"].loans.find(function (loan) {
      if (loan.status === status && loan.repaid === repaid) {
        loanStatus.push(loan);
      }
    });

    if (loanStatus === []) {
      response = {
        status: 404,
        err: 'message not found'
      };
    } else {
      response = {
        status: 200,
        data: loanStatus
      };
    }

    res.status(response.status).json(response);
  },
  getAllRepaid: function getAllRepaid(req, res) {
    var _req$body = req.body,
        status = _req$body.status,
        repaid = _req$body.repaid;

    if (status === undefined && repaid === undefined) {
      res.json(_AppData["default"].loans);
    } else {
      loan.getByStatus(req, res);
    }
  },
  getAll: function getAll(req, res) {
    var allLoans = _AppData["default"].getAll();

    res.json({
      status: 200,
      data: allLoans
    });
  },
  getOne: function getOne(req, res) {
    var oneLoan = _AppData["default"].getSingle(req.params.id);

    if (!oneLoan) {
      res.json({
        status: 404,
        err: 'app not found'
      });
    }

    res.json({
      status: 200,
      data: oneLoan
    });
  },
  updateOne: function updateOne(req, res) {
    var loanOne = _AppData["default"].getSingle(req.params.id);

    if (!loanOne) {
      res.json({
        status: 200,
        err: 'application not found'
      });
    }

    var updatedLoan = _AppData["default"].update(req.params.id, req.body);

    res.json({
      status: 200,
      data: updatedLoan
    });
  }
};
var _default = loan;
exports["default"] = _default;