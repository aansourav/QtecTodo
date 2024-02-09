import { useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import addTodo from "./redux/todos/thunk/addTodo";

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (inputText) => {
    setInput(inputText);
  };

  const submitHandler = (input) => {
    if (input) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleEdit = (todo) => {
    setInput(todo.text);
  };

  return (
    <div>
      <Header />
      <HeroSection />

      {/* -----Todo Section Start----- */}

      <div className="sm:w-full max-w-3xl shadow-xl rounded-lg p-6  bg-white mx-6 sm:mx-auto">
        <TodoHeader handleInput={handleInput} submitHandler={submitHandler} input={input} />
        <hr className="mt-4" />
        <TodoList handleEdit={handleEdit} />
        <hr className="mt-4" />
        <TodoFooter />
      </div>

      {/* -----Todo Section End------ */}

      <Footer />
    </div>
  );
}

export default App;
