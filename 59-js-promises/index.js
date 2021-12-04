const ingredients = [
  { name: "carrot", time: 500 },
  { name: "potato", time: 1000 },
  { name: "onion", time: 250 },
  { name: "celery", time: 150 },
  { name: "tomato", time: 100 },
];

/**
 * Exercise 1
 *
 * create a function {asyncCookIngredient} which takes 1 argument:
 *
 * an {ingredient} object (like the objects in the array on line 1)
 * with 2 keys: name and time.
 *
 * Return a promise which gets resolved after the time has elapsed.
 *
 * The value used to resolve the promise should be the original
 * {ingredient} object
 *
 */
const asyncCookIngredient = async (ingredient) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(ingredient)
    }, ingredient.time);
  })
  return promise;
};

/**
 * Exercise 2
 *
 * create a function {asyncCookMeal} which will recieve an
 * array of {ingredientsToCook} and call {asyncCookIngredient} for
 * each ingredient
 *
 * Return a promise which gets resolved after all of the
 * ingredients are cooked
 *
 * The value used to resolve the promise should be and object
 * containing an array of {ingredientNames} and the {totalTime}:
 *
 * {
 *  ingredientNames: ["carrot", "onion"],
 *  totalTime: 750
 * }
 *
 */
const asyncCookMeal = async (ingredients) => {
  const newPromise = new Promise((resolve) => {
    const result = {
      ingredientName: [],
      totalTime: 0
    };
    const maxTime = 0;
    for (let key in ingredients.time) {
      maxTime += ingredients.time[key];
    };
    ingredients.forEach(ingredient => {
      result.ingredientName.push(ingredient.name);
      result.totalTime += ingredient.time;
      asyncCookIngredient(ingredient);
    })
    setTimeout(() => {
      resolve(result);
    }, maxTime);
  });
  return newPromise;
};
