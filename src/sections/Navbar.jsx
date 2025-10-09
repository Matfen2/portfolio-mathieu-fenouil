import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openClick = (value) => {
    setIsOpen(value);
  };

  return (
    <nav className="bg-[var(--background)] text-[var(--text)] border-[var(--border)] fixed w-full top-0 z-50 shadow-md border-b-2" >
      <div className=" mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-lg sm:text-xl px-4 font-bold"
          style={{ fontFamily: "Vipnagorgialla" }}
        >
          Mathieu FENOUIL
        </h1>

        {/* Menu burger */}
        <button
          onClick={() => openClick(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links */}
        <ul className={`md:flex md:space-x-8 items-center md:static absolute top-14 left-0 w-full md:w-auto bg-[var(--background)] transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`} style={{ border: "var(--border)"}}>
          <li className="block px-4 py-2 text-center">
            <a href="#capacities-section" className="transition-colors duration-300 text-xl ease-in-out hover:scale-105" style={{
            color: "var(--text)", fontFamily: "Honor", letterSpacing: "1px", textDecoration: "none" }}>Compétences</a>
          </li>
          <li className="block px-4 py-2 text-center">
            <a href="#questions-section" className="transition-colors duration-300 text-xl ease-in-out hover:scale-105" style={{
            color: "var(--text)", fontFamily: "Honor", letterSpacing: "1px", textDecoration: "none" }}>Questions</a>
          </li>
          <li className="block px-4 py-2 text-center">
            <a href="#projects-section" className="transition-colors duration-300 text-xl ease-in-out hover:scale-105" style={{
            color: "var(--text)", fontFamily: "Honor", letterSpacing: "1px", textDecoration: "none" }}>Projets</a>
          </li>
          <li className="block px-4 py-2 text-center">
            <a href="#contact-section" className="transition-colors duration-300 text-xl ease-in-out hover:scale-105" style={{
            color: "var(--text)", fontFamily: "Honor", letterSpacing: "1px", textDecoration: "none" }}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
