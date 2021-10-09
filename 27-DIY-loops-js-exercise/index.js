const dataTypes = [
  4,
  "hello",
  "2",
  { name: "Alex" },
  54,
  "random",
  23,
  "kitten",
  13.21,
  [1, 2, 3, 4],
  { type: "boolean" },
  [32, 52],
  43.1,
];

/**
 * Exercise 1
 *
 * create a function {sortedData} which will take data as param
 * (you can use){dataTypes} and sort it by type:
 * 1. strings,
 * 2. integers,
 * 3. floats,
 * 4. arrays,
 * 5. objects
 *
 * and return object with property names equals types, and values should be
 * arrays with  corespondent data
 *
 * Ex: const data = [5, 'kitten', 3.12, 12]
 *
 * result:
 * {
 *  integers: [5, 12],
 *  strings: ['kitten'],
 *  floats: [3.12]
 * }
 */
 const sortedData = (data) => {
  let strings = [];
  let objects = [];
  let integers = [];
  let booleans = [];
  let floats = [];
  let arrays = [];
  for (let prop of data) {
    if (typeof prop === 'string') {
      strings.push(prop);
    } else if (typeof prop === 'number') {
      if (prop % 1 === 0) {
        integers.push(prop);  
      } else {
        floats.push(prop);
      }    
    } else if (typeof prop === 'boolean') {
      booleans.push(prop);
    } else if (Array.isArray(prop)) {
      arrays.push(prop);
    } else if (typeof prop === 'object') {
      objects.push(prop);
    }
  }
  return {floats, strings, arrays, objects, integers, booleans};
};

/**
 * Exercise 2
 *
 * create a function {multipliedByNextNumber} which takes
 * an array of numbers and returns a new array where number equals
 * multiplication of number from passed array and the following number.
 * Presume that the following number for the last one is 1.
 *
 * Ex: pass [3,2,6]
 * result: [6, 12, 6]
 */
const multipliedByNextNumber = (arr) => {
    if (arr.length < 2) {
      return arr
    }
    let newArr = [];    
    for (i = 1; i < arr.length; i++) {
      newArr.push(arr[i-1] * arr[i])
    }
    newArr.push(arr[arr.length - 1])
    return newArr;
};
/**
 * Exercise 3
 *
 * create a function {multipliedEvenNumbers} which multiply
 * even number from passed array with following even number.
 * If there is no following even numbers, multiply by 2.
 *
 * return new numbers as new array
 *
 * ex: multipliedEvenNumbers([4,3,6,8,5,7])
 * result: [24, 3, 48, 16, 5, 7]
 */
const multipliedEvenNumbers = (arr2) => {
let retval = [];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 == 0) {
    let idx_next_even = 0;
    for (let j = i + 1; idx_next_even === 0 && j < arr2.length; j++) {
      if (arr2[j] % 2 == 0) {
        idx_next_even = j;
      }
    }
    if (0 < idx_next_even) {
      retval.push(arr2[i] * arr2[idx_next_even]);
    } else {
      retval.push(arr2[i] * 2);
    }
  } else {
    retval.push(arr2[i]);
  }
}
return retval;
};
/**
 * Exercise 4
 *
 * create a function {multipliedOddNumbers} which multiply
 * even number from passed array with following even number.
 * If there is no following even numbers, multiply by 1.
 *
 * return new numbers as new array
 *
 * ex: multipliedEvenNumbers([4,3,6,8,5,7])
 * result: [4, 15, 6, 8, 35, 7]
 */
 const multipliedOddNumbers = (arr3) => {
  let retval = [];
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 == 1) {
      let idx_next_odd = 0;
      for (let j = i + 1; idx_next_odd === 0 && j < arr3.length; j++) {
        if (arr3[j] % 2 == 1) {
          idx_next_odd = j;
        }
      }
      if (0 < idx_next_odd) {
        retval.push(arr3[i] * arr3[idx_next_odd]);
      } else {
        retval.push(arr3[i] * 1);
      }
    } else {
      retval.push(arr3[i]);
    }
  }
  return retval;
  };
/**
 * Exercise 5
 *
 * create a function {multipliedEvenOddNumbers} which will take
 * an array and type "even" or "odd".
 *
 * If you pass "even" do the same what you have for exercise 3
 * if you pass "odd" do the same what you have for exercise 4
 * else return original array.
 */
const multipliedEvenOddNumbers = (arr5, type) => {
  if (type === 'odd') {
    return multipliedOddNumbers(arr5);
  } else if (type === 'even') {
    return multipliedEvenNumbers(arr5);
  } else {
    return arr5;
  }
}
