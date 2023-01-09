// global scope (convert1 , valuex,valuey)
 // local scope (fer,celcius)
  // local scope (isFreezing)

const convert1 = (fer) => {
  let celcius = (5 / 9) * (fer - 32);
  if (celcius <= 0) {
    let isFreezing = true;
    // return isFreezing;
  }
  return celcius;
  // return (5 / 9) * (fer - 32);
};

let valuex = convert1(32);
let valuey = convert1(68);
console.log(valuex, valuey);
console.log(valuey);
