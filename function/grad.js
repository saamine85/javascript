const first = (studentsScore, total) => {
  let results3 = (studentsScore / total) * 100;
  if (results3 > 90 && results3 < 100) {
    return `you got a A ${results3}% !`;
  } else if (results3 > 80 && results3 < 99) {
    return `you got a B ${results3}% !`;
  } else if (results3 > 70 && results3 < 79) {
    return `you got a C ${results3}% !`;
  } else if (results3 > 60 && results3 < 69) {
    return `you got a D ${results3}% !`;
  } else if (results3 > 0 && results3 < 59) {
    return `you got a F ${results3}% !`;
  } else {
    return `please enter a student score and a total`;
  }
};
let results2 = first(15, 20);
console.log(results2);
let results6 = first(17, 20);
console.log(results6);
let results4 = first(19, 20);
console.log(results4);
let results5 = first(13, 20);
console.log(results5);
let results7 = first(1, 20);
console.log(results7);
// au lieu de repeter les return on a declarer le gradletter comme variable afin de ne pas repeter les return a chaque et rendre notre code plus dynamique
// console.log(results2);

// another solution
const second = (score, total) => {
  let percentage = (score / total) * 100;
  let letterGrad = "";
  if (percentage >= 90) {
    letterGrad = "A";
  } else if (percentage >= 80) {
    letterGrad = "B";
  } else if (percentage >= 70) {
    letterGrad = "C";
  } else if (percentage >= 60) {
    letterGrad = "D";
  } else {
    letterGrad = "F";
  }
  return `You got a ${letterGrad} (${percentage}%) !!`;
};
let x = second(19, 20);
console.log(x);
let y = second(12, 20);
console.log(y);
let z = second(1, 20);
console.log(z);
let w = second(17, 20);
console.log(w);
let c = second(15, 20);
console.log(c);
