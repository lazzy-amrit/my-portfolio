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

        {/* PROJECT 2 - Mukio */}
        <div className={`p-6 border border-gray-800 rounded-xl hover:border-gray-500 transition ${
          visible ? "show-anim" : "hidden-anim"
        }`}>

          <h3 className="text-xl font-semibold mb-3">
            Mukio
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            A tiny tty-based music player for Linux. Search, stream, and queue tracks from
            YouTube or Spotify links straight from the terminal, with a live audio visualizer
            and Discord Rich Presence built in.
          </p>

          <p className="text-gray-500 text-sm mb-6">
            Python • Linux
          </p>

          <a
            href="https://github.com/lazzy-amrit/mukio"
            target="_blank"
            className="inline-block px-4 py-2 border border-gray-600 rounded-lg text-sm hover:bg-white hover:text-black transition"
          >
            View Project →
          </a>

        </div>

        {/* PROJECT 3 - Notely */}
        <div className={`p-6 border border-gray-800 rounded-xl hover:border-gray-500 transition ${
          visible ? "show-anim" : "hidden-anim"
        }`}>

          <h3 className="text-xl font-semibold mb-3">
            Notely
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            A notes storage platform with an AI-based helper for students, built on a FastAPI
            backend with real-time communication. Currently under development.
          </p>

          <p className="text-gray-500 text-sm mb-6">
            FastAPI • AI • In Development
          </p>

          <a
            href="https://getnotely.netlify.app"
            target="_blank"
            className="inline-block px-4 py-2 border border-gray-600 rounded-lg text-sm hover:bg-white hover:text-black transition"
          >
            View Project →
          </a>

        </div>

        {/* PROJECT 4 - Luna */}
        <div className={`p-6 border border-gray-800 rounded-xl hover:border-gray-500 transition ${
          visible ? "show-anim" : "hidden-anim"
        }`}>

          <h3 className="text-xl font-semibold mb-3">
            Luna
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            A funny AI chatbot for Discord with a chaotic personality, built with discord.py
            and Google Gemini. Talks, jokes around, and answers questions right in your server.
          </p>

          <p className="text-gray-500 text-sm mb-6">
            Python • Discord.py • Gemini
          </p>

          <a
            href="https://github.com/lazzy-amrit/luna"
            target="_blank"
            className="inline-block px-4 py-2 border border-gray-600 rounded-lg text-sm hover:bg-white hover:text-black transition"
          >
            View Project →
          </a>

        </div>

        {/* PROJECT 5 - Urban Pulse */}
        <div className={`p-6 border border-gray-800 rounded-xl hover:border-gray-500 transition ${
          visible ? "show-anim" : "hidden-anim"
        }`}>

          <h3 className="text-xl font-semibold mb-3">
            Urban Pulse
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            A smart infrastructure detector that uses sensors to flag problem areas in a city
            for future repair. Working, but still under development and not yet shared publicly.
          </p>

          <p className="text-gray-500 text-sm mb-6">
            Python • In Development
          </p>

          <a
            href="https://github.com/lazzy-amrit/Urban-Pulse"
            target="_blank"
            className="inline-block px-4 py-2 border border-gray-600 rounded-lg text-sm hover:bg-white hover:text-black transition"
          >
            View Project →
          </a>

        </div>

      </div>

    </section>
  );
}