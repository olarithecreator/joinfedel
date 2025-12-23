import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'glass-dark shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link to="/" className="text-white text-xl font-bold tracking-[0.2em] transition-all duration-300 hover:text-purple-400">
            FEDEL
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {isHomePage ? (
              <>
                <a href="#about" className="text-white/80 hover:text-purple-400 transition-all duration-300 text-sm tracking-wide relative group">
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <Link to="/podcast" className="text-white/80 hover:text-purple-400 transition-all duration-300 text-sm tracking-wide relative group">
                  Podcast
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <a href="#contact" className="text-white/80 hover:text-purple-400 transition-all duration-300 text-sm tracking-wide relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </>
            ) : (
              <>
                <Link to="/" className="text-white/80 hover:text-purple-400 transition-all duration-300 text-sm tracking-wide relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/podcast" className={`transition-all duration-300 text-sm tracking-wide relative group ${
                  location.pathname === '/podcast' ? 'text-purple-400' : 'text-white/80 hover:text-purple-400'
                }`}>
                  Podcast
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <a href="mailto:leaders_fedel@outlook.com" className="text-white/80 hover:text-purple-400 transition-all duration-300 text-sm tracking-wide relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white hover:text-purple-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-dark rounded-lg mt-4 mb-6 animate-fade-in">
            <nav className="py-6 px-6 space-y-6">
              {isHomePage ? (
                <>
                  <a href="#about" className="block text-white hover:text-purple-400 transition-colors text-sm tracking-wide">
                    About Us
                  </a>
                  <Link to="/podcast" className="block text-white hover:text-purple-400 transition-colors text-sm tracking-wide">
                    Podcast
                  </Link>
                  <a href="#contact" className="block text-white hover:text-purple-400 transition-colors text-sm tracking-wide">
                    Contact
                  </a>
                </>
              ) : (
                <>
                  <Link to="/" className="block text-white hover:text-purple-400 transition-colors text-sm tracking-wide">
                    Home
                  </Link>
                  <Link to="/podcast" className={`block transition-colors text-sm tracking-wide ${
                    location.pathname === '/podcast' ? 'text-purple-400' : 'text-white hover:text-purple-400'
                  }`}>
                    Podcast
                  </Link>
                  <a href="mailto:leaders_fedel@outlook.com" className="block text-white hover:text-purple-400 transition-colors text-sm tracking-wide">
                    Contact
                  </a>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'glass-dark shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link to="/" className="text-white text-xl font-bold tracking-[0.2em] transition-all duration-300 hover:text-purple-400">
            FEDEL
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {isHomePage ? (
              <>
                <a href="#about" className="text-white/80 hover:text-purple-400 transition-all duration-300 text-sm tracking-wide relative group">
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <Link to="/podcast" className="text-white/80 hover:text-purple-400 transition-all duration-300 text-sm tracking-wide relative group">
                  Podcast
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <a href="#contact" className="text-white/80 hover:text-purple-400 transition-all duration-300 text-sm tracking-wide relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </>
            ) : (
              <>
                <Link to="/" className="text-white/80 hover:text-purple-400 transition-all duration-300 text-sm tracking-wide relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/podcast" className={`transition-all duration-300 text-sm tracking-wide relative group ${
                  location.pathname === '/podcast' ? 'text-purple-400' : 'text-white/80 hover:text-purple-400'
                }`}>
                  Podcast
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <a href="mailto:leaders_fedel@outlook.com" className="text-white/80 hover:text-purple-400 transition-all duration-300 text-sm tracking-wide relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white hover:text-purple-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-dark rounded-lg mt-4 mb-6 animate-fade-in">
            <nav className="py-6 px-6 space-y-6">
              {isHomePage ? (
                <>
                  <a href="#about" className="block text-white hover:text-purple-400 transition-colors text-sm tracking-wide">
                    About Us
                  </a>
                  <Link to="/podcast" className="block text-white hover:text-purple-400 transition-colors text-sm tracking-wide">
                    Podcast
                  </Link>
                  <a href="#contact" className="block text-white hover:text-purple-400 transition-colors text-sm tracking-wide">
                    Contact
                  </a>
                </>
              ) : (
                <>
                  <Link to="/" className="block text-white hover:text-purple-400 transition-colors text-sm tracking-wide">
                    Home
                  </Link>
                  <Link to="/podcast" className={`block transition-colors text-sm tracking-wide ${
                    location.pathname === '/podcast' ? 'text-purple-400' : 'text-white hover:text-purple-400'
                  }`}>
                    Podcast
                  </Link>
                  <a href="mailto:leaders_fedel@outlook.com" className="block text-white hover:text-purple-400 transition-colors text-sm tracking-wide">
                    Contact
                  </a>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;