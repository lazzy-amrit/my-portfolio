import useInView from "../hooks/useInView";

export default function Stack() {
  const [ref, visible] = useInView();

  return (
    <section
      ref={ref}
      className="min-h-screen w-full bg-black text-white px-6 md:px-16 py-20"
    >

      {/* STACK TITLE */}
      <h2 className={`text-3xl md:text-5xl font-bold mb-16 ${
        visible ? "show-anim" : "hidden-anim"
      }`}>
        Stack
      </h2>

      {/* STACK LIST */}
      <div className={`space-y-10 text-lg ${
        visible ? "show-anim" : "hidden-anim"
      }`}>

        <div>
          <span className="text-gray-500">Languages —</span><br />
          Python, HTML, CSS, JavaScript
        </div>

        <div>
          <span className="text-gray-500">Frameworks —</span><br />
          FastAPI, NumPy (basics)
        </div>

        <div>
          <span className="text-gray-500">Database —</span><br />
          SQLite
        </div>

        <div>
          <span className="text-gray-500">OS for Deployment —</span><br />
          Linux (Arch preferred)
        </div>

        <div>
          <span className="text-gray-500">Currently —</span><br />
          Learning frontend to become a full stack developer
        </div>

      </div>

      {/* LINE */}
      <div className="mt-20 border-t border-gray-700"></div>

      {/* PHILOSOPHY */}
      <div className="mt-20 max-w-3xl">

        <h2 className={`text-3xl md:text-5xl font-bold mb-10 ${
          visible ? "show-anim" : "hidden-anim"
        }`}>
          Philosophy
        </h2>

        <p className={`text-lg md:text-xl text-gray-300 leading-relaxed ${
          visible ? "show-anim" : "hidden-anim"
        }`}>
          I work on a simple principle — make it work, then make it better.
          Keep learning while building. Create, break, improve, and repeat.
          Focus on clean systems, and then deploy.
        </p>

      </div>

    </section>
  );
}