console.log('Starting app.js...');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// var user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);

console.log('Result: ', notes.add(3, 5));

console.log(_.isString('Ian'));

console.log(_.uniq([1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 6]));
