import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { portfolioService } from '../../../services';
import { Project } from '../../../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'ALL' | 'WEB' | 'DASHBOARD' | 'LANDING' | 'FULL STACK'>('ALL');

  const categories = ['ALL', 'WEB', 'DASHBOARD', 'LANDING', 'FULL STACK'] as const;

  const allProjects = portfolioService.getProjects();
  const filteredProjects = portfolioService.getProjects(filter);

  return (
    <section id="projects" className="py-section-gap relative overflow-hidden">
      {/* SUBTLE ABSTRACT SVG BACKGROUND */}
      <div className="projects-svg-background">
        <div className="projects-bg-ambient" />
        <svg
          className="projects-svg-grid"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
        >
          <defs>
            <pattern
              id="projects-grid-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#c2caae"
                strokeWidth="0.8"
                strokeOpacity="0.35"
              />
              <circle cx="60" cy="0" r="1.5" fill="#476800" fillOpacity="0.3" />
            </pattern>
            <linearGradient id="projects-fade" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#476800" stopOpacity="0.12" />
              <stop offset="50%" stopColor="#b8ff2c" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#476800" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#projects-grid-pattern)" />
          <path
            d="M-100 100 C 300 200, 700 -50, 1200 300 S 1600 600, 2000 400"
            stroke="url(#projects-fade)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-50 400 C 400 100, 800 500, 1300 200 S 1700 350, 2100 250"
            stroke="url(#projects-fade)"
            strokeWidth="1.5"
            strokeDasharray="8 8"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-max-width mx-auto px-container-padding relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ecf0db] text-[#476800] text-xs font-bold tracking-wider uppercase mb-3 border border-[#c2caae]/60">
              Selected Work
            </div>
            <h2 className="text-headline-section text-[#191d11] font-bold tracking-tight">
              Featured Case Studies
            </h2>
          </div>

          {/* FILTER CATEGORY BUTTONS */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const count = cat === 'ALL' ? allProjects.length : allProjects.filter(p => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer ${
                    filter === cat
                      ? 'bg-[#191d11] text-[#b8ff2c] shadow-sm'
                      : 'bg-[#ecf0db] text-[#424934] hover:bg-[#e6ead6] hover:text-[#191d11] border border-[#c2caae]/40'
                  }`}
                >
                  {cat} <span className="opacity-70 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-white rounded-3xl overflow-hidden border border-[#c2caae]/50 shadow-xs hover:shadow-xl hover:border-[#476800] transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-16/10 overflow-hidden bg-[#2d3224]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191d11]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b8ff2c] text-[#191d11] font-bold text-xs shadow-md">
                    Inspect Case Study
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* OVERLAID BADGES */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#191d11]/80 backdrop-blur-md text-[#b8ff2c] text-[11px] font-bold border border-white/10 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#191d11] text-[11px] font-bold border border-[#c2caae]/40">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* METRIC TAG */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#f1f6e1] text-[#476800] text-[11px] font-bold mb-3 border border-[#c2caae]/30">
                    <TrendingUp className="w-3 h-3 text-[#476800]" />
                    <span>{project.metrics}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#191d11] mb-2 group-hover:text-[#476800] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#424934] group-hover:text-[#476800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <p className="text-body-md text-[#424934] text-xs line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* TAGS FOOTER */}
                <div className="pt-4 border-t border-[#c2caae]/30 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#ecf0db]/70 text-[#191d11] text-[10px] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
