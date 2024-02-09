import { toggled } from "../actions";

const updateStatus = (todoId, currentStatus) => {
  return async (dispatch) => {
    // Get existing todos from local storage
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    // Find the todo to update by its id
    const todoToUpdate = todos.find((todo) => todo.id === todoId);
    if (todoToUpdate) {
      // Update the completed status of the todo
      todoToUpdate.completed = !currentStatus;

      // Update local storage with the updated todos array
      localStorage.setItem("todos", JSON.stringify(todos));

      // Dispatch toggled action with the todo id
      dispatch(toggled(todoId));
    } else {
      console.error(`Todo with id ${todoId} not found.`);
    }
  };
};

export default updateStatus;
