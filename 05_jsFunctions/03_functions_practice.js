/*
Create a function using the "function" keyword that 
takes a String as an argument & returns 
the number of vowels in the string
*/
// using switch case
function countVowels(msg) {
  let vCount = 0;
  for (let i = 0; i < msg.length; i++) {
    switch (msg[i]) {
      case "a":
      case "A":
      case "e":
      case "E":
      case "i":
      case "I":
      case "o":
      case "O":
      case "u":
      case "U":
        vCount++;
        break;
      default:
        break; // Do nothing for non-vowel characters
    }
  }
  return vCount;
}

console.log(countVowels("rimOn rAduaIn"));

/*
// using if conditional
function countVowels(msg) {
    let vCount = 0
    for (let i = 0; i < msg.length; i++) {
        if (msg[i] === 'a' || msg[i] === 'A' ||
            msg[i] === 'e' || msg[i] === 'E' ||
            msg[i] === 'i' || msg[i] === 'I' ||
            msg[i] === 'o' || msg[i] === 'O' ||
            msg[i] === 'u' || msg[i] === 'U') {
            vCount++
        }
    }
    return vCount
}
console.log(countVowels("RImon"))
*/
