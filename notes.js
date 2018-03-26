// Project Name: Notes
//Filename: notes.js
// Author: Ian Petty

const fs = require('fs');

var fecthNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fecthNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length == 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var listAllNotes = () => {
  console.log('Getting all notes...');
};

var removeNote = (title) => {
  console.log('Removing note: ', title);
};

var readNote = (title) => {
  console.log('Reading note: ', title);
};

module.exports = {
  addNote,
  listAllNotes,
  removeNote,
  readNote
};
