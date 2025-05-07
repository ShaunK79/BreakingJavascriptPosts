

function changeText() {
    // find the <h1> by its ID and change its text
    document.getElementById("greeting").innerText = "You clicked the button!"
}

// DOM selector - single element //
const title = document.querySelector('h1');
// console.log(title.innerText);

// DOM selector - multiple elements //
// const items = document.querySelectorAll('li');
// items.forEach(item => console.log(item.innerText));

// Traversing DOM elements //
// const list = document.querySelector('ul');
// console.log(list.children); // all <li> children
// console.log(list.firstElementChild); // first <li>
// console.log(list.lastElementChild); // Last <li>

// Traversing nodes //
// const list = document.querySelector('ul');
// console.log(list.childNodes); // includes text nodes

// create element //
// const newItem = document.createElement('li');
// newItem.innerText = 'New List Item';
// document.querySelector('ul').appendChild(newItem);

// using innerHTML (fast but less safe) //
// document.querySelector('ul').innerHTML 
// += '<li>Added via innerHTML</li>';

// using createElement (safer and recommended)
// const li = document.createElement('li');
// li.innerText = 'Added via createElement';
// document.querySelector('ul').appendChild(li);

// function createListItem(text) {
//     const li = document.createElement('li');
//     li.innerText = text;
//     return li;
// }

// function addToList(item) {
//     const list = document.querySelector('ul');
//     list.appendChild(item);
// }

// use the functions //
// const newItem = createListItem('Reusable Item');
// addToList(newItem);

// remove elements //
const itemToRemove = document.querySelector('li');
itemToRemove.remove();


