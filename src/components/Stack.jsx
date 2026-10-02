import useInView from "../hooks/useInView";
import { skillGroups } from "../data/content";

export default function Stack() {
  const [ref, visible] = useInView();
  const anim = visible ? "show-anim" : "hidden-anim";

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen w-full bg-black text-white px-6 md:px-16 py-24"
    >
      <h2 className={`text-3xl md:text-5xl font-bold mb-16 ${anim}`}>Skills</h2>

      <div className={`grid md:grid-cols-2 gap-x-16 gap-y-10 text-lg ${anim}`}>
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-gray-500 mb-3">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1 border border-gray-800 rounded-lg text-base text-gray-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20 border-t border-gray-700"></div>

      <div className="mt-20 max-w-3xl">
        <h2 className={`text-3xl md:text-5xl font-bold mb-10 ${anim}`}>Philosophy</h2>
        <p className={`text-lg md:text-xl text-gray-300 leading-relaxed ${anim}`}>
          I work on a simple principle — make it work, then make it better. Keep learning
          while building. Create, break, improve, and repeat. Focus on clean systems, and
          then deploy.
        </p>
      </div>
    </section>
  );
}
