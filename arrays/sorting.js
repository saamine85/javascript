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
//sorting fi string ye3ni yeplacihom par alphabet wel majuscule daymen yji gbel miniscule
// sorting ydir juste tartib 3la hsseb marak hab

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};
sortNotes(notes);
console.log(notes);

// challenge sorting
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
];

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (a.completed && !b.completed) {
      return -1;
    } else if (!a.todo.completed && b.todo.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};
sortTodos(todos);
console.log(todos);
