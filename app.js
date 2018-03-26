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

// console.log('Yargs: \n', argv);

//Add a new note to the database
if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);

  if(note) {
    console.log('Note added successfully...');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log('Note had a duplicate title... Please create a unique title for each note.');
  }
} else if (command === 'remove') { //Remove a note from the database
  var noteRemoved = notes.removeNote(argv.title);
  var message  = noteRemoved ? 'Note was removed...' : 'Note not found...';
  console.log(message);
} else if (command === 'read') { // Print out the requested note
  var noteRead = notes.readNote(argv.title);

  if (noteRead) {
    console.log(`Title: ${noteRead.title}`);
    console.log(`Body: ${noteRead.body}`);
  } else {
    console.log('Note not found...');
  }
} else if (command === 'list') { // List the titles of all notes in the database
  notes.listAllNotes();
} else if (command === 'edit') {
  var noteRead = notes.readNote(argv.title);
  var addToNote = '';

  if (noteRead) {
    console.log(`Title: ${noteRead.title}`);
    console.log(`Body: ${noteRead.body}`);
    
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
} else {
  console.log('Command not recognized...');
}
