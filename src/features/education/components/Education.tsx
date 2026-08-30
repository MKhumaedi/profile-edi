import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Building2,
  Code2,
  Award,
  CheckCircle,
  FileText
} from 'lucide-react';
import { portfolioService } from '../../../services';

export const Education: React.FC = () => {
  const educationData = portfolioService.getEducation();
  const primaryEdu = educationData[0];

  return (
    <section id="education" className="py-section-gap relative overflow-hidden bg-transparent">
      {/* ABSTRACT PATTERN BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="edu-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#476800" fillOpacity="0.4" />
              <circle cx="0" cy="0" r="1" fill="#c2caae" fillOpacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#edu-pattern)" />
          <polygon
            points="100,50 150,150 50,150"
            fill="none"
            stroke="#b8ff2c"
            strokeWidth="1"
            strokeOpacity="0.35"
            transform="rotate(15 100 100)"
          />
          <polygon
            points="900,200 960,320 840,320"
            fill="none"
            stroke="#476800"
            strokeWidth="1.2"
            strokeOpacity="0.25"
            transform="rotate(-25 900 250)"
          />
        </svg>
      </div>

      <div className="max-w-max-width mx-auto px-container-padding relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ecf0db] text-[#476800] text-xs font-bold tracking-wider uppercase mb-3 border border-[#c2caae]/60">
            Education
          </div>
          <h2 className="text-headline-section text-[#191d11] font-bold tracking-tight">
            My Educational Journey
          </h2>
          <p className="text-body-md text-[#424934] mt-2 max-w-2xl leading-relaxed">
            My academic background and continuous learning that support my career as a Full Stack Developer.
          </p>
        </div>

        {/* TWO-COLUMN LAYOUT (DESKTOP) / SINGLE COLUMN (TABLET & MOBILE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: EDUCATION TIMELINE */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative border-l-2 border-[#c2caae]/60 ml-4 md:ml-6 pl-6 md:pl-8 space-y-8">
              {educationData.map((edu) => (
                <div key={edu.id} className="relative group">
                  {/* TIMELINE NODE DOT */}
                  <div className="absolute -left-[31px] md:-left-[39px] top-2 w-5 h-5 rounded-full bg-[#191d11] border-4 border-[#f7fce6] group-hover:bg-[#b8ff2c] group-hover:scale-125 transition-all shadow-xs" />

                  {/* EDUCATION ITEM CARD */}
                  <div className="bg-white p-6 md:p-8 rounded-[18px] border border-[#c2caae]/50 shadow-xs hover:border-[#476800] hover:shadow-md transition-all duration-300">
                    {/* TOP HEADER: LOGO, DEGREE, INSTITUTION */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#191d11] text-[#b8ff2c] flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#191d11] text-[#b8ff2c] text-[11px] font-bold">
                            <Calendar className="w-3 h-3" />
                            {edu.period}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#f1f6e1] text-[#476800] text-[11px] font-bold border border-[#c2caae]/40">
                            <CheckCircle className="w-3 h-3" />
                            {edu.status}
                          </span>
                          {edu.gpa && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#ecf0db] text-[#191d11] text-[11px] font-bold border border-[#c2caae]/40">
                              <Award className="w-3 h-3 text-[#476800]" />
                              GPA {edu.gpa}
                            </span>
                          )}
                          {edu.achievement && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#b8ff2c] text-[#191d11] text-[11px] font-bold border border-[#476800]/20">
                              <Award className="w-3 h-3 text-[#476800]" />
                              {edu.achievement}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#191d11] tracking-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-sm font-semibold text-[#476800] mt-0.5 flex items-center gap-1.5 flex-wrap">
                          <span>{edu.institution}</span>
                          <span className="text-[#424934]">•</span>
                          <span className="text-[#424934] font-normal text-xs flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#476800]" />
                            {edu.location}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* MAJOR TAG */}
                    <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#ecf0db] text-[#191d11] text-xs font-bold border border-[#c2caae]/40">
                      <BookOpen className="w-3.5 h-3.5 text-[#476800]" />
                      <span>{edu.id === 'edu-bootcamp' ? 'Specialization' : 'Major'}: {edu.major}</span>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="text-body-md text-[#424934] text-sm leading-relaxed mb-6 space-y-3">
                      {edu.description.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>

                    {/* RELEVANT SUBJECTS / LEARNING TOPICS */}
                    <div className="mb-6 pt-4 border-t border-[#c2caae]/30">
                      <h4 className="text-xs font-bold text-[#191d11] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#476800]" />
                        <span>{edu.id === 'edu-bootcamp' ? 'Learning Topics' : 'Relevant Coursework & Subjects'}</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.relevantSubjects.map((subject, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-[#f1f6e1] text-[#424934] text-xs font-medium border border-[#c2caae]/30"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* TECHNOLOGY TAGS / BADGES */}
                    <div className="pt-4 border-t border-[#c2caae]/30">
                      <h4 className="text-xs font-bold text-[#191d11] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5 text-[#476800]" />
                        <span>{edu.id === 'edu-bootcamp' ? 'Technology Badges' : 'Academic Technologies'}</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.techTags.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg bg-[#191d11] text-[#b8ff2c] text-xs font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: EDUCATION SUMMARY CARD */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white p-6 md:p-8 rounded-[18px] border border-[#c2caae]/50 shadow-xs hover:border-[#476800] transition-all">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#c2caae]/40">
                <div className="w-10 h-10 rounded-xl bg-[#ecf0db] text-[#476800] flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#191d11]">Education Overview</h3>
                  <p className="text-xs text-[#424934]">Key details & Academic summary</p>
                </div>
              </div>

              {/* DETAILS LIST */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f7fce6] border border-[#c2caae]/30">
                  <Building2 className="w-4 h-4 text-[#476800] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold text-[#424934] uppercase tracking-wider block">Institution</span>
                    <span className="text-xs font-bold text-[#191d11]">{primaryEdu.institution}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f7fce6] border border-[#c2caae]/30">
                  <GraduationCap className="w-4 h-4 text-[#476800] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold text-[#424934] uppercase tracking-wider block">Degree</span>
                    <span className="text-xs font-bold text-[#191d11]">{primaryEdu.degree}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f7fce6] border border-[#c2caae]/30">
                  <BookOpen className="w-4 h-4 text-[#476800] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold text-[#424934] uppercase tracking-wider block">Major</span>
                    <span className="text-xs font-bold text-[#191d11]">{primaryEdu.major}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f7fce6] border border-[#c2caae]/30">
                  <Calendar className="w-4 h-4 text-[#476800] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold text-[#424934] uppercase tracking-wider block">Graduation Year</span>
                    <span className="text-xs font-bold text-[#191d11]">2022 ({primaryEdu.status})</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f7fce6] border border-[#c2caae]/30">
                  <MapPin className="w-4 h-4 text-[#476800] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold text-[#424934] uppercase tracking-wider block">Location</span>
                    <span className="text-xs font-bold text-[#191d11]">{primaryEdu.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f7fce6] border border-[#c2caae]/30">
                  <Code2 className="w-4 h-4 text-[#476800] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold text-[#424934] uppercase tracking-wider block">Focus</span>
                    <span className="text-xs font-bold text-[#191d11]">Software Development & Information Systems</span>
                  </div>
                </div>
              </div>

              {/* FOOTNOTE */}
              <div className="mt-6 pt-4 border-t border-[#c2caae]/40 text-center">
                <span className="text-[11px] text-[#424934] font-medium">
                  Continuous learner staying updated with modern web standards.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
