"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
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
        "service_8jzgjp7", // Service ID
        "template_868bj3n", // Template ID
        form.current,
        "ppb_C3RYNt0Yrczm0" // Public Key
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({ from_name: "", from_email: "", message: "" });
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
      className="pt-8 pb-12 text-[var(--text)] text-center relative overflow-hidden"
    >
      {/* === TITRE === */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8"
        style={{
          fontFamily: "Vipnagorgialla",
          letterSpacing: "4px",
          color: "var(--text)",
        }}
      >
        CONTACT
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-3xl mx-auto mb-10 text-md sm:text-xl lg:text-lg text-gray-300"
        style={{ fontFamily: "Honor", letterSpacing: "3px" }}
      >
        Intéressé par mon profil ? N’hésitez pas à m’envoyer un message pour
        discuter d’une collaboration ou d’une opportunité !
      </motion.p>

      {/* === FORMULAIRE === */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
          },
        }}
        className="relative z-10 max-w-3xl xl:max-w-3xl md:max-w-xl sm:max-w-[100px] mx-auto p-8 rounded-2xl border border-[var(--tron)] 
                   shadow-[0_0_20px_rgba(0,229,255,0.1)] backdrop-blur-sm bg-[#071922]/40 space-y-6"
      >
        {/* Nom */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <input
            type="text"
            name="from_name"
            placeholder="Votre nom ou pseudo"
            value={formData.from_name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border border-cyan-400/30 rounded-md p-3 text-[var(--text)]
                       placeholder-gray-400 focus:outline-none focus:border-cyan-400 
                       focus:shadow-[0_0_15px_#00e5ff] transition-all duration-300 input-glow"
          />
        </motion.div>

        {/* Email */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <input
            type="email"
            name="from_email"
            placeholder="Votre adresse email"
            value={formData.from_email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border border-cyan-400/30 rounded-md p-3 text-[var(--text)]
                       placeholder-gray-400 focus:outline-none focus:border-cyan-400 
                       focus:shadow-[0_0_15px_#00e5ff] transition-all duration-300 input-glow"
          />
        </motion.div>

        {/* Message */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <textarea
            name="message"
            placeholder="Votre message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-transparent border border-cyan-400/30 rounded-md p-3 text-[var(--text)]
                       placeholder-gray-400 focus:outline-none focus:border-cyan-400 
                       focus:shadow-[0_0_15px_#00e5ff] transition-all duration-300 resize-none input-glow"
          />
        </motion.div>

        {/* Bouton envoyer */}
        <motion.button
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="mt-4 px-8 py-3 border border-cyan-400/50 rounded-full 
                     text-cyan-400 font-semibold bg-[#071922]/60 
                     hover:bg-cyan-500/20 hover:shadow-[0_0_20px_#00e5ff]
                     hover:scale-105 transition-all duration-300"
          style={{ fontFamily: "Vipnagorgialla", letterSpacing: "3px" }}
        >
          Envoyer le message
        </motion.button>

        {isSent && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-cyan-400 font-semibold mt-4 animate-pulse"
          >
            ✅ Message envoyé avec succès !
          </motion.p>
        )}
      </motion.form>

      {/* === COORDONNÉES === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300"
      >
        <div className="flex items-center gap-2">
          <Phone className="text-cyan-400" size={26} />
          <span
            style={{
              fontFamily: "Vipnagorgialla",
              letterSpacing: "3px",
              color: "var(--text)",
            }}
          >
            06 05 15 24 23
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="text-cyan-400" size={26} />
          <span
            style={{
              fontFamily: "Vipnagorgialla",
              letterSpacing: "3px",
              color: "var(--text)",
            }}
          >
            matfen3.05@gmail.com
          </span>
        </div>
      </motion.div>

      {/* === COPYRIGHT === */}
      <p
        className="text-md text-gray-500 mt-10"
        style={{
          fontFamily: "Honor",
          color: "var(--text)",
          letterSpacing: "3px",
        }}
      >
        © 2026 Mathieu FENOUIL — Tous droits réservés.
      </p>
    </section>
  );
}
