import { motion } from "framer-motion";
import { FiGithub, FiGlobe } from "react-icons/fi";
import data from "../data/projets.json";

// Apparition douce, carte après carte
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const bouton =
  "flex items-center gap-2 px-5 py-2 rounded-full border border-(--tron) bg-[#071922]/40 " +
  "text-(--text) shadow-[0_0_12px_rgba(0,229,255,0.2)] hover:bg-cyan-500/20 " +
  "hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] hover:scale-105 transition-all duration-300";

export default function Projects() {
  return (
    <section id="projects-section" className="pt-8 pb-4 mb-7 text-gray-200">
      <div className="mx-auto max-w-7xl px-4">
        <h2
          className="text-4xl font-bold mb-4 text-center"
          style={{ fontFamily: "Vipnagorgialla", color: "var(--text)", letterSpacing: "4px" }}
        >
          MES PROJETS
        </h2>
        <p
          className="max-w-3xl mx-auto mb-10 text-center text-gray-300"
          style={{ fontFamily: "Honor", letterSpacing: "1.5px" }}
        >
          Projets personnels, conçus pour démontrer mes compétences techniques : chacun est mené comme
          un vrai projet, jusqu'à la mise en production, avec une démo en ligne.
        </p>

        <div className="flex flex-col gap-10">
          {data.map((p, i) => (
            <motion.article
              key={p.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className={`group flex flex-col lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}
                          rounded-xl overflow-hidden border border-(--tron) bg-[#0b1d27]
                          shadow-[0_0_15px_rgba(0,229,255,0.08)] hover:shadow-[0_0_25px_rgba(0,229,255,0.2)]
                          transition-shadow duration-300`}
            >
              {/* ==== CAPTURE ==== */}
              <a
                href={p.hrefSite}
                target="_blank"
                rel="noopener noreferrer"
                className="lg:w-1/2 overflow-hidden bg-[#071922]"
                aria-label={`Ouvrir la démo de ${p.title}`}
              >
                <img
                  src={p.pict}
                  alt={`Capture de ${p.title}`}
                  loading="lazy"
                  className="w-full h-[240px] md:h-[360px] lg:h-full object-cover object-top
                             transition duration-500 group-hover:scale-105"
                />
              </a>

              {/* ==== TEXTE ==== */}
              <div className="lg:w-1/2 p-6 md:p-8 flex flex-col gap-4 text-left">
                <div className="flex flex-wrap items-center gap-3">
                  <h3
                    className="text-2xl md:text-3xl font-semibold text-cyan-200"
                    style={{ fontFamily: "Vipnagorgialla", letterSpacing: "3px" }}
                  >
                    {p.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs border border-cyan-400/50 text-cyan-300 bg-cyan-500/10" style={{ fontFamily: "Honor", letterSpacing: "1.5px" }}>
                    {p.badge}
                  </span>
                </div>

                <p className="text-cyan-300 font-semibold" style={{ fontFamily: "Honor", letterSpacing: "1.5px" }}>
                  {p.subtitle}
                </p>

                <p className="text-gray-300 leading-relaxed">{p.description}</p>

                <ul className="space-y-2">
                  {p.chiffres.map((chiffre) => (
                    <li key={chiffre} className="flex gap-2 text-gray-200">
                      <span className="text-cyan-400" aria-hidden="true">▹</span>
                      <span>{chiffre}</span>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                  {p.stack.map((techno) => (
                    <li
                      key={techno}
                      className="px-2.5 py-1 rounded-md text-xs text-cyan-100 bg-[#071922] border border-cyan-400/20"
                    >
                      {techno}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 pt-2 mt-auto">
                  <a href={p.hrefSite} target="_blank" rel="noopener noreferrer" className={bouton}
                     style={{ fontFamily: "Vipnagorgialla" }}>
                    <FiGlobe className="text-lg text-cyan-300" />
                    <span>Voir la démo</span>
                  </a>
                  <a href={p.hrefGithub} target="_blank" rel="noopener noreferrer" className={bouton}
                     style={{ fontFamily: "Vipnagorgialla" }}>
                    <FiGithub className="text-lg text-cyan-300" />
                    <span>Code source</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}