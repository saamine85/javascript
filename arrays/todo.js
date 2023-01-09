const todos = [
  "dirnk water",
  "take a shower",
  "brush teeth",
  "got to work", // -2
  "have a meeting", // -1
];

// challenge one
console.log(`you have ${todos.length} todos`);
console.log(`todos: ${todos[0]} `);
console.log(`todos: ${todos[todos.length - 2]} `);

// chellenge 2

// delete third item
todos.splice(2, 1);
console.log(todos);
// add a new item onto the end
todos.push("take a break");
console.log(todos);
// remove the first item from the list
todos.shift();
console.log(todos);
// add item from the begining in the list
todos.unshift("this is a first item added");
console.log(todos);

todos.forEach((todo, index) => {
  const num = index + 1;
  console.log(`${num}. ${todo}`); // or
  console.log(`${index + 1}. ${todo}`);
});
console.log(`you have ${todos.length} todo`);


