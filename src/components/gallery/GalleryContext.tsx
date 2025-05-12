
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { 
  GalleryImage, 
  ImageCategory, 
  ContentType, 
  GALLERY_IMAGES 
} from '../../data/galleryConstants';

interface GalleryContextProps {
  images: GalleryImage[];
  filteredImages: GalleryImage[];
  selectedFilter: {
    category: ImageCategory[];
    contentType: ContentType[];
    year: number | null;
    search: string;
    paraName: string;
    tags: string[];
  };
  selectedImage: GalleryImage | null;
  viewMode: 'masonry' | 'grid' | 'list';
  sortOption: string;
  nightMode: boolean;
  setSelectedFilter: (filter: Partial<GalleryContextProps['selectedFilter']>) => void;
  setSelectedImage: (image: GalleryImage | null) => void;
  setViewMode: (mode: 'masonry' | 'grid' | 'list') => void;
  setSortOption: (option: string) => void;
  toggleNightMode: () => void;
  resetFilters: () => void;
}

const GalleryContext = createContext<GalleryContextProps | undefined>(undefined);

export const GalleryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState<GalleryContextProps['selectedFilter']>({
    category: [],
    contentType: [],
    year: null,
    search: '',
    paraName: '',
    tags: []
  });
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [viewMode, setViewMode] = useState<'masonry' | 'grid' | 'list'>('masonry');
  const [sortOption, setSortOption] = useState<string>('recent');
  const [nightMode, setNightMode] = useState<boolean>(false);
  
  // Filter images based on selected filters
  const filteredImages = GALLERY_IMAGES.filter(image => {
    if (selectedFilter.category.length > 0 && !selectedFilter.category.includes(image.category)) {
      return false;
    }
    
    if (selectedFilter.contentType.length > 0 && !selectedFilter.contentType.includes(image.contentType)) {
      return false;
    }
    
    if (selectedFilter.year && image.year !== selectedFilter.year) {
      return false;
    }
    
    if (selectedFilter.paraName && image.paraName !== selectedFilter.paraName) {
      return false;
    }
    
    if (selectedFilter.search) {
      const searchLower = selectedFilter.search.toLowerCase();
      if (
        !image.title.toLowerCase().includes(searchLower) &&
        !(image.description?.toLowerCase().includes(searchLower) ?? false) &&
        !(image.paraName?.toLowerCase().includes(searchLower) ?? false) &&
        !image.tags.some(tag => tag.toLowerCase().includes(searchLower))
      ) {
        return false;
      }
    }
    
    if (selectedFilter.tags.length > 0 && !selectedFilter.tags.some(tag => image.tags.includes(tag))) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    switch (sortOption) {
      case 'recent':
        return b.year - a.year;
      case 'popular':
        // In a real application, this would use view counts
        // For now, just sorting by ID
        return b.id - a.id;
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      case 'random':
        return Math.random() - 0.5;
      default:
        return b.year - a.year;
    }
  });
  
  const updateSelectedFilter = (filter: Partial<GalleryContextProps['selectedFilter']>) => {
    setSelectedFilter(prevFilter => ({
      ...prevFilter,
      ...filter
    }));
  };
  
  const toggleNightMode = () => {
    setNightMode(prevMode => !prevMode);
  };
  
  const resetFilters = () => {
    setSelectedFilter({
      category: [],
      contentType: [],
      year: null,
      search: '',
      paraName: '',
      tags: []
    });
    setSortOption('recent');
  };
  
  const value = {
    images: GALLERY_IMAGES,
    filteredImages,
    selectedFilter,
    selectedImage,
    viewMode,
    sortOption,
    nightMode,
    setSelectedFilter: updateSelectedFilter,
    setSelectedImage,
    setViewMode,
    setSortOption,
    toggleNightMode,
    resetFilters,
  };
  
  return (
    <GalleryContext.Provider value={value}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};
