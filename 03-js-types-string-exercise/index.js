/**
 * Exercise 1
 * 
 * create a function "greetGenerator" which takes 2 params
 * first - greeting, second - name and return it as one string
 * separated with space(" ")
 */

function greetGenerator(greeting, name) {
    greeting = "Hello";
    name = "Kitty";
    return greeting + " " + name;
}
console.log(greetGenerator());
/**
 * Exercise 2
 * 
 * create a function "convertToLowerCase" which takes a capitalized string
 * as a param, convert to lowercase string and return it.
 */
function convertToLowerCase(capitalizedString) {
    return capitalizedString.toLowerCase();
}
//console.log(convertToLowerCase("Hello Kitty"));
/**
 * Exercise 3
 * 
 * create a function "convertToUpperCase" which takes a lowercase string
 * for example('kitten') as a param, convert to uppercase string('KITTEN') and return it.
 */
function convertToUpperCase(lowercaseString) {
    return lowercaseString.toUpperCase();
}
//console.log(convertToUpperCase("Hello Kitty"));
/**
 * Exercise 4
 * create a function 'getCharByIndex' that takes a string and a character position
 * as a params and return a character from your string that is in selected position
 */
 function getCharByIndex(str, arrayFromStr) {
    arrayFromStr = Array.from(str);
    for (var i = 0; i <arrayFromStr.length; i++) {
        return arrayFromStr[i];
    }
}
//console.log(getCharByIndex(("Hello Kitty")[3]));