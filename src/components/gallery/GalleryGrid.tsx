
import React from 'react';
import { useGallery } from './GalleryContext';
import { Play, Image } from 'lucide-react';

interface GalleryGridProps {
  className?: string;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ className }) => {
  const { filteredImages, setSelectedImage, viewMode, nightMode } = useGallery();
  
  if (filteredImages.length === 0) {
    return (
      <div className={`w-full py-16 text-center ${className} ${nightMode ? 'text-cream/70' : 'text-indigo-light'}`}>
        <p>No images found matching your filters.</p>
        <p className="mt-2 text-sm">Try adjusting your filters or search criteria.</p>
      </div>
    );
  }
  
  // For masonry view
  if (viewMode === 'masonry') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${className}`}>
        {filteredImages.map(image => (
          <div 
            key={image.id} 
            className={`
              group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl 
              transition-all duration-300 cursor-pointer
              ${image.id % 3 === 0 ? 'row-span-2' : ''}
            `}
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image.src} 
              alt={image.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Content type indicator */}
            {image.contentType !== 'photo' && (
              <div className="absolute top-3 left-3 z-10">
                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  {image.contentType === 'video' || image.contentType === 'slowmotion' ? (
                    <Play className="w-4 h-4 text-white" />
                  ) : image.contentType === '360' ? (
                    <span className="text-xs font-bold text-white">360°</span>
                  ) : (
                    <Image className="w-4 h-4 text-white" />
                  )}
                </div>
              </div>
            )}
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo/80 via-indigo/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-medium text-lg leading-tight">{image.title}</h3>
                {image.paraName && (
                  <p className="text-sm text-white/80">{image.paraName}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  // For uniform grid view
  if (viewMode === 'grid') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
        {filteredImages.map(image => (
          <div 
            key={image.id} 
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-64"
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image.src} 
              alt={image.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Content type indicator */}
            {image.contentType !== 'photo' && (
              <div className="absolute top-3 left-3 z-10">
                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  {image.contentType === 'video' || image.contentType === 'slowmotion' ? (
                    <Play className="w-4 h-4 text-white" />
                  ) : image.contentType === '360' ? (
                    <span className="text-xs font-bold text-white">360°</span>
                  ) : (
                    <Image className="w-4 h-4 text-white" />
                  )}
                </div>
              </div>
            )}
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo/80 via-indigo/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-medium">{image.title}</h3>
                {image.paraName && (
                  <p className="text-sm text-white/80">{image.paraName}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  // For list view
  return (
    <div className={`space-y-4 ${className}`}>
      {filteredImages.map(image => (
        <div 
          key={image.id} 
          className={`group flex gap-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden ${
            nightMode ? 'bg-indigo-light/10' : 'bg-white'
          }`}
          onClick={() => setSelectedImage(image)}
        >
          <div className="w-32 h-32 flex-shrink-0 relative">
            <img 
              src={image.src} 
              alt={image.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Content type indicator */}
            {image.contentType !== 'photo' && (
              <div className="absolute top-2 left-2 z-10">
                <div className="w-6 h-6 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  {image.contentType === 'video' || image.contentType === 'slowmotion' ? (
                    <Play className="w-3 h-3 text-white" />
                  ) : image.contentType === '360' ? (
                    <span className="text-xs font-bold text-white">360°</span>
                  ) : (
                    <Image className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>
            )}
          </div>
          
          <div className="py-3 pr-4 flex-grow">
            <h3 className={`font-medium ${nightMode ? 'text-cream' : 'text-indigo'}`}>{image.title}</h3>
            
            {image.paraName && (
              <p className={`text-sm ${nightMode ? 'text-cream/80' : 'text-indigo-light'}`}>
                {image.paraName}
              </p>
            )}
            
            <div className="mt-2 flex flex-wrap gap-2">
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                nightMode ? 'bg-indigo-light/20 text-cream/80' : 'bg-gray-100 text-indigo-light'
              }`}>
                {image.year}
              </span>
              
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                nightMode ? 'bg-indigo-light/20 text-cream/80' : 'bg-gray-100 text-indigo-light'
              }`}>
                {
                  image.category.replace('-', ' ').split(' ').map(
                    word => word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')
                }
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
