// var obj = {
//   name: 'Ian'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Ian", "age": 22}';
//
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'This is some text.'
};

var originalNoteStr = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteStr);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

if (originalNote.title === note.title && originalNote.body === note.body) {
    console.log('Title: ', note.title);
    console.log('Body: ', note.body);
}
