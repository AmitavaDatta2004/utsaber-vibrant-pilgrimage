
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const ParaShowcase = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
                  <h1 className="font-heading text-4xl md:text-5xl text-cream mb-6">Para Showcase</h1>
                  <p className="text-cream/80 text-lg mb-8">Discover the vibrant celebrations across Chandannagar's neighborhoods.</p>
                </div>
              </div>
            </section>
            
            {/* Main Content - Coming Soon */}
            <section className="py-32 bg-cream">
              <div className="container mx-auto px-4 text-center">
                <h2 className="section-heading text-center">Coming Soon</h2>
                <p className="text-indigo-light text-lg mt-6">
                  Our team is gathering information about the various Para clubs and their celebrations. 
                  Check back during the puja festival for comprehensive details.
                </p>
              </div>
            </section>
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
};

export default ParaShowcase;
