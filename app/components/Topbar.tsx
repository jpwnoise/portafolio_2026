'use client';

import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import { FaFolderOpen, FaUser, FaEnvelope, FaHome } from "react-icons/fa";
import Orbit from "./Orbit";

const navItems = [
  { label: "", href: "#home", icon: FaHome },
  { label: "Proyectos", href: "#proyectos", icon: FaFolderOpen },
  { label: "Sobre mí", href: "#about", icon: FaUser },
  { label: "Contacto", href: "#contacto", icon: FaEnvelope },
];

export default function Topbar() {
  
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="z-200 shadow-xl sticky top-0 z-50 w-full border-b border-gray-600/10 bg-gradient-to-r from-gray-100/70 to-gray-600/70 backdrop-blur-md relative overflow-hidden"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

        {/* Identidad */}
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-semibold text-gray-600 font-[var(--font-poppins)]">
            Pablo Hernández
          </span>
          <span className="text-sm text-gray-500">
            Desarrollador Fullstack
          </span>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex gap-4">
          {navItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <a
                key={i}
                href={item.href}
                className="
                  relative overflow-hidden group
                  flex items-center gap-2
                  px-4 py-2 rounded-lg
                  text-gray-700
                  transition-colors duration-300
                "
              >
                {/* fondo animado */}
                <span className="
                  absolute inset-0
                  bg-gray-800
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-300 ease-out
                  rounded-lg
                  z-0
                " />

                {/* contenido */}
                <span className="
                  relative z-10 flex items-center gap-2
                  transition-colors duration-300
                  group-hover:text-gray-200
                ">
                  <Icon />
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="#contacto"
          className="rounded-full bg-gray-800 px-4 py-2 text-sm font-medium text-gray-100 border-2 border-gray-300 shadow-sm transition hover:bg-[rgb(104,117,142)] hover:border-gray-500 hover:shadow-md"
        >
          Hablemos
        </a>

          <Orbit/>
        
      </div>
    </motion.header>
  );
}