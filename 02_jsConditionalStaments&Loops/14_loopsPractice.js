/*
Q1: print all even numbers from 0 to 100. 
Assume 0 neither odd nor even!
*/
// Rimon's style
let num;
for (num = 0; num <= 100; num = num + 2) {
  if (num === 0) {
    continue;
  }
  console.log(num);
}
// for (let num=0;num<=100;num++) {
//     if (num%2 === 0) { // for even
//     // if (num%2 === 1) { // for odd
//     // if (num%2 !== 0) { // for odd
//         console.log(num)
//     }
// }

/*
Q2: Create a game where you start with any random game number. 
Ask the user to keep guessing the game number 
until the user enters correct value!
*/
// let secretNumber = 5
// let userNum = Number(prompt("Guess a number (1-10): "))

// while (userNum !==  secretNumber) {
//     userNum = Number(prompt("Guess a number (1-10): "))
// }
// console.log("Congratulations!")
