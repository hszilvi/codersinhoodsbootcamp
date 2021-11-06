let step = 0;
let counter = 0;

/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */
const action = (symbol) => {
    const counterVal = document.querySelector('.counter_value');
    if (symbol === '+') {
        counter = parseInt(counter + step);
        counterVal.innerText = counter;
        return counter;
    } else if (symbol === '-') {
        counter = parseInt(counter - step);
        counterVal.innerText = counter;
        return counter;
    }
};
/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */
const setStepButton = document.querySelector('.step_form');
let setInputVal = document.querySelector('.step_form input');
setStepButton.addEventListener('submit', (event) => {
    event.preventDefault();
    step = parseInt(setInputVal.value);
    document.querySelector('.inc .step_value').innerText = step;
    setInputVal.value = 1
});

/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
const decrementButton = document.querySelector('#decrement');
decrementButton.addEventListener('click', () => {
    action('-');
});
/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
 const incrementButton = document.querySelector('#increment');
 incrementButton.addEventListener('click', () => {
     action('+');
 });
/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
const autoDec = document.querySelector('#auto_decrement');
let interval;
autoDec.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(() => {
        action('-');
    }, 1000);
    document.querySelector('.counter_value').innerText = interval;
});

/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */

const autoInc = document.querySelector('#auto_increment');
autoInc.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(() => {
        action('+');
    }, 1000);
    document.querySelector('.counter_value').innerText = interval;
});
/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */
const stopBtn = document.querySelector('#stop_auto');
stopBtn.addEventListener('click', () => {
    clearInterval(interval);
});