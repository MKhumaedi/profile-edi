import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all rounded-xl cursor-pointer disabled:opacity-50';
  
  const variantStyles = {
    primary: 'bg-[#b8ff2c] text-[#191d11] hover:bg-[#a3e620] shadow-md hover:shadow-lg hover:-translate-y-0.5',
    secondary: 'bg-[#191d11] text-[#f7fce6] hover:bg-[#2d3224] shadow-md hover:-translate-y-0.5',
    outline: 'border border-[#c2caae] text-[#191d11] hover:border-[#476800] hover:bg-[#ecf0db]',
    ghost: 'text-[#191d11] hover:bg-[#ecf0db]/60',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
};
