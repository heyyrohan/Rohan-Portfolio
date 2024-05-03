import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
