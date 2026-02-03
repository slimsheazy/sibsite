import React from 'react';
import { Instagram, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sibyl-dark pt-24 pb-8 border-t border-white/10 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
            <div className="max-w-xl">
                <h2 className="font-display font-bold text-6xl md:text-8xl leading-none uppercase tracking-tighter mb-6">
                    Sibylhaus
                </h2>
                <p className="font-sans text-lg text-sibyl-gray max-w-md">
                    Tarot, Divination, & Mystical Insights for the modern soul.
                </p>
            </div>
            
            <div className="grid grid-cols-2 gap-16">
                <div>
                    <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-sibyl-gray">Menu</h4>
                    <ul className="space-y-3 font-display font-bold text-xl uppercase">
                        <li><a href="#collection" className="hover:text-sibyl-gray transition-colors">Shop</a></li>
                        <li><a href="#about" className="hover:text-sibyl-gray transition-colors">About</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-sibyl-gray">Socials</h4>
                    <ul className="space-y-3 font-display font-bold text-xl uppercase">
                        <li>
                            <a href="https://instagram.com/sibylhaus.co" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sibyl-gray transition-colors">
                                Instagram <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </li>
                        <li>
                            <a href="https://tiktok.com/@sibylhaus" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sibyl-gray transition-colors">
                                TikTok <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </li>
                        <li>
                            <a href="https://pinterest.com/sibylhaus" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sibyl-gray transition-colors">
                                Pinterest <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <p className="font-sans text-xs text-sibyl-gray uppercase tracking-wider">© 2025 Sibylhaus. All Rights Reserved.</p>
            <div className="font-sans text-xs text-sibyl-gray mt-4 md:mt-0 uppercase tracking-wider">
                Design by Sibyl Digital
            </div>
        </div>
      </div>
    </footer>
  );
};