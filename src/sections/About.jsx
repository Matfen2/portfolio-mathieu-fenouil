import PhotoMe from "../../src/assets/images/photoMe.jpg";

const About = () => {
  return (
    <section
      id="about-section"
      className="py-8 px-0 flex flex-col items-center text-center lg:text-left"
    >
      {/* Title */}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-custom-secondary mb-8 tracking-widest"
        style={{
          fontFamily: "Vipnagorgialla",
          color: "var(--text)",
          letterSpacing: "4px",
        }}
      >
        A PROPOS DE MOI
      </h2>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 w-full max-w-7xl">
        {/* Photo Section */}
        <div className="flex flex-col items-center w-full lg:w-1/3">
          <img
            src={PhotoMe}
            alt="Profile"
            loading="lazy"
            style={{ border: "2px solid var(--border)", objectFit: "cover" }}
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-2/3 space-y-6">
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed text-left px-4 sm:px-8"
            style={{
              fontFamily: "Honor",
              color: "var(--text)",
              letterSpacing: "2px",
            }}
          >
            Développeur JavaScript | React, rigoureux et passionné, je conçois des interfaces performantes et immersives au service des besoins clients.
          </p>
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed text-left px-4 sm:px-8"
            style={{
              fontFamily: "Honor",
              color: "var(--text)",
              letterSpacing: "2px",
            }}
          >
            Actuellement au sein de la start-up <a className="text-[var(--border)]" href="https://www.linkedin.com/company/daftlink/posts/?feedView=all" target="_blank" rel="noopener noreferrer">DaftLink</a>, où je perfectionne mes compétences en développement front-end,
            je souhaite les enrichir davantage en rejoignant une entreprise axée sur la tech et le gaming,
            afin de créer des expériences web toujours plus interactives et innovantes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
