import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TodoHeader from "./components/TodoHeader";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />

      {/* -----Todo Section Start----- */}

      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white mx-auto">
        <TodoHeader />
        <hr className="mt-4" />
      </div>

      {/* -----Todo Section End------ */}

      <Footer />
    </div>
  );
}

export default App;
