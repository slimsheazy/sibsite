import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-sibyl-dark/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="z-50">
          <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-sibyl-light">
            SIBYLHAUS
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-display text-sm uppercase font-medium tracking-widest text-sibyl-light/70">
          <a href="#collection" className="hover:text-white transition-colors">Collection</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all">
             Cart (0)
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden gap-4">
            <ShoppingBag className="w-5 h-5 text-sibyl-light" />
            <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="z-50 text-sibyl-light"
            >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-sibyl-dark z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex flex-col items-center space-y-12 font-display text-5xl font-bold uppercase text-sibyl-light">
            <a href="#collection" onClick={() => setIsMobileMenuOpen(false)}>Collection</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
        </nav>
      </div>
    </header>
  );
};