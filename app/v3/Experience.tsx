'use client';

import { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const experiences = [
  {
    type: 'work' as const,
    company: 'Farmacias Guadalajara',
    role: 'Desarrollador / Soporte TI',
    year: '',
    description: 'Creación de scripts bash para Linux (RedHat, CentOS), scripts en Python y programas de terminal en Java. Diseño de esquemas en BD (Informix, MySQL), optimización de consultas y operaciones CRUD. Soporte a clientes internos (Compras, RH, Contabilidad), creación de reportes en Excel y configuración de aplicaciones internas.',
    details: [
      'Creación de scripts bash para Linux (RedHat, CentOS)',
      'Scripts en Python y programas de terminal en Java',
      'Diseño de esquemas en BD (Informix, MySQL)',
      'Optimización de consultas y operaciones CRUD',
      'Soporte a clientes internos (Compras, RH, Contabilidad)',
      'Creación de reportes en Excel',
      'Configuración y soporte a aplicaciones internas',
    ],
    icon: FaBriefcase,
  },
  {
    type: 'work' as const,
    company: 'Muebles Placencia',
    role: 'Desarrollador Fullstack',
    year: '',
    description: 'Desarrollo de sitios web con PHP, Laravel, Angular y Node.js. Uso de bases de datos SQL Server, mantenimiento de aplicaciones de escritorio en C#, despliegues en Windows Server e integración de servicios SOAP.',
    details: [
      'Desarrollo de sitios web con PHP, Laravel, Angular y Node.js',
      'Uso de bases de datos SQL Server',
      'Mantenimiento de aplicaciones de escritorio en C#',
      'Despliegues en Windows Server',
      'Integración de servicios SOAP',
    ],
    icon: FaBriefcase,
  },
];

const extras = [
  {
    type: 'education' as const,
    year: '2016',
    title: 'Ingeniero en Sistemas',
    company: 'Guadalajara, Jalisco',
    description: 'Egresado en 2016. Experiencia en desarrollo de software en general, sistemas operativos (Windows, Linux), scripts en Python y Bash.',
    icon: FaGraduationCap,
  },
  {
    type: 'certificate' as const,
    year: '',
    title: 'Sistemas Operativos',
    company: 'Windows & Linux',
    description: 'Administración y scripting en ambos sistemas operativos, configuración de servidores y soporte técnico.',
    icon: FaCertificate,
  },
];

const typeColors = {
  work: { bg: 'bg-blue-500/10', border: 'border-blue-500', text: 'text-blue-400', icon: 'text-blue-400' },
  education: { bg: 'bg-cyan-500/10', border: 'border-cyan-500', text: 'text-cyan-400', icon: 'text-cyan-400' },
  certificate: { bg: 'bg-purple-500/10', border: 'border-purple-500', text: 'text-purple-400', icon: 'text-purple-400' },
};

export default function ExperienceV3() {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="animate-on-scroll text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="text-sm text-blue-300" style={{ fontFamily: 'var(--font-poppins)' }}>
              💼 Trayectoria
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            Experiencia{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Profesional
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-poppins)' }}>
            Mi recorrido profesional y formación académica
          </p>
        </div>

        {/* Experience cards */}
        <div className="space-y-6 mb-16">
          {experiences.map((exp, index) => {
            const colors = typeColors[exp.type];
            const Icon = exp.icon;
            const isExpanded = expandedExp === index;

            return (
              <div
                key={index}
                className="timeline-item relative"
              >
                <div
                  className={`p-6 ${colors.bg} border ${colors.border}/20 rounded-2xl hover:border-opacity-50 transition-all duration-300 cursor-pointer`}
                  onClick={() => setExpandedExp(isExpanded ? null : index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${colors.bg} border-2 ${colors.border} rounded-full flex items-center justify-center`}>
                      <Icon className={colors.icon} size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-poppins)' }}>
                            {exp.company}
                          </h3>
                          <p className={`text-sm ${colors.text}`} style={{ fontFamily: 'var(--font-poppins)' }}>
                            {exp.role}
                          </p>
                        </div>
                        <div className="text-slate-400">
                          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                      </div>

                      <p className="text-slate-400 text-sm mt-3" style={{ fontFamily: 'var(--font-poppins)' }}>
                        {exp.description}
                      </p>

                      {isExpanded && (
                        <ul className="mt-4 space-y-2">
                          {exp.details.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-slate-300 hover:translate-x-1 transition-transform"
                              style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                              <span className={colors.text}>▹</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Education & Certs */}
        <div className="grid md:grid-cols-2 gap-6">
          {extras.map((item, index) => {
            const colors = typeColors[item.type];
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="timeline-item p-6 bg-slate-800/30 border border-white/5 rounded-2xl hover:border-purple-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 ${colors.bg} border ${colors.border} rounded-full flex items-center justify-center`}>
                    <Icon className={colors.icon} size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-poppins)' }}>
                      {item.title}
                    </h3>
                    <p className={`text-xs ${colors.text}`} style={{ fontFamily: 'var(--font-poppins)' }}>
                      {item.company}
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
