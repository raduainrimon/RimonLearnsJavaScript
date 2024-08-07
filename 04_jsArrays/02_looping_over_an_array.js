// print all elements of an array

// using for loop (iterable -> strings,objects,arrays)
// let array = [1, 2, 3, 4];
// console.log(array); // to print the array
// sum = 0; // initially sum is 0
// for (let index = 0; index < array.length; index++) {
//   sum += array[index];
// }
// console.log(sum); // to log the sum

// let series = ["moneyHeist", "GOT", "prisonBreak", "houseOfTheDragon"];
// console.log(series);
// for (let i = 0; i < series.length; i++) {
//   console.log(series[i]);
// }

// for of loop (generally for array accessing we use for of loop not for in loop)
let actresses = ["Tara Sutaria", "Nargis Fakhri", "Tamanna Vatia"];
for (let actress of actresses) {
  console.log(actress);
  console.log(actress.toUpperCase()); // toUpperCase() string method
  console.log(actress.toLowerCase());
}
