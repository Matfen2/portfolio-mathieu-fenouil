import { FiGithub } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import PhotoMe from "../../src/assets/images/photoMe.jpg";

const Present = () => {
  return (
    <section
      className="mt-28 py-12 md:py-8 text-[var(--text)]"
      aria-label="À propos de moi"
    >
      <div className="mx-auto w-full max-w-9xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <img
              src={PhotoMe}
              alt="Mathieu Fenouil"
              loading="lazy"
              className=" w-full max-w-xl object-cover rounded-xl
                        border shadow-[0_0_12px_rgba(0,229,255,0.1)]"
              style={{ aspectRatio: "4 / 3", borderColor: "var(--tron)" }}
            />
          </div>

          {/* Texte + actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h2 className="typewriter mx-auto lg:mx-0 font-bold tracking-wider leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ fontFamily: "Vipnagorgialla", color: "var(--text)", display: "inline-block", maxWidth: "100%"}}>
              <span className="typewriter-text">Mathieu FENOUIL</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide max-w-3xl mx-auto lg:mx-0" style={{ fontFamily: "Honor", letterSpacing: "1.5px" }}>
            <strong>Développeur JavaScript | React</strong>, rigoureux et passionné, je conçois des interfaces <em>performantes</em> et <em>immersives</em> au service des besoins clients.</p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide max-w-3xl mx-auto lg:mx-0" style={{ fontFamily: "Honor", letterSpacing: "1.5px" }}>
              Actuellement au sein de la start-up{" "}
              <a className="underline decoration-[var(--tron)] underline-offset-4 hover:text-cyan-300 transition hover:scale-110 hover:drop-shadow-[0_0_2px_#00e5ff]" href="https://www.linkedin.com/company/daftlink/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                DaftLink
              </a>
              , où je perfectionne mes compétences en développement front-end, je souhaite
              les enrichir davantage en rejoignant une entreprise axée sur la tech et le
              gaming, afin de créer des expériences web toujours plus interactives et
              innovantes.
            </p>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/mathieu-fenouil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center h-11 w-11 rounded-full
                           border border-[var(--border)] text-[var(--text)]
                           hover:bg-[var(--text)] hover:text-[var(--background)]
                           transition shadow-[0_0_10px_rgba(0,229,255,.25)]"
              >
                <FaLinkedinIn className="text-xl" />
              </a>

              <a
                href="https://github.com/Matfen2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center h-11 w-11 rounded-full
                           border border-[var(--border)] text-[var(--text)]
                           hover:bg-[var(--text)] hover:text-[var(--background)]
                           transition shadow-[0_0_10px_rgba(0,229,255,.25)]"
              >
                <FiGithub className="text-xl" />
              </a>

              <a href="/picts/CV%20Mathieu%20FENOUIL%20Développeur%20Web.pdf" download="CV_Mathieu_FENOUIL.pdf"
              className="inline-flex items-center gap-2 px-5 h-11 rounded-full border border-[var(--border)] text-[var(--text)]
              hover:bg-[var(--text)] hover:text-[var(--background)] transition shadow-[0_0_10px_rgba(0,229,255,.25)]"
              style={{ fontFamily: 'Vipnagorgialla' }}>
                Mon CV <FaDownload className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Present;
