//? DOM : document object model

// methode to remove an element
// const p = document.querySelector("p");
// // console.log(p);
// p.remove();
// hna yreje3lek null parceque rak dayer script tag el fou9 tssema ya treje3eh
//taht fi html doc wella dir async wella defer
//! query all and remove
// hna rah tsuprime bezeff nta3 les p donc
//rah tssuprimi une liste de paragraphe donc tekhdem bel foreach
const ps = document.querySelectorAll("p");
ps.forEach((p) => {
  //? to remove all selector p
  // p.remove();
  //? to assign or modify the value of each selector p
  //  1. we can use innerhtml or text content
  // p.innerHTML = "*****";
  // console.log(p.innerHTML);
  p.textContent = "testing";
  console.log(p.textContent);
});
// ******************************/
//** how to add new element *****************************/
// ******************************/
//! 1- creat the element
//! 2- add a meaning for the tag like text
//! 3- append the child to his parent  
const header = document.createElement("h2");
header.textContent = "take a shower";
document.querySelector("body").appendChild(header);
