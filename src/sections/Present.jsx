"use client";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaDownload } from "react-icons/fa";
import PhotoMe from "../../src/assets/images/photoMe.jpg"; 

// === Variants Framer Motion ===
const fadeInImage = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInText = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.3 }, 
  },
};

export default function Present() {
  return (
    <section
      id="present"
      className="min-h-full flex flex-col justify-center items-center text-[var(--text)] pt-24 pb-20 lg:pb-18 px-6 bg-[var(--bg)]"
    >
      <div
        className="max-w-8xl w-full flex flex-col md:flex-col lg:flex-col xl:flex-row 
                   items-center justify-center
                   gap-8 sm:gap-10 lg:gap-12"
      >
        {/* ==== IMAGE DE PROFIL ==== */}
        <motion.div
          variants={fadeInImage}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={PhotoMe}
            alt="Mathieu Fenouil"
            className="rounded-xl border border-cyan-400/40 
                       shadow-[0_0_25px_rgba(0,229,255,0.25)] 
                       w-full md:w-[36rem] lg:w-[42rem] xl:w-[42rem] 
                       object-cover"
          />
        </motion.div>

        {/* ==== TEXTE DE PRÉSENTATION ==== */}
        <motion.div
          variants={fadeInText} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl text-center lg:text-left space-y-6"
        >
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl md:text-center font-bold text-cyan-200"
            style={{ fontFamily: "Vipnagorgialla" }}
          >
            Mathieu FENOUIL
          </h1>

          <p className="text-base sm:text-lg lg:text-xl lg:text-center leading-relaxed">
            <span className="font-semibold text-cyan-300">
              Développeur JavaScript | React
            </span>
            , rigoureux et passionné, je conçois des interfaces{" "}
            <span className="italic text-cyan-200/90">performantes</span> et{" "}
            <span className="italic text-cyan-200/90">immersives</span> au
            service des besoins clients.
          </p>

          <p className="text-sm sm:text-lg lg:text-xl lg:text-center leading-relaxed">
            Actuellement au sein de la start-up{" "}
            <span className="text-cyan-300 font-semibold">DaftLink</span>, où je
            perfectionne mes compétences en développement front-end, je souhaite
            les enrichir davantage en rejoignant une entreprise axée sur la tech
            et le gaming, afin de créer des expériences web toujours plus
            interactives et innovantes.
          </p>

          {/* ==== BOUTONS ==== */}
          <div className="flex flex-wrap justify-center lg:justify-center md:pt-2 lg:pt-2 gap-4 pt-4">
            {/* GitHub */}
            <a
              href="https://github.com/Matfen2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full 
                         border border-[var(--tron)] bg-[#071922]/40 backdrop-blur-sm
                         shadow-[0_0_12px_rgba(0,229,255,0.2)] text-[var(--text)]
                         hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.5)]
                         hover:scale-105 transition-all duration-300"
              style={{ fontFamily: 'Vipnagorgialla' }}
            >
              <FiGithub className="text-lg text-cyan-300" />
              <span>Mon compte</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mathieu-fenouil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full 
                         border border-cyan-500/40 bg-[#071922]/40 backdrop-blur-sm
                         shadow-[0_0_12px_rgba(0,229,255,0.2)] text-[var(--text)]
                         hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.5)]
                         hover:scale-105 transition-all duration-300"
              style={{ fontFamily: 'Vipnagorgialla' }}
            >
              <FaLinkedinIn className="text-lg text-cyan-300" />
              <span>Mon compte</span>
            </a>

            {/* CV */}
            <a
              href="/picts/CV%20Mathieu%20FENOUIL%20Développeur%20Web.pdf"
              download="CV_Mathieu_FENOUIL.pdf"
              className="flex items-center gap-2 px-5 py-2 rounded-full 
                         border border-cyan-500/40 bg-[#071922]/40 backdrop-blur-sm
                         shadow-[0_0_12px_rgba(0,229,255,0.2)] text-[var(--text)]
                         hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.5)]
                         hover:scale-105 transition-all duration-300"
              style={{ fontFamily: 'Vipnagorgialla' }}
            >
              <FaDownload className="text-lg text-cyan-300" />
              <span>Mon CV</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
