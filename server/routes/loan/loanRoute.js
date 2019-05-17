import { Apply, LoanApplications, loadLoans } from '../../controllers/loanHandlers';

import { repay, loadRepayment } from '../../controllers/repaymentHandler';


const loanRoute = (expressApp) => {
    expressApp.post('/api/v1/loans', Apply);

    expressApp.get('/api/v1/loans', LoanApplications);

    expressApp.get('/api/v1/loans/:id');

    expressApp.get('/api/v1/loans', loadLoans);

    expressApp.patch('/api/v1/loans/:id');
    // repayment routes.

    expressApp.post('/api/v1/loans/repayment', repay);

    expressApp.get('/api/v1/loan/repayment', loadRepayment);
};

export default loanRoute;