import React from 'react';

interface SectionTitleProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col mb-12 ${alignClass} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 mb-3 text-[#476800] font-bold text-xs tracking-widest uppercase bg-[#ecf0db] px-3 py-1 rounded-full border border-[#c2caae]/50">
          {badgeIcon}
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#191d11] tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#424934] text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
