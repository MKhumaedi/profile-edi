import React, { useState } from 'react';
import { ShieldCheck, Layout, Zap, Copy, Check } from 'lucide-react';
import { portfolioService } from '../../../services';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'stack' | 'philosophy'>('profile');
  const [copied, setCopied] = useState(false);

  const personalInfo = portfolioService.getPersonalInfo();

  const codeSnippets = {
    profile: `// profile.ts - Developer Signature
export const mKhumaedi = {
  name: "${personalInfo.name}",
  role: "${personalInfo.role}",
  location: "${personalInfo.location}",
  status: "${personalInfo.status}",
  experienceYears: 6,
  specialties: [
    "Full-Stack Web Engineering",
    "Design System Architecture",
    "Real-time Telemetry Dashboards",
    "High-Performance Cloud APIs"
  ],
  contacts: {
    email: "${personalInfo.email}",
    github: "${personalInfo.github}"
  }
};`,

    stack: `{
  "core_stack": {
    "frontend": ["React 19", "JQuery", "TypeScript", "Next.js", "Tailwind CSS"],
    "backend": ["Node.js", "Express", "Rest API", "PHP"],
    "database": ["PostgreSQL", "MySQL"],
    "infrastructure": ["Docker", "AWS", "CI/CD Actions"]
  },
  "quality_standards": {
    "type_safety": "Strict",
    "accessibility": "WCAG AA+",
    "target_lighthouse_score": 98
  }
}`,

    philosophy: `# Engineering Philosophy

1. Pixel Precision is Non-Negotiable
   Every margin, padding step, and typography ratio must be intentional.

2. Code Should Read Like Documentation
   Explicit variable names, modular files, and zero hidden magic.

3. Performance is a Feature
   Optimized bundles, lazy loads, and sub-100ms API responses keep users delighted.
`
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-section-gap relative overflow-hidden bg-transparent">
      {/* THIN SVG LINES ABSTRACT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
        >
          <defs>
            <linearGradient id="about-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#476800" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#b8ff2c" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#c2caae" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M-100 150 C 300 50, 700 250, 1200 100 S 1600 300, 2000 200"
            stroke="url(#about-line-grad)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-50 350 C 400 200, 800 450, 1300 250 S 1700 400, 2100 300"
            stroke="url(#about-line-grad)"
            strokeWidth="1"
            strokeDasharray="6 6"
            fill="none"
          />
          <circle cx="85%" cy="30%" r="220" stroke="#476800" strokeWidth="0.8" strokeOpacity="0.25" fill="none" />
          <circle cx="85%" cy="30%" r="320" stroke="#b8ff2c" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="4 8" fill="none" />
        </svg>
      </div>

      <div className="max-w-max-width mx-auto px-container-padding relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ecf0db] text-[#476800] text-xs font-bold tracking-wider uppercase mb-3 border border-[#c2caae]/60">
            A bit about me
          </div>
          <h2 className="text-headline-section text-[#191d11] font-bold tracking-tight max-w-3xl">
            Transforming complex ideas into seamless digital realities.
          </h2>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT PHILOSOPHY & STORY */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="bg-[#ecf0db]/60 p-8 rounded-3xl border border-[#c2caae]/50 text-[#191d11]">
              <h3 className="text-xl font-bold mb-4 text-[#191d11]">
                Hello! I'm Khumaedi — a senior middle developer based in Jakarta.
              </h3>
              <p className="text-body-md text-[#424934] mb-4">
                Over the past 5+ years, I have crafted high-impact web software ranging from real-time enterprise telemetry dashboards to full-stack e-commerce marketplaces and design systems.
              </p>
              <p className="text-body-md text-[#424934]">
                My dual background in engineering and UI design allows me to bridge the gap between Figma artboards and robust production codebases. I thrive on solving complex state management problems, optimizing database queries, and refining micro-interactions.
              </p>
            </div>

            {/* THREE CORE PILLARS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[#ecf0db] border border-[#c2caae]/50 hover:border-[#476800] transition-colors">
                <ShieldCheck className="w-6 h-6 text-[#476800] mb-3" />
                <h4 className="font-bold text-sm text-[#191d11] mb-1">Clean Architecture</h4>
                <p className="text-xs text-[#424934]">Strictly typed, modular, and built for scale.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#ecf0db] border border-[#c2caae]/50 hover:border-[#476800] transition-colors">
                <Layout className="w-6 h-6 text-[#476800] mb-3" />
                <h4 className="font-bold text-sm text-[#191d11] mb-1">Pixel-Perfect UI</h4>
                <p className="text-xs text-[#424934]">Meticulous spacing, typography, and motion.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#ecf0db] border border-[#c2caae]/50 hover:border-[#476800] transition-colors">
                <Zap className="w-6 h-6 text-[#476800] mb-3" />
                <h4 className="font-bold text-sm text-[#191d11] mb-1">Performance First</h4>
                <p className="text-xs text-[#424934]">Sub-second loads and 99+ Lighthouse scores.</p>
              </div>
            </div>
          </div>

          {/* RIGHT INTERACTIVE TERMINAL CODE INSPECTOR */}
          <div className="lg:col-span-6">
            <div className="bg-[#191d11] text-[#f7fce6] rounded-3xl overflow-hidden border border-[#c2caae]/30 shadow-2xl">
              {/* Terminal Top Bar */}
              <div className="px-5 py-3.5 bg-[#2d3224] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs font-mono text-gray-400 ml-2 hidden sm:inline">mkhumaedi-devtools</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-[#191d11] p-1 rounded-lg text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'profile' ? 'bg-[#b8ff2c] text-[#191d11] font-bold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    profile.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'stack' ? 'bg-[#b8ff2c] text-[#191d11] font-bold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    stack.json
                  </button>
                  <button
                    onClick={() => setActiveTab('philosophy')}
                    className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'philosophy' ? 'bg-[#b8ff2c] text-[#191d11] font-bold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    philosophy.md
                  </button>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="p-1.5 text-gray-400 hover:text-[#b8ff2c] transition-colors cursor-pointer"
                  title="Copy code"
                >
                  {copied ? <Check className="w-4 h-4 text-[#b8ff2c]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Code Snippet Display */}
              <div className="p-6 font-mono text-xs leading-relaxed overflow-x-auto min-h-[320px] max-h-[420px]">
                <pre className="text-[#b8ff2c]/90">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Status Bar */}
              <div className="px-5 py-2 bg-[#2d3224] border-t border-white/10 text-[11px] font-mono text-gray-400 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  TypeScript 5.8 • Strict Mode
                </span>
                <span>UTF-8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
