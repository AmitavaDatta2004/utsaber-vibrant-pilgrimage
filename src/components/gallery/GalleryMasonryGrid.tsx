
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  type: string;
  para?: string;
  year?: string;
  likes?: number;
  featured?: boolean;
}

interface GalleryMasonryGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
  nightMode: boolean;
}

export const GalleryMasonryGrid: React.FC<GalleryMasonryGridProps> = ({ 
  images, 
  onImageClick,
  nightMode
}) => {
  const masonry = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // This effect allows us to recalculate masonry layout if needed
    const handleResize = () => {
      // Could add Masonry JS library integration here if needed
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div 
      ref={masonry}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {images.map((image, index) => {
        // Determine if the image should span multiple columns or be larger
        const isSpecial = index % 5 === 0;
        const isWide = index % 8 === 3;
        
        return (
          <motion.div 
            key={image.id}
            className={`relative cursor-pointer overflow-hidden rounded-lg shadow-md group
              ${isSpecial ? 'sm:col-span-2 sm:row-span-2' : ''}
              ${isWide ? 'md:col-span-2' : ''}
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.05 % 0.8 // Stagger but cap the delay
            }}
            whileHover={{ y: -5 }}
          >
            <div 
              className="relative overflow-hidden h-full"
              onClick={() => onImageClick(image)}
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.title}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 
                  ${isSpecial ? 'sm:h-[400px]' : 'h-[250px]'}
                `}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Type Badges */}
              {image.type === 'video' && (
                <div className="absolute top-3 right-3 bg-festival-red/80 text-white px-2 py-1 rounded-md text-xs font-medium">
                  Video
                </div>
              )}
              {image.type === 'time-lapse' && (
                <div className="absolute top-3 right-3 bg-festival-green/80 text-white px-2 py-1 rounded-md text-xs font-medium">
                  Time-lapse
                </div>
              )}
              {image.type === '360' && (
                <div className="absolute top-3 right-3 bg-festival-blue/80 text-white px-2 py-1 rounded-md text-xs font-medium">
                  360° View
                </div>
              )}
              {image.type === 'slow-motion' && (
                <div className="absolute top-3 right-3 bg-purple-600/80 text-white px-2 py-1 rounded-md text-xs font-medium">
                  Slow Motion
                </div>
              )}
              
              {/* Play Button for Videos */}
              {(image.type === 'video' || image.type === 'time-lapse' || image.type === 'slow-motion') && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/60 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
              )}
              
              {/* Content Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-lg font-medium line-clamp-1">{image.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-white/80 text-xs">
                    {image.para} • {image.year}
                  </span>
                  
                  {image.likes !== undefined && (
                    <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span>{image.likes}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
