import React from 'react';

interface CursorLightProps {
  x: number;
  y: number;
}

export const CursorLight: React.FC<CursorLightProps> = ({ x, y }) => {
  return (
    <div
      className="hero-cursor-light"
      style={{
        transform: `translate3d(${x - 250}px, ${y - 250}px, 0)`,
      }}
    />
  );
};
