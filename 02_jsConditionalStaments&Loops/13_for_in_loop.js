// for-in loop (used for displaying object's keys)
// creating an object named learners
let learner = {
  fullName: "Jubayer Emon",
  age: 22,
  cgpa: 3.06,
  isPass: true,
};
// console.log(learner)

// to just print the keys
for (let i in learner) {
  console.log("key:", i);
  // console.log("key:",i, "value:", learner[i])
  // to get the values as well
}
