
import React, { useEffect, useState } from 'react';
import { GalleryImage } from '../../data/galleryConstants';
import { useGallery } from './GalleryContext';
import { X, Share, Download, Heart, ChevronLeft, ChevronRight, Info } from 'lucide-react';

interface GalleryLightboxProps {
  onClose: () => void;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ onClose }) => {
  const { selectedImage, setSelectedImage, filteredImages, nightMode } = useGallery();
  const [showInfo, setShowInfo] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [animationDirection, setAnimationDirection] = useState<'next' | 'prev' | null>(null);
  const [liked, setLiked] = useState(false);
  
  useEffect(() => {
    // Add key event listeners
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        navigateNext();
      } else if (e.key === 'ArrowLeft') {
        navigatePrevious();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Add scroll lock
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);
  
  useEffect(() => {
    if (selectedImage) {
      setIsLoading(true);
      // Reset loading state when new image is selected
      const img = new Image();
      img.onload = () => {
        setIsLoading(false);
      };
      img.src = selectedImage.src;
    }
  }, [selectedImage]);
  
  if (!selectedImage) return null;
  
  const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
  
  const navigateNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setAnimationDirection('next');
      setTimeout(() => {
        setSelectedImage(filteredImages[currentIndex + 1]);
      }, 200);
    }
  };
  
  const navigatePrevious = () => {
    if (currentIndex > 0) {
      setAnimationDirection('prev');
      setTimeout(() => {
        setSelectedImage(filteredImages[currentIndex - 1]);
      }, 200);
    }
  };
  
  const toggleInfo = () => {
    setShowInfo(prev => !prev);
  };
  
  const toggleLike = () => {
    setLiked(prev => !prev);
  };
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = selectedImage.src;
    link.download = `utsab-unites-${selectedImage.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: selectedImage.title,
        text: selectedImage.description || 'Check out this image from Utsab Unites!',
        url: window.location.href,
      }).catch(error => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support navigator.share
      alert('Copy this link to share: ' + window.location.href);
    }
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>
      
      {/* Navigation buttons */}
      {currentIndex > 0 && (
        <button 
          onClick={navigatePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}
      
      {currentIndex < filteredImages.length - 1 && (
        <button 
          onClick={navigateNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}
      
      {/* Image container with Ken Burns effect */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div 
          className={`relative h-full max-h-[85vh] max-w-[90vw] transition-transform duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${
            animationDirection === 'next' ? 'translate-x-full' :
            animationDirection === 'prev' ? '-translate-x-full' : ''
          }`}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className={`h-full max-h-[85vh] max-w-[90vw] object-contain ${
              selectedImage.contentType === 'photo' ? 'animate-ken-burns' : ''
            }`}
            onLoad={() => setIsLoading(false)}
          />
          
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-t-festival-blue border-festival-blue/30 rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
      
      {/* Info toggle button */}
      <button 
        onClick={toggleInfo}
        className="absolute bottom-4 right-4 z-30 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        aria-label={showInfo ? "Hide info" : "Show info"}
      >
        <Info className="w-5 h-5" />
      </button>
      
      {/* Info panel */}
      {showInfo && (
        <div className={`absolute bottom-0 left-0 right-0 p-6 ${nightMode ? 'bg-indigo-dark/90' : 'bg-black/80'} backdrop-blur-sm text-white transform transition-transform duration-300 animate-slide-up`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading mb-2">{selectedImage.title}</h2>
            
            {selectedImage.description && (
              <p className="text-white/80 mb-3">{selectedImage.description}</p>
            )}
            
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-white/70">
              {selectedImage.paraName && (
                <div>
                  <span className="font-medium">Para:</span> {selectedImage.paraName}
                </div>
              )}
              
              {selectedImage.photographer && (
                <div>
                  <span className="font-medium">Photographer:</span> {selectedImage.photographer}
                </div>
              )}
              
              <div>
                <span className="font-medium">Year:</span> {selectedImage.year}
              </div>
              
              <div>
                <span className="font-medium">Category:</span> {
                  selectedImage.category.replace('-', ' ').split(' ').map(
                    word => word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')
                }
              </div>
            </div>
            
            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {selectedImage.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-2 py-1 bg-white/10 rounded-full text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            {/* Action buttons */}
            <div className="mt-4 flex gap-3">
              <button 
                onClick={toggleLike}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors ${
                  liked 
                    ? 'bg-festival-red text-white' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Heart className={`w-4 h-4 ${liked ? 'fill-white' : ''}`} />
                {liked ? 'Liked' : 'Like'}
              </button>
              
              <button 
                onClick={handleShare}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <Share className="w-4 h-4" />
                Share
              </button>
              
              <button 
                onClick={handleDownload}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryLightbox;
