import { useState } from "react";
import { FaEnvelope, FaPhone, FaCheckCircle } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [alert, setAlert] = useState("");
  const [sent, setSent] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setAlert("⚠️ Veuillez remplir tous les champs !");
      setTimeout(() => setAlert(""), 3000);
      return;
    }

    emailjs
      .send(
        "service_8jzgjp7", // Service ID
        "template_868bj3n", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "ppb_C3RYNt0Yrczm0" // Public Key
      )
      .then(
        () => {
          setAlert("✅ Message envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
          setSent(true);
          setShowCheck(true);
          setTimeout(() => {
            setAlert("");
            setSent(false);
            setShowCheck(false);
          }, 3000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setAlert("❌ Une erreur est survenue, réessayez plus tard.");
          setTimeout(() => setAlert(""), 3000);
        }
      );
  };

  return (
    <section
      id="contact-section"
      className="pt-8 pb-4 text-gray-200 relative overflow-hidden"
    >
      {/* ✅ Effet lumineux Tron */}
      {sent && (
        <div className="absolute inset-0 bg-cyan-400/10 blur-3xl animate-pulse"></div>
      )}

      {/* ✅ Icône Check animée */}
      {showCheck && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <FaCheckCircle
            className="text-cyan-400 text-6xl animate-[tronPulse_1.2s_ease-in-out]"
            style={{ filter: "drop-shadow(0 0 20px rgba(0,255,255,0.8))" }}
          />
        </div>
      )}

      {/* ✅ Animation personnalisée */}
      <style>
        {`
          @keyframes tronPulse {
            0% { transform: scale(0.5); opacity: 0; }
            50% { transform: scale(1.4); opacity: 1; }
            100% { transform: scale(1); opacity: 0; }
          }
        `}
      </style>

      <div className="max-w-4xl mx-auto mt-6 px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8" style={{ fontFamily: "Vipnagorgialla", color: "var(--text)", letterSpacing: "4px"}}>
          CONTACT
        </h2>

        <p className="text-lg mb-10 leading-relaxed text-gray-300">
          Intéressé par mon profil ? N’hésitez pas à m’envoyer un message pour
          discuter d’une collaboration ou d’une opportunité !
        </p>

        {/* ✅ Message d’alerte */}
        {alert && (
          <div className="mb-6 text-cyan-300 font-semibold border border-cyan-500/40 py-3 rounded-lg shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-opacity duration-700">
            {alert}
          </div>
        )}

        {/* ✅ Formulaire */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center border border-cyan-500/15 rounded-xl p-8 shadow-[0_0_25px_rgba(0,229,255,0.1)] relative">
          <input type="text" name="name" placeholder="Votre nom ou pseudo" value={formData.name} onChange={handleChange}
          className="w-full md:w-3/4 p-3 bg-transparent text-[var(--text)] placeholder-gray-400 border-b border-cyan-400 focus:outline-none focus:border-cyan-300 transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,229,255,0.3)]" />

          <input type="email" name="email" placeholder="Votre adresse email" value={formData.email} onChange={handleChange}
          className="w-full md:w-3/4 p-3 bg-transparent text-[var(--text)] placeholder-gray-400 border-b border-cyan-400 focus:outline-none focus:border-cyan-300 transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,229,255,0.3)]" />

          <textarea name="message" placeholder="Votre message..." rows="5" value={formData.message} onChange={handleChange}
          className="w-full md:w-3/4 p-3 bg-transparent text-[var(--text)] placeholder-gray-400 border-b border-cyan-400 focus:outline-none focus:border-cyan-300 transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,229,255,0.3)] resize-none" />

          <button type="submit" className="mt-4 px-8 py-3 rounded-lg border border-cyan-400 text-cyan-200 hover:bg-cyan-400 hover:text-[#071922] transition-all duration-300 font-semibold relative overflow-hidden" style={{ fontFamily: 'Vipnagorgialla' }}>
            <span className="relative z-10">Envoyer le message</span>
            <span className="absolute inset-0 bg-cyan-400/20 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </form>

        {/* ✅ Coordonnées */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-cyan-200">
          <div className="flex items-center gap-2">
            <FaPhone /> <span className="text-lg">06 05 15 24 23</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope /> <span className="text-lg">matfen2.0@outlook.fr</span>
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          © 2025 Mathieu FENOUIL, Tous droits réservés.
        </p>
      </div>
    </section>
  );
}
