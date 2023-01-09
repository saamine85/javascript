// global scope - defined outside of all code blocks.
// local scope - defined inside code blocks == code blocks like code inside if statement
// in a scope you can acces variables defined in that scope or in any parent anticessor
// tassalssol chajari lazem tehtermeh

//-- global scope and parent of first of statement and second if

let varFive = "varFive";
if (true) {
  console.log(varFive);
}

let varOne = "varOne";
if (true) {
  //-- local scope
  console.log(varOne);
  let varTow = "varTow";
  // -- parent scope of varfour variable
  console.log(varTow);
  if (true) {
    //--local scope
    let varFour = "varFour";
    console.log(varFour);
  }
}
if (true) {
  let varThree = "varThree";
}
// console.log(varTow);

// scope 2

let ames = "amin";

//global
//we cant define variable more than once in a global scope but we can redefine it in a local scope
if (true) {
  //--local
  let ames = "mike";
  if (true) {
    //--local
    // ames = "sadi";
    console.log(ames); // he print mike we can redefine variable in local scope
    // console.log(`my full name is ${ames} and ${fames}`);
  }
}
if (true) {
  console.log(ames);
}

// nb  never forget to use let to define variable because if we dont have any variable in the global scope he will define it

//global
//we cant define variable more than once in a global scope but we can redefine it in a local scope
if (true) {
  //--local

  if (true) {
    //--local
    let names = "sadi"; // and when u use let names it wil be define just in local scope
    console.log(names); // we resignname without let
  }
}
if (true) {
  // console.log(names);
}
// N.B : te9der tacceder lel variable declarer fel global scope fel lenfant direct
// te9der tmodifier wella reesign variable declarer fel parent direct
// te9der tacceder le variable declarer fel global dakhel local we mate9derch tacceder le variable 
//  local we teste3mleh fel global chaque variable declarer fi local teste3mleh fi lenfant nta3eh
let test2 = "sadi amine";
if (true) {
  let test = "amine two";
  console.log(test);
  if (true) {
    test2 = " sadi two";
    console.log(test);
    console.log(test2);
  }
}
