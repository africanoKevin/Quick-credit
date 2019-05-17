import { UserSignUp, UserSigIn, VerifyClient } from '../../controllers/userHandler';

const userRoute = (expressApp) => {
    expressApp.post('/api/v1/auth/signUp', UserSignUp);
    expressApp.post('/api/v1/auth/signin', UserSigIn);
    expressApp.patch('/api/v1/users/:email/verify', VerifyClient);
};

export default userRoute;