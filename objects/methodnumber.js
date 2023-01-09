let num = 123.3454;
// to fixed
console.log(num.toFixed(2));
//math method
Math.round(num);
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

// math random men zero lel .999999
let randomNum = Math.random();
console.log(randomNum);
// ne9edro ndiro random le numeroyet
let min = 10;
let max = 20;
let numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(numRandom);
//challenge area
const makeGuess = (guess) => {
  let min = 1;
  let max = 5;
  let numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return guess === numRandom;
};
console.log(makeGuess(1));
const rangeRandom = (num) => {
  let numRang = Math.round(Math.random() + num);
  return numRang > 1 && numRang <= 5;

  // if (numRang > 1 && numRang <= 5) {
  //   return true;
  // } else {
  //   return false;
  // }
};

// rangeRandom(1);
console.log(rangeRandom(1));
// rangeRandom(3);
console.log(rangeRandom(3));
// rangeRandom(4);
console.log(rangeRandom(4));
// rangeRandom(6);
console.log(rangeRandom(6));
