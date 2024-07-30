// for-of loop (used for string/array)

// let str = "Rimon"
let str = "Raduain Rimon"
let length = 0 // to get the length
for(let val of str) { // iterator -> characters
    console.log("value:",val)
    length++
}
console.log("total characters/str size -",length)