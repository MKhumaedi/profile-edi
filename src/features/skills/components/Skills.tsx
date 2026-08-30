import React, { useState, useRef } from 'react';
import { Cpu, Search, CheckCircle2, Code, Database, Wrench, Terminal } from 'lucide-react';
import { portfolioService } from '../../../services';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'FRONTEND' | 'BACKEND' | 'DATABASE' | 'TOOLS'>('FRONTEND');
  const [searchTerm, setSearchTerm] = useState('');
  const [gridMouse, setGridMouse] = useState({ x: 0, y: 0, active: false });
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = portfolioService.getSkillCategories();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!skillsRef.current) return;
    const rect = skillsRef.current.getBoundingClientRect();
    setGridMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    });
  };

  const currentCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  const filteredSkills = currentCategory.skills.filter((skill) =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'FRONTEND': return <Code className="w-4 h-4" />;
      case 'BACKEND': return <Cpu className="w-4 h-4" />;
      case 'DATABASE': return <Database className="w-4 h-4" />;
      case 'TOOLS': return <Wrench className="w-4 h-4" />;
      default: return <Terminal className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="skills"
      ref={skillsRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setGridMouse((prev) => ({ ...prev, active: false }))}
      className="py-section-gap bg-[#ecf0db]/50 relative overflow-hidden"
    >
      {/* INTERACTIVE GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skills-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c2caae" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#skills-grid)" />
        </svg>

        {/* Dynamic Grid Glow Highlight following Cursor */}
        {gridMouse.active && (
          <div
            className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-[#b8ff2c]/25 to-[#476800]/15 blur-2xl transition-opacity duration-300"
            style={{
              left: `${gridMouse.x - 144}px`,
              top: `${gridMouse.y - 144}px`,
            }}
          />
        )}
      </div>

      <div className="max-w-max-width mx-auto px-container-padding relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ecf0db] text-[#476800] text-xs font-bold tracking-wider uppercase mb-3 border border-[#c2caae]/60">
              Technical Stack
            </div>
            <h2 className="text-headline-section text-[#191d11] font-bold tracking-tight">
              Skills & Expertise
            </h2>
          </div>

          {/* Skill Filter Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#424934]" />
            <input
              type="text"
              placeholder="Search skills (e.g. React)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white text-[#191d11] text-xs font-medium border border-[#c2caae]/60 focus:outline-none focus:ring-2 focus:ring-[#476800] transition-all"
            />
          </div>
        </div>

        {/* TABS NAVIGATION */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[#c2caae]/40 pb-4">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setSearchTerm('');
              }}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#191d11] text-[#b8ff2c] shadow-sm scale-102'
                  : 'bg-[#ecf0db] text-[#424934] hover:bg-[#e6ead6] hover:text-[#191d11] border border-[#c2caae]/40'
              }`}
            >
              {getTabIcon(cat.id)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* SKILLS DISPLAY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#c2caae]/50 shadow-xs hover:border-[#476800] transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#476800]" />
                  <span className="font-bold text-sm text-[#191d11] group-hover:text-[#476800] transition-colors">
                    {skill.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#ecf0db] text-[#476800] border border-[#c2caae]/40">
                    {skill.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#191d11]">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2.5 bg-[#f1f6e1] rounded-full overflow-hidden border border-[#c2caae]/30">
                <div
                  className="h-full bg-[#191d11] group-hover:bg-[#476800] rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}

          {filteredSkills.length === 0 && (
            <div className="col-span-full text-center py-12 text-[#424934] text-sm bg-white rounded-2xl border border-[#c2caae]/40">
              No skills found matching "{searchTerm}". Try another query or switch tabs.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
