import React from 'react';
import {
  Award,
  Globe,
  Users,
  BarChart3,
  Cpu,
  GraduationCap,
  CheckCircle2
} from 'lucide-react';
import { portfolioService } from '../../../services';

export const Highlights: React.FC = () => {
  const highlights = portfolioService.getHighlights();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'award':
        return <Award className="w-6 h-6" />;
      case 'globe':
        return <Globe className="w-6 h-6" />;
      case 'users':
        return <Users className="w-6 h-6" />;
      case 'bar-chart':
        return <BarChart3 className="w-6 h-6" />;
      case 'cpu':
        return <Cpu className="w-6 h-6" />;
      case 'graduation-cap':
        return <GraduationCap className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  return (
    <section id="highlights" className="py-section-gap relative bg-transparent">
      <div className="max-w-max-width mx-auto px-container-padding">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ecf0db] text-[#476800] text-xs font-bold tracking-wider uppercase mb-3 border border-[#c2caae]/60">
            Professional Highlights
          </div>
          <h2 className="text-headline-section text-[#191d11] font-bold tracking-tight">
            Professional Highlights
          </h2>
          <p className="text-body-md text-[#424934] mt-2 max-w-2xl leading-relaxed">
            Key achievements and professional milestones throughout my career.
          </p>
        </div>

        {/* RESPONSIVE CARD GRID: 2 COLUMNS (DESKTOP & TABLET), 1 COLUMN (MOBILE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 md:p-8 rounded-[18px] border border-[#c2caae]/50 shadow-xs hover:border-[#476800] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* ICON & BADGE */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#f1f6e1] text-[#476800] border border-[#c2caae]/40 flex items-center justify-center shrink-0 group-hover:bg-[#191d11] group-hover:text-[#b8ff2c] group-hover:border-[#191d11] transition-all duration-300">
                    {getIcon(item.icon)}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#476800] bg-[#f1f6e1] px-2.5 py-1 rounded-full border border-[#c2caae]/30">
                    <CheckCircle2 className="w-3 h-3 text-[#476800]" />
                    Verified Milestone
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-[#191d11] tracking-tight mb-2.5 group-hover:text-[#476800] transition-colors">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-body-md text-[#424934] text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* TAGS */}
              {item.tags && item.tags.length > 0 && (
                <div className="pt-4 border-t border-[#c2caae]/30 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#f1f6e1] text-[#424934] text-xs font-medium border border-[#c2caae]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
