import useInView from "../hooks/useInView";

export default function About() {
  const [ref, visible] = useInView();
  const anim = visible ? "show-anim" : "hidden-anim";

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen w-full bg-black text-white px-6 md:px-16 py-24"
    >
      <h2 className={`text-3xl md:text-5xl font-bold mb-16 ${anim}`}>About me</h2>

      <div className={`mb-20 max-w-3xl ${anim}`}>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I am Amrit Vex, also known online as Luffy and Lazzy Luffy, a full stack and Linux
          developer from Punjab, India. I have 5 years of experience building fast backends
          in Python, web apps in React, and the bots and tools that sit around them, and I
          have worked with companies. I take a project from idea to a deployed, running
          product.
        </p>
      </div>

      <div className={`grid md:grid-cols-2 gap-16 ${anim}`}>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-400">What I do</h3>
          <p className="text-gray-300 leading-relaxed">
            I design APIs with FastAPI, build interfaces with React and Tailwind, and ship
            everything in Docker on Linux. I am the Linux developer of Flint Launcher, I
            have worked as staff and as a developer at Sudharshan Cloud and on Krish MC, and
            I run a coding community of 2,000+ members. I also make Discord bots, AI
            chatbots and small plugins.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-400">Info</h3>

          <div className="space-y-3 text-gray-300">
            <p>
              <span className="text-gray-500">Main stack —</span>
              <br />
              Python, FastAPI, React, Docker, Linux, Git
            </p>
            <p>
              <span className="text-gray-500">Also —</span>
              <br />
              Kotlin (basic), JavaScript, Tailwind CSS, SQLite
            </p>
            <p>
              <span className="text-gray-500">Availability —</span>
              <br />
              Open to freelance projects
            </p>
            <p>
              <span className="text-gray-500">Also known as —</span>
              <br />
              Luffy, Lazzy Luffy, lazzy-amrit
            </p>
            <p>
              <span className="text-gray-500">Location —</span>
              <br />
              Punjab, India
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-700"></div>
    </section>
  );
}
