import {
    Apply,
    loadLoans,
    SingleLoan,
    approveLoan,
} from '../../controllers/loanHandlers';

import { repay, loadRepayment } from '../../controllers/repaymentHandler';


const loanRoute = (expressApp) => {
    expressApp.post('/api/v1/loans', Apply);

    // gets all loans
    expressApp.get('/api/v1/loans', loadLoans);

    // gets a single loan
    expressApp.get('/api/v1/loans/:id', SingleLoan);

    // approves a loan application
    expressApp.patch('/api/v1/loans/:id', approveLoan);

    // repayment routes.

    expressApp.post('/api/v1/loans/repayment', repay);

    expressApp.get('/api/v1/loans/:id/repayments', loadRepayment);
};

export default loanRoute;