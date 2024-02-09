import { colorSelected } from "../actions";

const updateColor = (todoId, color) => {
  return async (dispatch) => {
    // Get existing todos from local storage
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    // Find the todo to update by its id
    const todoToUpdate = todos.find((todo) => todo.id === todoId);
    if (todoToUpdate) {
      // Update the color of the todo
      todoToUpdate.color = color;

      // Update local storage with the updated todos array
      localStorage.setItem("todos", JSON.stringify(todos));

      // Dispatch colorSelected action with the todo id and color
      dispatch(colorSelected(todoId, color));
    } else {
      console.error(`Todo with id ${todoId} not found.`);
    }
  };
};

export default updateColor;
