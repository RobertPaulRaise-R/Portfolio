import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <TechStack />
      <AboutMe />
      <Projects />
      <Services />
    </div>
  );
}

export default App;
