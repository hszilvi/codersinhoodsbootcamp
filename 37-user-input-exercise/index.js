// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require('readline-sync');
/**
 * Exercise 1
 *
 * ask user for a name and assign a response to variable {name}
 */
let name = {};
const userName = readlineSync.question('May I have your name? ');
name = userName;
//===== DO NOT TOUCH THIS BLOCK =====
console.log(`Hi ${name}!`);
console.log("=====================");
console.log(`Let me do math for you!`);
console.log("=====================");
//===================================

/**
 * Exercise 2
 *
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 */


let mathSymbols = ['+', '-', '*', '/'];
function getSymbols() {
    let value = mathSymbols.length;
    while (value < 0 || mathSymbols.length <= value) {
        value = readlineSync.keyInSelect(mathSymbols, 'Which mathematical operation do you choose? ');
    }
    return value;
};
let selectedSymbol = getSymbols();
/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
// let number1 = undefined;
// while (!Number.isInteger(number1)) {
//     number1 = parseInt(readlineSync.question('Give your first number! '));
// }
// let number2 = undefined;
// while (!Number.isInteger(number2)) {
//     number2 = parseInt(readlineSync.question('Give your second number! '));
// }

function getFirstNumber() {
    let number1 = readlineSync.question('Give your first number! ');
    let number1AsInt = parseInt(number1);
    if (Number.isInteger(number1AsInt)) {
        return number1AsInt;
    } else {
        return getFirstNumber();
    }
};
number1 = getFirstNumber();
/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */ 
function getSecondNumber() {
    let number2 = readlineSync.question('Give your second number! ');
    let number2AsInt = parseInt(number2);
    if (Number.isInteger(number2AsInt)) {
        return number2AsInt;
    } else {
        console.log('Enter valid number! ');
        return getSecondNumber();
    }
};
number2 = getSecondNumber();


/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 */
let result = undefined;
if (selectedSymbol == 0) {
    result = number1 + number2;
} else if (selectedSymbol == 1) {
    result = number1 - number2;
} else if (selectedSymbol == 2) {
    result = number1 * number2;
} else if (selectedSymbol == 3) {
    result = number1 / number2;
} else {
    console.log('Try again');
}
console.log("=====================");
console.log(`Here you go, the result is ${result}` );
