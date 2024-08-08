// compact way of writing a function; function can be store in a variable
// modern JavaScript

// sum function
function sum(a, b) {
  return a + b;
}

let arrowSum = (a, b) => {
  console.log(a + b);
};
console.log(arrowSum);
arrowSum(4, 5);
