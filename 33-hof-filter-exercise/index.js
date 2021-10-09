/**
 * Exercise 1
 *
 * create a function {noStrings} that takes an array
 * as a parameter and return an array but without strings
 */
const noStrings = (arr1) => {
    let noStrList = arr1.filter(elem => {
        return typeof elem !== 'string';
    });
    return noStrList;
};
/**
 * Exercise 2
 *
 * create a function {justStrings} that takes an array
 * as a parameter and return an array of strings by removing
 * every other type
 */
const justStrings = (arr2) => {
    let strings = arr2.filter(elem => {
        return typeof elem === 'string';
    });
    return strings;
};
/**
 * Exercise 3
 *
 * create a function {justStringsLongerThan5} that takes
 * an array as a parameter and return an array of strings
 * that are longer than 5 characters
 */
const justStringsLongerThan5 = (arr3) => {
    let longParams = arr3.filter(elem => {
        return elem.length > 5;
    });
    return longParams;
};
/**
 * Exercise 4
 *
 * create a function {numbersMoreThan13} that takes
 * an array as a parameter and return an array of numbers
 * that are more than 13
 */
const numbersMoreThan13 = (arr4) => {
    let bigNums = arr4.filter(elem => {
        return elem > 13;
    });
    return bigNums;
};
/**
 * Exercise 5
 *
 * create a function {objectsOnly} that takes
 * an array as a parameter and return an array of objects
 */
const objectsOnly = (arr5) => {
    let objList = arr5.filter(elem => {
        return typeof elem === 'object';
    });
    return objList;
};
/**
 * Exercise 6
 *
 * create a function {truthyOnly} that takes
 * an array as a parameter and return an array of truthy values.
 * IMPORTANT: You still need to keep number 0.
 */
const truthyOnly = (arr6) => {
    let truthyVal = arr6.filter(elem => {
        return !!elem || (typeof elem == 'number' && !isNaN(elem));
    });
    return truthyVal;
};