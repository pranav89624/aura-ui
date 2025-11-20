import React, { useState, useEffect } from 'react';

interface CipherTextProps {
  text: string;
  className?: string;
}

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?";

export const CipherText: React.FC<CipherTextProps> = ({ text, className }) => {
  const [display, setDisplay] = useState(text);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let interval: any;
    if (hovering) {
      let iteration = 0;
      interval = setInterval(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setDisplay(_prev => 
          text
            .split("")
            .map((_letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        
        if (iteration >= text.length) { 
          clearInterval(interval);
        }
        
        iteration += 1 / 2; // Speed of decryption
      }, 30);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(text);
    }

    return () => clearInterval(interval);
  }, [hovering, text]);

  return (
    <span 
      className={`font-mono cursor-default ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {display}
    </span>
  );
};