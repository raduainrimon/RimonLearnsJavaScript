/*
Q1: print all even numbers from 0 to 100. 
Assume 0 neither odd nor even!
*/

// Rimon's style
let num
for (num=0;num<=100;num=num+2) {
    if(num === 0) {
        continue
    }
    console.log(num)
}



// for (let num=0;num<=100;num++) {
//     if (num%2 === 0) { // for even
//     // if (num%2 === 1) { // for odd
//     // if (num%2 !== 0) { // for odd
//         console.log(num)
//     }   
// }