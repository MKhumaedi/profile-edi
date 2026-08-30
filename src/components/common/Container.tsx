import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', id }) => {
  return (
    <div id={id} className={`max-w-max-width mx-auto px-container-padding ${className}`}>
      {children}
    </div>
  );
};
