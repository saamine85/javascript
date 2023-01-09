const notes = [
  {
    title: "my next trip",
    body: "go to omra",
  },
  {
    title: "read a book",
    body: "read rich dad poor dad",
  },
  {
    title: "go to gym",
    body: "legs training",
  },
];
//***     use finIndex and find methods  *********/
//1. findindex()
// const findNote = function (notes, noteTitle) {
//   // tecreer fonction elli tpassilha array nta3ek wel string elli hab tssibo
//   // thawess 3la indexof nta3o
//   const index = notes.findIndex(function (note, index) {
//     // hna verifa lindex  elli ymatchi m3a notetitle wella non
//     // ma tensech momkin le text ykoun ecrit en miniscule ou majuscule
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   console.log(index);
//   // we hna raje3li lóbjet elli 3andeh hadek l'index
//   return notes[index];
// };

//**************** */
//...2- find()
const findNote = function (notes, noteTitle) {
  // tecreer fonction elli tpassilha array nta3ek wel string elli hab tssibo
  // thawess 3la indexof nta3o
  const note = notes.find(function (note, index) {
    // hna el find treje3lek direct el match mech lindex ye3ni treje3lek direct l'objet
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
  // console.log(note);
  // we hna raje3li lóbjet elli 3andeh hadek l'index
  return note;
};
const note = findNote(notes, "Go to gym");
console.log(note);

//! ida hab treje3 lóbject teste3mel find() we ida tehtej just el index teste3mel findIndex()
