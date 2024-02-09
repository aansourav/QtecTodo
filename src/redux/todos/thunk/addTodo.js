import { added } from "../actions";

const addTodo = (todoText) => {
  const nextTodoId = (todos) => {
    // Find the maximum ID from existing todos
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    // Return the next ID (maxId + 1)
    return maxId + 1;
  };

  return async (dispatch) => {
    // Get existing todos from local storage
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    // Create new todo object with a unique ID
    const newTodo = {
      id: nextTodoId(todos),
      text: todoText,
      completed: false,
    };

    // Add new todo to the todos array
    todos.push(newTodo);

    // Update local storage with new todos array
    localStorage.setItem("todos", JSON.stringify(todos));

    // Dispatch added action with the new todo text
    dispatch(added(newTodo.text));
  };
};

export default addTodo;
