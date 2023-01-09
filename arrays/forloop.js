const notes = ["note 1", "note 2", "note 3"];
// counting ...1
//! for ( initializer : condition to start // be wech hab tebda ; condition to end ye3ni hata lewin hab loop tekhdem ; expression elli tapplikiha 3la loop what to do ){
//! bloc of code
//! }
//
//? count = count + 1 its same to count++
//? count = count - 1 its same to count--
//
for (count = 0; count <= 3; count = count + 1) {
  console.log(count);
}
for (count = 6; count >= 0; count = count - 1) {
  console.log(count);
}
for (count = 1; count <= 20; count = count * 2) {
  console.log(count);
}
//forloop in array
// kolchi ykoun fel bloc scoop
for (let count = 0; count < notes.length; count++) {
  // hna el count yerje3 yel3eb dawr el index beh teste3mel chaque element
  console.log(notes[count]);
}
for (let count = notes.length - 1; count >= 0; count--) {
  // hna el count yerje3 yel3eb dawr el index beh teste3mel chaque element
  console.log(notes[count]);
}
//! for each we have ability to loop from begining in array to end and the forloop is more flexible
// foreach tehsseb tjrs mel bedya letalli ye3ni bel order bessah forloop te9der teste3melha kima tebri

// forloop challenge
const todos = [
  "dirnk water",
  "take a shower",
  "brush teeth",
  "got to work", // -2
  "have a meeting", // -1
];
for (let i = 0; i < todos.length; i++) {
  const todo = todos[i];
  let num = i + 1;
  console.log(`${num}- ${todo}`);
}
