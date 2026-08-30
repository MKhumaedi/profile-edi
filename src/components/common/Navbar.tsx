import React, { useState, useEffect } from 'react';
import { Search, Home, User, Briefcase, Cpu, Mail, ArrowUpRight, GraduationCap } from 'lucide-react';
import { portfolioService } from '../../services';

interface NavbarProps {
  activeSection: string;
  onSearchClick: () => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onSearchClick, onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);

  const personalInfo = portfolioService.getPersonalInfo();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home', icon: Home },
    { name: 'ABOUT', href: '#about', id: 'about', icon: User },
    { name: 'SKILLS', href: '#skills', id: 'skills', icon: Cpu },
    { name: 'PROJECTS', href: '#projects', id: 'projects', icon: Briefcase },
    { name: 'EXPERIENCE', href: '#experience', id: 'experience', icon: Briefcase },
    { name: 'EDUCATION', href: '#education', id: 'education', icon: GraduationCap },
    { name: 'CONTACT', href: '#contact', id: 'contact', icon: Mail },
  ];

  const mobileNavItems = [
    { name: 'Home', href: '#home', id: 'home', icon: Home },
    { name: 'About', href: '#about', id: 'about', icon: User },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Cpu },
    { name: 'Projects', href: '#projects', id: 'projects', icon: Briefcase },
    { name: 'Edu', href: '#education', id: 'education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <>
      {/* DESKTOP TOP NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 hidden md:block ${
          scrolled
            ? 'bg-[#f7fce6]/90 backdrop-blur-md shadow-sm border-b border-[#c2caae]/40 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-max-width mx-auto px-container-padding flex items-center justify-between">
          {/* Logo & Status */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="MK Logo"
          >
            <div className="w-10 h-10 rounded-xl bg-[#191d11] text-[#b8ff2c] flex items-center justify-center font-bold text-lg tracking-wider group-hover:scale-105 transition-transform shadow-sm">
              MK
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-[#191d11] tracking-tight text-base group-hover:text-[#476800] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-[#424934] font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#476800] animate-pulse"></span>
                {personalInfo.status}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="flex items-center gap-1 bg-[#ecf0db]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#c2caae]/50 shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-[#191d11] text-[#b8ff2c] shadow-xs'
                      : 'text-[#424934] hover:text-[#191d11] hover:bg-[#e6ead6]/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Search & CTA Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onSearchClick}
              className="p-2.5 rounded-full bg-[#ecf0db] text-[#191d11] hover:bg-[#b8ff2c] hover:text-[#191d11] transition-all border border-[#c2caae]/40 flex items-center gap-2 text-xs font-medium cursor-pointer"
              title="Search Portfolio (Cmd+K)"
            >
              <Search className="w-4 h-4" />
              <span className="hidden lg:inline text-xs font-mono opacity-80">⌘K</span>
            </button>

            <a
              href="#contact"
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#476800] text-white hover:bg-[#191d11] hover:text-[#b8ff2c] font-bold text-xs tracking-wider transition-all shadow-sm group cursor-pointer"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </header>

      {/* MOBILE TOP BAR */}
      <header className="fixed top-0 left-0 right-0 z-40 md:hidden bg-[#f7fce6]/90 backdrop-blur-md border-b border-[#c2caae]/30 py-3 px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#191d11] text-[#b8ff2c] flex items-center justify-center font-bold text-sm">
            MK
          </div>
          <span className="font-bold text-[#191d11] text-sm">{personalInfo.name}</span>
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={onSearchClick}
            className="p-2 rounded-full bg-[#ecf0db] text-[#191d11] border border-[#c2caae]/40"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-full bg-[#476800] text-white text-xs font-bold"
          >
            Hire Me
          </a>
        </div>
      </header>

      {/* MOBILE FLOATING BOTTOM NAVIGATION BAR */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden w-[92%] max-w-md">
        <nav className="bg-[#191d11]/95 text-white backdrop-blur-lg px-3 py-2.5 rounded-full border border-white/10 shadow-2xl flex items-center justify-around">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#b8ff2c] font-bold scale-105'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#b8ff2c]' : ''}`} />
                <span className="text-[10px] font-medium tracking-tight">{item.name}</span>
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-[#b8ff2c] -mt-0.5"></span>
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
};
