/*
      Name: Maxwell Dinsmore
      File: A5_Part1/main.js
      Date: 2023-11-28
      Part 1 of A5.....
*/

// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Moved query selectors so show hide comments could use them
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');


commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

// Add key event so showhide works when enter is being pressed
showHideBtn.addEventListener("keydown", (Enter) => {
  if (Enter.code === "Enter") {
    let showHideText = showHideBtn.textContent;
    if(showHideText === 'Show comments') {
      showHideBtn.textContent = 'Hide comments';
      commentWrapper.style.display = 'block';
    } else {
      showHideBtn.textContent = 'Show comments';
      commentWrapper.style.display = 'none';
    }
  }
})


// functionality for adding a new comment via the comments form


form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;
  if (nameValue != "" && commentValue != "") {
    namePara.textContent = nameValue;
    commentPara.textContent = commentValue;
    
    list.appendChild(listItem);
    listItem.appendChild(namePara);
    listItem.appendChild(commentPara);

    nameField.value = '';
    commentField.value = '';
  }
};

//add and remove tabindex = 0 when form is opened or closed

