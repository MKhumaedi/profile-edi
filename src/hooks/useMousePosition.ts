import { useState, useEffect, RefObject } from 'react';

export function useMousePosition(containerRef?: RefObject<HTMLElement | null>) {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const normalizedX = (x / rect.width - 0.5) * 2;
        const normalizedY = (y / rect.height - 0.5) * 2;
        setMousePos({ x, y, normalizedX, normalizedY });
      } else {
        const x = e.clientX;
        const y = e.clientY;
        const normalizedX = (x / window.innerWidth - 0.5) * 2;
        const normalizedY = (y / window.innerHeight - 0.5) * 2;
        setMousePos({ x, y, normalizedX, normalizedY });
      }
    };

    const element = containerRef?.current || window;
    element.addEventListener('mousemove', handleMouseMove as EventListener);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove as EventListener);
    };
  }, [containerRef]);

  return mousePos;
}
