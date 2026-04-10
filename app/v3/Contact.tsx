'use client';

import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function ContactV3() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - integrate with your backend
    console.log('Form submitted:', formData);
    alert('¡Mensaje enviado! (Placeholder - conectar con backend)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'pablodev1@outlook.com', href: 'mailto:pablodev1@outlook.com' },
    { icon: FaPhone, label: 'Teléfono', value: '+52 331-326-2108', href: 'tel:+523313262108' },
    { icon: FaMapMarkerAlt, label: 'Ubicación', value: 'Tlaquepaque, Jalisco', href: '#' },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="animate-on-scroll text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-sm text-cyan-300" style={{ fontFamily: 'var(--font-poppins)' }}>
              📩 Contacto
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            ¿Tienes un proyecto en{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              mente?
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-poppins)' }}>
            Me encantaría escuchar tu idea y ayudarte a convertirla en realidad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact info + social */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
              Hablemos
            </h3>

            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-slate-800/30 border border-white/5 rounded-xl hover:border-purple-500/30 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                      <Icon className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500" style={{ fontFamily: 'var(--font-poppins)' }}>
                        {info.label}
                      </div>
                      <div className="text-white font-medium" style={{ fontFamily: 'var(--font-poppins)' }}>
                        {info.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
                Sígueme
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
                  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      className="p-3 bg-slate-800/50 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:border-purple-500/30 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="p-6 bg-slate-800/30 border border-white/5 rounded-2xl">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Asunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="¿En qué puedo ayudarte?"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  <FaPaperPlane />
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
