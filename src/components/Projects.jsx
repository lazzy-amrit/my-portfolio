import useInView from "../hooks/useInView";
import { projects } from "../data/content";

export default function Projects() {
  const [ref, visible] = useInView();
  const anim = visible ? "show-anim" : "hidden-anim";

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen w-full bg-black text-white px-6 md:px-16 py-24"
    >
      <h2 className={`text-3xl md:text-5xl font-bold mb-16 ${anim}`}>Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p) => (
          <article
            key={p.name}
            className={`p-6 border border-gray-800 rounded-xl hover:border-gray-500 transition flex flex-col ${anim}`}
          >
            <h3 className="text-xl font-semibold mb-3">{p.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{p.description}</p>
            <p className="text-gray-500 text-sm mb-6">{p.tags}</p>

            <div className="mt-auto">
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${p.name}`}
                  className="inline-block px-4 py-2 border border-gray-600 rounded-lg text-sm hover:bg-white hover:text-black transition"
                >
                  View project →
                </a>
              ) : (
                <span className="text-sm text-gray-600">Private repository</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
