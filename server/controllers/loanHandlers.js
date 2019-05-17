/* eslint-disable radix */
import uuid from 'uuid';
import AppDb from '../models/AppData';


export const Apply = (req, res) => {
    const loanBody = req.body;
    if (!req.body.firstName || !req.body.email || !req.body.tenor || !req.body.amount) {
        res.status(400).json({ status: 400, err: 'please fill all fields' });
    } else {
        const interestCalculator = ((parseFloat(req.body.amount) * 5) / 100).toFixed(1);
        const balanceCalculator = parseFloat(interestCalculator) + parseFloat(req.body.amount);
        const installementCalculator = parseFloat(((parseFloat(req.body.amount) + parseFloat(interestCalculator)) / parseInt(req.body.tenor)).toFixed(2));
        const applicant = {
            Id: AppDb.loans.length + 1,
            token: uuid.v4(),
            firstName: req.body.firstName || '',
            lastName: req.body.lastName || '',
            email: req.body.email || '',
            tenor: req.body.tenor,
            amount: (req.body.amount),
            paymentInstallment: installementCalculator,
            status: 'pending',
            balance: balanceCalculator,
            interest: interestCalculator,
            repaid: 'false',
            createdOn: new Date(),
        };
        AppDb.loans.push(applicant);
        res.json({ status: 201, data: applicant });
    }
};

const loadByCheckUp = (req, res) => {
    const { status, repaid } = req.query;
    const loanInfo = [];
    let response = null;
    AppDb.loans.find((loan) => {
        if (loan.status === status && (loan.repaid === (repaid === 'true'))) {
            loanInfo.push(loan);
        }
    });

    if (loanInfo === []) {
        response = {
            status: 404,
            data: {
                message: `no loan record found for status ${status} and repaid ${repaid} specifications`,
            },
        };
    } else {
        response = {
            status: 200,
            data: loanInfo,
        };
        res.status(response.status).json(response);
    }
};

// loads all loan application and also checks for loans with status approved and repaid true
export const loadLoans = (req, res) => {
    const { status, repaid } = req.query;
    if (status === undefined && repaid === undefined) {
        res.json(AppDb.loans);
    } else {
        loadByCheckUp(req, res);
    }
};

export const SingleLoan = (req, res) => {
    const LoanId = AppDb.loans.find(loan => loan.Id === parseInt(req.params.id));
    res.json({ status: 200, data: LoanId });
};

// approves a loan application
export const approveLoan = (req, res) => {
    const userId = req.params.id;
    const info = AppDb.loans;
    if (!userId === undefined) {
        res.status(400).json({ status: 400, message: 'Unknown Id' });
    } else {
        const loanIndex = info.findIndex(user => user.id === parseInt(userId));
        if (loanIndex === -1) {
            res.status(404).json({ status: 404, err: 'no data is found for the related LoanId' });
        } else {
            info[loanIndex].status = 'approved';
            const approve = {
                id: info[loanIndex].id,
                token: info[loanIndex].token,
                firstName: info[loanIndex].firstName,
                lastName: info[loanIndex].email,
                email: info[loanIndex].tenor,
                status: info[loanIndex].status,
            };
            res.status(200).json({ status: 200, data: approve });
        }
    }
};