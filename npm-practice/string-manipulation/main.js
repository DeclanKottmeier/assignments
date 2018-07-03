var rs = require("readline-sync");

var firstName = rs.question('What is your first name? ');
console.log('HI ' + firstName.toUpperCase() + '!');

console.log(firstName.length)

var lastName = rs.question('What is your last name? ');
console.log('Hi ' + firstName.concat(lastName));

var longSentence = rs.question('Type over 20 characters? ')
console.log(longSentence.slice(Math.floor((longSentence.length / 2)), longSentence.length))

var number = rs.question('Type in any number ')
console.log(longSentence.slice(number, longSentence.length))