const notes = ["note 1", "note 2", "note 3"];
notes[2] = "this is a new note 3";

notes.forEach(function () {
  console.log("123");
});
// when we pass a function into a function
//  its name callback function
// here we have a function into the foreach function
notes.forEach(function (item) {
  console.log(item);
});
// si on utlise un seul parametre il va nous donner les element de la listes
// et si on ajoute un deuxieme parametre il vas nous donner leurs index
notes.forEach(function (item, index) {
  console.log(item, index);
});
// console.log(notes.length);
// console.log(notes);
notes.forEach((prod, index) => {
console.log("arrow function", prod, index);
});
