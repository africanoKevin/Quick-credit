import uuid from 'uuid';

class RepaymentDb {
    /**
     * class constructor
     * @param {object} data
     */
    constructor() {
        this.repayment = [];
    }

    // eslint-disable-next-line class-methods-use-this
    repay(data) {
        const repayRecord = {

            id: uuid.v4(),
            loanId: this.repayment.length + 1,
            createdOn: new Date().toDateString(),
            amount: data.amount || '2000.00',
            monthlyInstallment: data.monthlyInstallment || '50. 00',
            paidAmount: data.paidAmount || '500.00',
            balance: data.balance || '1500.00',
        };
        this.repayment.push(repayRecord);
        return repayRecord;
    }

    getAll() {
        return this.repayment;
    }
}

export default new RepaymentDb();