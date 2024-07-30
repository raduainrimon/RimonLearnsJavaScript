/* 
Q: For a given array with marks of students -> [8,9,4,3,7,6]
Find the average marks of the entire class.
*/
// Rimon's style
// let arrMarks = [8,9,4,3,7,6]
// console.log(arrMarks)
// let sum=0
// for (let i=0; i<arrMarks.length; i++) {
//     sum += arrMarks[i]
// }
// // console.log(sum)
// let avg = sum/arrMarks.length
// console.log(avg)

// Apna College's style
let arrMarks = [8,9,4,3,7,6]
let sum = 0
for (let val of arrMarks) {
    // console.log(val)
    sum += val
}
console.log(sum)
let avg = sum/arrMarks.length
console.log(`average marks of the class = ${avg}`)


