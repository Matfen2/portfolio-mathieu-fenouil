import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  pulse: { scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity } },
  hover: { scale: 1.1, rotate: 8, transition: { duration: 0.35 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Capacities() {
  return (
    <section id="capacities-section" className="pt-8 pb-16 text-gray-200">
      <div className="mx-auto  px-6 text-center">
        {/* Titre */}
        <h2
          className="text-4xl font-bold text-cyan-400 mb-8"
          style={{
            fontFamily: "Vipnagorgialla",
            color: "var(--text)",
            letterSpacing: "4px",
          }}
        >
          Mes Capacités
        </h2>

        {/* Conteneur principal CENTRÃ‰ */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          {/* --- GAUCHE : compÃ©tences techniques (2 par ligne) --- */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-x-16 gap-y-10 justify-items-center"
          >
            {/* React */}
            <motion.div
              className="flex flex-col items-center"
              variants={iconVariants}
              initial="initial"
              animate="pulse"
              whileHover="hover"
            >
              <FaReact className="text-5xl text-cyan-400" />
              <p className="mt-3 text-lg font-medium" style={{ fontFamily: "Honor", letterSpacing: "1.5px" }}>React.js</p>
            </motion.div>

            {/* Node.js */}
            <motion.div
              className="flex flex-col items-center"
              variants={iconVariants}
              initial="initial"
              animate="pulse"
              whileHover="hover"
            >
              <FaNodeJs className="text-5xl text-green-400" />
              <p className="mt-3 text-lg font-medium" style={{ fontFamily: "Honor", letterSpacing: "1.5px" }}>Node.js</p>
            </motion.div>

            {/* Tailwind CSS */}
            <motion.div
              className="flex flex-col items-center"
              variants={iconVariants}
              initial="initial"
              animate="pulse"
              whileHover="hover"
            >
              <SiTailwindcss className="text-5xl text-sky-400" />
              <p className="mt-3 text-lg font-medium" style={{ fontFamily: "Honor", letterSpacing: "1.5px" }}>Tailwind CSS</p>
            </motion.div>

            {/* API REST */}
            <motion.div
              className="flex flex-col items-center"
              variants={iconVariants}
              initial="initial"
              animate="pulse"
              whileHover="hover"
            >
              <BiNetworkChart className="text-5xl text-cyan-300" />
              <p className="mt-3 text-lg font-medium" style={{ fontFamily: "Honor", letterSpacing: "1.5px" }}>API REST</p>
            </motion.div>
          </motion.div>

          {/* --- DROITE : capacités humaines (4 en ligne) --- */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-nowrap justify-center items-stretch gap-8"
          >
            {/* Esprit d’équipe */}
            <div className="rounded-lg w-72 p-4 items-center border border-[var(--border)] text-[var(--text)]">
              <h4 className="text-cyan-300 text-lg font-semibold mb-2" style={{ fontFamily: "Honor", letterSpacing: "1.5px" }}>
                Esprit d’équipe
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "Techovier", letterSpacing: "1.5px" }}>
                Collaborer avec designers et développeurs pour atteindre un objectif commun.
              </p>
            </div>

            {/* Créativité */}
            <div className="rounded-lg w-72 p-4 border border-[var(--border)] text-[var(--text)]">
              <h4 className="text-cyan-300 text-lg font-semibold mb-2" style={{ fontFamily: "Honor", letterSpacing: "1.5px" }}>
                Créativité
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "Techovier", letterSpacing: "1.5px" }}>
                Inspiré par le gaming et le cinéma, j'aime concevoir des interfaces immersives.
              </p>
            </div>

            {/* Rigueur */}
            <div className="rounded-lg w-72 p-4 border border-[var(--border)] text-[var(--text)]">
              <h4 className="text-cyan-300 text-lg font-semibold mb-2" style={{ fontFamily: "Honor", letterSpacing: "1.5px" }}>
                Rigueur
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "Techovier", letterSpacing: "1.5px" }}>
                Méthodique et attentif, je structure mon travail pour assurer la qualité du code.
              </p>
            </div>

            {/* Curiosité */}
            <div className="rounded-lg w-72 p-4 border border-[var(--border)] text-[var(--text)]">
              <h4 className="text-cyan-300 text-lg font-semibold mb-2" style={{ fontFamily: "Honor", letterSpacing: "1.5px" }}>
                Curiosité
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "Techovier", letterSpacing: "1.5px" }}>
                En veille constante, j'explore les nouvelles technologies pour innover.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}