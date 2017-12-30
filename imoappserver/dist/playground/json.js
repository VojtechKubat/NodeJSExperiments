"use strict";

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var originalNote = {
    title: "hello",
    body: "world"
};
// const obj = {
//     "title" : "Hello",
//     "body" : "world"
// }

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"firstname": "John", "lastname": "Doe", "born": 1990}';
// var personObj = JSON.parse(personString);
// console.log(typeof personObj);
// console.log(personObj);
// console.log("Person:", personObj.firstname, personObj.lastname, personObj.born);

var originalNoteStr = JSON.stringify(originalNote);

_fs2.default.writeFileSync("note.json", originalNoteStr);

var readNote = _fs2.default.readFileSync("note.json", "utf8");

console.log("Read from file:", readNote);

// if (typeof readNote === 'string') {
// console.log("Type of fs.readFileSync:", (typeof(readNote)));
var noteObj = JSON.parse(readNote);
// }
if (noteObj !== undefined) {
    console.log(">>> read note:", noteObj);
} else {
    console.log(">>> read failed");
}
//# sourceMappingURL=json.js.map