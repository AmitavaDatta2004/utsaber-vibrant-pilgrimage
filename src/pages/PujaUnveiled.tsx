
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const PujaUnveiled = () => {
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
        <div className="min-h-screen flex flex-col">
          <Header />
          
          <main className="flex-grow pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-festival-blue">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="font-heading text-4xl md:text-5xl text-cream mb-6">Divine Mother Jagadhatri</h1>
                  <p className="text-cream/80 text-lg mb-8">Explore the divine form, sacred rituals, and enduring traditions of the Goddess who sustains the universe.</p>
                </div>
              </div>
            </section>
            
            {/* Main Content */}
            <section className="py-16 bg-cream">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="col-span-1">
                    <img 
                      src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                      alt="Goddess Jagadhatri" 
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                  
                  <div className="col-span-1 lg:col-span-2">
                    <h2 className="section-heading">Her Form & Significance</h2>
                    <p className="text-indigo-light mb-6">
                      Goddess Jagadhatri, whose name translates to "Holder of the World," is depicted with a peaceful countenance, riding a lion, symbolizing her dominion over pride. She bears four arms, each holding significant objects: a conch, a bow, an arrow, and a chakra, representing her divine attributes and powers.
                    </p>
                    
                    <p className="text-indigo-light mb-6">
                      In Hindu mythology, Jagadhatri emerged when the supreme power of the universe was divided among various deities. She represents the all-encompassing strength that sustains and protects the universe. Her worship is particularly significant in Bengali culture, where she is revered as a form of Goddess Durga.
                    </p>
                    
                    <p className="text-indigo-light mb-6">
                      Chandannagar holds a special connection to Jagadhatri Puja, with celebrations dating back centuries. The festival's grandeur in this former French colony is unparalleled, featuring magnificent idols, elaborate pandals, and spectacular lighting arrangements that have become cultural signatures of the region.
                    </p>
                    
                    <div className="mt-10 p-6 bg-festival-green/10 rounded-xl border border-festival-blue/20">
                      <h3 className="font-heading text-xl mb-4 text-festival-blue">Sacred Mantra</h3>
                      <p className="italic text-indigo-light mb-3">
                        "Om Jagadhatryai Namaha"
                      </p>
                      <p className="text-sm text-indigo-light">
                        (Salutations to Goddess Jagadhatri, the sustainer of the world)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
};

export default PujaUnveiled;
