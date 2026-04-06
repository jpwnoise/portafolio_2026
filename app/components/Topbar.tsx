import React from "react";
import {motion} from "framer-motion";

export default function Topbar() {
  return (
    <motion.header 
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className=" sticky top-0 z-50 w-full border-b border-gray-600/10 bg-gradient-to-r from-white-200/60 to-gray-300/60 backdrop-blur-md dark:bg-zinc-900/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        
        {/* Identidad */}
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-semibold text-zinc-900 dark:text-white">
            Pablo Hernández
          </span>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            Desarrollador Fullstack
          </span>
        </div>

        {/* Navegación (puedes ajustar) */}
        <nav className="hidden gap-6 text-sm text-zinc-700 md:flex dark:text-zinc-300">
          <a href="#proyectos" className="hover:text-black dark:hover:text-white">
            Proyectos
          </a>
          <a href="#about" className="hover:text-black dark:hover:text-white">
            Sobre mí
          </a>
          <a href="#contacto" className="hover:text-black dark:hover:text-white">
            Contacto
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contacto"
          className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-600"
        >
          Hablemos
        </a>
      </div>
    </motion.header>
  );
}