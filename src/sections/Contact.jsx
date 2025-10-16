import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8jzgjp7", // Ton Service ID
        "template_868bj3n", // Ton Template ID
        form.current,
        "ppb_C3RYNt0Yrczm0" // Ta Public Key
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setIsSent(false), 4000);
        },
        (error) => {
          console.error("Erreur lors de l'envoi :", error);
        }
      );
  };

  return (
    <section
      id="contact-section"
      className="pt-8 pb-4 bg-transparent text-[var(--text)] text-center"
    >
      <h2 className="text-4xl font-bold mb-8 text-center"
          style={{ fontFamily: "Vipnagorgialla", color: "var(--text)", letterSpacing: "4px"}}>
        CONTACT
      </h2>

      <p className="max-w-4xl mx-auto mb-7 text-gray-300 text-xl" style={{ fontFamily: "Honor", color: "var(--text)", letterSpacing: "4px"}}>
        Intéressé par mon profil ? N’hésitez pas à m’envoyer un message pour
        discuter d’une collaboration ou d’une opportunité !
      </p>

      <div className="max-w-3xl mx-auto p-6 rounded-2xl border border-cyan-400/20 shadow-[0_0_20px_rgba(0,229,255,0.1)] backdrop-blur-sm">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Votre nom ou pseudo"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full md:w-3/4 p-3 bg-transparent text-[var(--text)] placeholder-gray-400 border-b border-cyan-400 focus:outline-none focus:border-cyan-300 transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,229,255,0.3)]"
          />

          <input
            type="email"
            name="email"
            placeholder="Votre adresse email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full md:w-3/4 p-3 bg-transparent text-[var(--text)] placeholder-gray-400 border-b border-cyan-400 focus:outline-none focus:border-cyan-300 transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,229,255,0.3)]"
          />

          <textarea
            name="message"
            placeholder="Votre message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full md:w-3/4 p-3 bg-transparent text-[var(--text)] placeholder-gray-400 border-b border-cyan-400 focus:outline-none focus:border-cyan-300 transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,229,255,0.3)] resize-none"
          />

          <button
            type="submit"
            style={{ fontFamily: "Honor", color: "var(--text)", letterSpacing: "4px"}}
            className="mt-4 px-8 py-3 border border-cyan-400 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] transition-all duration-300"
          >
            Envoyer le message
          </button>

          {isSent && (
            <p className="text-cyan-400 font-semibold animate-pulse mt-4">
              ✅ Message envoyé avec succès !
            </p>
          )}
        </form>
      </div>

      {/* Coordonnées */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300">
        <div className="flex items-center gap-2">
          <Phone className="text-cyan-400" size={28} />
          <span style={{ fontFamily: "Vipnagorgialla", color: "var(--text)", letterSpacing: "4px"}}>06 05 15 24 23</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="text-cyan-400" size={28} />
          <span style={{ fontFamily: "Vipnagorgialla", color: "var(--text)", letterSpacing: "4px"}}>matfen2.0@outlook.fr</span>
        </div>
      </div>

      <p className="text-md text-gray-500 mt-10" style={{ fontFamily: "Honor", color: "var(--text)", letterSpacing: "4px"}}>
        © 2025 Mathieu FENOUIL, Tous droits réservés.
      </p>
    </section>
  );
}
