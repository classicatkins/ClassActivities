// select the root node
const root = document.querySelector("body");
console.log(root);
console.log(document.getRootNode());
// select the last child of the root node
root.lastElementChild;
// select all the children of the body element
root.children;
// select the next sibling of the h2 node
const nextSibling=document.querySelector("h2").nextElementSibling;
// select the parent element of the h1 node
const h1Parent = document.querySelector("h1").parentElement;
