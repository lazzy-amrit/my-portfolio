import useInView from "../hooks/useInView";

export default function Contact() {
  const [ref, visible] = useInView();
  const anim = visible ? "show-anim" : "hidden-anim";
  const link = "hover:text-gray-300 hover:underline transition";

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen w-full bg-black text-white px-6 md:px-16 py-24 flex flex-col justify-between"
    >
      <div>
        <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${anim}`}>Contact</h2>
        <p className={`text-gray-400 mb-16 max-w-xl ${anim}`}>
          Have a website, backend or bot in mind? Email me a short description and I will reply with next steps.
        </p>

        <div className={`space-y-6 text-lg ${anim}`}>
          <p>
            <span className="text-gray-500">Email —</span>
            <br />
            <a href="mailto:Amrit1984o@gmail.com" className={link}>
              Amrit1984o@gmail.com
            </a>
          </p>

          <p>
            <span className="text-gray-500">GitHub —</span>
            <br />
            <a href="https://github.com/lazzy-amrit" target="_blank" rel="noopener noreferrer" className={link}>
              github.com/lazzy-amrit
            </a>
          </p>

          <p>
            <span className="text-gray-500">Discord —</span>
            <br />
            <a href="https://discord.com/users/tsun_106" target="_blank" rel="noopener noreferrer" className={link}>
              tsun_106
            </a>
          </p>

          <p>
            <span className="text-gray-500">Minecraft server —</span>
            <br />
            quietbyte.mcsh.io
          </p>

          <p>
            <span className="text-gray-500">One Block server —</span>
            <br />
            mc.amritvex.site
          </p>
        </div>
      </div>

      <footer className="mt-20 border-t border-gray-800 pt-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Amrit Vex. All rights reserved.
      </footer>
    </section>
  );
}
