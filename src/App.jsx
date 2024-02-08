import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />

      {/* -----Todo Section Start----- */}

      <div className="sm:w-full max-w-3xl shadow-xl rounded-lg p-6  bg-white mx-6 sm:mx-auto">
        <TodoHeader />
        <hr className="mt-4" />
        <TodoList />
        <hr className="mt-4" />
        <TodoFooter />
      </div>

      {/* -----Todo Section End------ */}

      <Footer />
    </div>
  );
}

export default App;
