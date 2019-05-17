import userRoutes from './user/userRoute';
import loanRoute from './loan/loanRoute';

const routeMaster = (app) => {
    userRoutes(app);
    loanRoute(app);
};

export default routeMaster;