/* eslint-disable max-len */
import uuid from 'uuid';
import LoanDbModel from '../models/appData';

const loan = {
    /**
     *
     * @param {object} req
     * @param {object} res
     * @returns {object} loan object
     */
    application(req, res) {
        const applicant = LoanDbModel.loanApplication(req.body);
        res.json({ status: 200, data: applicant });
    },
    getByStatus(req, res) {
        const parameters = req.query;
        const loans = LoanDbModel.loans.find(ln => ln.status === parameters.status && ln.status === parameters.repaid);
        res.json({ status: 200, data: loans });
    },
    getAll(req, res) {
        const allLoans = LoanDbModel.getAll();
        res.json({ status: 200, data: allLoans });
    },

    getOne(req, res) {
        const oneLoan = LoanDbModel.getSingle(req.params.id);
        if (!oneLoan) {
            res.json({ status: 404, err: 'app not found' });
        }
        res.json({ status: 200, data: oneLoan });
    },

    updateOne(req, res) {
        const loanOne = LoanDbModel.getSingle(req.params.id);
        if (!loanOne) {
            res.json({ status: 200, err: 'application not found' });
        }
        const updatedLoan = LoanDbModel.update(req.params.id, req.body);
        res.json({ status: 200, data: updatedLoan });
    },
};
export default loan;