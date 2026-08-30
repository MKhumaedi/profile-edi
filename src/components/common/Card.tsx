import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverEffect = true,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-[#ecf0db]/80 rounded-2xl p-6 border border-[#c2caae]/60 backdrop-blur-xs ${
        hoverEffect ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#476800]/40' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
