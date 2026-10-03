import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollHint from "./components/ScrollHint";
import About from "./components/About";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <ScrollHint />
        <About />
        <Stack />
        <Experience />
        <Services />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
