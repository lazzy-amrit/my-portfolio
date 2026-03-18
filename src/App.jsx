import Hero from "./components/Hero";
import ScrollHint from "./components/ScrollHint";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
function App() {
  return (
    <div className="relative">
      <Hero />
      <ScrollHint />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;