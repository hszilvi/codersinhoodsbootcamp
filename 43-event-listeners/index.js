// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */
const clickTheButton = () => {
  const button = document.querySelector(".click button");
  button.addEventListener("click", () => {
    console.log("Clicked button");
  });
};
/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */
const hoverOver = () => {
  const mOver = document.querySelector(".mouseover a");
  mOver.addEventListener("mouseover", () => {
    console.log("Mouse is over");
  });
};
/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */
const handleLeave = () => {
  const cLeaves = document.querySelector(".mouseover a");
  cLeaves.addEventListener("mouseout", () => {
    console.log("The mouse left this text");
  });
};
/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */
const focusOnMe = () => {
  const focusOn = document.querySelector(".input input");
  focusOn.addEventListener("focus", () => {
    console.log("You are focusing!");
  });
};
/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */
const clickElsewhere = () => {
  const clickAway = document.querySelector(".input input");
  clickAway.addEventListener("blur", () => {
    console.log("clicked elsewhere");
  });
};
/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */
const pressAKey = () => {
  const focusInput = document.querySelector(".input input");
  focusInput.addEventListener("keydown", () => {
    console.log("press any key");
  });
};
/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
const releaseAKey = () => {
  const pressAndRelease = document.querySelector(".input input");
  pressAndRelease.addEventListener("keyup", () => {
    console.log("Do whatever you want");
  });
};
/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
const inputToUpperCase = () => {
  const toUpper = document.querySelector(".input input");
  toUpper.addEventListener("keyup", () => {
    toUpper.value = toUpper.value.toUpperCase();
  });
};
/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */
const handleSelectChange = () => {
  const optVal = document.querySelector("#items");
  optVal.addEventListener("change", (event) => {
    console.log(event.target.value);
  });
};
/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 */
// const submitFormHandler = () => {
//     const form = document.querySelector('form');

//     const firstName = document.querySelector('form input[name="firstName"]');
//     const lastName = document.querySelector('form input[name="lastName"]');
//     form.addEventListener('submit', () => {

//         const user = {
//             firstName: firstName.value,
//             lastName: lastName.value
//         }
//         console.log(user);

//     });
// };
const submitFormHandler = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    const inputs = event.target.querySelectorAll("input");
    let user = {};
    inputs.forEach((input) => {
      const name = input.name;
      const value = input.value;
      user[name] = value;
    });
    console.log(user);
  });
};

/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */
const handleScroll = () => {
  window.addEventListener("scroll", () => {
    console.log(scrollY);
  });
};
