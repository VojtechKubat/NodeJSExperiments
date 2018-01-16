'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Hello world');

// import bodyParser from 'body-parser';

var app = (0, _express2.default)();

app.listen(3000, function () {
    console.log('Server is listening on port 3000');
});
//# sourceMappingURL=index.js.map