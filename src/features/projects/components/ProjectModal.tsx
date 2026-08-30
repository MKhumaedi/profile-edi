import React from 'react';
import { X, ExternalLink, Github, TrendingUp } from 'lucide-react';
import { Project } from '../../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-[#191d11]/80 backdrop-blur-md animate-fade-in">
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#c2caae]/60 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#191d11] text-[#b8ff2c] hover:bg-[#476800] transition-all cursor-pointer shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HERO IMAGE */}
        <div className="relative aspect-16/9 bg-[#2d3224] rounded-t-3xl overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#191d11]/90 via-transparent to-transparent flex items-end p-6 md:p-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#b8ff2c] text-[#191d11] text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-md">
                  {project.year}
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* MODAL BODY CONTENT */}
        <div className="p-6 md:p-8 space-y-6">
          {/* METRIC TAG */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f1f6e1] text-[#476800] text-xs font-bold border border-[#c2caae]/40">
            <TrendingUp className="w-4 h-4 text-[#476800]" />
            <span>Key Achievement: {project.metrics}</span>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#191d11] mb-2">Project Overview</h3>
            <p className="text-body-md text-[#424934] leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* CHALLENGE & SOLUTION */}
          {(project.challenge || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#c2caae]/30">
              {project.challenge && (
                <div className="p-4 rounded-2xl bg-[#ecf0db]/60 border border-[#c2caae]/40">
                  <h4 className="text-xs font-bold text-[#191d11] uppercase tracking-wider mb-1">
                    The Engineering Challenge
                  </h4>
                  <p className="text-xs text-[#424934] leading-relaxed">{project.challenge}</p>
                </div>
              )}
              {project.solution && (
                <div className="p-4 rounded-2xl bg-[#ecf0db]/60 border border-[#c2caae]/40">
                  <h4 className="text-xs font-bold text-[#476800] uppercase tracking-wider mb-1">
                    Architectural Solution
                  </h4>
                  <p className="text-xs text-[#424934] leading-relaxed">{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* TECH STACK CHIPS */}
          <div>
            <h3 className="text-xs font-bold text-[#191d11] uppercase tracking-wider mb-2">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-[#ecf0db] text-[#191d11] text-xs font-semibold border border-[#c2caae]/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#c2caae]/30">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#191d11] text-[#b8ff2c] hover:bg-[#476800] hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ecf0db] text-[#191d11] hover:bg-[#b8ff2c] font-bold text-xs uppercase tracking-wider border border-[#c2caae]/60 transition-all"
              >
                <span>Source Repository</span>
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
