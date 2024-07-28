//Template Literals
// A way to have embedded expressions in strings
// let normalString = "you beauty"
// console.log(normalString)
// let specialString = `this is a template literal` // ` backtick
// console.log(specialString)

// let us understand with an example
let obj = {
    item: "book",
    price: 150,
};
console.log("the cost of",obj.item, "is",obj.price,"taka")
console.log(`the cost of ${obj.item} is ${obj.price} taka`)


// what is string interpolation
// to create strings by doing substituition of placeholders
// `string text $(expression) string text`
// let str = `Rimon ${1+2+22}`
// console.log(str)

