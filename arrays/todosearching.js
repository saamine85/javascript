const todos1 = [
  "order room",
  "clean kitchen",
  "buy food",
  "do work",
  "go to gym",
];
const todos = [
  {
    title: "order room",
    completed: true,
  },
  {
    title: "clean kitchen",
    completed: false,
  },
  {
    title: "buy food",
    completed: true,
  },
  {
    title: "do work",
    completed: false,
  },
  {
    title: "go to gym",
    completed: false,
  },
];

// const deleteTodo = function (todos, titleTodo) {
//   const index = todos.findIndex(function (todo, index) {
//     return todo.title.toLowerCase() === titleTodo.toLowerCase();
//   });
//   // console.log(index);
//   return todos[index];
// };
// const todo = deleteTodo(todos, "buy food");
// console.log(todo);
// let deleted = todos.indexOf(todo);
// console.log(deleted);
// todos.splice(deleted, 1);
// console.log(todos);

const deleteTodo = function (todos, titleTodo) {
  const index = todos.findIndex(function (todo, index) {
    return todo.title.toLowerCase() === titleTodo.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};
const todo = deleteTodo(todos, "buy food");
// console.log(todo);
console.log(todos);
