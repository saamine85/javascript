let fname = "sadi amine";

//lenght proprety
console.log(fname.length); //10
// convert to uppercase
fname.toUpperCase();
console.log(fname.toUpperCase());
//tolower  case
fname.toLowerCase();
console.log(fname.toLowerCase());
//include methode
let password = "abcd123passwordfghe";
password.includes("password");
console.log(password.includes("password"));
// trim methode
let test = " amine sadi ";
console.log(test);
// trim elle suprime les espace de debut et de la fin
test.trim();

console.log(test.trim());

//challenge area

//isvalidpassword
// length is more than 8 and doesn't contain the word password

const isValidPassword = (password) => {
  //* solution 1
  // if (password.length > 8 && !password.includes("password")) {
  //   console.log("password valid");
  // } else {
  //   console.log("password not valid");
  // }
  //* solution 2
  return password.length > 8 && !password.includes("password");
  //* solution 3
  // if (password.length < 8 || password.includes("password")) {
  //   console.log("password not valid");
  //   // console.log(password.length);
  // } else {
  //   console.log("valid password");
  // }
};

console.log(isValidPassword("asdfcdc"));
console.log(isValidPassword("asdfcdc@tesfdfdt"));
console.log(isValidPassword("asdfcdc@tespassworddt"));
