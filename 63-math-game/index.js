const body = document.querySelector('body');
const chosenNumberOfQuestions = document.querySelector('#amountOfEx');
const questionsArea = document.querySelector('.questions');
const userScores = document.querySelector('.pointsCounter');
const operationEl = document.querySelector('.mathOperations');
const userAnswer = document.querySelector('#answer');
const submit = document.querySelector('#submit');
const operators = ["+", "-", "*", "/"];
let state = {
    question: 0,
    score: 0,
    wrongAnswer: 0
};
let numberOne = 0;
let numberTwo = 0;
let operator;

// generate random operator from array
const generateMathOperator = () => {
    const index = Math.floor(Math.random()*3)+1;
    console.log(operators[index]);
    operator = operators[index];
    return operator;
    //return  operators[index];
}
// generate random numbers
const generateNumbers = () => {
    //let numbers = [];
    const number1 = Math.floor(Math.random()*100)+1;
    const number2 = Math.floor(Math.random()*100)+1;
    // numbers.push(number1);
    // numbers.push(number2);
    return numberOne = number1, numberTwo = number2;
    //return numbers;
}

console.log(`numberOne ${numberOne}, numberTwo ${numberTwo}, operator ${operator}`);
// create one operation
const generateMathSet = () => {

    // const generatedNumbers = generateNumbers();

    // const operation = generatedNumbers[0] + generateMathOperator() + generatedNumbers[1];
    // console.log(`createMathSet ${operation}`)
    let i = 0;
    let opTag = document.createElement('p');
    opTag.innerHTML = `
    <p>${numberOne}${operator}${numberTwo}=? </p>`;
    operationEl.appendChild(opTag);
    i++;
    console.log(`i = ${i}`);
    userAnswer.value = '';
    //return operation;
};
// // select how many exercises
chosenNumberOfQuestions.addEventListener('change', () => {
    state.question = chosenNumberOfQuestions.value;
    console.log(state.question);
    questionsArea.style.display = 'block';
    userScores.style.display = 'block';
    generateMathSet()
});
// // get correct answer

// const getCorrectAnswer = () => {
//     let correctAnswer;
//     const gNumbers = generateNumbers();
//     console.log(gNumbers);
//     const generatedOperator = generateMathOperator();
//     if (generatedOperator == '+') {
//         correctAnswer = gNumbers[1] + gNumbers[2];
//     } else if (generatedOperator == '-') {
//         correctAnswer = gNumbers[1] - gNumbers[2];
//     } else if (generatedOperator == '*') {
//         correctAnswer = gNumbers[1] * gNumbers[2];
//     } else if (generatedOperator == '/') {
//         correctAnswer = gNumbers[1] / gNumbers[2];
//     }
//     console.log(correctAnswer);
//     return correctAnswer;
// };
// submit.addEventListener("click", (event) => {
//     event.preventDefault();
//     getCorrectAnswer();
// });





