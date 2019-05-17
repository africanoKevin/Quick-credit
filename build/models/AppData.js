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

var LoanDb =
/*#__PURE__*/
function () {
  /**
   * class constructor
   * @param {object} data
   */
  function LoanDb() {
    _classCallCheck(this, LoanDb);

    this.loans = [];
  }

  _createClass(LoanDb, [{
    key: "loanApplication",
    value: function loanApplication(data) {
      var applicant = {
        id: _uuid["default"].v4(),
        firstname: data.firstname || 'afr',
        lastname: data.lastname || '',
        email: data.email || '',
        tenor: data.tenor || 0,
        amount: 12000.00,
        paymentInstallment: 2000.00,
        status: 'approved',
        balance: 12000.00,
        interest: 100.00,
        repaid: 'true'
      };
      this.loans.push(applicant);
      return applicant;
    }
  }, {
    key: "getSingle",
    value: function getSingle(id) {
      return this.loans.find(function (loan) {
        return loan.id === id;
      });
    }
  }, {
    key: "getByStatus",
    value: function getByStatus(status, repaid) {
      return this.loans.find(function (ln) {
        return ln.status === status && ln.repaid === repaid;
      });
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this.loans;
    }
  }, {
    key: "update",
    value: function update(id, data) {
      var loanUpdate = this.getSingle(id);
      var index = this.loans.indexOf(loanUpdate);
      this.loans[index].status = data['status'] || loanUpdate.status;
      return this.loans[index];
    }
  }]);

  return LoanDb;
}();

var _default = new LoanDb();

exports["default"] = _default;