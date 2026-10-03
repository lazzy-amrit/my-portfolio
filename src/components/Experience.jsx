import useInView from "../hooks/useInView";
import { experience, experienceSummary } from "../data/content";

export default function Experience() {
  const [ref, visible] = useInView();
  const anim = visible ? "show-anim" : "hidden-anim";

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full bg-black text-white px-6 md:px-16 py-24"
    >
      <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${anim}`}>Experience</h2>
      <p className={`text-gray-400 mb-16 max-w-2xl ${anim}`}>{experienceSummary}</p>

      <ol className={`space-y-8 max-w-3xl ${anim}`}>
        {experience.map((item) => (
          <li key={item.title} className="border-l border-gray-800 pl-6">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-gray-300 hover:underline"
              >
                {item.link.replace(/^https?:\/\//, "").replace(/\/$/, "")} →
              </a>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-24 border-t border-gray-700"></div>
    </section>
  );
}
