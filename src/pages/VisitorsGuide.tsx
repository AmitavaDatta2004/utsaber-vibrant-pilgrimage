
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const VisitorsGuide = () => {
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
                  <h1 className="font-heading text-4xl md:text-5xl text-cream mb-6">Visitor's Guide</h1>
                  <p className="text-cream/80 text-lg mb-8">Everything you need to plan your pilgrimage to Chandannagar's Jagadhatri Puja.</p>
                </div>
              </div>
            </section>
            
            {/* Main Content - Coming Soon */}
            <section className="py-32 bg-cream">
              <div className="container mx-auto px-4 text-center">
                <h2 className="section-heading text-center">Coming Soon</h2>
                <p className="text-indigo-light text-lg mt-6">
                  Our comprehensive visitor's guide is being prepared with travel tips, accommodation options, 
                  food recommendations, and navigation assistance. Check back before the puja festival.
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

export default VisitorsGuide;
