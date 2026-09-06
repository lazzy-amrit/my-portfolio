import useInView from "../hooks/useInView";

export default function Contact() {
  const [ref, visible] = useInView();

  return (
    <section
      ref={ref}
      className="min-h-screen w-full bg-black text-white px-6 md:px-16 py-20 flex flex-col justify-between"
    >

      {/* TOP CONTENT */}
      <div>

        <h2 className={`text-3xl md:text-5xl font-bold mb-16 ${
          visible ? "show-anim" : "hidden-anim"
        }`}>
          Contact
        </h2>

        <div className={`space-y-6 text-lg ${
          visible ? "show-anim" : "hidden-anim"
        }`}>

          <p>
            <span className="text-gray-500">Email —</span><br />
            <a
              href="mailto:Amrit1984o@gmail.com"
              className="hover:text-gray-300 hover:underline transition"
            >
              Amrit1984o@gmail.com
            </a>
          </p>

          <p>
            <span className="text-gray-500">GitHub —</span><br />
            <a
              href="https://github.com/lazzy-amrit"
              target="_blank"
              className="hover:text-gray-300 hover:underline transition"
            >
              github.com/lazzy-amrit
            </a>
          </p>

          <p>
            <span className="text-gray-500">Discord —</span><br />
            <a
              href="https://discord.com/users/tsun_106"
              target="_blank"
              className="hover:text-gray-300 hover:underline transition"
            >
              tsun_106
            </a>
          </p>

          <p>
            <span className="text-gray-500">Minecraft Server —</span><br />
            quietbyte.mcsh.io
          </p>

          <p>
            <span className="text-gray-500">One Block Server —</span><br />
            mc.amritvex.site
          </p>

        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="mt-20 border-t border-gray-800 pt-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Amrit. All rights reserved.
      </div>

    </section>
  );
}