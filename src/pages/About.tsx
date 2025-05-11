
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const About = () => {
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
                  <h1 className="font-heading text-4xl md:text-5xl text-cream mb-6">About Utsab Unites</h1>
                  <p className="text-cream/80 text-lg mb-8">Our mission, story, and the team behind this digital pilgrimage.</p>
                </div>
              </div>
            </section>
            
            {/* About Content */}
            <section className="py-16 bg-cream">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <h2 className="section-heading">Our Genesis</h2>
                  <p className="text-indigo-light mb-6">
                    Utsab Unites was born from a passion to preserve and celebrate the rich cultural heritage of Chandannagar's Jagadhatri Puja. 
                    As devotees and admirers of this magnificent festival ourselves, we recognized the need for a comprehensive digital platform 
                    that could capture its essence, document its artistry, and make it accessible to people around the world.
                  </p>
                  
                  <p className="text-indigo-light mb-10">
                    Our journey began in 2023, when a group of cultural enthusiasts, technology professionals, and puja committee members came together 
                    with a shared vision: to create a digital shrine that honors the Divine Mother Jagadhatri while showcasing the incredible 
                    creativity and devotion of Chandannagar's community.
                  </p>
                  
                  <h2 className="section-heading">Our Mission</h2>
                  <p className="text-indigo-light mb-6">
                    At Utsab Unites, we aim to:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-10 space-y-3 text-indigo-light">
                    <li>Document and preserve the artistic, cultural, and spiritual heritage of Chandannagar's Jagadhatri Puja</li>
                    <li>Provide a comprehensive resource for devotees, visitors, and cultural enthusiasts</li>
                    <li>Showcase the incredible talents of local artisans, from idol makers to lighting designers</li>
                    <li>Connect the global Bengali diaspora with their cultural roots</li>
                    <li>Facilitate a sense of community and shared celebration through digital means</li>
                  </ul>
                  
                  <div className="bg-marigold/20 p-8 rounded-xl border border-saffron/20 my-10">
                    <h3 className="font-heading text-xl mb-4 text-indigo">Join Our Journey</h3>
                    <p className="text-indigo-light mb-4">
                      Utsab Unites is a community-driven initiative, and we welcome contributions from everyone who shares our passion 
                      for Chandannagar's culture and traditions.
                    </p>
                    <p className="text-indigo-light">
                      Whether you have photographs, stories, historical information, or simply wish to volunteer your time and skills, 
                      we'd love to hear from you.
                    </p>
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

export default About;
