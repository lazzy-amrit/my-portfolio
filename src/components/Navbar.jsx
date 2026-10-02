const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-gray-900">
      <nav
        aria-label="Main"
        className="flex items-center justify-between px-6 md:px-16 py-4 text-sm"
      >
        <a href="#top" className="font-semibold text-white">
          Amrit Vex
        </a>
        <ul className="flex gap-4 md:gap-8 text-gray-400">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
