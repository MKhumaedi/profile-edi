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
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300
      ${scrolled || menuOpen ? "bg-black/30 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6 lg:px-2">

        {/* Logo */}
        <Link
          href="/"
          className={`${pacifico.className} text-2xl md:text-3xl text-[#16f2b3] py-1 px-2 rounded-md transition-all hover:scale-110 duration-300 mr-auto`}
        >
          Edi Dev
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm">
          <li>
            <Link href="#about" className="text-white hover:text-blue-500">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="#experience" className="text-white hover:text-blue-500">
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-white hover:text-blue-500">
              SKILLS
            </Link>
          </li>
          <li>
            <Link href="#education" className="text-white hover:text-blue-500">
              EDUCATION
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-white hover:text-blue-500">
              PROJECTS
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        <ul
          className={`absolute top-20 left-0 w-full bg-black/70 backdrop-blur-md md:hidden transition-all
          ${menuOpen ? "block" : "hidden"}`}
        >
          <li className="px-6 py-3">
            <Link onClick={closeMenu} href="#about" className="text-white hover:text-blue-500">
              ABOUT
            </Link>
          </li>

          <li className="px-6 py-3">
            <Link onClick={closeMenu} href="#experience" className="text-white hover:text-blue-500">
              EXPERIENCE
            </Link>
          </li>

          <li className="px-6 py-3">
            <Link onClick={closeMenu} href="#skills" className="text-white hover:text-blue-500">
              SKILLS
            </Link>
          </li>

          <li className="px-6 py-3">
            <Link onClick={closeMenu} href="#education" className="text-white hover:text-blue-500">
              EDUCATION
            </Link>
          </li>

          <li className="px-6 py-3">
            <Link onClick={closeMenu} href="#projects" className="text-white hover:text-blue-500">
              PROJECTS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}