import UserModel from '../models/userDb';

const Users = {
    /**
     *
     * @param {object} req
     * @param {object} res
     * @returns {object} loan object
     */
    user(req, res) {
        const signUp = UserModel.userSignup(req.body);
        res.json({ status: 200, data: signUp });
    },

    newUser(req, res) {
        const signIn = UserModel.userSignin(req.body);
        res.json({ status: 200, data: signIn });
    },
};
export default Users;