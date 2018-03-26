// Project Name: Notes
// Filename: app.js
// Author: Ian Petty

//Built-in Packages
const fs = require('fs');
const os = require('os');

//3rd Party Packages
const _ = require('lodash');
const lowerCase = require('to-lower');
const yargs = require('yargs');

// File Dependencies
const notes = require('./notes.js');

const argv = yargs.argv;
var command = lowerCase(argv._[0]);

console.log('Yargs: \n', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);

  if(typeof note == 'object') {
    console.log('Note added successfully...');
  } else {
    console.log('Note had a duplicate title... Please create a unique title for each note.');
  }
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else if (command === 'read') {
  notes.readNote(argv.title);
} else if (command === 'list') {
  notes.listAllNotes();
} /* else if (command === 'edit') {
  console.log('Editing note...');
} */ else {
  console.log('Command not recognized...');
}
