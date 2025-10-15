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
    <section id="capacities-section" className="pt-12 pb-10 text-gray-200">
      <div className="mx-auto px-6 text-center">
        {/* Titre */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{
            fontFamily: "Vipnagorgialla",
            color: "var(--text)",
            letterSpacing: "4px",
          }}
        >
          Mes Capacités
        </h2>

        {/* Conteneur principal responsive */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20">
          {/* --- GAUCHE : Compétences techniques --- */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 gap-x-10 gap-y-10 justify-items-center"
          >
            {[
              { Icon: FaReact, color: "text-cyan-400", label: "React.js" },
              { Icon: FaNodeJs, color: "text-green-400", label: "Node.js" },
              { Icon: SiTailwindcss, color: "text-sky-400", label: "Tailwind CSS" },
              { Icon: BiNetworkChart, color: "text-cyan-300", label: "API REST" },
            ].map(({ Icon, color, label }, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                variants={iconVariants}
                initial="initial"
                animate="pulse"
                whileHover="hover"
              >
                <Icon className={`text-5xl ${color}`} />
                <p
                  className="mt-3 text-lg font-medium"
                  style={{
                    fontFamily: "Honor",
                    letterSpacing: "1.5px",
                  }}
                >
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* --- DROITE : Capacités humaines --- */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-nowrap justify-center items-stretch gap-6 md:gap-8"
          >
            {[
              {
                title: "Esprit d’équipe",
                text: "Collaborer avec designers et développeurs pour atteindre un objectif commun.",
              },
              {
                title: "Créativité",
                text: "Inspiré par le gaming et le cinéma, j’aime concevoir des interfaces immersives.",
              },
              {
                title: "Rigueur",
                text: "Méthodique et attentif, je structure mon travail pour assurer la qualité du code.",
              },
              {
                title: "Curiosité",
                text: "En veille constante, j’explore les nouvelles technologies pour innover.",
              },
            ].map(({ title, text }, i) => (
              <div
                key={i}
                className="rounded-lg w-full sm:w-72 p-5 border shadow-[0_0_12px_rgba(0,229,255,0.1)] backdrop-blur-sm" style={{ borderColor: "var(--tron)"}}
              >
                <h4
                  className="text-cyan-300 text-lg font-semibold mb-2"
                  style={{
                    fontFamily: "Honor",
                    color: "var(--text)",
                    letterSpacing: "3px",
                  }}
                >
                  {title}
                </h4>
                <p
                  className="text-gray-300 text-sm leading-relaxed"
                  style={{
                    fontFamily: "Techovier",
                    letterSpacing: "1.6px",
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
