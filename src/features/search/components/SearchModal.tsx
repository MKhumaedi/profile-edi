import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Briefcase, Cpu, User, Mail, Layers, GraduationCap, Award } from 'lucide-react';
import { portfolioService } from '../../../services';
import { Project } from '../../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectProject }) => {
  const [query, setQuery] = useState('');

  const projects = portfolioService.getProjects();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  const sections = [
    { title: 'Home', href: '#home', icon: User },
    { title: 'About Me', href: '#about', icon: User },
    { title: 'Technical Skills', href: '#skills', icon: Cpu },
    { title: 'Selected Projects', href: '#projects', icon: Briefcase },
    { title: 'Experience', href: '#experience', icon: Briefcase },
    { title: 'Education', href: '#education', icon: GraduationCap },
    { title: 'Services', href: '#services', icon: Layers },
    { title: 'Professional Highlights', href: '#highlights', icon: Award },
    { title: 'Contact', href: '#contact', icon: Mail },
  ].filter((s) => s.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-[#191d11]/80 backdrop-blur-md">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-[#c2caae]/60 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* SEARCH INPUT HEADER */}
        <div className="p-4 border-b border-[#c2caae]/40 flex items-center gap-3 bg-[#f1f6e1]/50">
          <Search className="w-5 h-5 text-[#476800]" />
          <input
            type="text"
            autoFocus
            placeholder="Type to search projects, skills, or sections (Cmd+K)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-[#191d11] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#ecf0db] text-[#191d11] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* RESULTS SCROLLABLE CONTAINER */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-6">
          {/* SECTIONS MATCHES */}
          {sections.length > 0 && (
            <div>
              <div className="text-[10px] font-bold text-[#424934] uppercase tracking-wider mb-2 px-2">
                Navigation Sections
              </div>
              <div className="space-y-1">
                {sections.map((sec, idx) => {
                  const Icon = sec.icon;
                  return (
                    <a
                      key={idx}
                      href={sec.href}
                      onClick={onClose}
                      className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#f1f6e1] text-[#191d11] transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-[#476800]" />
                        <span className="font-bold text-xs">{sec.title}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#424934] group-hover:translate-x-1 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* PROJECTS MATCHES */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[10px] font-bold text-[#424934] uppercase tracking-wider mb-2 px-2">
                Projects ({filteredProjects.length})
              </div>
              <div className="space-y-2">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => {
                      onSelectProject(project);
                      onClose();
                    }}
                    className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#f1f6e1] border border-[#c2caae]/30 transition-all cursor-pointer group"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#191d11] text-[#b8ff2c]">
                          {project.category}
                        </span>
                        <h4 className="font-bold text-xs text-[#191d11] truncate group-hover:text-[#476800]">
                          {project.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-[#424934] truncate mt-0.5">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {sections.length === 0 && filteredProjects.length === 0 && (
            <div className="text-center py-8 text-xs text-[#424934]">
              No results found for "{query}". Try searching for "React", "Dashboard", "About", or "Contact".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
