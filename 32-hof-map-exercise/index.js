// ============================================
// ALL IMPLEMENTATIONS SHOULD BE WITH {map} METHOD
// ============================================

/**
 * Exercise 1
 *
 * create an arrow function {convertToPositive} which takes
 * array of numbers, convert all negatives to positives and return
 * a new array.
 */
const convertToPositive = (array1) => {
    let allPositives = array1.map(elem => {
        return Math.abs(elem);
    });
    return allPositives;
};
/**
 * Exercise 2
 *
 * create an arrow function {getAllNames} which will take
 * an array of users(objects) as parameter and return an
 * array on names
 *
 * Ex: getAllNames([
 *   {name: 'Alex', age: 26},
 *   {name: 'John', age: 25}
 * ]) will return ['Alex', 'John']
 */
const getAllNames = (array2) => {
    const names = array2.map(elem => {
        return elem.name;
    });
    return names;
};
/**
 * Exercise 3
 *
 * create a function {greetAll} that takes array of names as a parameter
 * and return a new array of greetings "Hi, {name}!"
 */
const greetAll = (array3) => {
    let greetings = array3.map(name => {
        return `Hi, ${name}!`;
    })
    return greetings;
};
/**
 * Exercise 4
 *
 * create a function {multiplyAllNumbers} that takes an array as a param
 * and multiply all numbers inside array by 5 and return the whole array
 * with multiplied numbers
 */
const multiplyAllNumbers = (array4) => {
    let multiplied = array4.map(elem => {
        if (typeof elem === 'number') {
       elem = elem * 5;
    } return elem;
    });
    return multiplied;
};