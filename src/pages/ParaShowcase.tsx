
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Award, Filter, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

// Para club data
const paraClubs = [
  {
    id: 'barabazar',
    name: 'Barabaazar Jagadhatri Club',
    location: 'Strand Road, Barabazar',
    description: 'Celebrating their 75th year of puja, Barabaazar Club has crafted an extraordinary pandal inspired by South Indian temples.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    established: 1948,
    awards: ['Best Illumination 2023', 'Best Pandal 2021'],
    zone: 'Strand Road'
  },
  {
    id: 'gondolpara',
    name: 'Gondolpara Jagadhatri Club',
    location: 'G.T. Road, Gondolpara',
    description: 'This year, Gondolpara takes visitors on a journey through ancient Egypt, with stunning recreations of Egyptian monuments.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    established: 1956,
    awards: ['Best Pandal 2022', 'Most Innovative Theme 2020'],
    zone: 'G.T. Road'
  },
  {
    id: 'laxmiganj',
    name: 'Laxmiganj Sanatan Jagadhatri Committee',
    location: 'Laxmiganj Bazaar Area',
    description: 'The oldest puja committee in the area, Laxmiganj maintains the most traditional approach to the festival.',
    image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb',
    established: 1932,
    awards: ['Cultural Preservation Award 2023', 'Heritage Conservation 2021'],
    zone: 'Bazaar Area'
  },
  {
    id: 'hatkhola',
    name: 'Hatkhola Tarun Sangha',
    location: 'Hatkhola Main Road',
    description: 'Known for their social messages, this year Hatkhola presents a theme focused on environmental conservation.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    established: 1962,
    awards: ['Social Message Award 2022', 'Best Theme 2019'],
    zone: 'Hatkhola'
  },
  {
    id: 'temathani',
    name: 'Temathani Sarbojonin Club',
    location: 'Temathani Crossing',
    description: 'A rising star in the puja scene, known for their innovative use of recycled materials in pandal construction.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
    established: 1975,
    awards: ['Eco-friendly Award 2023'],
    zone: 'Temathani'
  },
  {
    id: 'bagbazar',
    name: 'Bagbazar Sarbojonin Puja',
    location: 'Bagbazar Community Hall',
    description: 'One of the most crowded pujas, known for their grand scale and detailed artistic elements.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    established: 1952,
    awards: ['Best Crowd Management 2023', 'Grand Scale Award 2022'],
    zone: 'Bagbazar'
  }
];

// Available zones for filtering
const zones = [...new Set(paraClubs.map(club => club.zone))];

// Available decades for filtering
const decades = ['1930s', '1940s', '1950s', '1960s', '1970s'];

