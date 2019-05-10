/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/named
import loan from '../../controllers/loan-handler';

import repayment from '../../controllers/repayment handler';


const loanRoute = (expressApp) => {
    expressApp.post('/api/v1/loans', loan.application);
    expressApp.get('/api/v1/loans', loan.getAll);
    expressApp.get('/api/v1/loans/:id', loan.getOne);
    expressApp.put('/api/v1/loans/:id', loan.updateOne);

    expressApp.post('/api/v1/loans/repayment', repayment.repay);
    expressApp.get('/api/v1/loan/repayment', repayment.viewall);
    expressApp.get('/api/v1/bystatus', loan.getByStatus);
};

export default loanRoute;