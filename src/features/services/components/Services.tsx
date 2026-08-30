import React from 'react';
import { Code, Palette, Server, Gauge, Check, ArrowUpRight } from 'lucide-react';
import { portfolioService } from '../../../services';

export const Services: React.FC = () => {
  const services = portfolioService.getServices();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'code': return <Code className="w-8 h-8 text-[#476800]" />;
      case 'palette': return <Palette className="w-8 h-8 text-[#476800]" />;
      case 'dns': return <Server className="w-8 h-8 text-[#476800]" />;
      case 'speed': return <Gauge className="w-8 h-8 text-[#476800]" />;
      default: return <Code className="w-8 h-8 text-[#476800]" />;
    }
  };

  return (
    <section id="services" className="py-section-gap relative">
      <div className="max-w-max-width mx-auto px-container-padding">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ecf0db] text-[#476800] text-xs font-bold tracking-wider uppercase mb-3 border border-[#c2caae]/60">
            What I Offer
          </div>
          <h2 className="text-headline-section text-[#191d11] font-bold tracking-tight">
            Services & Expertise
          </h2>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#ecf0db]/60 hover:bg-[#ecf0db] p-8 rounded-3xl border border-[#c2caae]/50 shadow-xs hover:border-[#476800] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 border border-[#c2caae]/40 group-hover:bg-[#191d11] transition-colors shadow-xs">
                  <div className="group-hover:text-[#b8ff2c] transition-colors">
                    {getServiceIcon(service.icon)}
                  </div>
                </div>

                <span className="text-xs font-bold text-[#476800] uppercase tracking-wider block mb-1">
                  {service.subtitle}
                </span>

                <h3 className="text-2xl font-bold text-[#191d11] mb-3 group-hover:text-[#476800] transition-colors">
                  {service.title}
                </h3>

                <p className="text-body-md text-[#424934] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* FEATURE BULLETS */}
                <div className="space-y-2 mb-8">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-[#191d11]">
                      <div className="w-4 h-4 rounded-full bg-[#191d11] text-[#b8ff2c] flex items-center justify-center text-[10px]">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#191d11] group-hover:text-[#476800] tracking-wider uppercase transition-colors"
              >
                <span>Discuss Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
