import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Wait a bit at 100%
          return 100;
        }
        // Randomize speed to feel "real"
        return prev + Math.floor(Math.random() * 10) + 1; 
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-10000 flex flex-col items-center justify-center bg-zinc-950 text-white">
      <div className="mb-4 text-6xl font-bold tracking-tighter">
        {Math.min(progress, 100)}%
      </div>
      <div className="h-1 w-64 overflow-hidden rounded-full bg-zinc-800">
        <div 
          className="h-full bg-orange-500 transition-all duration-200 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="mt-4 animate-pulse font-mono text-xs uppercase tracking-widest text-zinc-500">
        Initializing Experience
      </p>
    </div>
  );
}