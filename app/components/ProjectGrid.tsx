import {motion} from 'framer-motion'
import { useState } from 'react';
import { sites } from "@/data/Sites";
import SiteCard from './SiteCard';

const gridCols: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

export default function ProjectsGrid(){
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

    const [loadedCount, setLoadedCount] = useState(0);
    
    const handleImageLoad = () => setLoadedCount(prev => prev + 1);

    return (       
      <section id="proyectos" className="scroll-mt-2 w-full max-w-6xl bg-gradient-to-r from-gray-200 to-gray-300 p-4 md:p-6 rounded-lg mt-8 border border-gray-400 shadow-xl">

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
      </section>)
}