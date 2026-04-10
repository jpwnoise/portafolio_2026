'use client';

import { FaDownload, FaCoffee, FaCode, FaLightbulb } from 'react-icons/fa';

export default function AboutV3() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="animate-on-scroll grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10">
              <img
                src="/pablo.png"
                alt="Pablo Hernández"
                className="aspect-square w-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-cyan-600/10" />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-slate-800 border border-white/10 rounded-xl shadow-xl">
              <div className="flex items-center gap-2">
                <FaCoffee className="text-purple-400" />
                <span className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-poppins)' }}>
                  +1000 cafés
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-slate-800 border border-white/10 rounded-xl shadow-xl">
              <div className="flex items-center gap-2">
                <FaCode className="text-cyan-400" />
                <span className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-poppins)' }}>
                  50k+ líneas
                </span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20">
              <FaLightbulb className="text-purple-400 text-sm" />
              <span className="text-sm text-purple-300" style={{ fontFamily: 'var(--font-poppins)' }}>
                Sobre mí
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
              Transformando ideas en{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                experiencias digitales
              </span>
            </h2>

            <p className="text-lg text-slate-400 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
              Soy un desarrollador apasionado por crear productos digitales que combinan{' '}
              <span className="text-white">diseño excepcional</span> con{' '}
              <span className="text-white">código de alta calidad</span>. Mi enfoque se centra en
              entender las necesidades del usuario y traducirlas en interfaces intuitivas y elegantes.
            </p>

            <p className="text-slate-400 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
              Egresado en 2016 en Guadalajara, Jalisco. Con experiencia en desarrollo de software en general,
              sistemas operativos (Windows, Linux), scripts en Python y Bash, y tecnologías modernas de desarrollo web.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Frontend', value: 'React, Next.js, Vue' },
                { label: 'Backend', value: 'Node.js, Python, APIs' },
                { label: 'UI/UX', value: 'Figma, Design Systems' },
                { label: 'DevOps', value: 'AWS, Docker, CI/CD' },
              ].map((item) => (
                <div key={item.label} className="p-4 bg-slate-800/50 border border-white/5 rounded-xl">
                  <div className="text-sm text-slate-500 mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {item.label}
                  </div>
                  <div className="text-white font-medium" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105" style={{ fontFamily: 'var(--font-poppins)' }}>
              <FaDownload />
              Descargar CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
