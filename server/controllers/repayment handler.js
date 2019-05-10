import RepaymentDbModel from '../models/repaymentDb';

const repayment = {

    repay(req, res) {
        const repayRecord = RepaymentDbModel.repay(req.body);
        res.json({ status: 200, data: repayRecord });
    },

    viewall(req, res) {
        const allrepayments = RepaymentDbModel.getAll();
        res.json({ status: 200, data: allrepayments });
    },
};

export default repayment;