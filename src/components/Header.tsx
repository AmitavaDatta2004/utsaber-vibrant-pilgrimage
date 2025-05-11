
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Puja Unveiled', path: '/puja-unveiled' },
    { name: 'Para Showcase', path: '/para-showcase' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Visitor\'s Guide', path: '/visitors-guide' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className={`font-heading font-bold text-2xl md:text-3xl ${isScrolled ? 'text-saffron' : 'text-cream golden-glow'}`}>
            Utsab Unites
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`fancy-underline font-medium ${isScrolled ? 'text-indigo' : 'text-cream'} hover:text-saffron transition-colors duration-300`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-indigo' : 'text-cream'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-indigo' : 'text-cream'}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full w-full bg-cream shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className="text-indigo hover:text-saffron font-medium py-2 border-b border-saffron/10 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
