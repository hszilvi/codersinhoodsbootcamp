// install and  import "readline-sync" npm package before you do exercises
const chalk = require('chalk');
const readlineSync = require('readline-sync');
const user = {};
/**
 * Exercise 1
 *
 * ask user for a first name and save response to {user.firstName}
 */
const userFirstName = readlineSync.question('May I have your first name? ');
user.firstName = userFirstName;
/**
 * Exercise 2
 *
 * ask user for a last name and save response to {user.lastName}
 */
const userLastName = readlineSync.question('May I have your last name? ');
user.lastName = userLastName;
console.log(`Hello ${user.firstName} ${user.lastName}!`);

/*
 * Exercise 3
 *
 * ask user for a age and save response to {user.age}
 */
const userAge = readlineSync.question('Give your age please: ');
user.age = userAge;
/*
 * Exercise 4
 *
 * ask user for a email and save response to {user.email}
 */
const userEmail = readlineSync.question('Give please your email adress: ');
user.email = userEmail;
/**
 * OPTIONAL:
 *
 * use "chalk" to print out user data with colours :)
 */
const printOutDataWithColours = () => {
console.log(chalk.blue(
  `Here what we have, your full name is ${user.firstName} ${user.lastName}. 
    You are ${user.age} and if we need to contact with you we can send 
    a letter to ${user.email} `)
);
}
printOutDataWithColours();
