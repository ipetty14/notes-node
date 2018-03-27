// Project Name: Notes 
// Filename: app.js
// Author: Ian Petty

//Built-in Packages
const fs = require('fs');
const os = require('os');
const readline = require('readline');

//3rd Party Packages
const _ = require('lodash');
const lowerCase = require('to-lower');
const yargs = require('yargs');

// File Dependencies
const notes = require('./notes.js');

const argv = yargs.argv;
var command = lowerCase(argv._[0]);

console.log('Yargs: \n', argv);

//Add a new note to the database
if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);

  if(note) {
    console.log('Note successfully created...');
    notes.logNote(note);
  } else {
    console.log('Note had a duplicate title... Please create a unique title for each note.');
  }

}
//Remove a note from the database
else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message  = noteRemoved ? 'Note was removed...' : 'Note not found...';
  console.log(message);

}
// Print out the requested note
else if (command === 'read') {
  var note = notes.readNote(argv.title);

  if (note) {
    console.log('Note found...');
    notes.logNote(note);
  } else {
    console.log('Note not found...');
  }

}
// List the titles of all notes in the database
else if (command === 'list') {
  var allNotes = notes.listAllNotes();

  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));

}
//Grab note by title and edit it then return it to the database
else if (command === 'edit') {
  var note = notes.readNote(argv.title);
  var addToNote = '';

  if (note) {
    console.log('Note to Be Modified...');
    notes.logNote(note);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('What would you like to add to the note?\n', (appendText) => {
      var addToNote = appendText;

      console.log(addToNote);
      notes.editNote(argv.title, ' ' + addToNote);

      rl.close();
    });
  } else {
    console.log('Note not found...');
  }

}
// All other commands
else {
  console.log('Command not recognized...');
}