const ParaShowcase = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedDecade, setSelectedDecade] = useState('');
  const [awardFilter, setAwardFilter] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  
  const filterParaClubs = () => {
    return paraClubs.filter(club => {
      // Search term filter
      const searchMatch = searchTerm === '' || 
        club.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        club.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Zone filter
      const zoneMatch = selectedZone === '' || club.zone === selectedZone;
      
      // Decade filter
      let decadeMatch = true;
      if (selectedDecade) {
        const decade = parseInt(selectedDecade);
        decadeMatch = club.established >= decade && club.established < (decade + 10);
      }
      
      // Award filter
      const awardMatch = awardFilter === '' || club.awards.some(award => 
        award.toLowerCase().includes(awardFilter.toLowerCase())
      );
      
      return searchMatch && zoneMatch && decadeMatch && awardMatch;
    });
  };
  
  const filteredClubs = filterParaClubs();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  
  const getDecadeValue = (decade) => {
    return parseInt(decade);
  };

  return (
    <>
      {loading ? (
        <Loader onLoadComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen flex flex-col">
          <Header />
          
          <main className="flex-grow pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-festival-red via-festival-blue to-festival-green">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="font-heading text-4xl md:text-5xl text-cream mb-6">Para Showcase</h1>
                  <p className="text-cream/90 text-lg mb-8">Discover the vibrant celebrations across Chandannagar's neighborhoods.</p>
                </div>
              </div>
            </section>
            
            {/* Introduction Section */}
            <section className="py-12 bg-cream">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <h2 className="section-heading text-center">Discover the Paras</h2>
                  <p className="text-indigo-light text-center mt-6 mb-8">
                    Chandannagar's soul comes alive through its vibrant para (neighborhood) celebrations. Each para club brings its unique artistic vision, cultural heritage, and community spirit to Jagadhatri Puja, creating a tapestry of divine experiences across the city.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Search & Filter Section */}
            <section className="py-8 bg-cream border-y border-festival-blue/10 sticky top-16 z-30 shadow-sm">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  {/* Search */}
                  <div className="relative w-full md:w-1/3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-light h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search para clubs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 w-full rounded-md border border-festival-blue/20 focus:outline-none focus:ring-2 focus:ring-festival-green"
                    />
                  </div>
                  
                  {/* Filters */}
                  <div className="flex flex-wrap gap-2 md:gap-4">
                    <div className="relative">
                      <select
                        value={selectedZone}
                        onChange={(e) => setSelectedZone(e.target.value)}
                        className="appearance-none pl-8 pr-8 py-2 rounded-md border border-festival-blue/20 focus:outline-none focus:ring-2 focus:ring-festival-green bg-white"
                      >
                        <option value="">All Zones</option>
                        {zones.map(zone => (
                          <option key={zone} value={zone}>{zone}</option>
                        ))}
                      </select>
                      <MapPin className="absolute left-2 top-1/2 -translate-y-1/2 text-festival-red h-4 w-4" />
                    </div>
                    
                    <div className="relative">
                      <select
                        value={selectedDecade}
                        onChange={(e) => setSelectedDecade(e.target.value)}
                        className="appearance-none pl-8 pr-8 py-2 rounded-md border border-festival-blue/20 focus:outline-none focus:ring-2 focus:ring-festival-green bg-white"
                      >
                        <option value="">All Decades</option>
                        {decades.map(decade => (
                          <option key={decade} value={getDecadeValue(decade)}>{decade}</option>
                        ))}
                      </select>
                      <Calendar className="absolute left-2 top-1/2 -translate-y-1/2 text-festival-green h-4 w-4" />
                    </div>
                    
                    <div className="relative">
                      <select
                        value={awardFilter}
                        onChange={(e) => setAwardFilter(e.target.value)}
                        className="appearance-none pl-8 pr-8 py-2 rounded-md border border-festival-blue/20 focus:outline-none focus:ring-2 focus:ring-festival-green bg-white"
                      >
                        <option value="">All Awards</option>
                        <option value="Best Pandal">Best Pandal</option>
                        <option value="Best Illumination">Best Illumination</option>
                        <option value="Innovative">Most Innovative</option>
                        <option value="Cultural">Cultural Awards</option>
                      </select>
                      <Award className="absolute left-2 top-1/2 -translate-y-1/2 text-festival-blue h-4 w-4" />
                    </div>
                    
                    <button 
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedZone('');
                        setSelectedDecade('');
                        setAwardFilter('');
                      }}
                      className="px-4 py-2 text-sm text-festival-red border border-festival-red rounded-md hover:bg-festival-red/5 transition-colors"
                    >
                      Clear Filters
                    </button>
                  </div>
                  
                  {/* View Toggles */}
                  <div className="flex gap-2 md:gap-1">
                    <button 
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-l-md border border-r-0 ${viewMode === 'grid' ? 'bg-festival-green text-white' : 'bg-white text-indigo border-festival-blue/20'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                    </button>
                    <button 
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-r-md border ${viewMode === 'list' ? 'bg-festival-green text-white' : 'bg-white text-indigo border-festival-blue/20'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Para Clubs Listing */}
            <section className="py-12 bg-cream">
              <div className="container mx-auto px-4">
                {filteredClubs.length > 0 ? (
                  <>
                    {viewMode === 'grid' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredClubs.map((club) => (
                          <Link 
                            key={club.id} 
                            to={`/para/${club.id}`}
                            className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-festival-blue/10 hover:border-festival-green/30"
                          >
                            <div className="h-48 overflow-hidden relative">
                              <img 
                                src={club.image} 
                                alt={club.name} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute top-0 right-0 p-2 bg-gradient-to-r from-festival-red to-festival-blue text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                                Est. {club.established}
                              </div>
                            </div>
                            <div className="p-5">
                              <h3 className="font-heading text-xl text-festival-blue mb-1 group-hover:text-festival-green transition-colors">{club.name}</h3>
                              <p className="text-xs text-indigo-light/70 flex items-center mb-2">
                                <MapPin className="h-3 w-3 mr-1 text-festival-red" />
                                {club.location}
                              </p>
                              <p className="text-indigo-light text-sm mb-4 line-clamp-2">{club.description}</p>
                              
                              {club.awards.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {club.awards.slice(0, 2).map((award, idx) => (
                                    <span key={idx} className="inline-flex items-center text-xs bg-festival-red/10 text-festival-red px-2 py-1 rounded-full">
                                      <Award size={12} className="mr-1" />
                                      {award.length > 20 ? `${award.substring(0, 20)}...` : award}
                                    </span>
                                  ))}
                                  {club.awards.length > 2 && (
                                    <span className="inline-flex items-center text-xs bg-festival-blue/10 text-festival-blue px-2 py-1 rounded-full">
                                      +{club.awards.length - 2} more
                                    </span>
                                  )}
                                </div>
                              )}
                              
                              <div className="mt-4 pt-3 border-t border-festival-blue/10 flex justify-end">
                                <span className="text-sm font-medium text-festival-green group-hover:underline flex items-center">
                                  View Details
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {filteredClubs.map((club) => (
                          <Link 
                            key={club.id} 
                            to={`/para/${club.id}`}
                            className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-festival-blue/10 hover:border-festival-green/30"
                          >
                            <div className="flex flex-col sm:flex-row">
                              <div className="sm:w-48 h-48 overflow-hidden">
                                <img 
                                  src={club.image} 
                                  alt={club.name} 
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                  <div className="flex flex-wrap justify-between items-start">
                                    <h3 className="font-heading text-xl text-festival-blue mb-1 group-hover:text-festival-green transition-colors">{club.name}</h3>
                                    <span className="bg-gradient-to-r from-festival-red to-festival-blue text-white text-xs font-medium px-3 py-1 rounded-lg">
                                      Est. {club.established}
                                    </span>
                                  </div>
                                  <p className="text-xs text-indigo-light/70 flex items-center mb-2">
                                    <MapPin className="h-3 w-3 mr-1 text-festival-red" />
                                    {club.location}
                                  </p>
                                  <p className="text-indigo-light text-sm mb-4">{club.description}</p>
                                </div>
                                
                                <div className="flex flex-wrap items-center justify-between">
                                  {club.awards.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                      {club.awards.map((award, idx) => (
                                        <span key={idx} className="inline-flex items-center text-xs bg-festival-red/10 text-festival-red px-2 py-1 rounded-full">
                                          <Award size={12} className="mr-1" />
                                          {award}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                  
                                  <span className="text-sm font-medium text-festival-green group-hover:underline flex items-center ml-auto mt-2 sm:mt-0">
                                    View Details
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-32 bg-white rounded-xl shadow">
                    <Filter className="h-16 w-16 mx-auto mb-4 text-festival-blue opacity-50" />
                    <h3 className="font-heading text-2xl text-festival-blue mb-2">No Para Clubs Found</h3>
                    <p className="text-indigo-light">Try adjusting your filters or search term</p>
                  </div>
                )}

                {/* Para Trail Planner CTA */}
                <div className="mt-16 bg-gradient-to-r from-festival-green/20 via-festival-blue/20 to-festival-red/20 p-8 rounded-xl border border-festival-blue/10 text-center">
                  <h3 className="font-heading text-2xl text-festival-blue mb-2">Plan Your Para Trail</h3>
                  <p className="text-indigo-light mb-6 max-w-2xl mx-auto">
                    Create your custom pandal-hopping route to make the most of your visit to Chandannagar.
                  </p>
                  <button className="bg-festival-red text-cream px-8 py-3 rounded-md hover:bg-festival-red-dark transition-colors shadow-md hover:shadow-lg">
                    Launch Para Trail Planner
                  </button>
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

export default ParaShowcase;
