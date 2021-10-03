/**
 * Exercise 1
 *
 * create an object {user}, which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */
let user = {
    firstName : "James",
    lastName : "Bond",
    age : 50 
};
console.log(user);
/**
 * Exercise 2
 *
 * create an object {allTypes} with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */
let allTypes = {
    title : 'Life of Brian',
    date : 1979,
    actors : ['Graham Chapman', 'John Cleese', 'Terry Gilliam', 'Eric Idle', 'Terry Jones', 'Michel Palin'],
    funFacts : {
        filmed : 'Tunesia',
        costumes : 'From Zeffirelli',
        backer : 'George Harrison',
        idmb : 8.1,
    },
    greating : function message() {
        console.log('great film');
    },
    goodFilm : true,
};
/**
 * Exercise 3
 *
 * create a function {createMovieObject} which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */
function createMovieObject(name, rating, ticketPrice) {
       return {
           name,
           rating,
           ticketPrice
       }
};
console.log(createMovieObject('James Bond', 2, 20));
