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
// rah tutliser method filter fel array bessah
//wech rah tfiltri rah tfiltri les elements elli dakhel fel array idem pour searching
const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const IsTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const IsBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return IsTitleMatch || IsBodyMatch;
  });
};
console.log(findNotes(notes, "go"));

// challenge filtring todos that is completed
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

const filterTodos = function (todos) {
  return todos.filter(function (todo, index) {
    const isCompleted = todo.completed;
    return isCompleted;
  });
};
console.log(filterTodos(todos));
