import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from './components/common';
import {
  Hero,
  About,
  Skills,
  Projects,
  ProjectModal,
  Experience,
  Education,
  Services,
  Highlights,
  Contact,
  SearchModal
} from './features';
import { Project } from './types';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'services', 'highlights', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7fce6] text-[#191d11] font-sans selection:bg-[#b8ff2c] selection:text-[#191d11] relative">
      {/* NAVBAR */}
      <Navbar
        activeSection={activeSection}
        onSearchClick={() => setIsSearchOpen(true)}
        onContactClick={() => {
          const contactEl = document.getElementById('contact');
          if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* MAIN SECTIONS */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Experience />
        <Education />
        <Services />
        <Highlights />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODALS */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
      />
    </div>
  );
}

export default App;
