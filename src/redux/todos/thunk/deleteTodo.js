import { deleted } from "../actions";

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    // Get existing todos from local storage
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    // Filter out the todo to delete by its id
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);

    // Update local storage with the filtered todos array
    localStorage.setItem("todos", JSON.stringify(filteredTodos));

    // Dispatch deleted action with the todo id
    dispatch(deleted(todoId));
  };
};

export default deleteTodo;
