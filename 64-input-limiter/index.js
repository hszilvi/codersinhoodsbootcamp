const body = document.querySelector('body');
const textarea = document.querySelector('#userText');
const counterSpan = document.querySelector('#actualCharNumber');
const checkbox = document.querySelector('#ticked');
const textareaCharNum = document.querySelector('.charInTextarea');
let actualRemainCharacter = document.querySelector('#actualCharNumber');
const resetButton = document.querySelector('.reset');
let maximumCharacter = 20;

const countCharacters = () => {
    let typedCharacter = textarea.value;
    console.log(textarea.value);
    if (typedCharacter.length <= maximumCharacter) {
        let counter = actualRemainCharacter;
        counter = maximumCharacter - typedCharacter.length;
        console.log(counter);
        counterSpan.innerText = `${counter}`;
        ;
    } else {
        alert('No more space, stop typing!');
    }
};
const appearTypedCharNumber = () => {
    let typedCharacter = textarea.value;
    if (typedCharacter.length <= maximumCharacter) {
        console.log(typedCharacter.length);
        textareaCharNum.innerText = `${typedCharacter.length}`;
    };
};
textarea.addEventListener('keyup', (event) => {
    event.preventDefault();
        countCharacters();    
});
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        appearTypedCharNumber();
    } else {
        let clear = textareaCharNum;
        clear.innerText = '';
    }
});
resetButton.addEventListener('click', () => {
    textarea.value = '';
    checkbox.checked = false;
    textareaCharNum.style.display = 'none';
    location.reload();
});

