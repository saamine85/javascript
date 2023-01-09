let myBook1 = {
  author: "amine",
  title: "1984",
  countPage: 98,
};

let otherBook = {
  author: "sadi",
  title: "read me",
  countPage: 198,
};
const getSummary = (book) => {
  // to have a code reusible we define a parameters
  // hna derna book comme parametre beh ne9edro neste3mlo les 2 objetc sans repeter les operation pour tt les 2
  console.log(`my name is ${book.author} and my book title is ${book.title}`);
};
getSummary(myBook1);
getSummary(otherBook);

//! explication
const getSummar = (ismmotaghayir) => {
  // to have a code reusible we define a parameters
  // hna derna book comme parametre beh ne9edro neste3mlo les 2 objetc sans repeter les operation pour tt les 2
  console.log(
    `my name is ${ismmotaghayir.author} and my book title is ${ismmotaghayir.title}`
  );
};
getSummar(myBook1); //bayanetMotaghayerObject1;
getSummar(otherBook); //bayanetMotaghayerObject2

// another test

let books = {
  title: "test1",
  author: "you",
  pageCount1: 123,
};
let otherBooks = {
  title: "test2",
  author: "you2",
  pageCount1: 321,
};
let otherBooks2 = {
  title: "test3",
  author: "you3",
  pageCount1: 3,
};
// hna 3andna mm propriete mais la valeur tetbedel
// au lieu de repeter les codes pour excuter chaque
// objet par exemple habin ndiro console log le col wahed bessah
//3andna 3amel mochtarak elli houwa les propriete matalan hna 3andna les propritet nta3 el kteb
// la solution hiya edir function
const getSummary1 = (book) => {
  console.log(`${book.title} and ${book.author} and ${book.pageCount1}`);
};
getSummary1(books);
getSummary1(otherBooks);
getSummary1(otherBooks2);

//acces to an object in object
// hna men objet creena un return un autre objet
// men propriete nta2 book creena un autre objet fih summary we pagecount summary
const getSummary2 = (book) => {
  return {
    summary: `${book.title} and  the author is ${book.author}`,
    pageCountSummary: `${book.title} and pages is ${book.pageCount1}`,
  };
  // console.log(`${book.title} and ${book.author} and ${book.pageCount1}`);
};

let summary3 = getSummary2(books);
// hna kayen  objet avec function fiha objet we beh taccedi lih lazem dot notation
console.log(summary3);
let summary4 = getSummary2(otherBooks);
let summary5 = getSummary2(otherBooks2);

console.log(summary3.pageCountSummary);
console.log(summary4.summary);
console.log(summary5.pageCountSummary);

// challenge
// function take fernenheight and return an object with all temperatures

const temp = (feahrenheit) => {
  return {
    feahrenheit: feahrenheit,
    celsius: (feahrenheit - 32) * (5 / 9),
    kelvin: (feahrenheit + 459.67) * (5 / 9),
  };
};
let temp1 = temp(40);
console.log(temp1);
console.log(temp1.celsius);
console.log(`this is celcius temp: ${temp1.celsius}`);
