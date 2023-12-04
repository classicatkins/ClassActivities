// create a new unordered list (ul) element
const navBar = document.querySelector('nav'); // Adjust selector if needed
const paragraph = navBar.querySelector('p');
if (paragraph) {
    paragraph.remove();
}

// remove the paragraph element in the nav-bar
navBar.appendChild(newUl);

// add your new ul element to the nav-bar
const listItem1 = document.createElement('li');
listItem1.textContent = 'List Item 1';

const listItem2 = document.createElement('li');
listItem2.textContent = 'List Item 2';

// create two new list item (li) elements, and add some text to them
const listItem1 = document.createElement('li');
listItem1.textContent = 'List Item 1';

const listItem2 = document.createElement('li');
listItem2.textContent = 'List Item 2';

// add the li elements to the ul in the nav-bar
newUl.appendChild(listItem1);
newUl.appendChild(listItem2);
