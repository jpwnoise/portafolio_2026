'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    company: "Farmacias Guadalajara",
    role: "Desarrollador / Soporte TI",
    description: [
      "Creación de scripts bash para Linux (RedHat, CentOS)",
      "Scripts en Python y programas de terminal en Java",
      "Diseño de esquemas en BD (Informix, MySQL)",
      "Optimización de consultas y operaciones CRUD",
      "Soporte a clientes internos (Compras, RH, Contabilidad)",
      "Creación de reportes en Excel",
      "Configuración y soporte a aplicaciones internas"
    ]
  },
  {
    company: "Muebles Placencia",
    role: "Desarrollador Fullstack",
    description: [
      "Desarrollo de sitios web con PHP, Laravel, Angular y Node.js",
      "Uso de bases de datos SQL Server",
      "Mantenimiento de aplicaciones de escritorio en C#",
      "Despliegues en Windows Server",
      "Integración de servicios SOAP"
    ]
  }
];

export default function ExperiencePro() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="w-full max-w-6xl mt-14 px-4">

      {/* TITULO */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-12"
      >
        Experiencia Profesional
      </motion.h2>

      <div className="relative flex flex-col gap-16">

        {/* LINEA CENTRAL */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-400 via-blue-500 to-transparent opacity-40" />

        {experiences.map((exp, index) => {
          const isActive = active === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ perspective: 1000 }} // 🔥 necesario para 3D
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >

              {/* CARD */}
              <motion.div
                onClick={() => setActive(isActive ? null : index)}
                whileHover={{
                  rotateY: index % 2 === 0 ? 6 : -6,
                  rotateX: 4,
                  scale: 1.05
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                style={{ transformStyle: "preserve-3d" }}
                className="
                  relative w-full md:w-[45%] cursor-pointer
                  rounded-2xl border border-gray-300
                  bg-white/40 backdrop-blur-xl
                  shadow-lg p-6
                "
              >

                {/* EFECTO LUZ (NO BLOQUEA HOVER) */}
                <div className="
                  pointer-events-none
                  absolute inset-0
                  rounded-2xl
                  opacity-0 hover:opacity-100
                  transition
                  bg-gradient-to-r
                  from-blue-400/20
                  via-transparent
                  to-transparent
                  blur-xl
                " />

                {/* CONTENIDO */}
                <div className="relative z-10">

                  <h3 className="text-xl font-semibold text-[rgb(44,84,114)]">
                    {exp.company}
                  </h3>

                  <p className="text-sm text-gray-600 mb-2">
                    {exp.role}
                  </p>

                  {/* LISTA */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-3 space-y-2 text-sm text-gray-700 overflow-hidden"
                      >
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="
                              flex items-start gap-2
                              transition-all duration-200
                              hover:translate-x-2
                              hover:text-blue-600
                            "
                          >
                            <span className="text-blue-500 transition-all duration-200">
                              ▹
                            </span>
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>

              {/* NODO CENTRAL */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg"
                animate={{
                  scale: isActive ? 1.4 : 1,
                }}
                transition={{ type: "spring", stiffness: 200 }}
              />

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}