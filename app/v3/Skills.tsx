'use client';

import { FaReact, FaNodeJs, FaPython, FaGithub, FaAngular, FaLinux, FaWindows } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiMysql, SiPhp, SiLaravel, SiTypescript, SiJavascript } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '💻',
    skills: [
      { name: 'React', level: 90, icon: FaReact },
      { name: 'Angular', level: 80, icon: FaAngular },
      { name: 'Next.js', level: 85, icon: SiNextdotjs },
      { name: 'TypeScript', level: 85, icon: SiTypescript },
      { name: 'JavaScript', level: 92, icon: SiJavascript },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85, icon: FaNodeJs },
      { name: 'PHP / Laravel', level: 80, icon: SiLaravel },
      { name: 'Python', level: 75, icon: FaPython },
      { name: 'C#', level: 70, icon: null },
    ],
  },
  {
    title: 'Bases de Datos',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 85, icon: SiMysql },
      { name: 'MongoDB', level: 75, icon: SiMongodb },
      { name: 'SQL Server', level: 80, icon: null },
      { name: 'Informix', level: 70, icon: null },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: '🚀',
    skills: [
      { name: 'Git / GitHub', level: 90, icon: FaGithub },
      { name: 'Linux (RedHat, CentOS)', level: 80, icon: FaLinux },
      { name: 'Windows Server', level: 75, icon: FaWindows },
      { name: 'Bash / Scripts', level: 78, icon: null },
    ],
  },
];

export default function SkillsV3() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="animate-on-scroll text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-sm text-cyan-300" style={{ fontFamily: 'var(--font-poppins)' }}>
              ⚡ Skills & Tecnologías
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            Mi stack{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              tecnológico
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-poppins)' }}>
            Herramientas y tecnologías que utilizo para construir productos digitales de alta calidad
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className="animate-on-scroll p-6 bg-slate-900/50 border border-white/5 rounded-2xl hover:border-purple-500/30 transition-all duration-300"
              style={{ animationDelay: `${catIdx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {Icon && <Icon className="text-purple-400" size={16} />}
                          <span className="text-slate-300 text-sm" style={{ fontFamily: 'var(--font-poppins)' }}>
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-purple-400 font-semibold text-sm" style={{ fontFamily: 'var(--font-poppins)' }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="skill-bar h-full bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full"
                          data-width={`${skill.level}%`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8">
                {['React', 'Angular', 'Next.js', 'Node.js', 'PHP', 'Laravel', 'Python', 'MySQL', 'MongoDB', 'SQL Server', 'TypeScript', 'Git', 'Linux', 'C#', 'Bash'].map(
                  (tech) => (
                    <span
                      key={`${tech}-${i}`}
                      className="px-6 py-3 bg-slate-800/50 border border-white/10 rounded-full text-slate-400 hover:text-white hover:border-purple-500/50 transition-all cursor-default"
                      style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
