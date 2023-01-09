const ps = document.querySelectorAll("p");
console.log(ps);

ps.forEach(function (p) {
  // 1.hna nhawesso 3la le mot (the) elli kayen fi textcontent de chaque paragraphe
  // 2. nsuprimiw hadek lelement men dom
  let text = p.textContent.includes("the");
  if (text) {
    p.remove();
  }
});

const teste = document.querySelectorAll("p");
console.log(teste);

/***************************** */
/***************************** */
/***************************** */
// // ps.forEach((p) => {
// //   p.remove();
// // });
// const filterTodos = ps.filter(function (p, index) {
//   const ismatched = p.text.include("the");
//   return ismatched;
// });
// console.log(filterTodos);
// // const ps = [
// //   { text: "clean the kitchen" },
// //   { text: "book flights" },
// //   { text: "research meseums" },
// //   { text: "walk the cat" },
// //   { text: "finich this course!" },
// // ];

// const findTodos = function (ps, query) {
//   ps.filter(function (p, index) {
//     const isMatched = p.text.includes(query);
//     // if (isMatched) {
//     //   ps.forEach((p) => {
//     //     p.remove();
//     //   });
//     // }
//     return isMatched;
//   });
// };
// console.log(findTodos(ps, "the"));

// // console.log(p.includes("clean the kitchen"));
// // const findTodo = function (ps, query) {
// //   // ps.filter(function (p, index) {
// //   //   p.includes(query);
// //   // });
// // };
// // console.log(findTodo(ps, "the"));
// // ps.forEach(function (p) {
// //   p.remove(function (p, index) {
// //     ps.filter;
// //   });
// // });
