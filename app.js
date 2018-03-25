console.log('Starting app.js...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// var user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);

console.log('Result: ', notes.add(3, 5));
