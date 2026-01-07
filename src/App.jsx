import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="pt-20">
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Certifications />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
