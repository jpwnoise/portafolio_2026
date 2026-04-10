'use client';

import { FaCode, FaPalette, FaMobile, FaRocket, FaServer, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    icon: FaCode,
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas y escalables con las últimas tecnologías como React, Next.js y TypeScript.',
    features: ['Single Page Apps', 'Progressive Web Apps', 'Server-Side Rendering', 'APIs RESTful'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FaPalette,
    title: 'UI/UX Design',
    description: 'Diseño de interfaces intuitivas y atractivas centradas en la experiencia del usuario.',
    features: ['Wireframing', 'Prototipos', 'Design Systems', 'User Research'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: FaMobile,
    title: 'Desarrollo Mobile',
    description: 'Aplicaciones móviles multiplataforma con rendimiento nativo y diseño responsive.',
    features: ['React Native', 'Flutter', 'iOS & Android', 'App Store Optimization'],
    color: 'from-rose-500 to-orange-500',
  },
  {
    icon: FaRocket,
    title: 'Optimización',
    description: 'Mejora de rendimiento, SEO y accesibilidad para maximizar el alcance de tu aplicación.',
    features: ['Performance Audit', 'SEO Técnico', 'Core Web Vitals', 'Lazy Loading'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: FaServer,
    title: 'Backend & APIs',
    description: 'Arquitecturas de servidor robustas y APIs eficientes para aplicaciones escalables.',
    features: ['Node.js', 'Microservicios', 'Bases de datos', 'Cloud Services'],
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: FaShieldAlt,
    title: 'Seguridad',
    description: 'Implementación de mejores prácticas de seguridad para proteger tu aplicación y datos.',
    features: ['Autenticación', 'Encriptación', 'OWASP', 'Auditorías'],
    color: 'from-yellow-500 to-green-500',
  },
];

export default function ServicesV3() {
  return (
    <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="animate-on-scroll text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-sm text-amber-300" style={{ fontFamily: 'var(--font-poppins)' }}>
              ✨ Servicios
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            ¿Cómo puedo{' '}
            <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">
              ayudarte?
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-poppins)' }}>
            Ofrezco soluciones completas para llevar tu proyecto del concepto a la realidad
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="project-card group relative p-6 bg-slate-800/30 border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`inline-flex p-3 bg-gradient-to-br ${service.color} rounded-xl mb-4 shadow-lg`}>
                  <Icon className="text-white" size={24} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
