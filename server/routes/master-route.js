import userRoutes from './user/user-route';
import loanRoute from './loan/loan-route';

const routeMaster = (app) => {
    userRoutes(app);
    loanRoute(app);
};

export default routeMaster;