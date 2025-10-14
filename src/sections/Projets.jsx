import { motion } from "framer-motion";
import { FiGithub, FiGlobe } from "react-icons/fi";
import data from "../data/projets.json";

// ✨ Animation d’apparition douce (fade-in + slide-up)
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Projects() {
  return (
    <section id="projects-section" className="pt-8 pb-4 text-gray-200">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center"
          style={{ fontFamily: "Vipnagorgialla", color: "var(--text)", letterSpacing: "4px"}}>
          MES PROJETS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((p, i) => (
            <motion.article
              key={p.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group relative rounded-xl overflow-hidden border border-cyan-500/15 bg-[#0b1d27]"
            >
              <img src={p.pict} alt={p.title} className="w-full h-[260px] md:h-[320px] object-cover transition duration-500 group-hover:scale-105" />

              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center
              bg-black/0 opacity-0 transition-all duration-500 ease-in-out group-hover:bg-black/80 group-hover:opacity-100">
                <div className="flex items-center gap-8 mb-4">
                  <a href={p.hrefSite} target="_blank" rel="noopener noreferrer" className="pointer-events-auto text-cyan-300 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_14px_#00e5ff]"
                  aria-label={`Ouvrir le site ${p.title}`} title="Voir le site">
                    <FiGlobe className="text-4xl" />
                  </a>

                  <a href={p.hrefGithub} target="_blank" rel="noopener noreferrer" className="pointer-events-auto text-cyan-300 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_14px_#00e5ff]"
                  aria-label={`Ouvrir le dépôt GitHub ${p.title}`} title="Voir le code">
                    <FiGithub className="text-4xl" />
                  </a>
                </div>

                <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "Vipnagorgialla" }}>
                  {p.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
