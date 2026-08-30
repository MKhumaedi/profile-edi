import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'dark' | 'outline' | 'accent';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
  icon,
}) => {
  const variantStyles = {
    primary: 'bg-[#ecf0db] text-[#476800] border border-[#c2caae]/60',
    dark: 'bg-[#191d11] text-[#b8ff2c]',
    outline: 'border border-[#c2caae] text-[#191d11]',
    accent: 'bg-[#b8ff2c] text-[#191d11] font-bold',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
