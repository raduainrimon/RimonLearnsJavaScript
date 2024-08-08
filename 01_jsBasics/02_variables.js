// variables are container for data. 2 types
// primitive(7): number,string,boolean,null,undefined,BigInt,Symbol
// Non-primitive: arrays,functions

// string type
firstName = "raduain"; // variable(container)=firstName, data=Raduain; = assignment operator
// console.log("firstName")
console.log(firstName);
console.log(typeof firstName); // to log the type

raduain = 7; // number type
console.log(raduain);

x = null; // null type
console.log(x);

y = undefined; // undefined type
console.log(undefined);

isStudent = true; // boolean type
console.log(isStudent);

/*
---Variable Rules---
- Variable names are case sensitive; "x" & "X" is different.
- Only letters, digits, underscore(_) and dollar sign($) is allowed. (not even space)
- Only a letter, uderscore(_) or $ should be 1st character. No digit starting.
- Reserved words cannot be variable names. Ex. console
- As a good programmar you should follow Camel case (isRimon) and
- better not to follow Snake case (is_rimon), Kabab case (is-rimon), Pascal case(IsRimon)

--- let, const & var---
- Before 2015
- var (should avoid): can be re-declared & updated. A global scope variable. 
- After 2015 (ES6: ECMAScript; some updation)
- let (most preferrable): cannot be re-declared but cannot be updated. A block scope variable. 
- const (fixed): cannot be re-declared or updated. A block scope variable.
*/

// this is how we should declare variables in JS, not like above
let math = "difficult";
let chemistry = "easy";
let physics = "rocket science/greek";
console.log(math);

const PI = 3.14;
// PI=3.14 // cannot be re-declared/updated
let r = 2;
areaCircle = PI * r * r;
console.log(areaCircle);

var age = 25;
var age = 34; // redeclaration in var
var age = 49; // redeclaration in var
console.log(age);

let ageN = 52;
ageN = 55; // no redeclaration in let
ageN = 80; // no redeclaration in let
console.log(ageN);

// let variable can be unassigned but canst cannot
let a;
console.log(a);
a = 5;
console.log(a);

// const PI
// PI=3
// console.log(PI)

// block scope variable let & const
// similar variables but different output in different block
{
  let b = 10;
  console.log(b);
}
{
  let b = 55;
  console.log(b);
}

// bigint data type
let h = BigInt("589");
console.log(h);
console.log(typeof h);

// symbol dat type
let s = Symbol("JavaScript!");
console.log(s);
console.log(typeof s);

console.log("Congratulations!");
