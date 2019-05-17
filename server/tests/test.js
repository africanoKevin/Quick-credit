import { use, request, expect } from 'chai';

import chaiHttp from 'chai-http';
import app from '../app';

use(chaiHttp);

describe('POST auth/signup', () => {
    it('should be able to sign up', (done) => {
        request(app).post('/api/v1/auth/signup')
            .send({ firstname: 'John', lastname: 'Muneza' })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done(err);
            });
    });
});
describe('GET /api/v1/loans', () => {
    it('should be able to get a loan application', (done) => {
        request(app).get('/api/v1/loans')
            .send()
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done(err);
            });
    });
});

describe('POST /api/v1/loans', () => {
    it('should be able to apply for a loan', (done) => {
        request(app).post('/api/v1/loans')
            .send({ firstname: 'kevin', lastname: 'emmanuel' })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done(err);
            });
    });
});

describe('POST auth/signin', () => {
    it('should be able to sign in', (done) => {
        request(app).post('/api/v1/auth/signin')
            .send({ firstname: 'John', lastname: 'Muneza' })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done(err);
            });
    });
});

describe('POST /api/v1/loans/repayment', () => {
    it('should be able to post a loan ', (done) => {
        request(app).post('/api/v1/loans/repayment')
            .send({ firstname: 'John', lastname: 'Muneza' })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done(err);
            });
    });
});

describe('GET /api/v1/loan/repayment', () => {
    it('should be able to get all loans', (done) => {
        request(app).get('/api/v1/loan/repayment')
            .send()
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done(err);
            });
    });
});