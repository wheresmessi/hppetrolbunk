import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Delay before hiding to show completion
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: '#012F73' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600"></div>
      </div>

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* HP Logo Container */}
        <div className="relative mb-8">
          {/* Animated Ring */}
          <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-white/20 animate-ping"></div>
          <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-white/30 animate-pulse"></div>
          
          {/* Rotating Ring */}
          <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-transparent border-t-white animate-spin"></div>
          
          {/* HP Logo */}
          <div className="relative w-32 h-32 flex items-center justify-center bg-white rounded-full shadow-2xl">
            <img 
              src="/hp.png" 
              alt="HP Logo" 
              className="w-20 h-20 object-contain animate-pulse"
            />
          </div>
        </div>

        {/* Company Name */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 animate-fade-in">
            Anna Nagar Auto Service
          </h1>
          <p className="text-blue-200 text-sm sm:text-base animate-fade-in-delay">
            Authorized HP Dealer
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 bg-white/20 rounded-full h-2 mb-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-white to-red-400 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <div className="text-white text-sm animate-pulse">
          Loading... {progress}%
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float-1"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-float-2"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-float-3"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white/25 rounded-full animate-float-1"></div>
      </div>
    </div>
  );
}
