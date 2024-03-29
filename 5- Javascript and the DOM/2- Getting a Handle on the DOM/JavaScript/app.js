// document is a global variable represent a current web page
// "getElementById" belongs to document object
// const variable holds reference from the id
// const myHeading = document.getElementById('myHeading');
/*
const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
*/

// tell element with "myHeading" id to start to listen to the browser events
/*
myHeading.addEventListener('click', () => {
    myHeading.style.color = 'red'; 
});
*/

/*
myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value; 
});
*/

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
    myList[i].style.color = 'purple';
}

/*
const errorNotPurple = document.getElementsByClassName('error-not-purple');

for (let i = 0; i < errorNotPurple.length; i += 1) {
    errorNotPurple[i].style.color = 'red';
}
*/

const errorNotPurple = document.querySelectorAll('.error-not-purple');

for (let i = 0; i < errorNotPurple.length; i += 1) {
    errorNotPurple[i].style.color = 'red';
}

const evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < evens.length; i += 1) {
    evens[i].style.backgroundColor = 'lightgray';
}


// .querySelector() selects the first match element with class name or id 
// .querySelectorAll() selects all match elements with class name or id
// document.querySelelctor('[title=label]');