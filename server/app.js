import express from 'express';
import bodyParser from 'body-parser';
import masterRoute from './routes/masterRoute';

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

masterRoute(app);

app.listen(port, () => {
    console.debug('server is running on port 3000 ');
});
export default app;