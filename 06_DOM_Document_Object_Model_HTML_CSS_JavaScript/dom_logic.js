// // accessing element by name
// let heading = document.getElementById("dom");
// console.dir(heading);

// let headings = document.getElementsByClassName("dom_learner");
// console.dir(headings);

// let button = document.getElementById("btn1");
// console.log(btn1);

// let para = document.getElementsByTagName("p");
// console.log(para);

// Query Selector
// let firstEl = document.querySelector("p"); // will return 1st element
// console.dir(firstEl);
// let allEl = document.querySelectorAll("p"); // Will return all matching elements
// console.dir(allEl);

// class based
// let firstEl = document.querySelector(".dom_learner"); // will return 1st element
// console.dir(firstEl);
// let allEl = document.querySelectorAll(".dom_learner"); // Will return all matching elements
// console.dir(allEl);

// id based
let firstEl = document.querySelector("#btn1"); // Will return all matching elements
console.dir(firstEl);
console.dir(firstEl.tagName);
