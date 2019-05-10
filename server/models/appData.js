import uuid from 'uuid';

// eslint-disable-next-line import/prefer-default-export
class LoanDb {
    /**
     * class constructor
     * @param {object} data
     */
    constructor() {
        this.loans = [];
    }

    // eslint-disable-next-line class-methods-use-this
    loanApplication(data) {
        const applicant = {
            id: uuid.v4(),
            firstname: data.firstname || 'afr',
            lastname: data.lastname || '',
            email: data.email || '',
            tenor: data.tenor || 0,
            amount: 12000.00,
            paymentInstallment: 2000.00,
            status: 'approved',
            balance: 12000.00,
            interest: 100.00,
            repaid: 'true',
        };
        this.loans.push(applicant);
        return applicant;
    }

    getSingle(id) {
        return this.loans.find(loan => loan.id === id);
    }

    getByStatus(status, repaid) {
        return this.loans.find(ln => ln.status === status);
    }

    getAll() {
        return this.loans;
    }

    update(id, data) {
        const loanUpdate = this.getSingle(id);
        const index = this.loans.indexOf(loanUpdate);
        // eslint-disable-next-line dot-notation
        this.loans[index].status = data['status'] || loanUpdate.status;
        return this.loans[index];
    }
}

export default new LoanDb();