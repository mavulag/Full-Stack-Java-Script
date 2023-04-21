const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItembutton');

// remove it to use bubbling effect
// const listItems = document.getElementsByTagName('li');

// with bubbling effect replace 'listItems' with listDiv
listDiv.addEventListener('mouseover', (event) => {
    if (event.target.tagName == 'LI') {
        event.target.textContent = event.target.textContent.toUpperCase();
    }
});

listDiv.addEventListener('mouseout', (event) => {
    if (event.target.tagName == 'LI') {
        event.target.textContent = event.target.textContent.toLowerCase();
    }
});

/*
// remove the loop to use bubbling effect

for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].addEventListener('mouseover', () => {
        listItems[i].textContent = listItems[i].textContent.toUpperCase();
    });
    
    listItems[i].addEventListener('mouseout', () => {
        listItems[i].textContent = listItems[i].textContent.toLowerCase();
    });
}
*/

toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        listDiv.style.display = 'block';
        toggleList.textContent = 'Hide list'
    } else {
        listDiv.style.display = 'none';
        toggleList.textContent = 'View list';
    }
});


descriptionButton.addEventListener('click', () => {
    descriptionP.textContent = descriptionInput.value + ':';

    // Or
    // p.innerHTML = input.value + ':';

    // innerHTML can replace all HTML content at once
});

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    // creating the new element in the list with it's value
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    // adding element in the page with it's value
    ul.appendChild(li);
    addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    // selecting the last element in the list with it's value
    let li = document.querySelector('li:last-child');
    // adding element in the page with it's value
    ul.removeChild(li);
});