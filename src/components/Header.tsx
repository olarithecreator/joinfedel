import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-lg' : 'bg-black/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/Black White Bold Modern Clothing Brand Logo.png" 
              alt="Fedel" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-300 hover:text-white font-medium text-sm tracking-wide">
                PROGRAMS
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-4">
                  <a href="#" className="block px-6 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">Leadership Development</a>
                  <a href="#" className="block px-6 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">Executive Training</a>
                  <a href="#" className="block px-6 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">Capacity Building</a>
                </div>
              </div>
            </div>
            <a href="#about" className="text-gray-300 hover:text-white font-medium text-sm tracking-wide">ABOUT</a>
            <a href="#impact" className="text-gray-300 hover:text-white font-medium text-sm tracking-wide">IMPACT</a>
            <a href="#contact" className="text-gray-300 hover:text-white font-medium text-sm tracking-wide">CONTACT</a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            <button className="bg-gray-700 text-white px-6 py-2 text-sm font-medium tracking-wide hover:bg-gray-600 transition-colors">
              APPLY
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-gray-700">
            <nav className="py-4 space-y-4">
              <a href="#programs" className="block text-gray-300 font-medium text-sm tracking-wide">PROGRAMS</a>
              <a href="#about" className="block text-gray-300 font-medium text-sm tracking-wide">ABOUT</a>
              <a href="#impact" className="block text-gray-300 font-medium text-sm tracking-wide">IMPACT</a>
              <a href="#contact" className="block text-gray-300 font-medium text-sm tracking-wide">CONTACT</a>
              <button className="bg-gray-700 text-white px-6 py-2 text-sm font-medium tracking-wide">
                APPLY
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;