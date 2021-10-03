/* ===================================== */
/* For these exercises use "for of" loop */
/* ===================================== */

/**
 * Exercise 1
 *
 * create a function {getIntegersOnly} which takes an array
 * as a param, get all integers from this array and return
 * a new array with these integers. If there is no integers it should return
 * empty array.
 */
const getIntegersOnly = (arr) => {
    intArr = [];
    for (let elem of arr) {
        if (Number.isInteger(elem)) {
           intArr.push(elem);
        }
    }
    return intArr;
};

/**
 * Exercise 2
 * create a function {getEvenNumbers}, which takes an array of integers
 * and returns a new array with even numbers only, if there is no even
 * integers it should return an empty array
 */
const getEvenNumbers = (arr2) => {
    evenArr = [];
    for (let elem2 of arr2) {
        if (elem2 % 2 == 0) {
            evenArr.push(elem2);
        }  
    }
    return evenArr;
};
/**
 * Exercise 3
 *
 * create a function {getEvenNumbersFromMixedArray},
 * which takes an array of values with different types and returns
 * a new array with even numbers only, if there is no even integers it
 * should return an empty array
 */
const getEvenNumbersFromMixedArray = (arr3) => {
    newArr = [];
    for (let elem3 of arr3) {
        if (Number.isInteger(elem3) && elem3 % 2 == 0) {
            newArr.push(elem3);
        }
    }
    return newArr;
};
/**
 * Exercise 4
 * create a function {getOddNumbers}, which takes an array of integers
 * and returns a new array with odd numbers only, if there is no odd
 * integers it should return an empty array
 */
const getOddNumbers = (arr4) => {
    oddArr = [];
    for (let elem4 of arr4) {
        if (elem4 % 2 == 1) {
            oddArr.push(elem4);
        }
    }
    return oddArr;
};


/**
 * Exercise 5
 * create a function {evenOddTransform} which takes
 * array of integers as a param. Take each integer
 * and if it's odd add 1, if it's even subtract 1
 *
 * If your param is [1,2,3,4,5] the result should be
 * [2,1,4,3,6]
 */
const evenOddTransform = (arr5) => {
    let retval = []
    for (let elem5 of arr5) {
        if (elem5 % 2 == 1) {
            retval.push(elem5 + 1);
        } else {
            retval.push(elem5 - 1);
        }
    }
    return retval;
};