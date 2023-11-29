// print the outer HTML of the navigation bar
console.log(document.querySelector(".nav-bar").outerHTML);
// print the inner HTML of the navigation bar
console.log(document.querySelector(".nav-bar").innerHTML);
// print the text content of the #class-schedule-list element
// document.querySelector("#class-schedule-list element");
// textContent = "one";
// select the classList for the first class-week, then add the class "week-1"
const firstClassWeek = document.querySelector("class-week");
firstClassWeek.classList.add("week-1");

// select the img element and add a src attribute
const img = document.querySelector("img").src = "";
// change the font color of the h1 element
document.querySelector("h1").style.color = "red";
