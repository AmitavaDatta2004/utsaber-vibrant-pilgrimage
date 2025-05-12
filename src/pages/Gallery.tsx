
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, X, Heart, Share, Download, Filter, ChevronDown, Grid2X2, LayoutList, Play } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

// Import the masonry grid component
import { LightboxImage } from '../components/gallery/LightboxImage';
import { GalleryMasonryGrid } from '../components/gallery/GalleryMasonryGrid';

const GalleryPage = () => {
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'masonry' | 'grid' | 'list'>('masonry');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [sortOrder, setSortOrder] = useState<string>('recent');
  const [nightMode, setNightMode] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const filterRef = useRef<HTMLDivElement>(null);
  
  // More comprehensive gallery data
  const galleryData = [
    { 
      id: 1, 
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", 
      title: "Barabaazar Pandal Illumination", 
      category: "pandals",
      type: "image",
      year: "2023",
      para: "Barabazar Sarbojanin",
      description: "The stunning illuminated entrance to the Barabazar pandal, showcasing intricate light designs that tell the story of Goddess Jagadhatri's victory over evil.",
      photographer: "Amit Roy",
      likes: 427,
      featured: true
    },
    { 
      id: 2, 
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be", 
      title: "Divine Goddess Jagadhatri Idol", 
      category: "idols",
      type: "image", 
      year: "2022",
      para: "Gondolpara Sporting Club",
      description: "A close-up view of the exquisitely crafted Jagadhatri idol, highlighting the detailed facial expressions and traditional adornments.",
      photographer: "Priya Sen",
      likes: 356,
      featured: true
    },
    { 
      id: 3, 
      src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23", 
      title: "Immersion Procession", 
      category: "processions",
      type: "image", 
      year: "2023",
      para: "Chandannagar Central Committee",
      description: "The vibrant Bishorjon procession making its way through the streets, accompanied by rhythmic dhak beats and joyous celebration.",
      photographer: "Debojit Dhar",
      likes: 289,
      featured: false
    },
    { 
      id: 4, 
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22", 
      title: "Evening Aarti Ceremony", 
      category: "rituals",
      type: "image", 
      year: "2023",
      para: "Tematha Sporting Club",
      description: "The mesmerizing evening aarti ceremony performed by devotees, creating a spiritual atmosphere with traditional oil lamps and incense.",
      photographer: "Rishav Mukherjee",
      likes: 312,
      featured: false
    },
    { 
      id: 5, 
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", 
      title: "Barabaazar Club Lighting Display", 
      category: "lighting",
      type: "image", 
      year: "2023",
      para: "Barabazar Sarbojanin",
      description: "The world-famous Chandannagar lighting display at Barabazar, showcasing intricate patterns and stories through thousands of LED lights.",
      photographer: "Susmita Das",
      likes: 578,
      featured: true
    },
    { 
      id: 6, 
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", 
      title: "Behind the Scenes: Idol Crafting", 
      category: "behind-scenes",
      type: "image", 
      year: "2022",
      para: "Chandannagar Artisan Colony",
      description: "Artisans at work creating the clay idol of Goddess Jagadhatri, showcasing the traditional craftsmanship passed down through generations.",
      photographer: "Rahul Biswas",
      likes: 245,
      featured: false
    },
    { 
      id: 7, 
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81", 
      type: "video",
      title: "Dhaki Performance at Barabazar", 
      category: "rituals",
      year: "2023",
      para: "Barabazar Sarbojanin",
      description: "A mesmerizing performance by traditional dhaki artists, creating the rhythmic beats that form the heartbeat of the puja celebrations.",
      photographer: "Anindya Chakraborty",
      duration: "1:45",
      likes: 203,
      featured: true
    },
    { 
      id: 8, 
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", 
      title: "Panoramic View of Strand Road", 
      category: "processions",
      type: "360", 
      year: "2023",
      para: "Chandannagar Central Committee",
      description: "An immersive 360° view of the Strand Road during the peak of Jagadhatri Puja, allowing viewers to experience the vibrant atmosphere from all angles.",
      photographer: "Dhritiman Chatterjee",
      likes: 389,
      featured: true
    },
    { 
      id: 9, 
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5", 
      title: "Time-lapse: Pandal Construction", 
      category: "behind-scenes",
      type: "time-lapse", 
      year: "2023",
      para: "Tematha Sporting Club",
      description: "A fascinating time-lapse showing the construction of an elaborate pandal from start to finish over the course of three weeks.",
      photographer: "Soham Banerjee",
      duration: "0:55",
      likes: 267,
      featured: false
    },
    { 
      id: 10, 
      src: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c", 
      title: "Slow-motion: Sindur Khela Ceremony", 
      category: "rituals",
      type: "slow-motion", 
      year: "2022",
      para: "Gondolpara Sporting Club",
      description: "A captivating slow-motion capture of the Sindur Khela ceremony, highlighting the joy and colors of this traditional ritual.",
      photographer: "Tanushree Sen",
      duration: "1:22",
      likes: 335,
      featured: true
    },
    { 
      id: 11, 
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", 
      title: "Night View: Lighting Extravaganza", 
      category: "lighting",
      type: "image", 
      year: "2023",
      para: "Hatkhola Sporting Club",
      description: "The breathtaking night view of Chandannagar's famous light displays along the Strand Road, illuminating the night sky with artistic brilliance.",
      photographer: "Arnab Das",
      likes: 412,
      featured: true
    },
    { 
      id: 12, 
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475", 
      title: "Archival Photo: Jagadhatri Puja 1985", 
      category: "historical",
      type: "image", 
      year: "1985",
      para: "Barabazar Sarbojanin",
      description: "A rare archival photograph showing the Jagadhatri Puja celebrations in 1985, providing a glimpse into how traditions have evolved over the decades.",
      photographer: "Shyamal Banerjee",
      likes: 189,
      featured: true
    },
  ];
  
  // Filter categories
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'idols', label: 'Idols' },
    { id: 'pandals', label: 'Pandals' },
    { id: 'lighting', label: 'Lighting' },
    { id: 'rituals', label: 'Rituals' },
    { id: 'processions', label: 'Processions' },
    { id: 'behind-scenes', label: 'Behind the Scenes' },
    { id: 'historical', label: 'Historical' }
  ];
  
  // Para clubs
  const paraClubs = [
    { id: 'all', name: 'All Clubs' },
    { id: 'barabazar', name: 'Barabazar Sarbojanin' },
    { id: 'gondolpara', name: 'Gondolpara Sporting Club' },
    { id: 'tematha', name: 'Tematha Sporting Club' },
    { id: 'hatkhola', name: 'Hatkhola Sporting Club' },
    { id: 'central', name: 'Chandannagar Central Committee' }
  ];
  
  // Content types
  const contentTypes = [
    { id: 'all', label: 'All Types' },
    { id: 'image', label: 'Photographs' },
    { id: 'video', label: 'Videos' },
    { id: '360', label: '360° Views' },
    { id: 'time-lapse', label: 'Time-lapses' },
    { id: 'slow-motion', label: 'Slow Motion' }
  ];
  
  // Years
  const years = [
    { id: 'all', label: 'All Years' },
    { id: '2023', label: '2023' },
    { id: '2022', label: '2022' },
    { id: 'historical', label: 'Pre-2000' }
  ];
  
  // Filter the images based on selected filters
  const filteredGallery = selectedFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedFilter);
  
  // Sort the filtered images
  const sortedGallery = [...filteredGallery].sort((a, b) => {
    if (sortOrder === 'recent') {
      return b.id - a.id;
    } else if (sortOrder === 'popular') {
      return b.likes - a.likes;
    } else if (sortOrder === 'featured') {
      return b.featured === a.featured ? 0 : b.featured ? -1 : 1;
    }
    return 0;
  });
  
  // Handle image click to open lightbox
  const handleImageClick = (image: any) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };
  
  // Handle closing lightbox
  const handleLightboxClose = () => {
    setLightboxOpen(false);
  };
  
  // Handle favorite clicking
  const handleFavoriteClick = () => {
    toast({
      title: "Added to favorites!",
      description: "This image has been added to your favorites collection.",
    });
  };
  
  // Handle sharing
  const handleShareClick = () => {
    navigator.clipboard.writeText(`https://utsab-unites.com/gallery/image/${selectedImage?.id}`);
    toast({
      title: "Link copied!",
      description: "Image link has been copied to clipboard.",
    });
  };
  
  // Handle next and previous in lightbox
  const handleNextImage = () => {
    const currentIndex = sortedGallery.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % sortedGallery.length;
    setSelectedImage(sortedGallery[nextIndex]);
  };
  
  const handlePreviousImage = () => {
    const currentIndex = sortedGallery.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + sortedGallery.length) % sortedGallery.length;
    setSelectedImage(sortedGallery[prevIndex]);
  };
  
  // Handle filter menu toggle
  const handleFilterMenuToggle = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };
  
  // Handle night mode toggle
  const handleNightModeToggle = () => {
    setNightMode(!nightMode);
  };

  // Use effect to handle loading sequence
  useEffect(() => {
    // Shorter loading time for gallery page
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setFadeIn(true), 100);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Use effect for keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePreviousImage();
      } else if (e.key === 'Escape') {
        handleLightboxClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, selectedImage]);

  // Handle click outside filter menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader onLoadComplete={() => setLoading(false)} />
      ) : (
        <div className={`min-h-screen flex flex-col ${nightMode ? 'bg-gray-900 text-white' : 'bg-cream'}`}>
          <Header />
          
          <main className="flex-grow pt-20">
            {/* Hero Section with Animated Entry */}
            <div className={`relative overflow-hidden transition-all duration-700 ${nightMode ? 'bg-indigo-dark' : 'bg-gradient-to-r from-festival-blue/70 to-festival-green/70'}`}>
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <div className="golden-particle-container">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className="golden-particle animate-float" 
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 10 + 5}px`,
                        height: `${Math.random() * 10 + 5}px`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 10 + 10}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className="container mx-auto px-4 py-20 text-center relative z-10">
                <motion.h1 
                  className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  Utsab Gallery
                </motion.h1>
                <motion.p 
                  className="text-cream/90 text-lg md:text-xl max-w-3xl mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Immerse yourself in the magnificent visual celebrations of Chandannagar's Jagadhatri Puja through our curated collection of stunning imagery.
                </motion.p>

                <motion.div 
                  className="w-full max-w-2xl mx-auto relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <input 
                    type="text" 
                    placeholder="Search for images, paras, themes..." 
                    className="w-full px-6 py-4 rounded-full shadow-lg bg-white/90 backdrop-blur-sm border border-white/20 pl-12 pr-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-festival-red/50"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                </motion.div>

                {/* Night Mode Toggle */}
                <motion.div 
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <button 
                    onClick={handleNightModeToggle}
                    className={`px-4 py-2 rounded-full flex items-center ${nightMode ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}
                  >
                    {nightMode ? 'Light Mode' : 'Night Mode'}
                  </button>
                </motion.div>
              </div>
            </div>
            
            {/* Filters Section */}
            <div className={`sticky top-16 z-30 ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-cream border-saffron/10'} border-b shadow-sm transition-all duration-300`}>
              <div className="container mx-auto px-4">
                {/* Main Filter Bar */}
                <div className="flex items-center justify-between py-4">
                  {/* Category Filter Tabs */}
                  <div className="hidden md:flex space-x-2 overflow-x-auto scrollbar-none py-2">
                    {categories.map(category => (
                      <button 
                        key={category.id}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                          selectedFilter === category.id 
                            ? nightMode
                              ? 'bg-festival-blue text-white'
                              : 'bg-saffron text-cream' 
                            : nightMode
                              ? 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700'
                              : 'bg-cream text-indigo border border-saffron/30 hover:bg-saffron/10'
                        }`}
                        onClick={() => setSelectedFilter(category.id)}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                  
                  {/* Filter Button (mobile) */}
                  <div className="md:hidden" ref={filterRef}>
                    <button 
                      className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                        nightMode ? 'bg-gray-800 text-white border border-gray-700' : 'bg-white border border-gray-200'
                      }`}
                      onClick={handleFilterMenuToggle}
                    >
                      <Filter size={16} />
                      <span>Filters</span>
                      <ChevronDown size={16} className={isFilterMenuOpen ? 'rotate-180' : ''} />
                    </button>
                    
                    {/* Mobile Filter Menu */}
                    {isFilterMenuOpen && (
                      <div className={`absolute left-4 right-4 mt-2 p-4 rounded-lg shadow-lg z-40 ${
                        nightMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
                      }`}>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {categories.map(category => (
                            <button 
                              key={category.id}
                              className={`px-3 py-2 rounded-md text-sm font-medium ${
                                selectedFilter === category.id 
                                  ? nightMode
                                    ? 'bg-festival-blue text-white'
                                    : 'bg-saffron text-cream' 
                                  : nightMode
                                    ? 'bg-gray-700 text-gray-300'
                                    : 'bg-gray-100 text-gray-700'
                              }`}
                              onClick={() => {
                                setSelectedFilter(category.id);
                                setIsFilterMenuOpen(false);
                              }}
                            >
                              {category.label}
                            </button>
                          ))}
                        </div>
                        
                        <div className="space-y-4">
                          <Select defaultValue="all">
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Para Club" />
                            </SelectTrigger>
                            <SelectContent>
                              {paraClubs.map(club => (
                                <SelectItem key={club.id} value={club.id}>{club.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          
                          <Select defaultValue="all">
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Content Type" />
                            </SelectTrigger>
                            <SelectContent>
                              {contentTypes.map(type => (
                                <SelectItem key={type.id} value={type.id}>{type.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          
                          <Select defaultValue="all">
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                              {years.map(year => (
                                <SelectItem key={year.id} value={year.id}>{year.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Right Side Controls */}
                  <div className="flex items-center space-x-4">
                    {/* Sort Options */}
                    <div className="hidden sm:block">
                      <Select 
                        value={sortOrder}
                        onValueChange={(value) => setSortOrder(value)}
                      >
                        <SelectTrigger className={`w-40 ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="recent">Most Recent</SelectItem>
                          <SelectItem value="popular">Most Popular</SelectItem>
                          <SelectItem value="featured">Featured First</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* View Mode Toggle */}
                    <div className="flex border rounded-md overflow-hidden">
                      <button
                        className={`p-2 ${viewMode === 'masonry' 
                          ? (nightMode ? 'bg-gray-700 text-white' : 'bg-festival-blue text-white') 
                          : (nightMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500')}`}
                        onClick={() => setViewMode('masonry')}
                        title="Masonry View"
                      >
                        <Grid2X2 size={18} />
                      </button>
                      <button
                        className={`p-2 ${viewMode === 'list' 
                          ? (nightMode ? 'bg-gray-700 text-white' : 'bg-festival-blue text-white')
                          : (nightMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500')}`}
                        onClick={() => setViewMode('list')}
                        title="List View"
                      >
                        <LayoutList size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Advanced Filters Row (Desktop) */}
                <div className="hidden md:flex items-center justify-between pb-4 gap-4">
                  {/* Para Club Filter */}
                  <Select defaultValue="all">
                    <SelectTrigger className={`w-full max-w-xs ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                      <SelectValue placeholder="Para Club" />
                    </SelectTrigger>
                    <SelectContent>
                      {paraClubs.map(club => (
                        <SelectItem key={club.id} value={club.id}>{club.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  {/* Content Type Filter */}
                  <Select defaultValue="all">
                    <SelectTrigger className={`w-full max-w-xs ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                      <SelectValue placeholder="Content Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {contentTypes.map(type => (
                        <SelectItem key={type.id} value={type.id}>{type.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  {/* Year Filter */}
                  <Select defaultValue="all">
                    <SelectTrigger className={`w-full max-w-xs ${nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map(year => (
                        <SelectItem key={year.id} value={year.id}>{year.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Featured Collections Section */}
            <div className={`py-8 ${nightMode ? 'bg-gray-900' : 'bg-cream'}`}>
              <div className="container mx-auto px-4">
                <h2 className={`text-2xl font-heading mb-6 ${nightMode ? 'text-white' : 'text-festival-blue'}`}>Curated Collections</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      title: "Masterpieces of Light",
                      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                      count: "10 images"
                    },
                    {
                      title: "The Divine Faces",
                      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
                      count: "8 images"
                    },
                    {
                      title: "Moments of Devotion",
                      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
                      count: "12 images"
                    },
                    {
                      title: "Chandannagar Then & Now",
                      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
                      count: "6 pairs"
                    }
                  ].map((collection, index) => (
                    <motion.div 
                      key={index}
                      className={`relative rounded-xl overflow-hidden cursor-pointer group shadow-md ${
                        nightMode ? 'shadow-gray-800' : 'shadow-gray-200'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: fadeIn ? 1 : 0, 
                        y: fadeIn ? 0 : 20 
                      }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                      <img 
                        src={collection.image} 
                        alt={collection.title}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                        <h3 className="text-lg font-medium text-white">{collection.title}</h3>
                        <p className="text-white/80 text-sm">{collection.count}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Gallery Grid */}
            <section className={`py-12 ${nightMode ? 'bg-gray-900' : 'bg-cream'}`}>
              <div className="container mx-auto px-4">
                <AnimatePresence>
                  {viewMode === 'masonry' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="masonry-grid" 
                    >
                      <GalleryMasonryGrid 
                        images={sortedGallery} 
                        onImageClick={handleImageClick} 
                        nightMode={nightMode}
                      />
                    </motion.div>
                  )}
                
                  {viewMode === 'list' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6" 
                    >
                      {sortedGallery.map((image) => (
                        <motion.div 
                          key={image.id}
                          className={`flex flex-col sm:flex-row gap-4 p-4 rounded-lg ${
                            nightMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
                          } shadow-sm cursor-pointer transition-all duration-300`}
                          onClick={() => handleImageClick(image)}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ 
                            opacity: fadeIn ? 1 : 0, 
                            y: fadeIn ? 0 : 20 
                          }}
                          transition={{ duration: 0.4, delay: 0.05 * (image.id % 10) }}
                          whileHover={{ scale: 1.01 }}
                        >
                          <div className="relative w-full sm:w-48 h-48 flex-shrink-0">
                            <img 
                              src={image.src} 
                              alt={image.title} 
                              className="w-full h-full object-cover rounded-md"
                            />
                            {(image.type === 'video' || image.type === 'time-lapse' || image.type === 'slow-motion') && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-black/60 rounded-full p-3">
                                  <Play className="h-6 w-6 text-white" />
                                </div>
                              </div>
                            )}
                            {image.type === '360' && (
                              <div className="absolute top-2 right-2">
                                <div className="bg-black/60 rounded-full px-2 py-1">
                                  <span className="text-white text-xs font-bold">360°</span>
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-lg font-medium ${nightMode ? 'text-white' : 'text-festival-blue'}`}>
                              {image.title}
                            </h3>
                            <p className={`text-sm ${nightMode ? 'text-gray-400' : 'text-gray-600'} line-clamp-2 mt-1`}>
                              {image.description}
                            </p>
                            <div className="mt-4 flex items-center justify-between">
                              <div>
                                <p className={`text-xs ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                  {image.para} • {image.year}
                                </p>
                                <p className={`text-xs mt-1 ${nightMode ? 'text-gray-500' : 'text-gray-600'}`}>
                                  Photo by {image.photographer}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`flex items-center gap-1 ${nightMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                  <Heart className="w-4 h-4" />
                                  <span className="text-xs">{image.likes}</span>
                                </span>
                                {image.featured && (
                                  <span className="bg-festival-red/10 text-festival-red px-2 py-0.5 rounded text-xs">
                                    Featured
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {filteredGallery.length === 0 && (
                  <div className={`text-center py-16 ${nightMode ? 'text-gray-400' : 'text-indigo-light'}`}>
                    <p>No images found for this category.</p>
                  </div>
                )}
              </div>
            </section>

            {/* Lightbox */}
            <Dialog open={lightboxOpen} onOpenChange={handleLightboxClose}>
              <DialogContent className={`max-w-5xl p-0 overflow-hidden ${nightMode ? 'bg-gray-900' : 'bg-white'}`}>
                <LightboxImage 
                  image={selectedImage} 
                  onNext={handleNextImage}
                  onPrevious={handlePreviousImage}
                  onClose={handleLightboxClose}
                  onFavorite={handleFavoriteClick}
                  onShare={handleShareClick}
                  nightMode={nightMode}
                />
              </DialogContent>
            </Dialog>
          </main>
          
          <Footer />
        </div>
      )}
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.4;
          }
          90% {
            opacity: 0.2;
          }
        }
        
        .golden-particle-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .golden-particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,223,126,1) 0%, rgba(255,202,61,0.7) 50%, rgba(255,180,0,0) 100%);
          opacity: 0;
          animation: float 15s infinite;
        }
        
        .animate-float {
          animation: float 15s infinite;
        }
      `}</style>
    </>
  );
};

export default GalleryPage;
