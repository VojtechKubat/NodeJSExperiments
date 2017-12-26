"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function getLength(str) {
  return str.length;
}

var objWithLength = {
  length: 25
};

var objWithoutLength = {
  a: 10
};

getLength(objWithLength);
// getLength(objWithoutLength);

var test = function test(msg) {
  console.log(getLength(objWithLength));
  console.log(msg);
};

exports.default = test;
//# sourceMappingURL=test.js.map