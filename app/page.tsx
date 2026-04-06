'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import SiteCard from "./components/SiteCard";
import { sites } from "@/data/Sites";
import Image from "next/image";
import Frameworks from "./components/Frameworks";
import SliderProjects from "./components/SliderProjects";
import ContactImage from "./components/ContactImage";
import Topbar from "./components/Topbar";

const gridCols: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

export default function Home() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [columns, setColumns] = useState(3);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleImageLoad = () => setLoadedCount(prev => prev + 1);

  return (
    <main className="flex flex-col items-center bg-gray-100 px-4">
      <Topbar />

      {/* HEADER */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5,
          delay: 0.5
         }}
        className="w-full max-w-4xl bg-gradient-to-r from-gray-100 to-gray-300 flex flex-col items-center justify-center p-6 rounded-lg mt-8 border border-gray-400 shadow-lg"
      >
        <div className="relative z-10 group">
          <ContactImage />
        </div>

        <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-xl md:text-2xl font-bold p-4 text-gray-700 text-center">
          Ingeniero Pablo Hernández
        </motion.h1>

        <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="text-base md:text-xl font-semibold text-gray-600 text-center">
          Especializado en Desarrollo Web y Soluciones Digitales
        </motion.h2>
      </motion.div>

      {/* STACK */}
      <Frameworks />

      {/* SLIDER DE PROYECTOS */}
      <SliderProjects />

      {/* PROYECTOS */}
      <section className="w-full max-w-6xl bg-gradient-to-r from-gray-200 to-gray-300 p-4 md:p-6 rounded-lg mt-8 border border-gray-400 shadow-xl">

        {/* CONTROLES */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <button
            className="px-3 py-1 rounded-l-xl bg-blue-500 text-white"
            onClick={() => setColumns(prev => Math.max(1, prev - 1))}
          >
            -
          </button>

          <span className="px-4 py-1 bg-blue-500 text-white">
            {columns}
          </span>

          <button
            className="px-3 py-1 rounded-r-xl bg-blue-500 text-white"
            onClick={() => setColumns(prev => Math.min(5, prev + 1))}
          >
            +
          </button>
        </div>

        {/* GRID */}
        <motion.div
          layout
          transition={{ duration: 0.4 }}
          className={`
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-2 
            ${gridCols[columns]} 
            gap-4
          `}
          variants={containerVariants}
          initial="hidden"
          animate={loadedCount === sites.length ? "show" : "hidden"}
        >
          {sites.map((site, index) => (
            <motion.div key={index} layout variants={cardVariants}>
              <SiteCard url={site} onImageLoad={handleImageLoad} />
            </motion.div>
          ))}
        </motion.div>

      </section>
    </main>
  );
}