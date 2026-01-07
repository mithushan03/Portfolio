import About from "./components/About";
import Experience from "./components/Experience";
import Certifications  from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";




const App = () => {
  return (
    <div className="pt-20">
      <Header />
      <Home />
      <About />
      <Experience />
      <Certifications  />
      <Project />
      <Contact />
      <Footer />
      
      
    </div>
  );
};
export default App;
