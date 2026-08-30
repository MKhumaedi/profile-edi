import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioService } from '../../services';

export const Footer: React.FC = () => {
  const personalInfo = portfolioService.getPersonalInfo();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#191d11] text-[#f7fce6] pt-16 pb-24 md:pb-12 border-t border-white/10 relative overflow-hidden">
      {/* DARK PREMIUM MESH GRADIENT & ANIMATED GEOMETRIC LINES BACKGROUND */}
      <div className="footer-mesh-background">
        <div className="footer-mesh-gradient" />
        <svg
          className="footer-lines-layer"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
        >
          <defs>
            <linearGradient id="footer-line-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b8ff2c" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#476800" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#b8ff2c" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="footer-line-grad-2" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#476800" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#b8ff2c" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#191d11" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M-200 80 Q 300 -40, 800 120 T 1800 40"
            stroke="url(#footer-line-grad-1)"
            strokeWidth="1.5"
            fill="none"
            className="footer-geometric-line"
          />
          <path
            d="M-100 220 Q 500 100, 1100 260 T 2000 180"
            stroke="url(#footer-line-grad-2)"
            strokeWidth="1"
            strokeDasharray="12 6"
            fill="none"
            className="footer-geometric-line-alt"
          />
          <path
            d="M 100 -50 L 1200 450"
            stroke="#b8ff2c"
            strokeWidth="0.8"
            strokeOpacity="0.12"
            strokeDasharray="6 6"
          />
          <path
            d="M 600 -50 L 1700 450"
            stroke="#476800"
            strokeWidth="0.8"
            strokeOpacity="0.18"
          />
        </svg>
      </div>

      <div className="max-w-max-width mx-auto px-container-padding relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="flex flex-col items-start gap-3">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#b8ff2c] text-[#191d11] flex items-center justify-center font-bold text-lg">
                MK
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {personalInfo.name}
              </span>
            </a>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-gray-300 tracking-wider">
            <a href="#home" className="hover:text-[#b8ff2c] transition-colors">HOME</a>
            <a href="#about" className="hover:text-[#b8ff2c] transition-colors">ABOUT</a>
            <a href="#skills" className="hover:text-[#b8ff2c] transition-colors">SKILLS</a>
            <a href="#projects" className="hover:text-[#b8ff2c] transition-colors">PROJECTS</a>
            <a href="#experience" className="hover:text-[#b8ff2c] transition-colors">EXPERIENCE</a>
            <a href="#contact" className="hover:text-[#b8ff2c] transition-colors">CONTACT</a>
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-full bg-[#2d3224] text-white hover:bg-[#b8ff2c] hover:text-[#191d11] transition-all border border-white/10 cursor-pointer flex items-center gap-2 text-xs font-bold"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b8ff2c] transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b8ff2c] transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b8ff2c] transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
