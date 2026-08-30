import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Code, Download, Terminal } from 'lucide-react';
import { portfolioService } from '../../../services';
import { HeroThreeScene } from './HeroThreeScene';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 });

  const personalInfo = portfolioService.getPersonalInfo();
  const metrics = portfolioService.getMetrics();
  const techMarquee = portfolioService.getTechMarquee();

  // Mouse Parallax & Dynamic Light Tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const normalizedX = (x / rect.width - 0.5) * 2;
      const normalizedY = (y / rect.height - 0.5) * 2;
      setMousePos({ x, y, normalizedX, normalizedY });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="pt-28 md:pt-36 pb-16 relative overflow-hidden bg-transparent"
    >
      {/* AURORA GRADIENT & NOISE BACKGROUND */}
      <div className="hero-aurora-background">
        <div className="hero-aurora-mesh" />
        <div className="hero-noise-overlay" />
        
        {/* Dynamic Light Following Cursor */}
        <div
          className="hero-cursor-light"
          style={{
            transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)`,
            opacity: mousePos.x > 0 ? 0.85 : 0
          }}
        />
      </div>

      {/* FULL HERO 3D ECOSYSTEM (SPANS ENTIRE SECTION) */}
      <HeroThreeScene mousePos={mousePos} />

      <div
        className="max-w-max-width mx-auto px-container-padding relative z-10 transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${mousePos.normalizedX * -6}px, ${mousePos.normalizedY * -6}px, 0)`
        }}
      >
        {/* TOP STATUS BADGE */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#ecf0db] border border-[#c2caae]/60 text-[#191d11] text-xs font-semibold tracking-wide shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#476800] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#476800]"></span>
            </span>
            <span>{personalInfo.status}</span>
            <span className="text-[#424934]">•</span>
            <span className="text-[#424934]">{personalInfo.location}</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#424934] bg-[#f1f6e1] px-3 py-1 rounded-md border border-[#c2caae]/40">
            <Terminal className="w-3.5 h-3.5 text-[#476800]" />
            <span>npx mkhumaedi --fullstack</span>
          </div>
        </div>

        {/* MAIN HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            <div className="inline-flex items-center gap-2 mb-4 text-[#476800] font-bold text-sm tracking-wider uppercase">
              <Code className="w-4 h-4 text-[#476800]" />
              <span>Full Stack Developer & UI Architect</span>
            </div>

            <h1 className="text-display-hero text-[#191d11] font-extrabold tracking-tight mb-6 leading-none">
              Hello, I'm <br />
              <span className="text-[#476800] relative inline-block">
                M. Khumaedi
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#b8ff2c] -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,5 100,15" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-title-lg text-[#191d11] font-semibold mb-4 leading-snug max-w-2xl">
              {personalInfo.tagline}
            </p>

            <p className="text-body-md text-[#424934] mb-8 max-w-2xl">
              {personalInfo.about}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#191d11] text-[#b8ff2c] hover:bg-[#476800] hover:text-white font-bold text-sm tracking-wider transition-all shadow-md group cursor-pointer"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#ecf0db] text-[#191d11] hover:bg-[#b8ff2c] font-bold text-sm tracking-wider transition-all border border-[#c2caae]/60 cursor-pointer"
              >
                <span>GET IN TOUCH</span>
              </a>

              <a
                href="/CV_M_Khumaedi_ITTrainer_FullStackDev.pdf"
                download="CV_M_Khumaedi_ITTrainer_FullStackDev.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#476800] hover:underline cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume / CV</span>
              </a>
            </div>
          </div>

          {/* RIGHT PROFILE PHOTO COLUMN */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative min-h-[420px] lg:min-h-[480px] items-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-[#ecf0db]/90 p-4 border border-[#c2caae]/60 shadow-2xl group z-10 backdrop-blur-xs">
              {/* Photo Frame Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#2d3224]">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191d11]/80 via-transparent to-transparent opacity-60" />

                {/* Overlaid Floating Badges */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#191d11]/85 backdrop-blur-md text-white border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#b8ff2c] text-[#191d11] flex items-center justify-center font-bold text-xs">
                      5+
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Years Experience</div>
                      <div className="text-[10px] text-gray-300">IT Trainer & Full Stack Developer</div>
                    </div>
                  </div>  
                  <div className="w-2.5 h-2.5 rounded-full bg-[#b8ff2c] animate-ping" />
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-2xl bg-[#b8ff2c] text-[#191d11] flex items-center justify-center shadow-md font-bold text-xs rotate-12 z-20">
                100%
              </div>
            </div>

            {/* FLOATING GLASS TECHNOLOGY CARDS */}
            <div className="absolute -top-6 -left-4 md:-top-8 md:-left-8 p-3 px-4 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/80 shadow-lg hidden sm:flex items-center gap-3 z-30 animate-glass-float-1 hover:scale-105 transition-transform">
              <div className="w-8 h-8 rounded-xl bg-[#191d11] text-[#b8ff2c] flex items-center justify-center font-bold text-xs shadow-xs">
                React
              </div>
              <div>
                <div className="text-xs font-bold text-[#191d11]">Next.js & React 18</div>
                <div className="text-[10px] font-medium text-[#476800]">Frontend Architecture</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 p-3 px-4 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/80 shadow-lg hidden sm:flex items-center gap-3 z-30 animate-glass-float-2 hover:scale-105 transition-transform">
              <div className="w-8 h-8 rounded-xl bg-[#476800] text-[#b8ff2c] flex items-center justify-center font-bold text-xs shadow-xs">
                TS
              </div>
              <div>
                <div className="text-xs font-bold text-[#191d11]">TypeScript & Node</div>
                <div className="text-[10px] font-medium text-[#476800]">Type-Safe Fullstack</div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-6 md:-right-10 transform -translate-y-1/2 p-2.5 px-3.5 rounded-xl bg-[#191d11]/90 backdrop-blur-xl border border-white/10 text-white shadow-xl hidden lg:flex items-center gap-2.5 z-30 animate-glass-float-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#b8ff2c] animate-pulse" />
              <span className="text-xs font-bold tracking-wide">PostgreSQL & Prisma</span>
            </div>

            <div className="absolute bottom-16 -left-6 md:bottom-20 md:-left-10 p-2 px-3 rounded-xl bg-[#ecf0db]/90 backdrop-blur-xl border border-[#c2caae]/60 text-[#191d11] shadow-lg hidden lg:flex items-center gap-2 z-30 animate-glass-float-1">
              <span className="text-xs font-mono font-bold text-[#476800]">Tailwind CSS</span>
              <span className="text-[10px] bg-[#b8ff2c] text-[#191d11] px-1.5 py-0.5 rounded font-bold">UI/UX</span>
            </div>
          </div>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-[#ecf0db]/80 hover:bg-[#ecf0db] p-6 rounded-2xl border border-[#c2caae]/50 transition-all hover:-translate-y-1 group backdrop-blur-xs"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-[#191d11] group-hover:text-[#476800] transition-colors mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-[#191d11]">{metric.label}</div>
              {metric.sublabel && (
                <div className="text-xs text-[#424934] mt-0.5">{metric.sublabel}</div>
              )}
            </div>
          ))}
        </div>

        {/* TECH STACK INFINITE MARQUEE */}
        <div className="w-full bg-[#191d11] text-[#f7fce6] py-4 rounded-2xl overflow-hidden shadow-lg border border-[#c2caae]/20">
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="animate-marquee flex items-center gap-8 text-xs font-bold tracking-widest text-[#b8ff2c]">
              {techMarquee.concat(techMarquee).map((item, index) => (
                <React.Fragment key={index}>
                  <span>{item}</span>
                  <span className="text-white/30">•</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};