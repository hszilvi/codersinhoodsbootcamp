/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */
const logProperties = (obj) => {
       for(let propertyName in obj) {
        console.log('Property name: ' + propertyName); 
    }
}

/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */
const getAllValues = (obj2) => {
    let arr = [];
    for (let key in obj2) {
        arr.push(obj2[key]);
    }
    return arr;
} 

/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */
const getAllValuesAsString = (obj3) => {
    let list = '';
    for (let prop in obj3) {    
        list += (obj3[prop]) + ' ';
    }
    return list.trim();
};
/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * "{key}: {value}"
 */

const propertyValueString = (obj4) => {
     for (let prop4 in obj4) {
        console.log(`${prop4}: ${obj4[prop4]}`);
    }
}