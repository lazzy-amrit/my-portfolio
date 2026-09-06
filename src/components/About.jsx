import useInView from "../hooks/useInView";

export default function About() {
  const [ref, visible] = useInView();

  return (
    <section
      ref={ref}
      className="min-h-screen w-full bg-black text-white px-6 md:px-16 py-20"
    >

      {/* TITLE */}
      <h2 className={`text-3xl md:text-5xl font-bold mb-16 ${
        visible ? "show-anim" : "hidden-anim"
      }`}>
        About Me
      </h2>

      {/* TOP TEXT */}
      <div className={`mb-20 max-w-3xl ${
        visible ? "show-anim" : "hidden-anim"
      }`}>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I am a backend developer. I build clean and efficient backends for websites,
          working with large-scale data and integrating AI into systems.
        </p>
      </div>

      {/* TWO COLUMN */}
      <div className={`grid md:grid-cols-2 gap-16 ${
        visible ? "show-anim" : "hidden-anim"
      }`}>

        {/* LEFT */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-400">
            What I Do
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I use Python to create fast and flexible APIs, handle large data,
            and integrate AI into backend systems. I also use HTML, CSS, and JavaScript
            for frontend when needed.
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-400">
            Info
          </h3>

          <div className="space-y-3 text-gray-300">

            <p>
              <span className="text-gray-500">Tech Stack —</span><br />
              Python, HTML, CSS, JavaScript, Linux, Git
            </p>

            <p>
              <span className="text-gray-500">Doing Now —</span><br />
              Learning React and Linux
            </p>

            <p>
              <span className="text-gray-500">Location —</span><br />
              Punjab
            </p>

          </div>
        </div>

      </div>

      {/* LINE */}
      <div className="mt-16 border-t border-gray-700"></div>

    </section>
  );
}