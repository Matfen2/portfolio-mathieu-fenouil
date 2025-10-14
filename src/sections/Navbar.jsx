import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Détection du scroll pour changer la couleur de fond
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrollspy : détecte la section visible
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60 % de la section visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "about", label: "Capacités" },
    { id: "projects", label: "Projets" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`transition-all duration-500 ease-in-out fixed w-full top-0 z-50 ${
        scrolled
          ? "bg-[#071922]/90 backdrop-blur-sm text-[var(--text)] border-cyan-400/20 shadow-[0_0_10px_rgba(0,229,255,0.15)]"
          : "bg-transparent text-[var(--text)]"
      }`}
    >
      <div className="mx-auto flex items-center justify-between py-4 px-8">
        {/* Logo / Nom */}
        <a
          href="#home"
          onClick={() => setActiveSection("")}
          className="text-cyan-400 font-bold text-lg tracking-wider transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_12px_#00e5ff]"
        >
          Mathieu FENOUIL
        </a>

        {/* Liens */}
        <ul className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_14px_#00e5ff] ${
                  activeSection === link.id
                    ? "text-cyan-400 drop-shadow-[0_0_8px_#00e5ff]"
                    : "text-[var(--text)]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
