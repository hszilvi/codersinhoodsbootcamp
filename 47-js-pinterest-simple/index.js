/**
 * Exercise #
 *
 */
const formArea = document.querySelector('.comment_appears');
const submitButton = document.querySelector('.submit');
const cancelButton = document.querySelector('.cancel');
const newCommentElement = document.querySelector('textarea');


// like button
const likeImg = document.querySelector('.like_btn');
const commentIcon = document.querySelector('.comment_btn');
likeImg.addEventListener('click', () => {
    if (likeImg.src.match("../47-js-pinterest-simple/img/like_empty.png")) {
        likeImg.src = "../47-js-pinterest-simple/img/like_full.png";
    } else {
        likeImg.src = "../47-js-pinterest-simple/img/like_empty.png";
    }
})

// comment

// if submit button clicked put comment into ul
const hideCommentForm = () => {
    formArea.style.display = 'none';
    newCommentElement.value = '';
}
const createNewComment = (commentContent) => {
    const commentList = document.createElement('li');
    commentList.innerHTML = `<h3>User3774623</h3><p>${commentContent}</p><hr />`
    document.querySelector('.panel').prepend(commentList);
}
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(newCommentElement);
    createNewComment(newCommentElement.value);
    hideCommentForm();  
    console.log(commentList);
});
// if comment icon clicked open form, else hide 
commentIcon.addEventListener('click', () => { 
    formArea.style.display = 'block';
})
// if cancel button clicked hide form 
cancelButton.addEventListener('click', () => {
  hideCommentForm();
})


