/*
Q2: Create a game where you start with any random game number. 
Ask the user to keep guessing the game number 
until the user enters correct value!
*/
let secretNumber = 5
let userNum = Number(prompt("Guess a number (1-10): "))

while (userNum !==  secretNumber) {
    userNum = Number(prompt("Guess a number (1-10): "))
}
console.log("Congratulations!")
