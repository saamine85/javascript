const notes = [
  {
    title: "my next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "habbits to work on",
    body: "Exercice.Eating a bit better",
  },
  {
    title: "Office modification",
    body: "get a new seat",
  },
];
//! how to filter data
// create a filters object with a text empty to compare it with our arrays of notes
const filters = {
  searchtext: "",
};
// create a function with 2 argument our notes and filters
//**fi had la fonction jdida rah nfiltriw 3la hsseb text elli rah dakhlo fel input*/
//* rah tejbed new array elli ykoun fiha el input elli yeketbo user ywafe9 el content elli fel array nta3 notes nta3ek/
//*  ki tkharej el array jdida eddir 3liha loop beh te3radha fi safha/
//* ki raddir looping rah kol marra yaffichi les resultat we tet3amar el safha/
//* lazem kol ma t3ayet la fonction elli tjiblek el filtred note direlha clear fi safhaa win treje3 lélement vide/
const renderNotes = function (notes, filters) {
  const filterNote = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchtext.toLowerCase());
  });
  // console.log(filterNote);
  document.querySelector(".notes").innerHTML = "";
  // document.querySelector(".notes").innerText = "";
  filterNote.forEach(function (note) {
    const noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector(".notes").appendChild(noteEl);
  });
};
renderNotes(notes, filters);
// an event listner can be click button hover scroll..etc any interaction between user and interface
// you can handler without argument and the most argument is the event (e)
document.querySelector(".create").addEventListener("click", function (e) {
  e.target.textContent = "button clicked";
  // this code will change the current target text button after click
  console.log("hello world");
  // console.log(e);
});

document.querySelector(".remove").addEventListener("click", function (e) {
  let notes = document.querySelectorAll(".note");
  notes.forEach(function (note) {
    note.remove();
  });
});

// target
//? 1-single
// p
// # withid
// . with class
//? 2-  multiple
// p#order
// button.invemtory
// h1#title.application
// h2/application#title

//! querry selector all can be used by classes
// document.querySelector("#search").addEventListener("change", function (e) {
//   console.log(e.target.value);
//   console.log(e);
// });
// input tkhalik tchouff chaque harf ki ykoun yekteb mieu que change
document.querySelector("#search").addEventListener("input", function (e) {
  // console.log(e.target.value);
  filters.searchtext = e.target.value;
  renderNotes(notes, filters);
  // console.log(e);
});
