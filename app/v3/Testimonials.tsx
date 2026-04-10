'use client';

import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'María González',
    role: 'CEO, TechStartup',
    avatar: '👩‍💼',
    content: 'Pablo transformó nuestra visión en una plataforma increíble. Su atención al detalle y capacidad técnica superaron todas nuestras expectativas. El resultado final fue excepcional.',
    rating: 5,
  },
  {
    name: 'Carlos Ramírez',
    role: 'CTO, DigitalCorp',
    avatar: '👨‍💻',
    content: 'Trabajar con Pablo fue una experiencia excelente. Entregó el proyecto antes del deadline y la calidad del código es impresionante. Definitivamente volveremos a colaborar.',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    role: 'Product Manager, InnovateTech',
    avatar: '👩‍🔬',
    content: 'La capacidad de Pablo para entender las necesidades del negocio y traducirlas en soluciones técnicas es remarquable. Nuestro e-commerce aumentó conversiones un 40%.',
    rating: 5,
  },
  {
    name: 'David López',
    role: 'Founder, AppVentures',
    avatar: '🧑‍🚀',
    content: 'Profesionalismo de primer nivel. Pablo no solo desarrolló nuestra app, sino que nos asesoró en UX y arquitectura. El resultado habla por sí solo.',
    rating: 5,
  },
];

export default function TestimonialsV3() {
  return (
    <section className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="animate-on-scroll text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="text-sm text-green-300" style={{ fontFamily: 'var(--font-poppins)' }}>
              💬 Testimonios
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            Lo que dicen mis{' '}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              clientes
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-poppins)' }}>
            Experiencias reales de personas con las que he trabajado
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="testimonials-grid grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="testimonial-card p-6 bg-slate-800/30 border border-white/5 rounded-2xl hover:border-purple-500/20 transition-all duration-300"
            >
              {/* Quote icon */}
              <FaQuoteLeft className="text-purple-500/30 mb-4" size={24} />

              {/* Content */}
              <p className="text-slate-300 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-400" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {testimonial.role}
                  </div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={14} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
