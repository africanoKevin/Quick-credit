let _express = require('express');

let _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let app = (0, _express2.default)();

app.use(_express2.default.json());

app.get('/', (req, res) => {
    return res.status(200).send({ 'message': 'congratulations your first end point is working' });
});

app.listen(4000, () => {
    console.log('server is running on port 4000');
});