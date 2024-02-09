import { loaded } from "../actions";

const fetchTodos = async (dispatch) => {
  let todos = [];

  // Check if todos exist in local storage
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todos = JSON.parse(storedTodos);
  } else {
    // Initialize local storage with provided todos array
    todos = [
      {
        id: 1,
        text: "Making Todo App for Qtec",
        completed: true,
      },
      {
        id: 2,
        text: "Writing Readme File for Todo App",
        completed: false,
        color: "red",
      },
      {
        id: 3,
        text: "Deploying Todo App",
        completed: false,
        color: "red",
      },
      {
        id: 4,
        text: "Sending Email to Qtec",
        completed: false,
        color: "red",
      },
    ];

    // Store initial todos in local storage
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // Dispatch the loaded action with fetched todos
  dispatch(loaded(todos));
};

export default fetchTodos;
