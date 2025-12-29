import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaVuejs, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiGithubactions } from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  pulse: { scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity } },
  hover: { scale: 1.1, rotate: 8, transition: { duration: 0.35 } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Capacities() {
  return (
    <section id="capacities-section" className="pb-10 text-gray-200">
      <div className="mx-auto px-6 text-center">
        {/* --- TITRE --- */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-10"
          style={{
            fontFamily: "Vipnagorgialla",
            color: "var(--text)",
            letterSpacing: "4px",
          }}
        >
          Mes Capacités
        </h2>

        {/* --- CAPACITÉS TECHNIQUES --- */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-8 gap-y-8 mt-4 justify-items-center text-center">
            {[
              { Icon: FaVuejs, color: "text-green-400", label: "Vue.js" },
              { Icon: FaReact, color: "text-cyan-400", label: "React.js" },
              { Icon: FaNodeJs, color: "text-green-500", label: "Node.js" },
              { Icon: FaDocker, color: "text-blue-400", label: "Docker" },
              { Icon: SiGithubactions, color: "text-white", label: "CI/CD" },
              { Icon: SiTailwindcss, color: "text-sky-400", label: "Tailwind" },
              { Icon: BiNetworkChart, color: "text-cyan-300", label: "API REST" },
            ].map(({ Icon, color, label }, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center justify-center space-y-3"
                variants={iconVariants}
                initial="initial"
                animate="pulse"
                whileHover="hover"
              >
                <div className="relative group flex items-center justify-center">
                  <Icon
                    className={`text-5xl sm:text-6xl md:text-7xl ${color} transition-transform duration-300 group-hover:scale-110`}
                  />
                  <div
                    className="absolute inset-0 blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                    style={{ background: "var(--tron)", borderRadius: "50%" }}
                  ></div>
                </div>
                <p
                  className="mt-2 text-xs sm:text-sm md:text-base font-medium"
                  style={{
                    fontFamily: "Honor",
                    letterSpacing: "1.8px",
                    color: "var(--text)",
                  }}
                >
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- CAPACITÉS HUMAINES --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="
          grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 
          gap-y-8 sm:gap-y-6 md:gap-y-8 lg:gap-y-10
          gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-0 xl:gap-x-72
          justify-items-center 
          max-w-6xl lg:max-w-3xl xl:max-w-6xl mx-auto px-4 sm:px-8
        ">
          {[
            {
              title: "Esprit d'équipe",
              text: "Habitué à collaborer avec des profils variés (designers, développeurs, créatifs), je privilégie toujours l'écoute et la fluidité dans le travail collectif.",
            },
            {
              title: "Persévérance",
              text: "Autodidacte devenu développeur, j'ai appris que chaque obstacle est une opportunité d'apprentissage. Je ne lâche rien tant que le problème n'est pas résolu.",
            },
            {
              title: "Rigueur & organisation",
              text: "Je structure mon code et mes projets de façon claire et optimisée, pour garantir des applications performantes et maintenables.",
            },
            {
              title: "Curiosité & apprentissage",
              text: "Toujours à l'affût des nouvelles technologies, j'ai su m'adapter rapidement de React à Vue.js chez DaftLink.",
            }
          ].map(({ title, text }, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  boxShadow: [
                    "0 0 0px rgba(0,229,255,0)",
                    "0 0 15px rgba(0,229,255,0.2)",
                    "0 0 25px rgba(0,229,255,0.1)",
                  ],
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                  },
                },
              }}
              className="rounded-lg w-full sm:w-72 md:w-80 lg:w-80 p-6 border border-[var(--tron)] bg-[#071922]/40 shadow-[0_0_10px_rgba(0,229,255,0.1)] hover:shadow-[0_0_25px_rgba(0,229,255,0.3)] transition-all duration-300 flex flex-col justify-center text-center"
              style={{ minHeight: "220px" }}
            >
              <h4
                className="text-cyan-300 text-lg font-semibold mb-3"
                style={{
                  fontFamily: "Honor",
                  color: "var(--text)",
                  letterSpacing: "2.5px",
                }}
              >
                {title}
              </h4>
              <p
                className="text-gray-300 text-sm leading-relaxed"
                style={{
                  fontFamily: "Techovier",
                  letterSpacing: "1.3px",
                }}
              >
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}