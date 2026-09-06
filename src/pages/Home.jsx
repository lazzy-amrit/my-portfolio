import Hero from "../components/Hero";
import ScrollHint from "../components/ScrollHint";
import About from "../components/About";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <ScrollHint />
      <About />
    </div>
  );
}