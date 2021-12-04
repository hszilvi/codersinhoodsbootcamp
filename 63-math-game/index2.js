const body = document.querySelector('body');
const chosenNumberOfQuestions = document.querySelector('#amountOfEx');
const questionsArea = document.querySelector('.questions');
const userScores = document.querySelector('.pointsCounter');
const operationEl = document.querySelector('.mathOperations');
const userAnswer = document.querySelector('#answer');
const submit = document.querySelector('#submit');
const userActualScore = document.querySelector('.userScore');
const operators = ["+", "-", "*", "/"];
let state = {
    question: 0,
    score: 0,
    wrongAnswer: 0
};

const generateNumber = (max) => {
    return Math.floor(Math.random()*(max) + 1);
};
const generateMathOperation = () => {
    let operationElements = {};
    return operationElements = {numberOne: generateNumber(100), numberTwo: generateNumber(100), operator: operators[generateNumber(3)] }
};
// get operation function
const getOperation = () => {
    generatedOperation = generateMathOperation();
    let opTag = document.createElement('p');
    opTag.innerHTML = `
    <p>${generatedOperation.numberOne} ${generatedOperation.operator} ${generatedOperation.numberTwo} = ? </p>`;
    operationEl.appendChild(opTag);
    console.log(opTag);
};
chosenNumberOfQuestions.addEventListener('change', () => {
    state.question = chosenNumberOfQuestions.value;
    questionsArea.style.display = 'block';
    userScores.style.display = 'block';
    getOperation()
});
const handleSubmit = () => {
    let correctAnswer;
    const {numberOne, numberTwo, operator} = generatedOperation;
    console.log(generatedOperation);
    if (operator == '+') {
        correctAnswer = numberOne + numberTwo;
    }
    if (operator == '-') {
        correctAnswer = numberOne - numberTwo;
    }
    if (operator == '*'){
        correctAnswer = numberOne * numberTwo;
    }
    if (operator == '/') {
        correctAnswer = numberOne / numberTwo;
    }
    console.log(userAnswer.value);
    let result = parseInt(userAnswer.value);
    if (result == correctAnswer) {
        state.score++
        userActualScore.innerText = state.score;

    } else {
        state.wrongAnswer++
        console.log(`wrong answer ${state.wrongAnswer}`);
    }
    console.log(`this is ${state.score}`);
    state.question--;
    console.log(state.question);
    if (state.question > 0) {
        getOperation();
        userAnswer.value = '';
    } else {
        alert(`End. Your score: ${state.score} / ${chosenNumberOfQuestions.value}`);
    }  
};
submit.addEventListener('click', (event) => {
    event.preventDefault();
    handleSubmit();
});
