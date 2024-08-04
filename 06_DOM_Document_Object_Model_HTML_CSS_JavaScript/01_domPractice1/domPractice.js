// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Apna College"; // concatenate
// console.dir(h2.innerText);

let divs = document.querySelectorAll(".box");
console.log(divs);
console.log(divs[1]);

// console.log((divs[0].innerText = "Hello Div 1"));
// console.log((divs[1].innerText = "Hello Div 2"));
// console.log((divs[2].innerText = "Hello Div 3"));
// alternative
let idx = 1;
for (div of divs) {
  div.innerText = `Hello Div ${idx}`;
  idx++;
}
