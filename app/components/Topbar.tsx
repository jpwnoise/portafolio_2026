import React from "react";
import {motion} from "framer-motion";

export default function Topbar() {
  return (
    <motion.header 
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="shadow-xl sticky top-0 z-50 w-full border-b border-gray-600/10 bg-gradient-to-r from-gray-100/70 to-gray-600/70 backdrop-blur-md dark:bg-zinc-900/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        
        {/* Identidad */}
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-semibold text-gray-600 dark:text-white font-[var(--font-poppins)]" 
          style={{ fontFamily: "var(--font-poppins)" }}>
            Pablo Hernández
          </span>
          <span className="text-sm text-gray-500 dark:text-zinc-400">
            Desarrollador Fullstack
          </span>
        </div>

        {/* Navegación (puedes ajustar) */}
        <nav className="hidden gap-6 text-sm text-gray-100 md:flex dark:text-zinc-300 font-bold">
          <a href="#proyectos" className="hover:text-gray-700 dark:hover:text-white">
            Proyectos
          </a>
          <a href="#about" className="hover:text-gray-700 dark:hover:text-white">
            Sobre mí
          </a>
          <a href="#contacto" className="hover:text-gray-700 dark:hover:text-white">
            Contacto
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contacto"
          className="rounded-full bg-gray-800 px-4 py-2 text-sm font-medium text-gray-100 border-2 border-gray-300 shadow-sm transition hover:bg-[rgb(104,117,142)] hover:border-gray-500 hover:shadow-md"
        >
          Hablemos
        </a>
      </div>
    </motion.header>
  );
}