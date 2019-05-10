import express from 'express';
import bodyParser from 'body-parser';
import masretRoute from './server/routes/master-route';

const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json());
masretRoute(app);
app.listen(port, () => console.log('server is running on port 4000 '));

export default app;