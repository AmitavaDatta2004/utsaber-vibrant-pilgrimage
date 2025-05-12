
import React from 'react';
import { CURATED_COLLECTIONS, GALLERY_IMAGES } from '../../data/galleryConstants';
import { useGallery } from './GalleryContext';

const CuratedCollections: React.FC = () => {
  const { setSelectedImage, nightMode } = useGallery();
  
  // Function to get an image by id from our dataset
  const getImageById = (id: number) => {
    return GALLERY_IMAGES.find(img => img.id === id);
  };
  
  const handleCollectionPreviewClick = (collectionId: number) => {
    // When clicking a collection, set the first image from the collection
    const collection = CURATED_COLLECTIONS.find(c => c.id === collectionId);
    if (collection && collection.imageIds.length > 0) {
      const firstImageId = collection.imageIds[0];
      const image = getImageById(firstImageId);
      if (image) {
        setSelectedImage(image);
      }
    }
  };
  
  return (
    <div className={`py-8 transition-colors ${nightMode ? 'bg-indigo text-cream' : 'bg-cream text-indigo'}`}>
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-8">Curated Collections</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURATED_COLLECTIONS.map(collection => (
            <div 
              key={collection.id} 
              className={`group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                nightMode ? 'bg-indigo-light/10 border border-indigo-light/20' : 'bg-white'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={collection.coverImage} 
                  alt={collection.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo/80 via-indigo/20 to-transparent flex items-end p-4">
                  <h3 className="text-lg font-medium text-white">{collection.title}</h3>
                </div>
              </div>
              
              <div className="p-4">
                <p className={`text-sm mb-4 ${nightMode ? 'text-cream/80' : 'text-indigo-light'}`}>
                  {collection.description}
                </p>
                
                {/* Thumbnails of images in this collection */}
                <div className="flex space-x-2 overflow-x-auto pb-2 mb-4">
                  {collection.imageIds.map(imageId => {
                    const image = getImageById(imageId);
                    return image ? (
                      <div 
                        key={image.id}
                        className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(image);
                        }}
                      >
                        <img 
                          src={image.src} 
                          alt={image.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                        />
                      </div>
                    ) : null;
                  })}
                </div>
                
                <button 
                  onClick={() => handleCollectionPreviewClick(collection.id)}
                  className={`w-full py-2 rounded-md text-sm font-medium transition-colors ${
                    nightMode
                      ? 'bg-festival-blue/80 text-white hover:bg-festival-blue'
                      : 'bg-festival-blue text-white hover:bg-festival-blue-dark'
                  }`}
                >
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuratedCollections;
