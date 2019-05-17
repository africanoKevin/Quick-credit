"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RepaymentDb =
/*#__PURE__*/
function () {
  /**
   * class constructor
   * @param {object} data
   */
  function RepaymentDb() {
    _classCallCheck(this, RepaymentDb);

    this.repayment = [];
  } // eslint-disable-next-line class-methods-use-this


  _createClass(RepaymentDb, [{
    key: "repay",
    value: function repay(data) {
      var repayRecord = {
        id: _uuid["default"].v4(),
        loanId: this.repayment.length + 1,
        createdOn: new Date().toDateString(),
        amount: data.amount || '2000.00',
        monthlyInstallment: data.monthlyInstallment || '50. 00',
        paidAmount: data.paidAmount || '500.00',
        balance: data.balance || '1500.00'
      };
      this.repayment.push(repayRecord);
      return repayRecord;
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this.repayment;
    }
  }]);

  return RepaymentDb;
}();

var _default = new RepaymentDb();

exports["default"] = _default;