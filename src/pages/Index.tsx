
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Camera, Calendar, Map, Info, Clock } from 'lucide-react';
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
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      title: "Para Showcase",
      description: "Explore the vibrant celebrations across neighborhoods",
      icon: Map,
      path: "/para-showcase",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23"
    },
    {
      title: "Gallery",
      description: "A visual feast of breathtaking puja moments",
      icon: Camera,
      path: "/gallery",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be"
    },
    {
      title: "Puja Schedule",
      description: "Detailed timings of all rituals and events",
      icon: Calendar,
      path: "/puja-schedule",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
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
              <div className="hero-overlay"></div>
            </div>
            
            <GoldenParticles />

            <div className="container mx-auto px-4 relative z-20 text-center">
              <h1 className="font-heading text-5xl md:text-7xl text-cream mb-4 colorful-glow">
                Utsab Unites
              </h1>
              
              <div className="mt-4 mb-8 overflow-hidden h-12">
                <p className="typewriter-text text-xl md:text-2xl text-cream">
                  Chandannagar's Soul, United in Celebration
                </p>
              </div>
              
              <div className="mt-12">
                <Link 
                  to="/puja-unveiled" 
                  className="px-8 py-3 bg-festival-red text-cream font-medium rounded-md hover:bg-festival-red-dark transition-colors shadow-lg hover:shadow-xl"
                >
                  Begin Your Digital Pilgrimage
                </Link>
              </div>
            </div>
            
            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-8 h-8 border-t-2 border-r-2 border-cream rotate-[135deg]"></div>
            </div>
          </section>
          
          {/* News Ticker */}
          <NewsTicker />

          {/* Countdown Section */}
          <section className="py-16 bg-cream">
            <div className="container mx-auto px-4">
              <h2 className="section-heading text-center">Puja Countdown</h2>
              <div className="mt-8 max-w-3xl mx-auto">
                <CountdownTimer />
              </div>
            </div>
          </section>
          
          {/* Explore the Utsab - Navigation Tiles */}
          <section className="py-16 bg-gradient-to-b from-cream to-white">
            <div className="container mx-auto px-4">
              <h2 className="section-heading text-center">Explore the Utsab</h2>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {navigationType.map((item, index) => (
                  <NavigationTile 
                    key={index}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    path={item.path}
                    backgroundImage={item.image}
                  />
                ))}
              </div>
            </div>
          </section>
          
          {/* Featured Para of the Week */}
          <section className="py-16 bg-festival-blue/5">
            <div className="container mx-auto px-4">
              <h2 className="section-heading">Featured Para of the Week</h2>
              <div className="mt-10 max-w-3xl">
                <FeaturedPara 
                  title="Barabaazar Jagadhatri Club"
                  description="Celebrating their 75th year of puja, Barabaazar Jagadhatri Club has crafted an extraordinary pandal inspired by the temples of South India, featuring intricate wooden carvings and traditional architecture."
                  imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  accolades="Winners of Best Illumination 2023"
                  link="/para/barabazar"
                />
              </div>
            </div>
          </section>
          
          {/* Artisan's Canvas - Spotlight Snippet */}
          <section className="py-16 bg-cream">
            <div className="container mx-auto px-4">
              <h2 className="section-heading">Artisan's Canvas</h2>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                <div className="col-span-1">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Master Craftsman Ramesh Kumar" 
                    className="w-full h-64 object-cover rounded-xl shadow-md"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <h3 className="font-heading text-2xl mb-3 text-festival-blue">Master Craftsman Ramesh Kumar</h3>
                  <p className="text-lg font-medium mb-2 text-indigo-light">Lighting Designer & Installation Artist</p>
                  <p className="mb-6 text-indigo-light">"My passion is to create illuminations that tell a story. Each installation is a narrative woven with lights, bringing myths and traditions to life through modern technology."</p>
                  <Link 
                    to="/artisan/ramesh-kumar" 
                    className="px-6 py-2 bg-festival-green text-white font-medium rounded-md hover:bg-festival-green-dark transition-colors"
                  >
                    Meet the Artist
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Mini-Map (Interactive) */}
          <section className="py-16 bg-gradient-to-b from-cream to-festival-blue/5">
            <div className="container mx-auto px-4">
              <h2 className="section-heading text-center">Interactive Mini-Map</h2>
              <div className="mt-10 h-[400px] bg-indigo/5 rounded-xl rainbow-border p-4 flex items-center justify-center">
                <p className="text-indigo-light">Interactive map will be available during the puja celebration</p>
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
