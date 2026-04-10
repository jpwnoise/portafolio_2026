'use client';

import { useRef } from 'react';
import { FaArrowDown, FaCode, FaRocket, FaStar } from 'react-icons/fa';

export default function HeroV3() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Parallax background */}
      <div className="hero-parallax-bg absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950" />
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-element absolute top-1/4 left-[10%] text-purple-500/20">
          <FaCode size={40} />
        </div>
        <div className="floating-element absolute top-1/3 right-[15%] text-cyan-500/20" style={{ animationDelay: '3s' }}>
          <FaRocket size={35} />
        </div>
        <div className="floating-element absolute bottom-1/4 left-[20%] text-pink-500/20" style={{ animationDelay: '6s' }}>
          <FaStar size={30} />
        </div>
        <div className="floating-element absolute top-[60%] right-[25%] text-purple-400/15" style={{ animationDelay: '9s' }}>
          <FaCode size={45} />
        </div>
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-slate-300" style={{ fontFamily: 'var(--font-poppins)' }}>
            Disponible para proyectos
          </span>
        </div>

        {/* Title */}
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
          <span className="word inline-block text-white">Hola,</span>{' '}
          <span className="word inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            soy Pablo
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
          Desarrollador Fullstack especializado en crear{' '}
          <span className="text-white font-semibold">experiencias digitales excepcionales</span>{' '}
          con tecnologías modernas y diseño premium.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Ver proyectos
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Contactar
          </button>
        </div>

        {/* Stats */}
        <div className="hero-cta mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="counter text-3xl md:text-4xl font-bold text-white" data-target="50">0</div>
            <div className="text-sm text-slate-400 mt-1" style={{ fontFamily: 'var(--font-poppins)' }}>Proyectos</div>
          </div>
          <div className="text-center">
            <div className="counter text-3xl md:text-4xl font-bold text-white" data-target="5">0</div>
            <div className="text-sm text-slate-400 mt-1" style={{ fontFamily: 'var(--font-poppins)' }}>Años Exp.</div>
          </div>
          <div className="text-center">
            <div className="counter text-3xl md:text-4xl font-bold text-white" data-target="30">0</div>
            <div className="text-sm text-slate-400 mt-1" style={{ fontFamily: 'var(--font-poppins)' }}>Clientes</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors"
      >
        <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
        </div>
      </button>
    </section>
  );
}
