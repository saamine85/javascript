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
    completed: true,
  },
  {
    title: "go to park",
    completed: false,
  },
  {
    title: "walk with friends",
    completed: false,
  },
];

// const para = document.createElement("p");
// para.textContent = "you have 2 todos left";
// let appendBody = document.querySelector("body");
// appendBody.appendChild(para);
const filters = {
  searchtext: "",
};

//! solution of andrew
const renderTodos = function (todos, filters) {
  const filterdTodos = todos.filter(function (todo, index) {
    return todo.title.toLowerCase().includes(filters.searchtext.toLowerCase());
  });

  const incompleteTodos = filterdTodos.filter(function (todo) {
    return !todo.completed;
  });
  // clear data after calculating things
  document.querySelector("#todos").innerHTML = "";
  const header = document.createElement("h2");
  header.textContent = ` you have ${incompleteTodos.length} todos left `;
  document.querySelector("#todos").appendChild(header);
  filterdTodos.forEach(function (todo, index) {
    const num = index + 1;
    const paraTodo = document.createElement("p");
    paraTodo.textContent = `${num} - ${todo.title} , ${todo.completed}`;
    paraTodo.classList.add("todo");
    document.querySelector("#todos").appendChild(paraTodo);
  });
};
renderTodos(todos, filters);
//! my solution
// const renderTodo = function (todos, filters) {
//   const todoIncomplete = todos.filter(function (todo) {
//     return (
//       !todo.completed &&
//       todo.title.toLowerCase().includes(filters.searchtext.toLowerCase())
//     );
//   });
//   console.log(todoIncomplete);
//   document.querySelector("div").innerText = "";
//   const para = document.createElement("h2");
//   para.textContent = `you have ${todoIncomplete.length} todos left`;
//   let appendBody = document.querySelector("div");
//   appendBody.appendChild(para);
//   todoIncomplete.forEach(function (todo, index) {
//     let num = index + 1;
//     let todoPara = document.createElement("p");
//     todoPara.textContent = `${num} - ${todo.title}`;
//     // how to add a class to our html
//     todoPara.classList.add("todo");
//     document.querySelector("div").appendChild(todoPara);
//   });
// };
// renderTodo(todos, filters);
/************************ */
// listen and add new todos******************
/************************ */
// document.querySelector(".add").addEventListener("click", function (e) {
//   console.log("add new todo");
// });

/************************ */
// remove all todos ******************
/************************ */
document.querySelector(".remove").addEventListener("click", function (e) {
  let todos = document.querySelector(".todo");
  todos.forEach(function (todo) {
    todo.remove();
  });
  // ajoutit had el code beh nimprimi 0 les todos seront supprimés
  if (todos === null) {
    const para = document.createElement("h2");
    para.textContent = `you have 0 todos left`;
    let appendBody = document.querySelector("div");
    appendBody.appendChild(para);
  }
});
/************************ */
// add new todo and listen to input ******************
/************************ */
document.querySelector("#filterTodo").addEventListener("input", function (e) {
  filters.searchtext = e.target.value;
  renderTodos(todos, filters);
  // console.log(e.target.value);
});

// working with form andd add new todo
// const newTodo = {
//   title: "",
//   completed: "false",
// };

document.querySelector("#add-todo").addEventListener("submit", function (e) {
  e.preventDefault();
  // newTodo.title = e.target.elements.todoText.value;
  if (e.target.elements.todoText.value !== "") {
    todos.push({
      title: e.target.elements.todoText.value,
      completed: "false",
    });
  }
  renderTodos(todos, filters);
  console.log(todos);
  e.target.elements.todoText.value = "";
});
