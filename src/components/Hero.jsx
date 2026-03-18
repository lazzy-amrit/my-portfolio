import useInView from "../hooks/useInView";

export default function Hero() {
  const [ref, visible] = useInView();

  return (
    <section
      ref={ref}
      className="h-screen w-full flex items-center justify-center bg-black text-white relative"
    >

 <img
  src="/favicon.png"
  alt="logo"
  className="w-24 h-24 rounded-full object-cover border border-gray-500"
/>

      <div className="text-center px-4">

        <p className={`text-gray-500 text-sm mb-2 ${visible ? "show-anim" : "hidden-anim"}`}>
          Hi, I am
        </p>

        <h1 className={`text-6xl md:text-8xl font-bold ${visible ? "show-anim" : "hidden-anim"}`}>
          AMRIT
        </h1>

        <p className={`mt-4 text-lg text-gray-400 ${visible ? "show-anim" : "hidden-anim"}`}>
          Backend Developer
        </p>

      </div>
    </section>
  );
}
