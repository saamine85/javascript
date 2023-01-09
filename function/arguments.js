// multiple arguments
let add = function (a, b, c) {
  return a + b - c;
};
let result1 = add(10, 20, 3);
console.log(result1);

let min = function (e, f, j) {
  return e + f - j;
};
let minus = min(10, 2, 1);
console.log(minus);
//2
let min2 = function (e = 10, f = 2, j = 1) {
  return e + f - j;
};
let minus2 = min2();
console.log(minus2);
//3
let min3 = function () {
  let e = 10,
    f = 2,
    j = 1;
  return e + f - j;
};
let minus3 = min3();
console.log(minus3);

// les arguments sont des variables dont ont veut les utiliser dans une fonction voir les 3 exemple au dessus.

// default arguments

let player1 = function (name = "sadi", score = 0) {
  console.log(name);
  console.log(score);
};
player1("amin", 15);
console.log("%cthis is with default value", "color: green");
// if we dont give a value to argument score equal to 0 default value but when we use an argument she override the default value
player1();

console.log("%cthis is with default value", "color: green");

let player2 = function (name = "sadi", score = 0) {
  // return "Name is: " + name + ", " + "and  the score is: " + score;
  return `Name is :${name}, and the score is :${score} 
  and this is templates strings`;
};

//assign default value for name as undefined and gi score a new value we lokan ma eddirch undifned comme value rah twelli 88 hiya name we ye3tik score value zero

let results3 = player2(undefined, 88);
let results4 = player2(88);
console.log(results4);
console.log(results3);

console.log("%cthis is challenge", "color: red;font-weight:bold");

let currentTotal = function (total, tipPercent = 0.2) {
  // begin other methode to templates strings
  let percent = tipPercent * 100;
  let tip = total * tipPercent;
  return `A ${percent}% tip on ${total} would be ${tip}`;
  // end ther methode to templates strings

  return "the total is: " + total * tipPercent;
  return `the totla is : ${total * tipPercent}`;
};
let result4 = currentTotal(40);
console.log(result4);
let result5 = currentTotal(120);
console.log(result5);
let result6 = currentTotal(200);
console.log(result6);
let result7 = currentTotal(200, 0.3);
console.log(result7);

// template-strings
let name = "amine sadi";
let job = "software engineer";
let country = "ALJAZAIR";
console.log(`my ${name} is amine and im a ${job} and i leave in ${country}`);
