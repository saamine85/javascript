let myBook = {
  author: "amine",
  title: "1984",
  countPage: 98,
};
console.log(myBook);
// reading object dot notation
let test = myBook.author;
console.log(test);

console.log(
  `the title is ${myBook.author} and my title is ${myBook.title} and my cout page is ${myBook.countPage}`
);
//changing object propreties
myBook.title = "sadi amine";
myBook.author = "test changing";
console.log(
  `the title is ${myBook.author} and my title is ${myBook.title} and my cout page is ${myBook.countPage}`
);

// challenge

let person = {
  name: "amine",
  age: 35,
  location: "sidi bel abbes",
};
console.log(
  ` my name is : ${person.name} and my age is :${person.age} and i leave in ${person.location} `
);

person.age = person.age + 1;
console.log(
  ` my name is : ${person.name} and my age is :${person.age} and i leave in ${person.location} `
);
// revision
let user = {
  name: "amine",
  age: 23,
  location: 'algeria',
};
console.log(`${user.name} is ${user.age} lives in ${user.location}.`);
console.log(`${user.name} is ${user.age + 1} lives in ${user.location}.`);
