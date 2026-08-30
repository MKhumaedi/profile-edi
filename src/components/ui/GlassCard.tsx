import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', dark = false }) => {
  return (
    <div
      className={`p-4 rounded-2xl backdrop-blur-xl border shadow-lg ${
        dark
          ? 'bg-[#191d11]/90 border-white/10 text-white'
          : 'bg-white/80 border-white/80 text-[#191d11]'
      } ${className}`}
    >
      {children}
    </div>
  );
};
