// OPEN index.html IN YOUR BROWSER
// OPEN DEV TOOLS, OPEN THE CONSOLE TAB
// CALL YOUR FUNCTIONS IN THE CONSOLE TO
// TEST YOUR CHANGES

/**
 * Exercise 1
 * create a function {setTitle} which takes a string as an argument
 * and displays it in the h1
 */
const setTitle = (title) => document.querySelector('h1').innerText = title; 
/**
 * Exercise 2
 * create a function {appendToTitle} which takes a string as an argument
 * and appends it to existing h1 text
 */
const appendToTitle = (title) => document.querySelector('h1').innerText += title;
/**
 * Exercise 3
 * create a function {prependToTitle} which takes a string as an argument
 * and prepends it to existing h1 element text
 */
const prependToTitle = (title) => {
    let h1Selector = document.querySelector('h1');
    h1Selector.innerText = title + h1Selector.innerText;
};
/**
 * Exercise 4
 * create a function {setInnerHTMLForDiv} which takes a tag name and text as
 * arguments and uses innerHTML to replace the element inside the div, and the
 * text is displayed inside that element. The element should be the tag name
 * passed into the function
 */
const setInnerHTMLForDiv = (tagName, text) => {
    const div = document.querySelector('div');
    const newTag = document.createElement(tagName);
    newTag.innerHTML = text;
    div.appendChild(newTag);

};
/**
 * Exercise 5
 * create a function {pushPtoDivWithText} which takes a string as an argument
 * and uses innerHTML to add a p tag containing the text into the div
 */
const pushPtoDivWithText = (text) => {
    const div = document.querySelector('div');
    const newTag = document.createElement('p');
    newTag.innerHTML = text;
    div.appendChild(newTag);
};
/**
 * Exercise 6
 *
 * create a function {setSrcToImage} which takes a url and image description
 * as arguments and set it as a src and alt attributes values
 * for existing img
 */
const setSrcToImage = (url, imageDescription) => {
    const imgTag = document.querySelector('img');
    imgTag.src = url;
    imgTag.alt = imageDescription;
};
/**
 * Exercise 7
 *
 * create a function {setCodersInHoodsLink} which takes 2 arguments, a URL
 * and some text
 *
 * Find the a tag in the page, set the href to the URL and display the text
 *
 * Also add an attribute that opens your page in a new tab
 */
const setCodersInHoodsLink = (url, text) => {
    const link = document.querySelector('a');
    link.href = url;
    link.innerText = text;
    link.target = "_blank";
};
/**
 * Exercise 8
 *
 * create a function {disableResetBtn} which will disable button
 * with class "reset"
 */
const disableResetBtn = () => {
    document.querySelector('.reset').disabled = true;
};
/**
 * Exercise 9
 *
 * create a function {disableBtns} which takes class name as an argument
 * and disable all buttons with this class name
 */
const disableBtns = (disableBtnClass) => {
    if (disableBtnClass.includes('.')) {
        disableBtnClass;
    } else {
        disableBtnClass = '.' + disableBtnClass;
    }
    [...document.querySelectorAll(disableBtnClass)].forEach((element) => element.disabled = true);
};
/**
 * Exercise 10
 *
 * create a function {addClassToLi} which adds the class
 * "list_item_$" (where $ is a position in a list) to each li
 * that is inside the ul with the class "list"
 *
 * NOTE: We've added some CSS so when your classes are added,
 * you will see a difference
 */
const addClassToLi = (list_item_$) => {
    let listItems = [...document.querySelectorAll('.list li')];
    listItems.forEach((listItem, i) => {
        listItem.classList.add(`list_item_${i}`);
    });
};
/**
 * Exercise 11
 *
 *  create a function {removeListItemClass} which removes the class
 * "list_item" from all li elements with this class
 */
const removeListItemClass = () => {
    let listItem = [...document.querySelectorAll('.list_item')];
    listItem.forEach(li => li.classList.remove('list_item'));
}
/**
 * Exercise 12
 *
 *  create a function {addId} which takes 2 arguments: an id and
 * a CSS selector. Use to selector to find an element, then add
 * the id to the element
 */
const addId = (id, selector) => {
    let selected = [...document.querySelectorAll(selector)];
    selected.forEach(selected => selected.id = id);
}
/**
 * Exercise 13
 *
 *  create a function {setStyles} which takes 3 arguments
 * 1 - a CSS property name,
 * 2 - property value,
 * 3 - a CSS selector
 *
 * use the selector to find all the elements which match, then
 * set the CSS property to the value
 */
const setStyles = (propertyName, propertyValue, selector) => {
    let selectAll = [...document.querySelectorAll(selector)];
    selectAll.forEach(selected => {selected.style[propertyName] = propertyValue;});
};
