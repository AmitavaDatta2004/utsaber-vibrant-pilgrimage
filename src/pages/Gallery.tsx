
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const images = [
    { 
      id: 1, 
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", 
      title: "Pandal at night", 
      category: "pandals"
    },
    { 
      id: 2, 
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be", 
      title: "Idol close-up", 
      category: "idols" 
    },
    { 
      id: 3, 
      src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23", 
      title: "Procession", 
      category: "processions" 
    },
    { 
      id: 4, 
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22", 
      title: "Evening Aarti", 
      category: "rituals" 
    },
    { 
      id: 5, 
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", 
      title: "Barabaazar Club Lighting", 
      category: "lighting" 
    },
    { 
      id: 6, 
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", 
      title: "Idol Crafting", 
      category: "behind-scenes" 
    },
  ];
  
  const filteredImages = selectedFilter === 'all' 
    ? images 
    : images.filter(img => img.category === selectedFilter);

  useEffect(() => {
    // Shorter loading time for internal pages
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader onLoadComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen flex flex-col">
          <Header />
          
          <main className="flex-grow pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-indigo">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="font-heading text-4xl md:text-5xl text-cream mb-6">Utsab Gallery</h1>
                  <p className="text-cream/80 text-lg mb-8">A visual journey through the magnificent celebrations of Chandannagar's Jagadhatri Puja.</p>
                </div>
              </div>
            </section>
            
            {/* Filters */}
            <section className="py-8 bg-cream border-b border-saffron/10 sticky top-16 z-30 shadow-sm">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap gap-3 justify-center">
                  <button 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedFilter === 'all' ? 'bg-saffron text-cream' : 'bg-cream text-indigo border border-saffron/30 hover:bg-saffron/10'}`}
                    onClick={() => setSelectedFilter('all')}
                  >
                    All
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedFilter === 'idols' ? 'bg-saffron text-cream' : 'bg-cream text-indigo border border-saffron/30 hover:bg-saffron/10'}`}
                    onClick={() => setSelectedFilter('idols')}
                  >
                    Idols
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedFilter === 'pandals' ? 'bg-saffron text-cream' : 'bg-cream text-indigo border border-saffron/30 hover:bg-saffron/10'}`}
                    onClick={() => setSelectedFilter('pandals')}
                  >
                    Pandals
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedFilter === 'lighting' ? 'bg-saffron text-cream' : 'bg-cream text-indigo border border-saffron/30 hover:bg-saffron/10'}`}
                    onClick={() => setSelectedFilter('lighting')}
                  >
                    Lighting
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedFilter === 'rituals' ? 'bg-saffron text-cream' : 'bg-cream text-indigo border border-saffron/30 hover:bg-saffron/10'}`}
                    onClick={() => setSelectedFilter('rituals')}
                  >
                    Rituals
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedFilter === 'processions' ? 'bg-saffron text-cream' : 'bg-cream text-indigo border border-saffron/30 hover:bg-saffron/10'}`}
                    onClick={() => setSelectedFilter('processions')}
                  >
                    Processions
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedFilter === 'behind-scenes' ? 'bg-saffron text-cream' : 'bg-cream text-indigo border border-saffron/30 hover:bg-saffron/10'}`}
                    onClick={() => setSelectedFilter('behind-scenes')}
                  >
                    Behind the Scenes
                  </button>
                </div>
              </div>
            </section>
            
            {/* Gallery Grid */}
            <section className="py-16 bg-cream">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredImages.map((image) => (
                    <div 
                      key={image.id}
                      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <img 
                        src={image.src} 
                        alt={image.title} 
                        className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo/80 to-transparent p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-cream font-medium">{image.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
                
                {filteredImages.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-indigo-light">No images found for this category.</p>
                  </div>
                )}
              </div>
            </section>
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
};

export default Gallery;
