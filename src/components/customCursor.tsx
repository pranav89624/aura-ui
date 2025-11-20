import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      // Check if hovering over clickable elements
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-9999 mix-blend-difference hidden md:block"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {/* The Dot */}
      <div 
        className={`
          absolute -translate-x-1/2 -translate-y-1/2 bg-white rounded-full transition-all duration-150 ease-out
          ${isPointer ? 'h-8 w-8 opacity-50' : 'h-4 w-4 opacity-100'}
        `} 
      />
      
      {/* The Trail Ring */}
      <div 
        className={`
          absolute -translate-x-1/2 -translate-y-1/2 border border-white rounded-full transition-all duration-300 ease-out
          ${isPointer ? 'h-16 w-16 opacity-0' : 'h-8 w-8 opacity-50'}
        `}
        style={{
          transitionDelay: '0.05s' // Slight lag for fluid feel
        }}
      />
    </div>
  );
}