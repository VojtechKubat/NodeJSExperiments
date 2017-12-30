/* @flow */

console.log(">>> notes.js");

let addNote = (title: string, body: string) => {
    console.log("Adding note: ", title, body);
};

let listNotes = () => {
    console.log("List notes");
};

let getNote = (title: string) => {
    console.log("Getting note:", title);
};

let removeNote = (title: string) => {
    console.log("Removing note:", title);
};

module.exports = {
    addNote,
    listNotes,
    getNote,
    removeNote
}