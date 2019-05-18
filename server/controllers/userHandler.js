import uuid from 'uuid';
import AppDb from '../models/AppData';

export const UserSignUp = (req, res) => {
    const Body = req.body;
    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password) {
        res.status(400).json({ status: 400, err: 'All fields are required' });
    } else {
        Body.token = uuid.v4();
        Body.id = AppDb.users.length + 1;
        Body.status = 'unverified';
        Body.isAdmin = false;
        const user = {
            id: Body.id,
            token: Body.token,
            firstName: Body.firstName,
            lastName: Body.lastName,
            email: Body.email,
            password: Body.password,
            status: Body.status || '',
        };
        AppDb.users.push(user);
        res.status(201).json({ status: 201, data: user });
    }
};

export const UserSigIn = (req, res) => {
    const Body = req.body;
    if (!req.body.email === undefined && !req.body.password === undefined) {
        res.status(400).json({ status: 400, err: 'fill correctly the required fields' });
    } else {
        const info = AppDb.users.find(user => user.email === Body.email && user.password === Body.password);
        if (info === undefined) {
            res.json({ status: 200, message: 'no data found! please insert correct credentials' });
        } else if (info.status === 'unverified') {
            res.status(403).json({ status: 403, message: 'Account is yet to be verified' });
        } else {
            const signIn = {
                id: info.id,
                token: info.token,
                firstName: info.firstName,
                lastName: info.lastName,
                email: info.email,
                status: info.status,
                isAdmin: info.isAdmin,
            };
            res.status(200).json({ status: 200, data: signIn });
        }
    }
};

export const VerifyClient = (req, res) => {
    const userEmail = req.params.email;
    const info = AppDb.users;
    if (!userEmail === undefined) {
        res.status(400).json({ status: 400, message: 'please fill a correct mail' });
    } else {
        const userIndex = info.findIndex(user => user.email === userEmail);
        if (userIndex === -1) {
            res.status(404).json({ status: 404, err: 'no data is found for the related Email' });
        } else {
            info[userIndex].status = 'verified';
            const verify = {
                id: info[userIndex].id,
                token: info[userIndex].token,
                firstName: info[userIndex].firstName,
                lastName: info[userIndex].lastName,
                email: info[userIndex].email,
                status: info[userIndex].status,
            };
            res.status(200).json({ status: 200, data: verify });
        }
    }
};