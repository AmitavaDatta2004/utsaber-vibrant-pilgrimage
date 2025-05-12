
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Camera, Calendar, Map, Info, Clock, Users, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CountdownTimer from '../components/CountdownTimer';
import NavigationTile from '../components/NavigationTile';
import FeaturedPara from '../components/FeaturedPara';
import NewsTicker from '../components/NewsTicker';
import GoldenParticles from '../components/GoldenParticles';
import Loader from '../components/Loader';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const navigationType = [
    {
      title: "The Puja Unveiled",
      description: "Discover the divine significance and rich traditions",
      icon: BookOpen,
      path: "/puja-unveiled",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      color: "from-festival-blue to-festival-blue-dark"
    },
    {
      title: "Para Showcase",
      description: "Explore the vibrant celebrations across neighborhoods",
      icon: Map,
      path: "/para-showcase",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
      color: "from-festival-green to-festival-green-dark"
    },
    {
      title: "Gallery",
      description: "A visual feast of breathtaking puja moments",
      icon: Camera,
      path: "/gallery",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      color: "from-festival-red to-festival-red-dark"
    },
    {
      title: "Puja Schedule",
      description: "Detailed timings of all rituals and events",
      icon: Calendar,
      path: "/puja-schedule",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      color: "from-festival-blue to-festival-green"
    }
  ];

  return (
    <>
      {loading ? (
        <Loader onLoadComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen flex flex-col">
          <Header />
          
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video/Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Jagadhatri Puja Celebration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-festival-blue/50 via-festival-green/30 to-festival-red/50"></div>
            </div>
            
            <GoldenParticles />

            <div className="container mx-auto px-4 relative z-20 text-center">
              <h1 className="font-heading text-5xl md:text-7xl text-cream mb-4 colorful-glow rainbow-border p-4 rounded-lg inline-block backdrop-blur-sm">
                Utsab Unites
              </h1>
              
              <div className="mt-4 mb-8 overflow-hidden h-12">
                <p className="typewriter-text text-xl md:text-2xl text-cream">
                  Chandannagar's Soul, United in Celebration
                </p>
              </div>
              
              <div className="mt-12 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center justify-center">
                <Link 
                  to="/puja-unveiled" 
                  className="px-8 py-3 bg-gradient-to-r from-festival-blue to-festival-green text-cream font-medium rounded-md hover:from-festival-green hover:to-festival-blue transition-all duration-500 transform hover:scale-105 hover:shadow-xl w-64 md:w-auto"
                >
                  Begin Your Digital Pilgrimage
                </Link>
                <Link 
                  to="/para-showcase" 
                  className="px-8 py-3 bg-gradient-to-r from-festival-red to-festival-blue text-cream font-medium rounded-md hover:from-festival-blue hover:to-festival-red transition-all duration-500 transform hover:scale-105 hover:shadow-xl w-64 md:w-auto"
                >
                  Discover Para Clubs
                </Link>
              </div>
            </div>
            
            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-8 h-8 border-t-2 border-r-2 border-cream rotate-[135deg]"></div>
            </div>
          </section>
          
          {/* News Ticker with updated colors */}
          <NewsTicker />

          {/* Countdown Section with enhanced colors */}
          <section className="py-16 bg-gradient-to-r from-cream via-festival-cream-light to-cream">
            <div className="container mx-auto px-4">
              <h2 className="section-heading text-center text-festival-blue after:bg-festival-red">Puja Countdown</h2>
              <div className="mt-8 max-w-3xl mx-auto">
                <CountdownTimer />
              </div>
            </div>
          </section>
          
          {/* Explore the Utsab - Navigation Tiles with enhanced effects */}
          <section className="py-16 bg-gradient-to-b from-cream via-white to-cream">
            <div className="container mx-auto px-4">
              <h2 className="section-heading text-center text-festival-green after:bg-festival-blue">Explore the Utsab</h2>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {navigationType.map((item, index) => (
                  <NavigationTile 
                    key={index}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    path={item.path}
                    backgroundImage={item.image}
                    gradientColor={item.color}
                  />
                ))}
              </div>
            </div>
          </section>
          
          {/* Featured Para of the Week with enhanced component */}
          <section className="py-16 bg-gradient-to-r from-festival-green/5 to-festival-blue/5">
            <div className="container mx-auto px-4">
              <h2 className="section-heading text-festival-red after:bg-festival-green">Featured Para of the Week</h2>
              <div className="mt-10 max-w-3xl">
                <FeaturedPara 
                  title="Barabaazar Jagadhatri Club"
                  description="Celebrating their 75th year of puja, Barabaazar Jagadhatri Club has crafted an extraordinary pandal inspired by the temples of South India, featuring intricate wooden carvings and traditional architecture."
                  imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  accolades="Winners of Best Illumination 2023"
                  link="/para/barabazar"
                  year="1948"
                  location="Strand Road, Barabazar"
                />
              </div>
            </div>
          </section>
          
          {/* Artisan's Canvas - Spotlight Snippet with enhanced design */}
          <section className="py-16 bg-gradient-to-r from-festival-red/5 to-festival-blue/5">
            <div className="container mx-auto px-4">
              <h2 className="section-heading text-festival-blue after:bg-festival-red">Artisan's Canvas</h2>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                <div className="col-span-1">
                  <div className="relative overflow-hidden rounded-xl group">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                      alt="Master Craftsman Ramesh Kumar" 
                      className="w-full h-64 object-cover rounded-xl shadow-md border-2 border-festival-red/20 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo/80 via-indigo/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end"></div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-festival-green">
                  <h3 className="font-heading text-2xl mb-3 text-festival-red">Master Craftsman Ramesh Kumar</h3>
                  <p className="text-lg font-medium mb-2 text-festival-blue">Lighting Designer & Installation Artist</p>
                  <p className="mb-6 text-indigo-light">"My passion is to create illuminations that tell a story. Each installation is a narrative woven with lights, bringing myths and traditions to life through modern technology."</p>
                  <Link 
                    to="/artisan/ramesh-kumar" 
                    className="px-6 py-2 bg-gradient-to-r from-festival-green to-festival-blue text-white font-medium rounded-md hover:from-festival-blue hover:to-festival-green transition-all duration-500 hover:shadow-lg inline-flex items-center group"
                  >
                    <span>Meet the Artist</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Mini-Map (Interactive) with enhanced styling */}
          <section className="py-16 bg-gradient-to-b from-cream to-festival-blue/10">
            <div className="container mx-auto px-4">
              <h2 className="section-heading text-center text-festival-green after:bg-festival-red">Interactive Mini-Map</h2>
              <div className="mt-10 h-[400px] bg-white rounded-xl p-4 flex items-center justify-center relative overflow-hidden border-2 border-festival-green rainbow-border">
                <div className="absolute inset-0 bg-gradient-to-br from-festival-red/10 via-festival-green/10 to-festival-blue/10"></div>
                <div className="relative z-10 text-center">
                  <Map className="h-16 w-16 mx-auto mb-4 text-festival-blue animate-pulse" />
                  <p className="text-indigo-light">Interactive map will be available during the puja celebration</p>
                  <div className="mt-4 inline-block">
                    <Link
                      to="/para-showcase"
                      className="px-6 py-2 bg-gradient-to-r from-festival-blue to-festival-green text-cream font-medium rounded-md hover:from-festival-red hover:to-festival-blue transition-colors shadow-md hover:shadow-lg"
                    >
                      View Para Locations
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Special Events & Announcements with enhanced cards */}
          <section className="py-16 bg-gradient-to-r from-festival-red/10 to-festival-blue/10">
            <div className="container mx-auto px-4">
              <h2 className="section-heading text-center text-festival-blue after:bg-festival-red">Special Events & Announcements</h2>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-festival-red group hover:bg-gradient-to-br hover:from-white hover:to-festival-red/5">
                  <div className="flex items-start">
                    <div className="bg-festival-red/10 p-3 rounded-full group-hover:bg-festival-red/20 transition-colors duration-300">
                      <Calendar className="h-6 w-6 text-festival-red" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-heading text-lg text-festival-red">Cultural Program</h3>
                      <p className="text-sm text-indigo-light mb-2">October 15, 2024 • 5:00 PM</p>
                      <p className="text-indigo-light group-hover:text-indigo transition-colors">Traditional dance performances by local artists at Central Square.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-festival-green group hover:bg-gradient-to-br hover:from-white hover:to-festival-green/5">
                  <div className="flex items-start">
                    <div className="bg-festival-green/10 p-3 rounded-full group-hover:bg-festival-green/20 transition-colors duration-300">
                      <Info className="h-6 w-6 text-festival-green" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-heading text-lg text-festival-green">Workshop</h3>
                      <p className="text-sm text-indigo-light mb-2">September 30, 2024 • 3:00 PM</p>
                      <p className="text-indigo-light group-hover:text-indigo transition-colors">Learn traditional Bengali alpana art with master craftsman Binoy Das.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-festival-blue group hover:bg-gradient-to-br hover:from-white hover:to-festival-blue/5">
                  <div className="flex items-start">
                    <div className="bg-festival-blue/10 p-3 rounded-full group-hover:bg-festival-blue/20 transition-colors duration-300">
                      <Users className="h-6 w-6 text-festival-blue" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-heading text-lg text-festival-blue">Pre-Puja Meeting</h3>
                      <p className="text-sm text-indigo-light mb-2">September 25, 2024 • 6:00 PM</p>
                      <p className="text-indigo-light group-hover:text-indigo transition-colors">All para representatives gather at Town Hall for coordination meeting.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* New call to action for events */}
              <div className="mt-12 text-center">
                <Link 
                  to="/events" 
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-festival-red via-festival-blue to-festival-green bg-size-200 bg-pos-0 text-cream font-medium rounded-md hover:bg-pos-100 transition-all duration-500 hover:shadow-lg group"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>View All Events</span>
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </section>
          
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
