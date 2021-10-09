/* ================ */
/* INLINE FUNCTIONS */
/* ================ */

/**
 * Exercise 1
 *
 * create an inline function {reverseArray} that takes array as a param
 * and return reversed array. If you don't pass any param,
 * use default value "[]", is you pass any other type than array
 * return a string "Please, pass correct type".
 */
function reverseArray(arr) {
    if (Array.isArray(arr)) {
        return arr.reverse();
    }
    if (arr === undefined) {
        return [];
    }
    return "Please, pass correct type";
};
/**
 * Exercise 2
 *
 * create an inline function {nextOddNum} that takes number as a param
 * and return next odd number.
 */
function nextOddNum(number) {
    if (number %2 == 0) {
        return number + 1;
    } else {
        return number + 2;
    }
};
/**
 * Exercise 3
 *
 * create an inline function {isLessThan100} which should take
 * 2 numbers as a param.
 * Given two numbers, return true if the sum of both numbers is
 * less than 100. Otherwise return false.
 */
function isLessThan100(num1, num2) {
    if ((num1 + num2) < 100) {
        return true;
    } else {
        return false;
    }
};
/**
 * Exercise 4
 * create an inline function {incrementBy5} which takes
 * a number as a param, add 5 and return the result.
 */
function incrementBy5(number) {
    return number + 5;
};


/**
 * Exercise 5
 * create a function {incrementAllBy5} which takes array
 * of numbers as a first param and a incrementor function as a second param.
 * Then apply incrementor function to each element in your array and
 * return the result
 */
function incrementAllBy5(array, inc_func) {
    let arr = [];
    for (let elem of array) {
        arr.push(inc_func(elem));
    }
    return arr;
};