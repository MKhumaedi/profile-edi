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
      ${scrolled || menuOpen ? "bg-black/30 backdrop-blur-md" : "bg-transparent"}`}
    >
      {/* ✅ CONTAINER SAMA DENGAN HERO */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-5">

        {/* Logo */}
        <Link
          href="/"
          className={`${pacifico.className} text-2xl md:text-3xl text-[#16f2b3] -ml-16`}
        >
          M. Khumaedi
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm">
          <li><Link href="#about" className="text-white hover:text-blue-500">ABOUT</Link></li>
          <li><Link href="#experience" className="text-white hover:text-blue-500">EXPERIENCE</Link></li>
          <li><Link href="#skills" className="text-white hover:text-blue-500">SKILLS</Link></li>
          <li><Link href="#education" className="text-white hover:text-blue-500">EDUCATION</Link></li>
          <li><Link href="#projects" className="text-white hover:text-blue-500">PROJECTS</Link></li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-20 left-0 w-full bg-black/70 backdrop-blur-md md:hidden transition-all
        ${menuOpen ? "block" : "hidden"}`}
      >
        {["about", "experience", "skills", "education", "projects"].map((item) => (
          <li key={item} className="px-6 py-3">
            <Link
              onClick={closeMenu}
              href={`#${item}`}
              className="text-white hover:text-blue-500 uppercase"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}