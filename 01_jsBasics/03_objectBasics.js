// objects: is a collection of different variables/values
// storing values- key: value ; key is like variable under objects

const learners = {
  fullNme: "Raduain Rimon", // fullNme=key "Raduain Rimon"=value
  age: 25,
  cgpa: 2.99,
  isCompleted: true,
};
console.log(learners);
console.log(typeof learners);

console.log(learners.fullNme);
console.log(learners["fullNme"]); // alternative

learners.age = learners.age + 2;
console.log(learners.age);

// we can change key from const objects but cannot change from const variable

console.log("Congratulations!");
