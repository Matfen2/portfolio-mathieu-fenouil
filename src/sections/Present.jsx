import { FiGithub } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import PhotoMe from "../../src/assets/images/photoMe.jpg";

const Present = () => {
  return (
    <section
      id="about-section"
      className="mt-28 py-12 md:py-8 bg-transparent text-[var(--text)]"
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
              className=" w-full max-w-lg object-cover rounded-xl
                         ring-1 ring-[var(--border)] shadow-[0_0_24px_rgba(0,229,255,.15)]"
              style={{ aspectRatio: "4 / 3" }}
            />
          </div>

          {/* Texte + actions */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="typewriter text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-center" style={{ fontFamily: "Vipnagorgialla", color: "var(--text)" }}>
              Mathieu FENOUIL
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed tracking-wide"
              style={{ fontFamily: "Honor", letterSpacing: "1.5px" }}
            >
              <strong>Développeur JavaScript | React</strong>, rigoureux et passionné,
              je conçois des interfaces <em>performantes</em> et <em>immersives</em> au
              service des besoins clients.
            </p>

            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed tracking-wide"
              style={{ fontFamily: "Honor", letterSpacing: "1.5px" }}
            >
              Actuellement au sein de la start-up{" "}
              <a
                className="underline decoration-[var(--border)] underline-offset-4 hover:text-white transition"
                href="https://www.linkedin.com/company/daftlink/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                DaftLink
              </a>
              , où je perfectionne mes compétences en développement front-end, je souhaite
              les enrichir davantage en rejoignant une entreprise axée sur la tech et le gaming,
              afin de créer des expériences web toujours plus interactives et innovantes.
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
