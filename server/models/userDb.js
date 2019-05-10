import uuid from 'uuid';

import config from '../config/config';

class User {
    /**
     * class constructor
     * @param {object} data
     */
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        this.users = [];
    }

    // eslint-disable-next-line class-methods-use-this
    userSignup(data) {
        const newUser = {
            token: config.secret,
            id: uuid.v4(),
            firstName: data.firstName || 'africano',
            lastName: data.lastName || 'kevin',
            email: data.email || 'afr@gmail.com',
            password: data.password || 'password',
        };
        this.users.push(newUser);
        return newUser;
    }

    // eslint-disable-next-line class-methods-use-this
    userSignin(data) {
        const newclient = {
            token: config.secret,
            id: uuid.v4(),
            firstName: data.firstName || 'africano',
            lastName: data.lastName || 'kevin',
            email: data.email || 'kev@gmail.com',
            password: data.password || 'password',
        };
        this.users.push(newclient);
        return newclient;
    }
}

export default new User();