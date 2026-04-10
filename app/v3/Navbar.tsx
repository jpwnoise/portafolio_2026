'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Contacto', href: '#contact' },
];

export default function NavbarV3() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/90 backdrop-blur-xl shadow-lg shadow-purple-500/5 border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {'<'}DevPortfolio{' />'}
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-slate-300 hover:text-white transition-colors relative group"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Social + hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <a href="https://github.com" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <FaGithub size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <FaTwitter size={18} />
              </a>
            </div>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileOpen(true)}
            >
              <FaBars size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/95 backdrop-blur-xl z-50 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-72 bg-slate-900/98 backdrop-blur-xl z-50 border-l border-white/10 p-8 md:hidden"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-6 right-6 text-white"
              >
                <FaTimes size={22} />
              </button>

              <div className="flex flex-col gap-6 mt-16">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => scrollTo(link.href)}
                    className="text-left text-lg text-slate-300 hover:text-white transition-colors"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {link.name}
                  </motion.button>
                ))}

                <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
                  <a href="https://github.com" target="_blank" className="text-slate-400 hover:text-white">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" className="text-slate-400 hover:text-white">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://twitter.com" target="_blank" className="text-slate-400 hover:text-white">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
