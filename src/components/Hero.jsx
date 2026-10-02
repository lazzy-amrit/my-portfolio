import useInView from "../hooks/useInView";

export default function Hero() {
  const [ref, visible] = useInView();
  const anim = visible ? "show-anim" : "hidden-anim";

  return (
    <section
      id="top"
      ref={ref}
      className="h-screen w-full flex flex-col md:flex-row items-center justify-center gap-8 bg-black text-white relative px-4"
    >
      <img
        src="/favicon.png"
        alt="Amrit Vex"
        width="96"
        height="96"
        className="w-24 h-24 rounded-full object-cover border border-gray-500"
      />

      <div className="text-center md:text-left">
        <p className={`text-gray-500 text-sm mb-2 ${anim}`}>Hi, I am</p>

        <h1 className={`text-5xl md:text-8xl font-bold ${anim}`}>AMRIT VEX</h1>

        <p className={`mt-4 text-lg md:text-xl text-gray-300 ${anim}`}>
          Full Stack Developer
        </p>
        <p className={`mt-1 text-gray-500 ${anim}`}>
          FastAPI • React • Docker • Bots
        </p>

        <div className={`mt-8 flex gap-4 justify-center md:justify-start ${anim}`}>
          <a
            href="#projects"
            className="px-5 py-2 border border-gray-600 rounded-lg text-sm hover:bg-white hover:text-black transition"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-white text-black rounded-lg text-sm hover:bg-gray-300 transition"
          >
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
}
