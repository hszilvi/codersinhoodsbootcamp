const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");

// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;

/**
 * Exercise 1
 *
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */
//  ## Deliverables

//  1. As a user I should be able to add a new timer to the DOM by clicking on "Add Timer".
//  2. A timer should continuously count up and always show seconds and the first two integers of milliseconds
//  3. When I click "Reset", that timer should return to 0.
//  4. When I click "Stop", it should stop that timer.
//  5. When I click "X", the timer should stop and be removed from the DOM
//  6. I should be able to add NO MORE than 5 timers.

// function counter() {
//     let retVal = 0;
//     while (num <= 5) {

//     }
// }

// const createTimerEl = (num) => {
//     const timerDiv = document.createElement('div'); 
//     timerDiv.classList.add('timer, timer_${num}');
//     timerDiv.innerHTML = 
//         `div class="remove"></div>
// 				<h3>0 <span>00</span></h3>
// 				<div class="btn">
// 					<button class="reset">Reset</button>
// 					<button class="stop">Stop</button>
// 				</div>`
//     ;
//     console.log(timerDiv);

// return num;
// };

// const addNewTimerButton = () => {
//     const button = document.querySelector('#new_timer');
//     button.addEventListener('click', (event) => {
//         let counter = 0;
//         let num = createTimerEl(num);
//         const totalTimer = document.querySelector('.timer').length;
//         while (totalTimer < 5) {
//             counter++;
//             createTimerEl();
//         };
//     });
// };

// const addNewTimer = () => {
//     const addTimerButton = document.querySelector('#new_timer');
//     addTimerButton.addEventListener('click', () => {
//         alert('hello');
//     } );

// };

const addTimerButton = document.querySelector('#new_timer');
const body = document.querySelector('body');
const timerDiv = document.getElementById('.timers');
    // const divContent = `div class="remove"></div>
    // <h3>0 <span>00</span></h3>
    // <div class="btn">
    //     <button class="reset">Reset</button>
    //     <button class="stop">Stop</button>
    // </div>`
    
addTimerButton.addEventListener('click', () => {
    //timerDiv.innerHTML = divContent;
    document.body.appendChild(timerDiv);
    //return timerDiv;
});