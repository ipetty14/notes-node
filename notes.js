// Project Name: Notes
// Filename: notes.js
// Author: Ian Petty

const fs = require('fs');

var fetchNotes = () => {
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
  var notes = fetchNotes();
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
  var notes = fetchNotes();

  for (var i = 0; i < notes.length; i++) {
    console.log(i + '. ' + notes[i].title);
  }

};

var removeNote = (title) => {
  var notes = fetchNotes();
  var notesToKeep = notes.filter((note) => note.title !== title);
  saveNotes(notesToKeep);

  return notes.length !== notesToKeep.length;
};

var readNote = (title) => {
  var notes = fetchNotes();
  var noteToRead = notes.filter((note) => note.title === title);

  return noteToRead[0];
};

/* Simple edit function that finds a note, stores it temporarily,
 * removes the old instance of the note, then adds it to the
 * database again as a new note with the same title. */
var editNote = (title, textToAdd) => {
  var notes = fetchNotes();
  var noteToEdit = notes.filter((note) => note.title === title);

  removeNote(title);

  addNote(title, noteToEdit[0].body + ' ' + textToAdd);
};

module.exports = {
  addNote,
  listAllNotes,
  removeNote,
  readNote,
  editNote
};
