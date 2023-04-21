const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');

const listUl = listDiv.querySelector('ul');

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
// const removeItemButton = document.querySelector('button.removeItembutton');
const lis = listUl.children;

// use these to remove the 'up' and 'remove' buttons form the page
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

function attachListItemButtons(li) {
    let up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'Up';
    li.appendChild(up);

    let down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'Down';
    li.appendChild(down);

    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);
}

// remove it to use bubbling effect
// const listItems = document.getElementsByTagName('li');

// with bubbling effect replace 'listItems' with listDiv
/*
listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        // Also remove this line to use parentNode
        // event.target.textContent = event.target.textContent.toUpperCase();
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
});
*/

for (let i = 0; i < lis.length; i += 1) {
    attachListItemButtons(lis[i]);
}

// for moving items up
listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        if (event.target.className == 'remove') {
            // Also remove this line to use parentNode
            // event.target.textContent = event.target.textContent.toUpperCase();
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        if (event.target.className == 'up') {
            // Also remove this line to use parentNode
            // event.target.textContent = event.target.textContent.toUpperCase();
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if (prevLi) {
                ul.insertBefore(li, prevLi);
            }
        }
        if (event.target.className == 'down') {
            // Also remove this line to use parentNode
            // event.target.textContent = event.target.textContent.toUpperCase();
            let li = event.target.parentNode;
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            if (nextLi) {
                ul.insertBefore(nextLi, li);
            }
        }
    }
});

/*
to use parentNode remove this

listDiv.addEventListener('mouseout', (event) => {
    if (event.target.tagName == 'LI') {
        event.target.textContent = event.target.textContent.toLowerCase();
    }
});
*/

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
    attachListItemButtons(li);
    ul.appendChild(li);
    addItemInput.value = '';
});

/*
removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    // selecting the last element in the list with it's value
    let li = document.querySelector('li:last-child');
    // adding element in the page with it's value
    ul.removeChild(li);
});
*/

/*
To remove element in the document without knowing it's parent

e.g:
let parahragh = document.getElementById('myParagraph');
let parent = paragraph.parentNode;
parent.removeChild(paragraph);
*/