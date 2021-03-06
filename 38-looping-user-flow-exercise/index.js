// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require('readline-sync');

let selectedItems = {
	book: "",
	movie: "",
	nextTrip: ""
};

const movies = [
	"The Invisible Man",
	"Never Rarely Sometimes Always",
	"Gretel & Hansel",
	"No time to die",
	"Bloodshot",
	"Onward",
	"Sonic"
];

const books = [
	"My Dark Vanessa",
	"Uncanny Valley",
	"Weather",
	"The night watchman",
	"All adults here",
	"Dear Edward",
	"Grown ups"
];

const countries = [
	"Italy",
	"France",
	"Germany",
	"Spain",
	"Portugal",
	"Denmark",
	"Netherland"
];

/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */
function menuBooks() {
	const indexBooks = readlineSync.keyInSelect(books, 'Which book? ');
	if (indexBooks < books.length) {
		selectedItems["book"] = books[indexBooks];
	}
};

/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */
function menuMovies() {
	const indexMovies = readlineSync.keyInSelect(movies, 'Which movie? ');
	if (indexMovies <= movies.length) {
		selectedItems['movie'] = movies[indexMovies];
	}
};
/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */
function nextDestination() {
	const indexCountries = readlineSync.keyInSelect(countries, 'Which country? ');
	if (indexCountries <= countries.length) {
		return selectedItems['nextTrip'] = countries[indexCountries];
	}
};

/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */
function mainMenu() {
	let index = 0;
	while (0 <= index) {
		const categories = ["Books", "Movies", "Next destination"];
		index = readlineSync.keyInSelect(categories, 'Which category? ');
		if (index == 0) {
			menuBooks();
		} else if (index == 1) {
			menuMovies();
		} else if (index == 2) {
			nextDestination();
		}
	}
};
mainMenu();
console.log(selectedItems);
