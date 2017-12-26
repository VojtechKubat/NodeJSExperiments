'use strict';

var _test = require('./test');

var _test2 = _interopRequireDefault(_test);

var _udemytut = require('./udemytut');

var _udemytut2 = _interopRequireDefault(_udemytut);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// test("HELLO WORLD!");
// udemytut();
// for (var i = 0; i < 10; i++) {
//     fs.appendFile("greetings.txt", "Hello world\n/n", (err) => {
//         console.log(">>> fs error: " + err);
//     });
// }

_fs2.default.appendFile('message.txt', 'data to append\n', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
//# sourceMappingURL=index.js.map