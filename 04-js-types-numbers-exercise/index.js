/**
 * Exercise 1
 *
 * create a function "isOdd" which takes a number as a parameter
 * and return a string "Is odd" if it's odd or "Not odd" if it's
 * anything else
 */
 function isOdd(num) {
    if (num % 2 === 1) {
        return "Is odd";
    } else 
        return "Not odd";
}
//console.log(isOdd(66));
/**
 * Exercise 2
 *
 * create a function "isEven" which takes a number as a parameter
 * and return a string "Is even" if it's even or "Not even" if it's
 * anything else
 */
function isEven(num2) {
    if (num2 % 2 === 0) {
        return "Is even";
    } else 
        return "Not even";
}
//console.log(isEven(78));
/**
 * Exercise 3
 *
 * create a function "oddOrEven" which takes a number as a parameter
 * and return a string "Is odd" if it's odd or "Is even" if it's even
 */
function oddOrEven(num3) {
    if (num3 % 2 === 0) {
        return "Is even";
    } if (num3 % 2 === 1) {
        return "Is odd";
    }
    else 
        return "It`s not an integer";
}
/**
 * Exercise 4
 *
 * create function "roundedNumber" which takes a fraction as a parameter
 * and return rounded integer
 */
 function roundedNumber(num4) {
    return Math.round(num4);
}
/**
 * Exercise 5
 *
 * create function "roundToLowerInteger" which takes a fraction as a parameter
 * and returns the largest integer less than or equal to a given number
 */
function roundToLowerInteger(num5) {
    return Math.floor(num5);
}
/**
 * Exercise 6
 *
 * create function "roundToLargerInteger" which takes a fraction as a parameter
 * and returns rounded number up to the next largest integer
 */
function roundToLargerInteger(num6) {
    return Math.ceil(num6);
}
/**
 * Exercise 7
 *
 * create function "convertToPositive" which takes a negative number as a parameter
 * and returns same number but positive
 */
function convertToPositive(num7) {
    if (num7 >= 0) {
        return num7;
    } else 
    return num7 * -1; 
}
/**
 * Exercise 8
 *
 * create function "findMaxNumber" which takes a few numbers(at least 4 numbers) as a parameters
 * and returns the maximum number
 */
function findMaxNumber(num0, num1, num2, num3) {
    return Math.max(num0, num1, num2, num3);
}
/**
 * Exercise 9
 *
 * create function "findMinNumber" which takes a few numbers(at least 4 numbers) as a parameters
 * and returns the minimum number
 */
function findMinNumber(num0, num1, num2, num3) {
    return Math.min(num0, num1, num2, num3);
}

