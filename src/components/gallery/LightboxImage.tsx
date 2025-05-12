
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Heart, Share, Download, Image } from 'lucide-react';

interface LightboxImageProps {
  image: any;
  onNext: () => void;
  onPrevious: () => void;
  onClose: () => void;
  onFavorite: () => void;
  onShare: () => void;
  nightMode: boolean;
}

export const LightboxImage: React.FC<LightboxImageProps> = ({
  image,
  onNext,
  onPrevious,
  onClose,
  onFavorite,
  onShare,
  nightMode
}) => {
  const [showInfo, setShowInfo] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Exit if no image is provided
  if (!image) return null;

  return (
    <div className={`relative w-full h-full flex flex-col ${nightMode ? 'bg-gray-900' : 'bg-black/95'} rounded-lg overflow-hidden`}>
      {/* Header with controls */}
      <div className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
        <h3 className="text-white text-lg font-medium">{image.title}</h3>
        <button 
          onClick={onClose}
          className="text-white hover:text-gray-300 transition-colors"
          aria-label="Close lightbox"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      {/* Main image/video display area */}
      <div className="relative flex-grow flex items-center justify-center p-4 sm:p-8 overflow-hidden">
        {image.type === 'video' || image.type === 'time-lapse' || image.type === 'slow-motion' ? (
          // Video player 
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              src={image.src} 
              poster={image.poster || image.src} 
              controls={isVideoPlaying}
              className="max-w-full max-h-full object-contain"
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
            >
              Your browser does not support the video tag.
            </video>
            {!isVideoPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={() => setIsVideoPlaying(true)}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-5 transform transition-transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ) : image.type === '360' ? (
          // 360 view placeholder - in a real app, integrate a 360 viewer library here
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <img 
              src={image.src} 
              alt={image.title}
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <span className="text-white text-lg font-bold">360°</span>
              </div>
            </div>
            <p className="text-white/70 mt-4">Drag to explore 360° view</p>
          </div>
        ) : (
          // Regular image with Ken Burns effect
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <img 
              src={image.src} 
              alt={image.title}
              className="max-w-full max-h-full object-contain ken-burns-effect"
            />
          </div>
        )}
        
        {/* Navigation arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 p-2 rounded-full text-white transition-colors"
          onClick={onPrevious}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 p-2 rounded-full text-white transition-colors"
          onClick={onNext}
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      
      {/* Bottom information panel */}
      <div className={`relative bg-gradient-to-t ${nightMode ? 'from-gray-900/90 to-gray-900/60' : 'from-black/90 to-black/60'} transition-transform duration-300 ${showInfo ? 'translate-y-0' : 'translate-y-full'}`}>
        <button 
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-t-lg px-4 py-1 text-white text-xs"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? 'Hide Info' : 'Show Info'}
        </button>
        
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <h3 className="text-xl text-white font-medium">{image.title}</h3>
              <p className="text-white/80 mt-2">{image.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {image.category}
                </span>
                <span className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {image.year}
                </span>
                <span className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {image.para}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="text-white/80 text-sm">
                <div className="mb-1">By: {image.photographer}</div>
                {image.duration && <div className="mb-1">Duration: {image.duration}</div>}
              </div>
              
              <div className="flex gap-3 mt-4">
                <button 
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 text-white transition-colors"
                  onClick={onFavorite}
                  aria-label="Add to favorites"
                >
                  <Heart className="h-5 w-5" />
                </button>
                <button 
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 text-white transition-colors"
                  onClick={onShare}
                  aria-label="Share"
                >
                  <Share className="h-5 w-5" />
                </button>
                <button 
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 text-white transition-colors"
                  aria-label="Download"
                >
                  <Download className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .ken-burns-effect {
          animation: kenBurns 30s ease-in-out infinite alternate;
          transform-origin: center center;
        }
        
        @keyframes kenBurns {
          0% {
            transform: scale(1) translate(0px, 0px);
          }
          50% {
            transform: scale(1.05) translate(-5px, -5px);
          }
          100% {
            transform: scale(1) translate(0px, 0px);
          }
        }
      `}</style>
    </div>
  );
};
