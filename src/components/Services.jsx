import useInView from "../hooks/useInView";
import { services } from "../data/content";

export default function Services() {
  const [ref, visible] = useInView();
  const anim = visible ? "show-anim" : "hidden-anim";

  return (
    <section
      id="services"
      ref={ref}
      className="w-full bg-black text-white px-6 md:px-16 py-24"
    >
      <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${anim}`}>What I can build for you</h2>
      <p className={`text-gray-400 mb-16 max-w-2xl ${anim}`}>
        Available for freelance work. Tell me what you need and I will tell you how I would build it.
      </p>

      <div className={`grid md:grid-cols-2 gap-10 ${anim}`}>
        {services.map((s) => (
          <div key={s.title} className="p-6 border border-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 border-t border-gray-700"></div>
    </section>
  );
}
