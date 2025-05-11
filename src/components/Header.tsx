
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Puja Unveiled', path: '/puja-unveiled' },
    { name: 'Para Showcase', path: '/para-showcase' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Visitor\'s Guide', path: '/visitors-guide' },
    { name: 'About Us', path: '/about' },
  ];

  // Function to determine if a path is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Function to get a color for each nav item based on its index
  const getNavItemColor = (index, isScrolled) => {
    if (isScrolled) {
      // Colors for scrolled state
      const colors = ['text-festival-blue', 'text-festival-green', 'text-festival-red'];
      return colors[index % colors.length];
    } else {
      // Default to cream for non-scrolled state
      return 'text-cream';
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cream/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className={`font-heading font-bold text-2xl md:text-3xl ${
            isScrolled
              ? 'bg-gradient-to-r from-festival-blue via-festival-green to-festival-red bg-clip-text text-transparent'
              : 'text-cream colorful-glow'
          }`}>
            Utsab Unites
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item, index) => {
            const isActiveRoute = isActive(item.path);
            const colorClass = getNavItemColor(index, isScrolled);
            
            return (
              <Link 
                key={item.name} 
                to={item.path}
                className={`fancy-underline font-medium ${colorClass} ${
                  isActiveRoute 
                    ? isScrolled ? 'font-bold' : 'font-bold underline' 
                    : 'hover:text-festival-red transition-colors duration-300'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-festival-red' : 'text-cream'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-festival-blue' : 'text-cream'}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full w-full bg-cream shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navigationItems.map((item, index) => {
              const isActiveRoute = isActive(item.path);
              const mobileColors = ['text-festival-blue', 'text-festival-green', 'text-festival-red'];
              const mobileColor = mobileColors[index % mobileColors.length];
              
              return (
                <Link 
                  key={item.name} 
                  to={item.path}
                  className={`${mobileColor} ${
                    isActiveRoute ? 'font-bold' : 'font-medium'
                  } py-2 border-b border-festival-blue/10 transition-colors duration-300 flex items-center`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="h-2 w-2 rounded-full bg-current mr-2"></span>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
