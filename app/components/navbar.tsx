"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300
      ${scrolled || menuOpen ? "bg-black/40 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">

        {/* Logo */}
        <Link
          href="/"
          className={`${pacifico.className} text-xl sm:text-2xl md:text-3xl text-[#16f2b3]`}
        >
          M. Khumaedi
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base">
          <li><Link href="#about" className="text-white hover:text-blue-400 transition">ABOUT</Link></li>
          <li><Link href="#experience" className="text-white hover:text-blue-400 transition">EXPERIENCE</Link></li>
          <li><Link href="#skills" className="text-white hover:text-blue-400 transition">SKILLS</Link></li>
          <li><Link href="#education" className="text-white hover:text-blue-400 transition">EDUCATION</Link></li>
          <li><Link href="#projects" className="text-white hover:text-blue-400 transition">PROJECTS</Link></li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="bg-black/80 backdrop-blur-md px-6 py-4 space-y-4">
          {["about", "experience", "skills", "education", "projects"].map((item) => (
            <li key={item}>
              <Link
                onClick={closeMenu}
                href={`#${item}`}
                className="block text-white hover:text-blue-400 uppercase transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
