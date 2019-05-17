import AppDb from '../models/AppData';


export const Apply = (req, res) => {
    const loanBody = req.body;
    if (!loanBody.firstName && !loanBody.email && !loanBody.tenor && !loanBody.amount) {
        res.json({ status: 400, err: 'please fill all fields' });
    } else {
        const applicant = {
            LoanId: AppDb.loans.length + 1,
            firstName: req.body.firstName || '',
            lastName: req.body.lastName || '',
            email: req.body.email || '',
            tenor: parseFloat(req.body.tenor, 10),
            amount: parseFloat(req.body.amount, 10),
            paymentInstallment: parseFloat(req.body.paymentInstallment, 10),
            status: req.body.status || 'pending',
            balance: parseFloat(req.body.balance),
            interest: parseFloat(req.body.interest),
            repaid: req.body.repaid || '',
            createdOn: new Date(),
        };
        AppDb.loans.push(applicant);
        res.json({ status: 201, data: applicant });
    }
};

export const LoanApplications = (req, res) => {
    const loanBody2 = req.body;
    const checkstatus = AppDb.loans.find(loan => loan.status === 'approved' && loan.repaid === 'true');
    res.json({ status: 200, data: AppDb.loans });
};

const loadByCheckUp = (req, res) => {
    const { status, repaid } = req.query;
    const loanInfo = [];
    let response = null;
    AppDb.loans.find((loan) => {
        if (loan.status === status && loan.repaid === repaid) {
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

export const loadLoans = (req, res) => {
    const { status, repaid } = req.body;
    if (status === undefined && repaid === undefined) {
        res.json(AppDb.loans);
    } else {
        loadByCheckUp(req, res);
    }

};