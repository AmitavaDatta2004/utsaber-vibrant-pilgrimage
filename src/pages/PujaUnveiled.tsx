
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
            <section className="relative py-20 bg-gradient-to-r from-festival-blue via-festival-green to-festival-red">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="font-heading text-4xl md:text-5xl text-cream mb-6">Divine Mother Jagadhatri</h1>
                  <p className="text-cream/90 text-lg mb-8">Explore the divine form, sacred rituals, and enduring traditions of the Goddess who sustains the universe.</p>
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
                      className="w-full h-auto rounded-xl shadow-lg border-2 border-festival-red/20"
                    />
                  </div>
                  
                  <div className="col-span-1 lg:col-span-2">
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-festival-green mb-6 relative">
                      Her Form & Significance
                      <span className="block w-16 h-1 mt-2 bg-festival-red"></span>
                    </h2>
                    <p className="text-indigo-light mb-6">
                      Goddess Jagadhatri, whose name translates to "Holder of the World," is depicted with a peaceful countenance, riding a lion, symbolizing her dominion over pride. She bears four arms, each holding significant objects: a conch, a bow, an arrow, and a chakra, representing her divine attributes and powers.
                    </p>
                    
                    <p className="text-indigo-light mb-6">
                      In Hindu mythology, Jagadhatri emerged when the supreme power of the universe was divided among various deities. She represents the all-encompassing strength that sustains and protects the universe. Her worship is particularly significant in Bengali culture, where she is revered as a form of Goddess Durga.
                    </p>
                    
                    <p className="text-indigo-light mb-6">
                      Chandannagar holds a special connection to Jagadhatri Puja, with celebrations dating back centuries. The festival's grandeur in this former French colony is unparalleled, featuring magnificent idols, elaborate pandals, and spectacular lighting arrangements that have become cultural signatures of the region.
                    </p>
                    
                    <div className="mt-10 p-6 rounded-xl border-2 border-festival-green bg-gradient-to-r from-festival-green/5 to-festival-blue/5">
                      <h3 className="font-heading text-xl mb-4 text-festival-blue">Sacred Mantra</h3>
                      <p className="italic text-indigo-light mb-3">
                        "Om Jagadhatryai Namaha"
                      </p>
                      <p className="text-sm text-indigo-light">
                        (Salutations to Goddess Jagadhatri, the sustainer of the world)
                      </p>
                    </div>
                    
                    {/* Additional sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                      <div className="p-6 rounded-xl bg-festival-red/5 border border-festival-red/20">
                        <h3 className="font-heading text-xl mb-4 text-festival-red">The Divine Weapons</h3>
                        <ul className="space-y-2 text-indigo-light">
                          <li className="flex items-start">
                            <span className="h-2 w-2 rounded-full bg-festival-red mt-2 mr-2"></span>
                            <span><strong>Conch (Shankha):</strong> Represents the origin of existence and the primordial sound Om</span>
                          </li>
                          <li className="flex items-start">
                            <span className="h-2 w-2 rounded-full bg-festival-red mt-2 mr-2"></span>
                            <span><strong>Bow & Arrow:</strong> Symbolizes energy and its control, the power to defeat negativity</span>
                          </li>
                          <li className="flex items-start">
                            <span className="h-2 w-2 rounded-full bg-festival-red mt-2 mr-2"></span>
                            <span><strong>Chakra (Disc):</strong> Represents the wheel of time and the cyclical nature of creation</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-6 rounded-xl bg-festival-blue/5 border border-festival-blue/20">
                        <h3 className="font-heading text-xl mb-4 text-festival-blue">The Lion Mount</h3>
                        <p className="text-indigo-light">
                          Unlike Durga who rides a tiger, Jagadhatri is depicted riding a lion. The lion represents pride and ego, and the Goddess's control over it symbolizes the mastery over one's ego. It teaches that to realize the divine, one must first conquer the ego that clouds spiritual vision.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Rituals & Traditions Section */}
                <div className="mt-16">
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-festival-red mb-6 relative">
                    Rituals & Traditions
                    <span className="block w-16 h-1 mt-2 bg-festival-green"></span>
                  </h2>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="space-y-4">
                        <div className="h-1 w-16 bg-festival-blue"></div>
                        <h3 className="font-heading text-xl text-festival-blue">Shashthi-Bodhon</h3>
                        <p className="text-indigo-light">The ritual awakening of the Goddess, marking the beginning of the puja. Sacred mantras are chanted as the deity is invited to inhabit the idol.</p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="h-1 w-16 bg-festival-green"></div>
                        <h3 className="font-heading text-xl text-festival-green">Sandhi Puja</h3>
                        <p className="text-indigo-light">Performed at the junction of Ashtami and Navami tithi, this is one of the most significant rituals, marked by 108 lotus offerings and special aarti.</p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="h-1 w-16 bg-festival-red"></div>
                        <h3 className="font-heading text-xl text-festival-red">Bisharjan</h3>
                        <p className="text-indigo-light">The farewell ritual where the idol is immersed in water, symbolizing the Goddess's return to her abode. Features processions with dhak (drum) beats and dancing.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* History Section */}
            <section className="py-16 bg-gradient-to-b from-cream to-white">
              <div className="container mx-auto px-4">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-festival-blue mb-10 relative text-center">
                  Chandannagar's Unique Legacy
                  <span className="block w-16 h-1 mt-2 bg-festival-red mx-auto"></span>
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="prose max-w-none text-indigo-light">
                      <p className="mb-4">
                        The history of Jagadhatri Puja in Chandannagar is intrinsically linked to the region's unique cultural heritage. As a French colony until 1950, Chandannagar developed a distinct cultural identity that blended Bengali traditions with European influences.
                      </p>
                      
                      <p className="mb-4">
                        The festival gained prominence in the late 18th century under the patronage of Indranarayan Chowdhury, a wealthy merchant and zamindar. Legend has it that Raja Krishnachandra of Nadia introduced the puja to Chandannagar after being inspired by a divine vision.
                      </p>
                      
                      <p>
                        What sets Chandannagar's celebration apart is its spectacular lighting designs, known as "Chandannagar lights," which have become famous throughout Bengal. These intricate illuminations transform the town into a breathtaking spectacle, drawing visitors from across the region.
                      </p>
                    </div>
                    
                    <div className="mt-8 p-4 rounded-lg bg-festival-red/5 border border-festival-red/20">
                      <h4 className="font-heading text-lg text-festival-red mb-2">Did You Know?</h4>
                      <p className="text-indigo-light text-sm">
                        The French administrators of colonial Chandannagar not only permitted but often contributed to the puja celebrations, leading to a unique cultural exchange that still influences the festival's artistic expressions today.
                      </p>
                    </div>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                      alt="Historical Chandannagar" 
                      className="w-full h-96 object-cover rounded-xl shadow-lg border-2 border-festival-blue/20"
                    />
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
