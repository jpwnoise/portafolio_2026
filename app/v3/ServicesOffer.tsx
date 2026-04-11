'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Globe, Sparkles, Check, Tag, Shield } from 'lucide-react';

const plans = [
  {
    id: 'landing',
    name: 'Página de Presentación',
    subtitle: 'Ideal para empezar',
    icon: Sparkles,
    regularPrice: 2500,
    promoPrice: null,
    features: [
      'Sitio web profesional de una página',
      'Diseño moderno y atractivo',
      'Adaptable a celulares y tablets',
      'Información de tu negocio',
      'Botón de WhatsApp para pedidos',
      'Menú o catálogo de productos',
      'Publicación en internet incluida',
    ],
    whatsappMsg: '¡Hola! Me interesa el paquete "Página de Presentación" ($2,500 MXN). ¿Podemos iniciar?',
  },
  {
    id: 'semi-custom',
    name: 'Tu Sitio + Dirección Web',
    subtitle: '🔥 Más popular',
    icon: Globe,
    regularPrice: 3500,
    promoPrice: 1000,
    features: [
      'Todo lo del paquete anterior',
      'Tu dirección web tipo: tunegocio.vercel.app',
      'Diseño personalizado a tu gusto',
      'Galería de imágenes de tus productos',
      'Mapa de ubicación si tienes local',
      'Horarios y datos de contacto',
      'Ideal para restaurantes, tiendas y negocios',
    ],
    whatsappMsg: '¡Hola! Me interesa el paquete "Tu Sitio + Dirección Web" ($1,000 MXN precio de apertura). ¿Podemos iniciar?',
  },
  {
    id: 'custom',
    name: 'Sitio Completo + Tu Dominio',
    subtitle: 'El más profesional',
    icon: Shield,
    regularPrice: 6000,
    promoPrice: null,
    features: [
      'Todo lo del paquete anterior',
      'Tu dominio propio: www.tunegocio.com',
      'Correo profesional: info@tunegocio.com',
      'Múltiples páginas (inicio, menú, contacto)',
      'Panel para actualizar contenido',
      'Google Maps integrado',
      'Optimizado para buscadores',
      'Soporte y mantenimiento incluido',
    ],
    whatsappMsg: '¡Hola! Me interesa el paquete "Sitio Completo + Tu Dominio" ($6,000 MXN). ¿Podemos iniciar?',
  },
];

export default function Services() {
  const [coupon, setCoupon] = useState('');

  const handleOrder = (plan: (typeof plans)[0]) => {
    const msg = coupon.trim()
      ? `${plan.whatsappMsg}\n\n🎫 Cupón: ${coupon}`
      : plan.whatsappMsg;
    window.open(`https://wa.me/5213313262108?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="planes" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20">
            <Tag className="text-green-400" size={16} />
            <span className="text-sm text-green-300" style={{ fontFamily: 'var(--font-poppins)' }}>
              Planes y Precios
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            Crea tu{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              presencia online
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-poppins)' }}>
            Elige el plan que mejor se adapte a tu negocio. Todos incluyen diseño profesional y publicación en internet.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const isPopular = plan.id === 'semi-custom';
            const displayPrice = plan.promoPrice || plan.regularPrice;
            const hasPromo = plan.promoPrice !== null;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`relative rounded-2xl p-6 lg:p-8 flex flex-col ${
                  isPopular
                    ? 'bg-gradient-to-b from-purple-600/20 to-slate-800 border-2 border-purple-500/50 shadow-xl shadow-purple-500/10'
                    : 'bg-slate-800/50 border border-white/10 hover:border-purple-500/30'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-xs font-bold text-white uppercase tracking-wide">
                    🔥 Más popular
                  </div>
                )}

                {/* Icon + Name */}
                <div className="mb-6">
                  <div className={`inline-flex p-3 rounded-xl mb-4 ${isPopular ? 'bg-purple-500/20' : 'bg-slate-700/50'}`}>
                    <Icon className={isPopular ? 'text-purple-400' : 'text-slate-300'} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-400" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {hasPromo && (
                    <div className="text-sm text-slate-500 line-through mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                      ${plan.regularPrice.toFixed(0)} MXN
                    </div>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-poppins)' }}>
                      ${displayPrice.toFixed(0)}
                    </span>
                    <span className="text-slate-400 text-sm">MXN</span>
                  </div>
                  {hasPromo && (
                    <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <span className="text-xs text-green-400 font-semibold" style={{ fontFamily: 'var(--font-poppins)' }}>
                        🎉 Precio de apertura
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-300" style={{ fontFamily: 'var(--font-poppins)' }}>
                      <Check className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => handleOrder(plan)}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95 ${
                    isPopular
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40'
                      : 'bg-white/5 border border-white/20 text-white hover:bg-white/10'
                  }`}
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  <MessageCircle size={20} />
                  Pedir por WhatsApp
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Coupon section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 text-center">
            <h4 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
              ¿Tienes un cupón de descuento?
            </h4>
            <p className="text-sm text-slate-400 mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
              Ingresa tu código y se aplicará al hacer tu pedido
            </p>
            <div className="flex gap-3">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                placeholder="Ej: DESCUENTO10"
                className="flex-1 px-4 py-3 bg-slate-900/80 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors text-center font-mono uppercase"
                style={{ fontFamily: 'var(--font-poppins)' }}
              />
              {coupon && (
                <button
                  onClick={() => setCoupon('')}
                  className="px-4 py-3 bg-slate-700 text-slate-300 rounded-xl hover:bg-slate-600 transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
            {coupon && (
              <p className="mt-3 text-xs text-green-400" style={{ fontFamily: 'var(--font-poppins)' }}>
                ✓ Cupón "{coupon}" listo para usar en tu pedido
              </p>
            )}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-sm" style={{ fontFamily: 'var(--font-poppins)' }}>
            ¿No sabes cuál elegir? Escríbeme y te ayudo a elegir el mejor plan para tu negocio.
          </p>
          <a
            href="https://wa.me/5213313262108?text=¡Hola!%20Quiero%20saber%20qué%20plan%20es%20mejor%20para%20mi%20negocio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-purple-400 hover:text-purple-300 transition-colors font-medium"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            <MessageCircle size={16} />
            Preguntar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
