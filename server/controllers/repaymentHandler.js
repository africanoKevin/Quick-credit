import AppDb from '../models/AppData';


export const loadRepayment = (req, res) => {
    const repayParam = req.params;
    let response = null;
    if (repayParam.id === undefined) {
        response = {
            status: 400,
            data: {
                message: 'there might be some missing parameters',
            },
        };
    } else {
        response = {
            status: 200,
            data: AppDb.repayments.find(transaction => parseInt(transaction.loanId) === parseInt(repayParam.id)),
        };
    }
    res.json(response);
};
export const repaymentById = (req, res) => {
    const repayInfo = AppDb.body;
    const repaymentInfo = AppDb.repayments.find(transaction => transaction.id === repayInfo.id);
    res.json(repaymentInfo);
};

export const repay = (req, res) => {
    const repayment = req.params;
    let response = null;
    // increment repayment id for the next repayment
    repayment.repayid = AppDb.repayments.length + 1;
    if (repayment.id === undefined) {
        response = {
            status: 400,
            data: {
                message: 'loan is un defined',
            },
        };
    } else if (req.body.amount === undefined) {
        response = {
            status: 400,
            data: {
                message: 'bad request,repayment amount must defined',
            },
        };
    } else {
        // get loan information and index based on loan id passed
        const loanInfo = AppDb.loans.find(loan => loan.id === parseInt(repayment.id));
        const loanIndex = AppDb.loans.findIndex(loan => loan.id === parseInt(repayment.id));
        if (loanIndex === -1) {
            response = {
                status: 200,
                data: {
                    message: 'specified does not  exist',
                },
            };
        } else if (loanInfo.status === 'pending') {
            response = {
                status: 200,
                data: {
                    message: 'sorry loan application not yet approved',
                },
            };
        } else if (parseFloat(loanInfo.paymentInstallement) !== parseFloat(req.body.amount)) {
            response = {
                status: 200,
                data: {
                    message: `amount paid does not match to installement payment paid ${req.body.amount} installement payment must be ${loanInfo.paymentInstallement}`,
                },
            };
        } else {
            // set up repayment parameters to be pushed int repayments array entity
            const nwBalance = parseFloat(loanInfo.balance) - parseFloat(req.body.amount);
            const repayInfo = {
                id: repayment.repayid,
                loanId: parseInt(repayment.id),
                amount: req.body.amount,
                oldBalance: parseFloat(loanInfo.balance),
                newBalance: nwBalance,
                createdOn: new Date(),
            };
            // pushing repayment transaction into entity
            AppDb.repayments.push(repayInfo);
            // update loan as repayment done
            AppDb.loans[loanIndex].balance = nwBalance;
            // check new balance become  zero change loan statu to repaid
            if (nwBalance === 0) {
                AppDb.loans[loanIndex].repaid = true;
            }
            // response generate
            response = {
                status: 200,
                data: {
                    id: repayment.repayid,
                    loanId: repayment.id,
                    amount: loanInfo.amount,
                    createdOn: loanInfo.createdOn,
                    interest: loanInfo.interest,
                    monthlyInstallement: loanInfo.paymentInstallement,
                    paidAmount: req.body.amount,
                    balance: loanInfo.balance,
                },
            };
        }
    }
    res.status(response.status).json(response);
};