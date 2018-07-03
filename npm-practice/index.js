var rs = require("readline-sync");

var userName = rs.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var directions = ["north", "south", "east", "west"];
var direction = rs.keyInSelect(directions, "Which way do you want to do?");

console.log(direction);