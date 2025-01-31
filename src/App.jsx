import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import SplashCursor from "./components/SplashCursor";



const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
      <div className="h-[100vh] w-[100vw] bg-[#000]">
        <SplashCursor />
      </div>
    </div>
  );
};
export default App;
