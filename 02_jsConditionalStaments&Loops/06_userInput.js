/* 
Q: get a user to input a number using promt "Enter a number: ".
check the number is multiple of 5 or not. 
*/

// alert("Practice Exam") // single time pop up: applicabe for browser
let num = prompt("Enter a number: "); // for browser environment

if (num % 5 === 0) {
    console.log("Multiple of 5");
} else {
    console.log("Not multiple of 5!");
}
