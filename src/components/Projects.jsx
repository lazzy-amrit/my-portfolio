import useInView from "../hooks/useInView";

export default function Projects() {
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
        Projects
      </h2>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* PROJECT 1 - Emoji Picker */}
        <div className={`p-6 border border-gray-800 rounded-xl hover:border-gray-500 transition ${
          visible ? "show-anim" : "hidden-anim"
        }`}>

          <h3 className="text-xl font-semibold mb-3">
            Lightweight Emoji Picker
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            Fast and minimal emoji picker built using Python, focused on performance and simplicity.
          </p>

          <p className="text-gray-500 text-sm mb-6">
            Python
          </p>

          <a
            href="https://github.com/lazzy-amrit/light-weight_emoji-picker" // <-- PUT YOUR GITHUB LINK HERE
            target="_blank"
            className="inline-block px-4 py-2 border border-gray-600 rounded-lg text-sm hover:bg-white hover:text-black transition"
          >
            View Project →
          </a>

        </div>

        {/* PROJECT 2 (placeholder for future) */}
        <div className={`p-6 border border-gray-800 rounded-xl hover:border-gray-500 transition ${
          visible ? "show-anim" : "hidden-anim"
        }`}>

          <h3 className="text-xl font-semibold mb-3">
            Backend API System
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            Building scalable APIs with FastAPI, handling data and backend logic efficiently.
          </p>

          <p className="text-gray-500 text-sm mb-6">
            Python • FastAPI
          </p>

          <a
            href="#"
            className="inline-block px-4 py-2 border border-gray-600 rounded-lg text-sm opacity-50 cursor-not-allowed"
          >
            Coming Soon
          </a>

        </div>

      </div>

    </section>
  );
}