// let isRaining = true;
// isRaining = false;
const isRaining = true;
// isRaining = false;
console.log(isRaining);
// we cant ressign with const

const person = {
  age: 27,
};
person.age = 28;
// here we can ressign values but we cant reesign propreties
// te9der tbedel les propriete dakhel bessah ma te9derch tbedel gue3 lóbjet ye3ni ykouno fih des propriete we tehdefhom
// person = {};
console.log(person);

// chalenge aria

let second = (score, total) => {
  // la fonction ne change pas donc on utilise const
  let percentage = (score / total) * 100; // aussi celui la donc const
  let letterGrad = ""; //par contre celui la il est chamgeable donc on utilise let 3la khater lokan eddir const marahch yetghayer natij 3la hsseb el mo3adalet
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
let x = second(19, 20); // hna aussi constant
console.log(x);

// solution
const second1 = (score, total) => {
  // ceci ne change pas donc on utilise const
  const percentage = (score / total) * 100; // aussi celui la donc const
  let letterGrad = ""; //par contre celui la il est chamgeable donc on utilise let 3la khater lokan eddir const marahch yetghayer natij 3la hsseb el mo3adalet
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
const y = second1(19, 20); // hna aussi constant
console.log(y);

let myFriends = ["amine", "osama", "samir", "chakib", "test2"];
for (let i = 0; i < myFriends.length; i++) {
  const element = myFriends[i];
  console.log(element);
}
