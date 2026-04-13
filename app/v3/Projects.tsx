'use client';

import { useState, useRef, useEffect } from 'react';
import { FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    id: 6,
    title: 'Esencia y Equilibrio',
    fallbackDesc: 'Plataforma de terapias de flores de Bach con carrusel 3D interactivo, selección de mezclas personalizadas e integración con WhatsApp.',
    tags: ['Next.js', 'Framer Motion', 'Health'],
    emoji: '🌿',
    category: 'Web App',
    liveUrl: 'https://escenciaequilibrio.vercel.app',
    githubUrl: '#',
    featured: true,
    gradient: 'from-emerald-600/30 via-green-700/20 to-teal-600/30',
  },
  {
    id: 1,
    title: 'Akemi Sushi',
    fallbackDesc: 'Restaurante de sushi con menú interactivo, carrito de compras, animaciones Lottie y carga optimizada de imágenes.',
    tags: ['Next.js', 'Framer Motion', 'Lottie', 'Restaurant'],
    emoji: '🍣',
    category: 'Web App',
    liveUrl: 'https://sushirestaurant-psi.vercel.app/',
    githubUrl: 'https://github.com/jpwnoise/sushi_restaurant',
    featured: true,
    gradient: 'from-red-600/30 via-amber-700/20 to-orange-600/30',
  },
  {
    id: 8,
    title: 'Vasos Mágicos',
    fallbackDesc: 'Tienda de vasos personalizados para niños con carrito de compras, animaciones 3D, efecto de mesa con perspectiva y pedidos por WhatsApp.',
    tags: ['Next.js', 'React', 'E-Commerce', '3D Effects', 'WhatsApp'],
    emoji: '🥤',
    category: 'E-Commerce',
    liveUrl: 'https://vasosmagicos.vercel.app/',
    githubUrl: 'https://github.com/jpwnoise/vasos_magicos',
    featured: true,
    gradient: 'from-pink-600/30 via-purple-700/20 to-indigo-600/30',
    ogImage: 'https://vasosmagicos.vercel.app/og-image.png',
  },
  {
    id: 2,
    title: 'Folletos Shop',
    fallbackDesc: 'Tienda en línea con catálogo de productos, carrito de compras y experiencia de usuario optimizada.',
    tags: ['E-Commerce', 'Frontend', 'UI Design'],
    emoji: '🛍️',
    category: 'E-Commerce',
    liveUrl: 'https://folletoshop.vercel.app/',
    githubUrl: '#',
    featured: true,
    gradient: 'from-pink-600/30 via-purple-700/20 to-indigo-600/30',
  },
  {
    id: 7,
    title: 'Folletos Shop V2',
    fallbackDesc: 'Pescadería Novillero con catálogo premium, carrito animado, checkout por WhatsApp y animaciones GSAP.',
    tags: ['Next.js', 'GSAP', 'E-Commerce', 'Premium'],
    emoji: '🦐',
    category: 'E-Commerce',
    liveUrl: 'https://folletoshop2.vercel.app/',
    githubUrl: 'https://github.com/jpwnoise/folleto_shop_2',
    featured: true,
    gradient: 'from-ocean-500/30 via-deep-500/20 to-coral-500/30',
  },
  {
    id: 9,
    title: 'Music Producer',
    fallbackDesc: 'Plataforma para productores musicales con reproductor de audio, portfolio y sistema de contacto.',
    tags: ['Audio', 'Portfolio', 'Interactive'],
    emoji: '🎵',
    category: 'Web App',
    liveUrl: 'https://musicproducer-vercel.vercel.app/',
    githubUrl: '#',
    featured: true,
    gradient: 'from-violet-600/30 via-fuchsia-700/20 to-purple-600/30',
  },
  {
    id: 3,
    title: 'Wings & Bites',
    fallbackDesc: 'Sitio web para restaurante con menú interactivo, sistema de pedidos y diseño atractivo.',
    tags: ['Restaurant', 'Orders', 'Responsive'],
    emoji: '🍗',
    category: 'Web App',
    liveUrl: 'https://wingsandbites.vercel.app/',
    githubUrl: '#',
    featured: true,
    gradient: 'from-orange-600/30 via-amber-700/20 to-yellow-600/30',
  },
  {
    id: 4,
    title: 'Catalina',
    fallbackDesc: 'Proyecto web con diseño elegante, animaciones fluidas y experiencia de usuario premium.',
    tags: ['Design', 'Animations', 'Modern'],
    emoji: '✨',
    category: 'Web',
    liveUrl: 'https://catalina-teal.vercel.app/',
    githubUrl: '#',
    featured: false,
    gradient: 'from-teal-600/30 via-emerald-700/20 to-green-600/30',
  },
  {
    id: 5,
    title: 'Smalle',
    fallbackDesc: 'Aplicación web minimalista con enfoque en usabilidad y rendimiento optimizado.',
    tags: ['Minimalist', 'Performance', 'Clean UI'],
    emoji: '💎',
    category: 'Web',
    liveUrl: 'https://smalle.vercel.app/',
    githubUrl: '#',
    featured: false,
    gradient: 'from-blue-600/30 via-sky-700/20 to-cyan-600/30',
  },
  
];

