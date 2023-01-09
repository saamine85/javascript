const note = ["note1", "note2", "note3"];
console.log(note.indexOf("note2"));
// hna rahi techerchi ida kayen haja 'note2' fel array rej3et index elli houwa 1,
// we ida makeyench rah treje3lna -1 ,
const notes = [
  {},
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

console.log(notes.length);
console.log(notes);
// what they return when we have an empty object
// indexof fel object vide treje3lna false
console.log(notes.indexOf({})); // ca donne -1 hna radelna haddi psk {} === {} is false hata we law kan 3andhom nafss propriete wel valeur
console.log({} === {});
// hna beh twelli true lazem tekhdemlha reference ye3ni
let testobj = {};
let otherTest = testobj;
console.log(testobj === otherTest);
// fel array avec object kayen alternative nta2 indexof elli hiyaa findIndex
const testFind = notes.findIndex(function (note, index) {
  // hna rahi eddir la mm chose que foreach bessah mech hada el mohim
  // console.log(note, index);
  // ndir cette fonction ds une variable we nhawsso ida had el 3onsor mawjoud ou non
  return note.title === "read a book";
});
console.log(testFind);
