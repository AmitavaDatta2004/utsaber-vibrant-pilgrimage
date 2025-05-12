import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Image, 
  Award, 
  History, 
  Phone, 
  Camera, 
  Share2, 
  User, 
  Map
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

// Mock data for paras
const paraData = {
  'barabazar': {
    id: 'barabazar',
    name: 'Barabaazar Jagadhatri Club',
    startYear: 1948,
    location: 'Strand Road, Barabazar',
    theme: 'Temple of South India',
    description: 'Celebrating their 75th year of puja, Barabaazar Jagadhatri Club has crafted an extraordinary pandal inspired by the temples of South India, featuring intricate wooden carvings and traditional architecture.',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
    ],
    accolades: 'Winners of Best Illumination 2023',
    pandal: {
      artist: 'Ramesh Kumar',
      details: 'The pandal is inspired by the ancient temples of South India, with intricate wooden carvings and traditional architectural elements. The structure stands at a height of 40 feet and spans 60 feet in width.'
    },
    idol: {
      artist: 'Sanjay Chakraborty',
      details: 'The idol is crafted in traditional Bengali style with a contemporary twist. Standing at 12 feet, the pratima depicts Goddess Jagadhatri in her classic form, riding a lion and holding her divine weapons.'
    },
    lighting: {
      artist: 'Das Electricals',
      details: 'The lighting design features over 50,000 LED bulbs arranged in intricate patterns that complement the architectural elements of the pandal. Special focus is placed on highlighting the sculptural details of the entrance arch.'
    },
    history: 'Founded in 1948, Barabazar Jagadhatri Club is one of the oldest puja committees in Chandannagar. The club started with a modest celebration that has now grown into one of the most anticipated events in the region. They have won numerous awards over the years for their innovative themes and flawless execution.',
    awards: ['Best Illumination 2023', 'Best Pandal 2021', 'Best Idol 2019', 'Best Theme 2018'],
    socialMedia: {
      facebook: 'https://facebook.com/barabazarjclub',
      instagram: 'https://instagram.com/barabazarjclub'
    },
    contactPerson: 'Amit Das',
    contactEmail: 'barabazarjclub@example.com'
  },
  'gondolpara': {
    id: 'gondolpara',
    name: 'Gondolpara Jagadhatri Club',
    startYear: 1956,
    location: 'G.T. Road, Gondolpara',
    theme: 'Ancient Egyptian Civilization',
    description: 'This year, Gondolpara takes visitors on a journey through ancient Egypt, with a stunning recreation of iconic monuments and detailed hieroglyphics that tell stories of both Egyptian mythology and its parallels with Indian culture.',
    images: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      'https://images.unsplash.com/photo-1501854140801-50d01698950b'
    ],
    accolades: 'Winners of Best Pandal 2022',
    pandal: {
      artist: 'Tapan Ghosh',
      details: 'The pandal recreates elements from ancient Egyptian temples, including detailed hieroglyphics and a mini Sphinx at the entrance. The main chamber mimics the grand halls of Karnak, with towering columns and a ceiling adorned with constellations.'
    },
    idol: {
      artist: 'Montu Pal',
      details: 'This year\'s idol incorporates subtle Egyptian aesthetic elements while maintaining the traditional Bengali form of Goddess Jagadhatri. The decoration includes motifs inspired by Egyptian jewelry and royal symbology.'
    },
    lighting: {
      artist: 'Chandannagar Lights Co.',
      details: 'The lighting design uses warm amber tones to recreate the atmosphere of torch-lit Egyptian temples. Special projection mapping on the pandal facades brings the hieroglyphics to life, telling stories through animated light displays.'
    },
    history: 'Gondolpara Jagadhatri Club was established in 1956 by a group of young enthusiasts who wanted to create a unique cultural space during the puja festival. The club is known for its educational themes that blend cultural exploration with artistic excellence.',
    awards: ['Best Pandal 2022', 'Most Innovative Theme 2020', 'Best Idol 2017', 'Cultural Excellence Award 2015'],
    socialMedia: {
      facebook: 'https://facebook.com/gondolparaclub',
      instagram: 'https://instagram.com/gondolparaclub'
    },
    contactPerson: 'Sudipta Roy',
    contactEmail: 'gondolparaclub@example.com'
  },
  'laxmiganj': {
    id: 'laxmiganj',
    name: 'Laxmiganj Sanatan Jagadhatri Committee',
    startYear: 1932,
    location: 'Laxmiganj Bazaar Area',
    theme: 'Traditional Heritage Revival',
    description: 'The oldest puja committee in the area, Laxmiganj maintains the most traditional approach to the festival, focusing on authentic rituals and classic artistic elements that showcase Bengal\'s rich cultural heritage.',
    images: [
      'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    ],
    accolades: 'Award for Cultural Preservation 2023',
    pandal: {
      artist: 'Biren Shilpakar & Family',
      details: 'The pandal follows traditional Bengali architecture with elements of a classic aatchala temple. Natural materials like bamboo, jute, and cloth are used extensively, with minimal artificial elements.'
    },
    idol: {
      artist: 'Gopal Pal (7th generation idol maker)',
      details: 'The idol is made following strict traditional guidelines and proportions (shastric measurements). Clay from the sacred Ganges and natural colors are used exclusively. The facial features are crafted in the classic Hindustani style.'
    },
    lighting: {
      artist: 'Traditional Chandannagar Lighting Guild',
      details: 'Lighting is modest but meaningful, using a combination of traditional oil lamps and classic bulb arrangements. The focus is on creating a serene, spiritual atmosphere rather than dazzling displays.'
    },
    history: 'Established in 1932, Laxmiganj Sanatan Jagadhatri Committee is considered the custodian of traditional puja practices in Chandannagar. The committee takes pride in maintaining rituals exactly as they were performed decades ago, with an emphasis on the spiritual aspects of the festival.',
    awards: ['Cultural Preservation Award 2023', 'Heritage Conservation Recognition 2021', 'Best Traditional Idol 2018', 'Authentic Ritual Performance 2016'],
    socialMedia: {
      facebook: 'https://facebook.com/laxmiganjsanatan',
    },
    contactPerson: 'Shyamal Banerjee',
    contactEmail: 'laxmiganjsanatan@example.com'
  }
};

