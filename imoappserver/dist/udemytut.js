'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userInfo = _os2.default.userInfo();

var udemytut = function udemytut() {
    console.log("Udemy Tutorial");
    // console.log(userInfo);

    // fs.appendFile("greetings.txt", `Hello ${userInfo.username}\n` , (err) => { 
    //     if (err) throw err;
    //     console.log("Saved!");
    // })

    // console.log(_.isString('aaa'));
    // console.log(_.uniq([4,2,2,2,1,1,1,2,3,4,1, 'a', 'a']));
};

exports.default = udemytut;
//# sourceMappingURL=udemytut.js.map