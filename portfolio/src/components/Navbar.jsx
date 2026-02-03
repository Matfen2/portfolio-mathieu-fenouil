"use client";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Effet flou du header quand on scrolle
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "capacities-section", label: "Capacités" },
    { id: "projects-section", label: "Projets" },
    { id: "contact-section", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-400 ease-in-out ${
        scrolled
          ? "bg-[#071922]/80 backdrop-blur-md border-b border-[var(--tron)] shadow-[0_0_15px_rgba(0,229,255,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-full mx-auto flex items-center justify-between px-6 py-3 sm:px-10">
        {/* ==== LOGO MF Tron Pulse ==== */}
        <a
          href="#home"
          className="relative flex items-center justify-center
                     w-11 h-11 sm:w-12 sm:h-12
                     border-2 border-[var(--tron)] rounded-full
                     text-cyan-300 text-lg sm:text-xl font-bold tracking-widest
                     transition-all duration-500 hover:scale-110
                     hover:shadow-[0_0_20px_#00e5ff] hover:border-cyan-300
                     before:absolute before:inset-0 before:rounded-full before:blur-md
                     before:bg-cyan-400/20 before:opacity-0 hover:before:opacity-100
                     animate-pulse-slow"
          style={{
            fontFamily: "Honor",
            letterSpacing: "2px",
            lineHeight: "0",
          }}
        >
          <span className="relative top-[1px]">MF</span>
        </a>

        {/* ==== NAV LINKS (Desktop) ==== */}
        <ul className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-[var(--text)] transition-all duration-300 transform
                           hover:text-cyan-200 hover:scale-110 
                           hover:drop-shadow-[0_0_10px_#00e5ff]"
                style={{
                  fontFamily: "Vipnagorgialla",
                  letterSpacing: "3px",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ==== BURGER MENU ==== */}
        <button
          className="md:hidden text-cyan-300 text-2xl focus:outline-none hover:scale-110 transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ==== MENU MOBILE ==== */}
      {menuOpen && (
        <div className="md:hidden bg-[#071922]/95 backdrop-blur-sm border-t border-[var(--tron)] shadow-[0_0_20px_rgba(0,229,255,0.15)] animate-fadeIn">
          <ul className="flex flex-col items-center py-6 space-y-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-[var(--text)] transition-all duration-300 
                             hover:text-cyan-200 hover:scale-105"
                  style={{
                    fontFamily: "Vipnagorgialla",
                    letterSpacing: "3px",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
