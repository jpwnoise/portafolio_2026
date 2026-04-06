'use client';

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hola, soy ${form.name}%0AEmail: ${form.email}%0A${form.message}`;
    const phone = "521XXXXXXXXXX"; // 👈 tu número aquí

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-16 px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          p-8
          rounded-2xl
          bg-gradient-to-r from-gray-200 to-gray-300
          border border-gray-400
          shadow-[0px_25px_40px_rgba(0,0,0,.25)]
          backdrop-blur-md
        "
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Contáctame
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Nombre */}
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={form.name}
            onChange={handleChange}
            required
            className="
              w-full p-3 rounded-lg
              bg-white/80
              border border-gray-300
              focus:outline-none
              focus:ring-2 focus:ring-emerald-400
              transition
            "
          />

          {/* Email */}
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            placeholder="Tu email"
            value={form.email}
            onChange={handleChange}
            required
            className="
              w-full p-3 rounded-lg
              bg-white/80
              border border-gray-300
              focus:outline-none
              focus:ring-2 focus:ring-emerald-400
              transition
            "
          />

          {/* Mensaje */}
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            placeholder="Tu mensaje..."
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="
              w-full p-3 rounded-lg
              bg-white/80
              border border-gray-300
              focus:outline-none
              focus:ring-2 focus:ring-emerald-400
              transition
            "
          />

          {/* Botón */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="
              w-full py-3 rounded-lg
              bg-gradient-to-r from-emerald-400 to-emerald-600
              text-white font-semibold
              shadow-lg
              hover:shadow-xl
              transition
            "
          >
            Enviar mensaje
          </motion.button>

        </form>
      </motion.div>
    </div>
  );
}