var rs = require("readline-sync");

var firstNumber = rs.question('Please enter your first number ');

var secondNumber = rs.question('Please enter you second number ');

var operations = ['addition', 'subtraction', 'multiplication', 'division']
index = rs.keyInSelect(operations, 'Please enter the operation to perform:' );

operations[0] = +firstNumber + +secondNumber
operations[1] = +firstNumber - +secondNumber
operations[2] = +firstNumber * +secondNumber
operations[3] = +firstNumber / +secondNumber

console.log("The result is: " + operations[index])
