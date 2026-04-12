'use client';

import { motion } from "framer-motion";
import Frameworks from "./components/Frameworks";
import SliderProjects from "./components/SliderProjects";
import ContactImage from "./components/ContactImage";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import ContactForm from "./components/Contacform";
import ExperienceSection from "./components/experiencia";
import ProjectsGrid from "./components/ProjectGrid";



export default function Home() {

  return (
    <main id="home" className="flex flex-col items-center bg-linear-to-b from-gray-100 via-blue-100 to-white">
      <Topbar />

      {/* HEADER */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5,
          delay: 0.5
         }}
        className="w-full max-w-4xl bg-gradient-to-b from-gray-200 via-gray-400/60 to-gray-300 flex flex-col items-center justify-center p-6 rounded-lg mt-8 border border-gray-400 shadow-lg"
      >
        <p className="text-6xl -rotate-45 sticky -translate-x-80 translate-y-8 text-gray-600/50 text-center font-[var(--font-great-vibes)]" style={{ fontFamily: "var(--font-great-vibes)" }}>
          Desarrollo 
          <br />
          Con pasión 
        </p>

        <div className="relative z-10 group">
          <ContactImage borderColor="bg-gray-400"/>
        </div>

        <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-xl md:text-2xl font-bold p-4 text-gray-700 text-center font-[var(--font-poppins)]"
        style={{ fontFamily: "var(--font-poppins)" }}>
          Ingeniero Pablo Hernández
        </motion.h1>

        <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="text-base md:text-xl font-semibold text-[rgb(44,84,114)] text-center">
          Especializado en Desarrollo Web y Soluciones Digitales
        </motion.h2>
      </motion.div>

      <ExperienceSection></ExperienceSection>

      {/* STACK */}
      <Frameworks />

      {/* SLIDER DE PROYECTOS */}
      <SliderProjects />

         <ProjectsGrid/>

      <ContactForm />
      <Footer />
    </main>
  );
}