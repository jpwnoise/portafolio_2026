'use client';

import { FaGithub, FaReact, FaAngular, FaNodeJs, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Frameworks() {
  return (
    <div className="mt-12 w-full max-w-6xl mx-auto relative px-4">

      {/* FLECHAS (solo desktop) */}
      <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-gray-400 to-gray-600 shadow-lg border border-gray-500 hover:scale-110 transition">
          <FaArrowLeft className="text-gray-200 text-lg" />
        </button>
      </div>

      <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-gray-400 to-gray-600 shadow-lg border border-gray-500 hover:scale-110 transition">
          <FaArrowRight className="text-gray-200 text-lg" />
        </button>
      </div>

      {/* CONTENEDOR */}
      <div className="bg-gradient-to-r from-gray-200 to-gray-300 p-4 md:p-6 rounded-lg border border-gray-400 shadow-xl">

        {/* GRID */}
        <section className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          gap-6 
          justify-items-center
        ">

          {/* ITEM */}
          {[ 
            { icon: <FaGithub />, color: "from-gray-400 to-gray-600" },
            { icon: <FaReact />, color: "from-blue-400 to-blue-600" },
            { icon: <FaAngular />, color: "from-red-400 to-red-600" },
            { icon: <FaNodeJs />, color: "from-green-400 to-green-600" },
            { icon: <SiNextdotjs />, color: "from-gray-600 to-gray-800" },
          ].map((item, i) => (
            <div
              key={i}
              className="
                flex justify-center
                hover:-translate-y-3 md:hover:-translate-y-5
                transition-all duration-500 ease-out
                
                rotate-[12deg] md:rotate-[21deg]
              "
            >
              <div className={`
                w-20 h-20 md:w-24 md:h-24
                flex items-center justify-center
                overflow-hidden
                rounded-lg
                bg-gradient-to-r ${item.color}
                shadow-[0px_20px_30px_rgba(0,0,0,.4)]
                hover:shadow-[0px_20px_30px_rgba(0,0,0,.3)]
              `}>
                <div className="text-3xl md:text-5xl text-gray-200">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}

        </section>
      </div>
    </div>
  );
}