import Users from '../../controllers/user-handler';

const userRoute = (expressApp) => {
    expressApp.post('/api/v1/auth/signUp', Users.user);
    expressApp.post('/api/v1/auth/signin', Users.newUser);
    expressApp.patch('/api/v1/users/useremail/verify');
};

export default userRoute;