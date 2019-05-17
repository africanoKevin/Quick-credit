"use strict";

var _chai = require("chai");

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _chai.use)(_chaiHttp["default"]);
describe('POST auth/signup', function () {
  it('should be able to sign up', function (done) {
    (0, _chai.request)(_app["default"]).post('/api/v1/auth/signup').send({
      firstname: 'John',
      lastname: 'Muneza'
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(200);
      done(err);
    });
  });
});
describe('GET /api/v1/loans', function () {
  it('should be able to get a loan application', function (done) {
    (0, _chai.request)(_app["default"]).get('/api/v1/loans').send().end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(200);
      done(err);
    });
  });
});
describe('POST /api/v1/loans', function () {
  it('should be able to apply for a loan', function (done) {
    (0, _chai.request)(_app["default"]).post('/api/v1/loans').send({
      firstname: 'kevin',
      lastname: 'emmanuel'
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(200);
      done(err);
    });
  });
});
describe('POST auth/signin', function () {
  it('should be able to sign in', function (done) {
    (0, _chai.request)(_app["default"]).post('/api/v1/auth/signin').send({
      firstname: 'John',
      lastname: 'Muneza'
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(200);
      done(err);
    });
  });
});
describe('POST /api/v1/loans/repayment', function () {
  it('should be able to post a loan ', function (done) {
    (0, _chai.request)(_app["default"]).post('/api/v1/loans/repayment').send({
      firstname: 'John',
      lastname: 'Muneza'
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(200);
      done(err);
    });
  });
});
describe('GET /api/v1/loan/repayment', function () {
  it('should be able to get all loans', function (done) {
    (0, _chai.request)(_app["default"]).get('/api/v1/loan/repayment').send().end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(200);
      done(err);
    });
  });
});