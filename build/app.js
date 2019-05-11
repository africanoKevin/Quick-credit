let _express = require('express');

let _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let app = (0, _express2.default)();
const port = process.env.PORT || 4000;

app.use(_express2.default.json());

app.get('/', (req, res) =>
        res.status(200).send({ message: 'congratulations your first end point is working' });

        app.listen(port, () => {
            console.log('server is running on port 4000');
        });