const notes = ["note 1", "note 2", "note 3"];
console.log(notes.length);
console.log(notes[0]);
console.log(notes[1]);
console.log(notes[2]);
console.log(notes[notes.length - 2]);

// pop push/shift and unshift / splice
// 1- pop and push add and remove thing from the end
//and they are faster then shift and unshift because in shift or unshift we need to reorder index item
const note = ["note 1", "note 2", "note 3"];
console.log(note.pop());
note.push("my new note");
// 2- shift and unshift remove and add item from the begining
console.log(note.shift());
note.unshift("note from begining");
console.log(note.length);
console.log(note);
// 3- splice
// te9der be splice tremplaci un element wella tzido wella tehedfoo
note.splice(1, 1, "test de remplacement");
console.log(note);
note.splice(1, 2);
console.log(note);
note.splice(0, 2, "test de remplacement et supression des 2 elements");
console.log(note);
// array.splice( index from to add,number of items to remove,'value to add')
note.splice(0, 0, "new note from splice");
console.log(note);
// if we want just to replace one item with another we use brackets
note[3] = "replace my new note and remove it";
console.log(note);
