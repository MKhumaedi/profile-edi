// @flow strict
import Link from "next/link";
import { Pacifico } from "next/font/google";

// Import font Pacifico untuk logo
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5 px-4 md:px-8">
        {/* Logo "Edi Code" */}
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className={`${pacifico.className} text-2xl md:text-4xl text-[#16f2b3] leading-none relative transition-all duration-300 hover:scale-105`}
          >
            <span className="relative z-10 [text-shadow:4px_4px_0_rgba(0,0,0,0.35)]">
              Edi Code
            </span>
          </Link>
        </div>

        {/* Menu Navigasi */}
        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 
                       md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
            id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;