const ParaDetail = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("current-year");
  const { paraId } = useParams();
  
  const para = paraData[paraId as keyof typeof paraData];

  useEffect(() => {
    // Shorter loading time for internal pages
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!para && !loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-32 text-center">
            <h1 className="text-3xl font-heading text-festival-blue mb-4">Para Not Found</h1>
            <p className="text-indigo-light mb-8">The para you're looking for does not exist or hasn't been added to our database yet.</p>
            <Link 
              to="/para-showcase" 
              className="px-6 py-3 bg-festival-red text-cream font-medium rounded-md hover:bg-festival-red-dark transition-colors"
            >
              Return to Para Showcase
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <Loader onLoadComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen flex flex-col">
          <Header />
          
          <main className="flex-grow pt-20">
            {/* Para Header & Hero Section */}
            <section className="relative">
              {/* Hero Image */}
              <div className="relative h-96">
                <img 
                  src={para.images[0]} 
                  alt={para.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo to-transparent opacity-70"></div>
              </div>
              
              {/* Para Title & Quick Info - Overlaid on Hero Image */}
              <div className="container mx-auto px-4 relative -mt-40">
                <div className="bg-gradient-to-r from-festival-blue to-festival-green p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div>
                      <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream mb-2">{para.name}</h1>
                      <p className="text-cream/80 text-lg mb-4">{para.theme}</p>
                      
                      {para.accolades && (
                        <div className="inline-flex items-center bg-festival-red px-3 py-1 rounded-full">
                          <Award size={16} className="text-cream mr-2" />
                          <span className="text-cream text-sm">{para.accolades}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Quick Info Section */}
            <section className="bg-cream py-6 border-b border-festival-green/20 shadow-sm">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center">
                    <Calendar className="w-6 h-6 text-festival-green mb-2 md:mb-0 md:mr-2" />
                    <div>
                      <p className="text-xs text-indigo-light/70 uppercase tracking-wide">Established</p>
                      <p className="font-medium text-indigo">{para.startYear}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center">
                    <MapPin className="w-6 h-6 text-festival-red mb-2 md:mb-0 md:mr-2" />
                    <div>
                      <p className="text-xs text-indigo-light/70 uppercase tracking-wide">Location</p>
                      <p className="font-medium text-indigo">{para.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center">
                    <Award className="w-6 h-6 text-festival-blue mb-2 md:mb-0 md:mr-2" />
                    <div>
                      <p className="text-xs text-indigo-light/70 uppercase tracking-wide">Awards</p>
                      <p className="font-medium text-indigo">{para.awards.length} Awards</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Tabbed Interface */}
            <section className="py-12 bg-cream">
              <div className="container mx-auto px-4">
                <Tabs defaultValue="current-year" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <div className="flex justify-center mb-8">
                    <TabsList className="bg-festival-blue/10">
                      <TabsTrigger 
                        value="current-year"
                        className="data-[state=active]:bg-festival-green data-[state=active]:text-cream"
                      >
                        Current Year's Darshan
                      </TabsTrigger>
                      <TabsTrigger 
                        value="gallery"
                        className="data-[state=active]:bg-festival-red data-[state=active]:text-cream"
                      >
                        Visual Gallery
                      </TabsTrigger>
                      <TabsTrigger 
                        value="legacy"
                        className="data-[state=active]:bg-festival-blue data-[state=active]:text-cream"
                      >
                        Our Legacy
                      </TabsTrigger>
                      <TabsTrigger 
                        value="location"
                        className="data-[state=active]:bg-festival-green data-[state=active]:text-cream"
                      >
                        Locate & Connect
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <TabsContent value="current-year">
                      <div className="space-y-8">
                        <h2 className="text-2xl font-heading text-festival-blue mb-4">Theme: {para.theme}</h2>
                        
                        <div className="prose max-w-none text-indigo-light">
                          <p>{para.description}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                          <div className="bg-festival-green/5 p-6 rounded-lg border border-festival-green/20">
                            <h3 className="text-xl font-heading text-festival-green mb-3">Pandal Creation</h3>
                            <p className="text-sm text-indigo-light mb-2">
                              <span className="font-medium">Artist:</span> {para.pandal.artist}
                            </p>
                            <p className="text-indigo-light">{para.pandal.details}</p>
                          </div>
                          
                          <div className="bg-festival-red/5 p-6 rounded-lg border border-festival-red/20">
                            <h3 className="text-xl font-heading text-festival-red mb-3">Idol Crafting</h3>
                            <p className="text-sm text-indigo-light mb-2">
                              <span className="font-medium">Pratima Shilpi:</span> {para.idol.artist}
                            </p>
                            <p className="text-indigo-light">{para.idol.details}</p>
                          </div>
                          
                          <div className="bg-festival-blue/5 p-6 rounded-lg border border-festival-blue/20">
                            <h3 className="text-xl font-heading text-festival-blue mb-3">Illumination</h3>
                            <p className="text-sm text-indigo-light mb-2">
                              <span className="font-medium">Lighting Design:</span> {para.lighting.artist}
                            </p>
                            <p className="text-indigo-light">{para.lighting.details}</p>
                          </div>
                        </div>
                        
                        {/* Live Updates Section (can be populated during puja) */}
                        <div className="bg-festival-red/5 p-6 rounded-lg border border-festival-red/20 mt-8">
                          <h3 className="text-xl font-heading text-festival-red mb-3 flex items-center">
                            <span className="h-2 w-2 bg-festival-red rounded-full mr-2 animate-pulse"></span>
                            Live Updates
                          </h3>
                          <p className="text-indigo-light italic">
                            Live updates will appear here during the puja days. Stay tuned!
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="gallery">
                      <div className="space-y-8">
                        <h2 className="text-2xl font-heading text-festival-red mb-4">Visual Gallery</h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {para.images.map((image, index) => (
                            <div 
                              key={index} 
                              className="group relative overflow-hidden rounded-lg aspect-square shadow-md hover:shadow-xl transition-all duration-300"
                            >
                              <img 
                                src={image} 
                                alt={`${para.name} - Image ${index + 1}`} 
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-indigo/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                                <button className="text-cream bg-festival-red/90 px-4 py-2 rounded-full flex items-center gap-2">
                                  <Camera size={16} />
                                  <span>View Full Size</span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="text-center mt-8">
                          <p className="text-indigo-light italic mb-4">
                            Archives from previous years will be available soon.
                          </p>
                        </div>
                        
                        <div className="bg-festival-green/5 p-6 rounded-lg border border-festival-green/20 mt-8">
                          <h3 className="text-xl font-heading text-festival-green mb-3 flex items-center">
                            <Share2 size={20} className="mr-2" />
                            Share Your Experience
                          </h3>
                          <p className="text-indigo-light mb-4">
                            Have you visited this pandal? Share your photos and experiences with the community.
                          </p>
                          <button className="bg-festival-green text-cream px-5 py-2 rounded-md hover:bg-festival-green-dark transition-colors">
                            Submit Your Photos
                          </button>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="legacy">
                      <div className="space-y-8">
                        <h2 className="text-2xl font-heading text-festival-blue mb-4">Our Legacy & History</h2>
                        
                        <div className="flex flex-col md:flex-row gap-8">
                          <div className="md:w-2/3">
                            <div className="prose max-w-none text-indigo-light">
                              <p className="mb-4">{para.history}</p>
                            </div>
                            
                            <h3 className="text-xl font-heading text-festival-red mt-6 mb-3">Awards & Accolades</h3>
                            <ul className="space-y-2">
                              {para.awards.map((award, index) => (
                                <li key={index} className="flex items-center">
                                  <Award size={16} className="text-festival-red mr-2 flex-shrink-0" />
                                  <span className="text-indigo-light">{award}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="md:w-1/3 bg-festival-blue/5 p-6 rounded-lg border border-festival-blue/20">
                            <h3 className="text-xl font-heading text-festival-blue mb-3 flex items-center">
                              <History size={20} className="mr-2" />
                              Milestone Timeline
                            </h3>
                            
                            <div className="relative border-l-2 border-festival-blue pl-6 py-2 space-y-6">
                              <div className="relative">
                                <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-festival-blue"></div>
                                <p className="font-bold text-festival-blue">{para.startYear}</p>
                                <p className="text-indigo-light">Club established</p>
                              </div>
                              
                              <div className="relative">
                                <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-festival-green"></div>
                                <p className="font-bold text-festival-green">{para.startYear + 25}</p>
                                <p className="text-indigo-light">Silver Jubilee</p>
                              </div>
                              
                              <div className="relative">
                                <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-festival-red"></div>
                                <p className="font-bold text-festival-red">{para.startYear + 50}</p>
                                <p className="text-indigo-light">Golden Jubilee</p>
                              </div>
                              
                              <div className="relative">
                                <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-festival-blue"></div>
                                <p className="font-bold text-festival-blue">2024</p>
                                <p className="text-indigo-light">Present Day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="location">
                      <div className="space-y-8">
                        <h2 className="text-2xl font-heading text-festival-green mb-4">Locate & Connect</h2>
                        
                        <div className="flex flex-col md:flex-row gap-8">
                          <div className="md:w-1/2">
                            <h3 className="text-xl font-heading text-festival-blue mb-3">Location Details</h3>
                            <p className="flex items-start mb-4">
                              <MapPin size={18} className="text-festival-red mr-2 mt-1 flex-shrink-0" />
                              <span className="text-indigo-light">{para.location}, Chandannagar, West Bengal, India</span>
                            </p>
                            
                            <div className="bg-festival-blue/5 p-6 rounded-lg border border-festival-blue/20 mb-6">
                              <h4 className="font-heading text-lg text-festival-blue mb-2">Transport Tips</h4>
                              <ul className="space-y-2 text-indigo-light">
                                <li className="flex items-start">
                                  <span className="h-2 w-2 rounded-full bg-festival-blue mt-2 mr-2"></span>
                                  <span>Nearest bus stop: Chandannagar Central Bus Stand (5 minutes walk)</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="h-2 w-2 rounded-full bg-festival-blue mt-2 mr-2"></span>
                                  <span>Auto-rickshaws available from Chandannagar Station</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="h-2 w-2 rounded-full bg-festival-blue mt-2 mr-2"></span>
                                  <span>Limited parking available at Municipal Grounds</span>
                                </li>
                              </ul>
                            </div>
                            
                            <h3 className="text-xl font-heading text-festival-green mb-3">Connect</h3>
                            
                            <div className="flex items-center mb-4">
                              <User size={18} className="text-festival-green mr-2 flex-shrink-0" />
                              <div>
                                <p className="text-sm text-indigo-light/70">Contact Person</p>
                                <p className="text-indigo">{para.contactPerson}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center mb-6">
                              <Phone size={18} className="text-festival-red mr-2 flex-shrink-0" />
                              <div>
                                <p className="text-sm text-indigo-light/70">Email</p>
                                <p className="text-indigo">{para.contactEmail}</p>
                              </div>
                            </div>
                            
                            <div className="flex gap-4">
                              {para.socialMedia.facebook && (
                                <a 
                                  href={para.socialMedia.facebook} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="bg-[#1877F2] text-white px-4 py-2 rounded-md hover:bg-[#1877F2]/90 transition-colors"
                                >
                                  Facebook
                                </a>
                              )}
                              
                              {para.socialMedia.instagram && (
                                <a 
                                  href={para.socialMedia.instagram} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="bg-[#E1306C] text-white px-4 py-2 rounded-md hover:bg-[#E1306C]/90 transition-colors"
                                >
                                  Instagram
                                </a>
                              )}
                            </div>
                          </div>
                          
                          <div className="md:w-1/2">
                            <h3 className="text-xl font-heading text-festival-red mb-3">Map Location</h3>
                            <div className="bg-indigo/5 h-80 rounded-lg flex items-center justify-center border-2 rainbow-border">
                              <div className="text-center">
                                <Map size={32} className="mx-auto mb-2 text-festival-blue" />
                                <p className="text-indigo-light">Interactive map will be available soon</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
            </section>
            
            {/* Related Paras */}
            <section className="py-12 bg-gradient-to-b from-cream to-white">
              <div className="container mx-auto px-4">
                <h2 className="section-heading">Explore More Paras</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                  {Object.values(paraData)
                    .filter(relatedPara => relatedPara.id !== para.id)
                    .slice(0, 3)
                    .map(relatedPara => (
                      <Link 
                        key={relatedPara.id} 
                        to={`/para/${relatedPara.id}`}
                        className="group block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                      >
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={relatedPara.images[0]} 
                            alt={relatedPara.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-heading text-xl text-festival-blue mb-1 group-hover:text-festival-green transition-colors">{relatedPara.name}</h3>
                          <p className="text-sm text-indigo-light line-clamp-2">{relatedPara.description}</p>
                        </div>
                      </Link>
                    ))
                  }
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

export default ParaDetail;
