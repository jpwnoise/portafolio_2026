'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

export default function FooterV3() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo */}
          <div>
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-poppins)' }}>
              {'<'}DevPortfolio{' />'}
            </div>
            <p className="text-sm text-slate-500 mt-2" style={{ fontFamily: 'var(--font-poppins)' }}>
              Creando experiencias digitales excepcionales
            </p>
          </div>

          {/* Center - Copyright */}
          <div className="text-center text-slate-500 text-sm" style={{ fontFamily: 'var(--font-poppins)' }}>
            <div className="flex items-center justify-center gap-1">
              Hecho con <FaHeart className="text-pink-500" size={12} /> por Pablo Hernández
            </div>
            <div className="mt-1">© {currentYear} Todos los derechos reservados</div>
          </div>

          {/* Right - Social */}
          <div className="flex justify-end gap-3">
            <a href="https://github.com" target="_blank" className="p-2 text-slate-400 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="p-2 text-slate-400 hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" className="p-2 text-slate-400 hover:text-white transition-colors">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