const categories = ['Todos', 'Web App', 'E-Commerce', 'Web'];

interface OgData {
  title: string | null;
  description: string | null;
  image: string | null;
  url: string | null;
}

export default function ProjectsV3() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(1); // SSR-safe default
  const [ogData, setOgData] = useState<Record<number, OgData>>({});
  const [loading, setLoading] = useState<Record<number, boolean>>({});
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Calculate visible cards on mount and resize
  useEffect(() => {
    const updateVisible = () => {
      if (typeof window === 'undefined') return;
      setCardsVisible(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  // Fetch OG data for all projects on mount
  useEffect(() => {
    projects.forEach((project) => {
      if (ogData[project.id]) return; // already fetched

      setLoading((prev) => ({ ...prev, [project.id]: true }));

      fetch(`/api/og?url=${encodeURIComponent(project.liveUrl)}`)
        .then((res) => res.json())
        .then((data) => {
          setOgData((prev) => ({ ...prev, [project.id]: data }));
        })
        .catch(() => {
          setOgData((prev) => ({ ...prev, [project.id]: { title: null, description: null, image: null, url: null } }));
        })
        .finally(() => {
          setLoading((prev) => ({ ...prev, [project.id]: false }));
        });
    });
  }, []);

  const filtered =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const scrollNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, filtered.length - 1));
  };

  const scrollPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const maxIndex = Math.max(filtered.length - cardsVisible, 0);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20">
            <span className="text-sm text-purple-300" style={{ fontFamily: 'var(--font-poppins)' }}>
              🚀 Portafolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            Proyectos{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              destacados
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-poppins)' }}>
            Una selección de mis trabajos más recientes e impactantes
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white border border-white/10 hover:border-purple-500/30'
              }`}
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {cat}
              {cat === 'Todos' && (
                <span className="ml-1.5 text-xs opacity-70">({projects.length})</span>
              )}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0
                ? 'bg-slate-800/30 text-slate-600 cursor-not-allowed'
                : 'bg-slate-800 text-white hover:bg-purple-600 shadow-lg'
            }`}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={scrollNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentIndex >= maxIndex
                ? 'bg-slate-800/30 text-slate-600 cursor-not-allowed'
                : 'bg-slate-800 text-white hover:bg-purple-600 shadow-lg'
            }`}
          >
            <FaArrowRight />
          </button>

          {/* Scrollable viewport */}
          <div
            ref={scrollRef}
            className="overflow-hidden rounded-2xl"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsVisible)}%)` }}
            >
              {filtered.map((project) => {
                const data = ogData[project.id];
                const isLoading = loading[project.id];
                // Use manual ogImage first, then fall back to fetched image
                const hasImage = project.ogImage || data?.image;
                const imageUrl = project.ogImage || data?.image;

                return (
                  <div
                    key={project.id}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / cardsVisible}%` }}
                  >
                    <div className="bg-slate-800/50 border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 h-full">
                      {/* Hero image or fallback */}
                      <div className={`relative h-48 overflow-hidden ${hasImage ? 'bg-slate-700/50' : `bg-gradient-to-br ${project.gradient}`}`}>
                        {isLoading && !project.ogImage && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
                          </div>
                        )}
                        {hasImage ? (
                          <img
                            src={imageUrl!}
                            alt={data?.title || project.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : !isLoading && (
                          <>
                            {/* Pattern overlay */}
                            <div
                              className="absolute inset-0 opacity-10"
                              style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                                backgroundSize: '24px 24px',
                              }}
                            />
                            <div className="relative z-10 text-7xl flex items-center justify-center h-full drop-shadow-lg">
                              {project.emoji}
                            </div>
                          </>
                        )}
                        {/* Bottom fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-800/80 to-transparent pointer-events-none" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-poppins)' }}>
                            {data?.title || project.title}
                          </h3>
                          {project.featured && (
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-lg">
                              Featured
                            </span>
                          )}
                        </div>

                        <p className="text-slate-400 text-sm mb-4 line-clamp-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                          {data?.description || project.fallbackDesc}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg"
                              style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-3 pt-4 border-t border-white/5">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            <FaExternalLinkAlt size={12} />
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-8 bg-gradient-to-r from-purple-500 to-cyan-500'
                    : 'w-2 bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
