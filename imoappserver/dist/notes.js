"use strict";

console.log(">>> notes.js");

var addNote = function addNote(title, body) {
    console.log("Adding note: ", title, body);
};

var listNotes = function listNotes() {
    console.log("List notes");
};

var getNote = function getNote(title) {
    console.log("Getting note:", title);
};

var removeNote = function removeNote(title) {
    console.log("Removing note:", title);
};

module.exports = {
    addNote: addNote,
    listNotes: listNotes,
    getNote: getNote,
    removeNote: removeNote
};
//# sourceMappingURL=notes.js.map