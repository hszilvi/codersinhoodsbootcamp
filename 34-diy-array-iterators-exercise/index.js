// 
/**
 * !!! IMPORTANT !!!
 * 
 * USE "for" loop to recreate all JS pre-built functions
 */

/**
 * Exercise #1
 *
 * create a function forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */

const forEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
};

/**
 * Exercise #2
 *
 * create a function map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */
const map = (array, callback) => {
    retVal = [];
    for (let i = 0; i < array.length; i++) {
        retVal.push(callback(array[i], i));
    }
    return retVal;
};
/**
 * Exercise #3
 *
 * create a function filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */
const filter = (array, callback) => {
    retVal = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
            retVal.push(array[i]);
        }
    }
    return retVal;
};
/**
 * Exercise #4
 *
 * create a function find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *
 */
const find = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
           return (array[i]);
        }
    }
};
/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */
const findIndex =(array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
                return i;
        }
    }
};
/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 *
 */
//what you actually need is to have a counter and increment it everytime your callback
// return you true and then compare counter and array length  to return true or false,
// const every = (array, callback) => {
//     let retval = true;
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i], i)) {} else { retval = false; }
//     }
//     return retval;
// }




const every = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i)) {
            return false;            
        }
    }
    return true;
}


/**
 * Exercise #7
 *
 * some(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if _any_ time the
 * callback was invoked it returned
 * a truthy value.
 *
 */
const some = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
            return true;
        }
    }
    return false;
};
/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array and is passed
 * **the current cumulative value**,
 * each element and the index. Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */
const reduce = (array, callback, initialValue = 0) => {
    let sum = initialValue;
    for (let i = 0; i < array.length; i++) {
        sum = callback(sum, array[i], i);
    }
    return sum;
};
