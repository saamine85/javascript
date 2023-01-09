// function fiha input (argument)  , code , output (return value)

let greetUser = function () {
  console.log("welcome user");
};
greetUser();
greetUser();
greetUser();

let square = function (num) {
  let result = num * num;
  return result;
};
let value = square(3);
console.log(value);

function sqrt(num2) {
  return num2 * num2;
}
let otherValue = sqrt(4);
console.log(otherValue);

// challenge

const convert = (fer) => {
  // let celcius = (5 / 9) * (fer - 32);
  return (5 / 9) * (fer - 32);
};

let value1 = convert(32);
let value2 = convert(68);
console.log(value1,value2);
console.log(value2);
console.log(convert(68))
