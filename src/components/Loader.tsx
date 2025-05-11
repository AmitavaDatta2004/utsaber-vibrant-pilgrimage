
import { useEffect, useState } from 'react';

interface LoaderProps {
  onLoadComplete?: () => void;
}

const Loader = ({ onLoadComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + Math.random() * 15, 100));
      } else {
        setIsComplete(true);
        if (onLoadComplete) {
          setTimeout(() => {
            onLoadComplete();
          }, 500);
        }
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [progress, onLoadComplete]);

  return (
    <div className={`fixed inset-0 bg-indigo z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative w-24 h-24 mb-8">
        {/* Animated Diya/Lotus */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-saffron rounded-full animate-pulse-gold"></div>
          <div className="absolute w-10 h-10 bg-auspicious rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute w-4 h-12 bg-saffron-light rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full animate-float"></div>
        </div>
      </div>

      {/* Utsab Unites text */}
      <h2 className="font-heading text-3xl text-cream mb-6 golden-glow">Utsab Unites</h2>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-cream/20 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-saffron via-auspicious to-saffron-light transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="mt-2 text-cream/80 text-sm">{Math.round(progress)}%</div>
    </div>
  );
};

export default Loader;
