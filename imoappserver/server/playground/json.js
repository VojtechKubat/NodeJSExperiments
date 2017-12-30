/* @flow */
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

import fs from 'fs';

var originalNote = {
    title: "hello",
    body: "world"
}

var originalNoteStr = JSON.stringify(originalNote);

fs.writeFileSync("note.json", originalNoteStr);

var readNote = fs.readFileSync("note.json", "utf8");

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
