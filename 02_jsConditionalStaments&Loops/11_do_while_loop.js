// alternative of for & while loop with slight changes
// it doesn't matter condition is right or wrong
// execute at least one time
// log/print 1-5
let i = 1;
do {
  if (i === 1) {
    console.log("i =", i);
  } else {
    console.log("upadated i =", i);
  }
  i++;
} while (i <= 5);
