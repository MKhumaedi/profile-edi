import React from 'react';

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div className={`hero-aurora-background ${className}`}>
      <div className="hero-aurora-mesh" />
      <div className="hero-noise-overlay" />
      {children}
    </div>
  );
};
