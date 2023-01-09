// undefind for variable

let name1 = "jen";
console.log(name1);

let firstName;
if (firstName == undefined) {
  console.log("give a firstName");
} else {
  console.log(firstName);
}
// console.log(firstName);

//* undefind for function argument
//  --1 undifined function ( haddi ki ma temedch 9uima lel argument nta3ek treje3lek undifine)

let square1 = function (num) {
  console.log(num);
};
square1();

//*  undefined as function return default value
// --2 return 2 undefined first for function and second for the return of funtion
let square2 = function (num) {
  console.log(num);
};
let result2 = square2();
console.log(result2);


//  null as assined value 

let age2 = 27;

// we can assign the age2 to undefined.
age2 = undefined;

// assign age2 to null.
age2 = null;
console.log(age2);
