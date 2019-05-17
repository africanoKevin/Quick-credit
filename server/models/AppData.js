import uuid from 'uuid';


const AppDb = {
    loans: [{
        id: 1,
        user: 'africano',
        email: 'africa@gmail.com',
        createdOn: '2013-01-02',
        status: '',
        repaid: true,
        tenor: 4,
        amount: 1000.00,
        paymentInstallment: 200.00,
        balance: 800.00,
        Interest: 70.00,
    }],
    users: [{
        id: 1,
        token: uuid.v4(),
        email: 'africa@gmail.com',
        firstName: 'Africano ',
        lastName: 'Kevin',
        password: 'guana',
        address: 'Kigali city, Rwanda',
        status: 'unverified',
        isAdmin: false,
        createdOn: '11-02-2019',
    }],
    repayments: [{
        id: 1,
        createdOn: '12-02-2019',
        loanId: 1,
        amount: 210,
        oldBalance: 1260, // current balance before minus paid amount monthly installement
        newBalance: 1050, // (loan + interest) - currently paid amount
    }],
};
export default AppDb;