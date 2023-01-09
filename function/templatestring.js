let getScoretext = function (name = "amin", score = 32) {
  return `name is ${name} and score is : ${score}`;
  // return "name is: " + name + " " + "- score is:" + score;
};
let printScore = getScoretext();
console.log(printScore);
let name1 = "sadi",
  age = 36;
console.log(`my name is : ${name1} and my age is : ${age}`);
let getTip = (total, tipPercent = 0.2) => {
  // let percent = tipPercent * 100;
  // let tip = total * tipPercent;
  // return `A ${percent}% on $${total} would be $${tip}`;
// second way to resolve the problem 
  return `A ${tipPercent * 100}% on $${total} would be $${total * tipPercent}`;
};
let tip = getTip(30, 0.5);
let tip1 = getTip(40, 0.2);
let tip2 = getTip(50, 0.4);
let tip3 = getTip(50, undefined);
console.log(tip);
console.log(tip1)
console.log(tip2)
console.log(tip3)
