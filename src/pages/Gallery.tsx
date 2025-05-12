
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { GalleryProvider } from '../components/gallery/GalleryContext';
import GalleryFilters from '../components/gallery/GalleryFilters';
import GalleryGrid from '../components/gallery/GalleryGrid';
import GalleryLightbox from '../components/gallery/GalleryLightbox';
import CuratedCollections from '../components/gallery/CuratedCollections';
import { useGallery } from '../components/gallery/GalleryContext';

// Main content component that uses the gallery context
const GalleryContent = () => {
  const { selectedImage, setSelectedImage, nightMode } = useGallery();
  
  return (
    <>
      {/* Hero Section */}
      <section className={`relative py-20 ${nightMode ? 'bg-indigo-dark' : 'bg-indigo'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl text-cream mb-6 animate-fade-in">Utsab Gallery</h1>
            <p className="text-cream/80 text-lg mb-8 animate-fade-in animation-delay-100">
              A visual journey through the magnificent celebrations of Chandannagar's Jagadhatri Puja.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-pattern-overlay opacity-5"></div>
          
          {/* Floating particles */}
          <div className="golden-particles">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i}
                className="golden-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 10}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Filters */}
      <GalleryFilters />
      
      {/* Curated Collections */}
      <CuratedCollections />
      
      {/* Gallery Grid */}
      <section className={`py-12 transition-colors ${nightMode ? 'bg-indigo-dark' : 'bg-cream'}`}>
        <div className="container mx-auto px-4">
          <GalleryGrid className="mb-12" />
        </div>
      </section>
      
      {/* Lightbox (conditionally rendered) */}
      {selectedImage && (
        <GalleryLightbox onClose={() => setSelectedImage(null)} />
      )}
      
      <style jsx global>{`
        @keyframes floating-particles {
          0% { 
            transform: translate(0, 0); 
            opacity: 0;
          }
          50% { 
            opacity: 0.7;
          }
          100% { 
            transform: translate(var(--random-x), var(--random-y)); 
            opacity: 0;
          }
        }
        
        .golden-particle {
          --random-x: ${() => (Math.random() * 200 - 100)}px;
          --random-y: ${() => (Math.random() * 200 - 100)}px;
          animation: floating-particles 15s infinite linear;
        }
        
        @keyframes ken-burns {
          0% {
            transform: scale(1) translate(0);
          }
          50% {
            transform: scale(1.05) translate(-1%, -1%);
          }
          100% {
            transform: scale(1) translate(0);
          }
        }
        
        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite alternate;
        }
        
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
        
        .animation-delay-100 {
          animation-delay: 100ms;
        }
      `}</style>
    </>
  );
};

// Main Gallery page component
const Gallery = () => {
  const [loading, setLoading] = useState(true);

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
        <GalleryProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-16">
              <GalleryContent />
            </main>
            <Footer />
          </div>
        </GalleryProvider>
      )}
    </>
  );
};

export default Gallery;
