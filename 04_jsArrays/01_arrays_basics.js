// arrays: collection of items (linear)
// it's a special kind of object

let marks = [20, 30, 40, 50, 89]; // indices: 0 1 2 3 4 // marks->array name
console.log(marks); // to log the array
console.log(marks[2]); // to get particular index marks
console.log((marks[2] = 33)); // to change the particular index value
// array value is mutable (changeable)
// cannot possible in strings (immutable)

console.log(marks[2]); // undefined
console.log(marks.length); // to log arraySize: 5 // arrayLength=array index number+1
// length is a property; it returns value
console.log(typeof marks);

// let students = ["Rimon", "Emon", "Sabbir", "Toukir", "Safa"];
// console.log(students);

// let info = ["Rimon", 25, "Safa"]; // generally don't store different types os data
// console.log(info);
