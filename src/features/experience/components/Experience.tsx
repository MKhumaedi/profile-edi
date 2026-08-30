import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { portfolioService } from '../../../services';

export const Experience: React.FC = () => {
  const experiences = portfolioService.getExperiences();

  return (
    <section id="experience" className="py-section-gap bg-[#ecf0db]/40 relative overflow-hidden">
      {/* TIMELINE GLOW BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-[#b8ff2c]/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#476800]/15 blur-3xl" />
      </div>

      <div className="max-w-max-width mx-auto px-container-padding relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ecf0db] text-[#476800] text-xs font-bold tracking-wider uppercase mb-3 border border-[#c2caae]/60">
            Work History
          </div>
          <h2 className="text-headline-section text-[#191d11] font-bold tracking-tight">
            Professional Experience
          </h2>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative border-l-2 border-[#c2caae]/60 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* TIMELINE NODE DOT */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#191d11] border-4 border-[#f7fce6] group-hover:bg-[#b8ff2c] group-hover:scale-125 transition-all shadow-sm" />

              <div className="bg-white p-8 rounded-3xl border border-[#c2caae]/50 shadow-xs hover:border-[#476800] transition-all">
                {/* ROLE & COMPANY TOP HEADER */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#191d11] text-[#b8ff2c] text-xs font-bold mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold text-[#191d11] tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#476800] mt-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-[#424934]">•</span>
                      <span className="flex items-center gap-1 text-[#424934] text-xs font-normal">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* BULLETED IMPACT LIST */}
                <ul className="space-y-2.5 mb-6 text-body-md text-[#424934] text-sm">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#476800] mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* SKILLS CHIPS */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#c2caae]/30">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#ecf0db] text-[#191d11] text-xs font-semibold border border-[#c2caae]/40"
                    >
                      {skill}
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
