/**
 * Exercise 1
 *
 * create a class {Timer} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */
const addTimer = document.querySelector('#new_timer');
const timers = document.querySelector('.timers');

class Timer {
  
    // #timer() {
        
    //     this.#totalSeconds++;
    //     let sec = Math.floor(this.#totalSeconds / 3600);
    //     let min = Math.floor(this.#totalSeconds / 60);
    //     let timerText = timerEl.querySelector('h3');
    //     timerText = `${sec} <span>${min}</span>`
    // };
    // #stopTimer() {
    //     let timerVar = setInterval(this.#timer, 1000)
    //     clearInterval(timerVar);
    // };

    #createTimerElement() {
        // create timer element in html
        let timerEl = document.createElement('div');
        timerEl.classList.add('timer');
        timerEl.innerHTML = `
                <div class="timer timer_1">
                    <div class="remove"></div>
                    <h3>0 <span>00</span></h3>
                    <div class="btn">
                        <button class="reset">Reset</button>
                        <button class="stop">Stop</button>
                    </div>
                </div>
        `;
        // timer starts
        let totalSeconds = 0;
        const timer = setInterval(() => {
            let timerText = timerEl.querySelector('h3');
            let sec = totalSeconds % 60;
            let min = ~~(totalSeconds / 60);
            timerText.innerHTML = `${min} <span>${sec}</span>`;
            console.log(timerText);
            totalSeconds++;
        }, 1000);
        // buttons
        const resetBtn = timerEl.querySelector('.reset');
        const stopBtn = timerEl.querySelector('.stop');
        const removeBtn = timerEl.querySelector('.remove');
        resetBtn.addEventListener('click', () => {
            totalSeconds = 0;
        });
        stopBtn.addEventListener('click', () => {
            clearInterval(timer);
        });
        removeBtn.addEventListener('click', () => {
            timerEl.remove();
        })
    
        return timerEl;
    };

    init() {
        const newTimer = this.#createTimerElement();
        timers.appendChild(newTimer);
    };
};

addTimer.addEventListener('click', () => {
    const timer = new Timer();
    timer.init();
});
