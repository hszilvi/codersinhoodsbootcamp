const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");

const body = document.querySelector("body");
let timersCount = 0;

// USE THIS VARIABLE TO COUNT TIMERS

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

const createTimerEl = (num) => {
  let timerDiv = document.createElement("div");
  timerDiv.classList.add("timer", `timer_${num}`);
  timerDiv.innerHTML = `
        <div class="remove"></div>
        <h3>0 <span>00</span></h3>
            <div class="btn">
                <button class="reset">Reset</button>
                <button class="stop">Stop</button>
            </div>`;
  // counter
  let counter = 0;
  const interval = setInterval(() => {
    let timerText = timerDiv.querySelector("h3");
    const sec = Math.floor(counter / 100);
    const mSec = counter % 100;
    timerText.innerHTML = `${sec}<span>${mSec}</span>`;
    counter++; 
  }, 10);

  // reset button
  let resetBtn = timerDiv.querySelector(".reset");
  resetBtn.addEventListener("click", () => {
    counter = 0;
  });
  // stop button
  let stopBtn = timerDiv.querySelector(".stop");
  stopBtn.addEventListener("click", () => {
    clearInterval(interval);
  });
  // add x button event
  const removeBtn = timerDiv.querySelector(".remove");
  removeBtn.addEventListener("click", () => {
    timersCount--;
    timerDiv.remove();
  });
  return timerDiv;
};
// new timers event, max 5 times
addCounterEl.addEventListener("click", () => {
  if (timersCount < 5) {
    timersCount++;
    console.log(timersCount);
    let newTimer = createTimerEl(timersCount);
    timersContainerEl.appendChild(newTimer);
  }
});
