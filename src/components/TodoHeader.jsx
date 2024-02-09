// import { useState } from "react";
import { useDispatch } from "react-redux";
import doubleTickIcon from "../assets/images/double-tick.png";
import noteIcon from "../assets/images/notes.png";
import plusIcon from "../assets/images/plus.png";
import { allCompleted, clearCompleted } from "../redux/todos/actions";

const TodoHeader = ({ input, handleInput, submitHandler }) => {
  const dispatch = useDispatch();

  const completeHadler = () => {
    dispatch(allCompleted());
  };

  const clearHeandler = () => {
    dispatch(clearCompleted());
  };
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(input);
        }}
      >
        <img src={noteIcon} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={(e) => {
            e.preventDefault();
            handleInput(e.target.value);
          }}
        />
        <button type="submit">
          <img src={plusIcon} className="w-[28px] h-[28px]" alt="Add todo" />
        </button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={completeHadler}>
          <img className="w-4 h-4" src={doubleTickIcon} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHeandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default TodoHeader;
