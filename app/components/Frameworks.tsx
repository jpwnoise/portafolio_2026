'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub, FaReact, FaAngular, FaNodeJs,
  FaDatabase
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql } from "react-icons/si";

type Tech = {
  name: string;
  icon: React.ReactNode;
  color: string;
  content: string[];
};

export default function Frameworks() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const frontend: Tech[] = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      color: "from-gray-400 to-gray-600",
      content: [
        "Control de versiones con Git",
        "Gestión de repositorios",
        "Git Flow y branching",
        "Deploy con Vercel / CI-CD"
      ]
    },
    {
      name: "React",
      icon: <FaReact />,
      color: "from-blue-400 to-blue-600",
      content: [
        "Componentes reutilizables",
        "Hooks avanzados",
        "SPA modernas",
        "Optimización de rendimiento"
      ]
    },
    {
      name: "Angular",
      icon: <FaAngular />,
      color: "from-red-400 to-red-600",
      content: [
        "Arquitectura modular",
        "Servicios y DI",
        "TypeScript avanzado",
        "Apps empresariales"
      ]
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "from-green-400 to-green-600",
      content: [
        "APIs REST",
        "Backend escalable",
        "Autenticación",
        "Integración con DB"
      ]
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "from-gray-600 to-gray-800",
      content: [
        "SSR / SSG",
        "SEO optimizado",
        "Routing dinámico",
        "Fullstack apps"
      ]
    }
  ];

  const databases: Tech[] = [
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "from-green-500 to-green-700",
      content: [
        "Base de datos NoSQL",
        "Modelado flexible",
        "Alta escalabilidad",
        "Integración con Node"
      ]
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "from-blue-500 to-blue-700",
      content: [
        "Base de datos relacional",
        "Consultas SQL",
        "Optimización de queries",
        "Alta compatibilidad"
      ]
    },
    {
      name: "SQL Server",
      icon: <FaDatabase />,
      color: "from-red-500 to-red-700",
      content: [
        "Entornos empresariales",
        "Procedimientos almacenados",
        "Seguridad avanzada",
        "Integración con .NET"
      ]
    },
    {
      name: "Informix",
      icon: <FaDatabase />,
      color: "from-yellow-500 to-yellow-700",
      content: [
        "Bases legacy",
        "Optimización de consultas",
        "Mantenimiento de sistemas",
        "Alta disponibilidad"
      ]
    }
  ];

  // 🔥 Variantes para stagger
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.8, // espera a que aparezca la sección
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  const renderGrid = (items: Tech[], offset = 0) => (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
    >
      {items.map((item, i) => {
        const index = i + offset;

        return (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            {/* ICONO */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(index === activeIndex ? null : index);
              }}
              className="
                cursor-pointer
                hover:-translate-y-3 md:hover:-translate-y-5
                transition-all duration-500 ease-out
                rotate-[12deg] md:rotate-[21deg]
              "
            >
              <div className={`
                w-20 h-20 md:w-24 md:h-24
                flex items-center justify-center
                rounded-lg
                bg-gradient-to-r ${item.color}
                shadow-[0px_20px_30px_rgba(0,0,0,.4)]
              `}>
                <div className="text-3xl md:text-5xl text-gray-200">
                  {item.icon}
                </div>
              </div>
            </div>

            {/* DIALOG */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: -120, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="
                    absolute z-50
                    w-64
                    p-4
                    rounded-xl
                    bg-white/90 backdrop-blur-md
                    border border-gray-300
                    shadow-xl
                    text-sm
                  "
                >
                  <h3 className="font-bold text-lg mb-2 text-gray-800">
                    {item.name}
                  </h3>

                  <ul className="space-y-1 text-gray-700">
                    {item.content.map((text, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span>✔</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.section>
  );

  return (
    <div
      className="mt-12 w-full max-w-6xl mx-auto px-4"
      onClick={() => setActiveIndex(null)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-gray-200 to-gray-300 p-6 rounded-lg border border-gray-400 shadow-xl space-y-10"
      >
        {/* FRONTEND */}
        {renderGrid(frontend, 0)}

        {/* BASES DE DATOS */}
        <div>
          <h2 className="text-center text-gray-700 font-semibold mb-4">
            Bases de Datos
          </h2>
          {renderGrid(databases, frontend.length)}
        </div>
      </motion.div>
    </div>
  );
}