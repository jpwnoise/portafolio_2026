'use client';

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { sites } from "@/data/Sites";
import SiteCard from "./SiteCard";

export default function SliderProjects() {
  const [index, setIndex] = useState(0);

  const totalItems = sites.length;

  const next = () => {
    setIndex(prev => Math.min(prev + 1, totalItems - 1));
  };

  const prev = () => {
    setIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-full flex justify-center m-6">

      {/* BOTÓN IZQUIERDA */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-3 rounded-full hover:scale-110 transition"
      >
        <FaArrowLeft />
      </button>

      {/* VIEWPORT */}
      <section className="overflow-hidden w-full max-w-5xl h-[400px] rounded-xl shadow-xl border">

        {/* TRACK */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`
          }}
        >
          {Array.from({ length: totalItems }).map((_, i) => (
            <div
              key={i}
              className="w-full h-full flex-shrink-0 flex items-center justify-center text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-white"
            >
              <SiteCard url={sites[i]} />
            </div>
          ))}
        </div>

      </section>

      {/* BOTÓN DERECHA */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-3 rounded-full hover:scale-110 transition"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}