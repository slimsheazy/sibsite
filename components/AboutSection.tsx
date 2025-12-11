import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { REVIEWS } from '../constants';

export const AboutSection: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  // Auto-advance reviews
  useEffect(() => {
    const timer = setInterval(nextReview, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="bg-white text-black relative">
      
      {/* Manifesto Section (White Background) */}
      <div className="relative py-32 px-6 md:px-12 container mx-auto overflow-hidden">
        
        {/* Decorative Bear Sticker - Now properly anchored to the white section */}
        <div className="absolute -bottom-12 -left-8 md:left-0 z-0 pointer-events-auto">
           <img 
              src="https://raw.githubusercontent.com/slimsheazy/sh/12296d68dd3863f40b85ce72e2e946e37a11f306/assets/images/bearasset.jpg" 
              alt="Guardian Bear" 
              className="w-48 md:w-80 h-auto object-contain
                         filter grayscale contrast-[1.4] brightness-90
                         transition-all duration-700 ease-out cursor-help
                         hover:grayscale-0 hover:contrast-100 hover:brightness-100 hover:scale-105 hover:rotate-2"
           />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
            <div className="lg:col-span-5">
                <div className="flex items-center gap-2 mb-6">
                    <Zap className="w-5 h-5 text-black fill-current" />
                    <span className="font-display font-bold text-sm uppercase tracking-widest">
                        The Manifesto
                    </span>
                </div>
                <h2 className="font-display font-bold text-6xl md:text-7xl leading-[0.85] tracking-tighter mb-10 uppercase">
                    Intuitive<br/>Readings<br/>No Pretense
                </h2>
                
                <div className="w-24 h-2 bg-black mb-8"></div>
            </div>
            <div className="lg:col-span-7 lg:pl-12 pt-4">
                <p className="font-sans font-medium text-xl md:text-2xl leading-relaxed text-black mb-12">
                    "Hi, I'm Shea. I tell you what spirit shows me, even when it surprises us both. My readings are honest, thorough, and sometimes I'm just as shook as you are by what comes through. Real guidance for real life. No sugarcoating (sorry 🫡)"
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h4 className="font-display font-bold text-xl uppercase mb-4 border-b-2 border-black pb-2">Philosophy</h4>
                        <p className="font-sans text-black/80 leading-relaxed">
                            I spot the patterns. You handle the outcomes.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-display font-bold text-xl uppercase mb-4 border-b-2 border-black pb-2">Method</h4>
                        <p className="font-sans text-black/80 leading-relaxed">
                            Tarot, intuition, and real-time vibes to bring clarity to the chaos. 100% confidential and raw.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Brutalist Review Carousel (Dark Background) */}
      <div id="reviews" className="bg-sibyl-dark text-white py-24 px-6 md:px-12 border-t border-white/20 relative z-20">
           <div className="container mx-auto">
               <div className="flex flex-col lg:flex-row gap-16">
                   
                   {/* Carousel Controls */}
                   <div className="lg:w-1/4 flex flex-col justify-between">
                       <div>
                           <h3 className="font-display font-bold text-sm uppercase tracking-widest text-sibyl-gray mb-2">Client Reviews</h3>
                           <div className="flex items-center gap-1">
                               {[...Array(5)].map((_, i) => (
                                   <Star key={i} className="w-4 h-4 text-white fill-current" />
                               ))}
                               <span className="ml-2 font-mono text-xs text-sibyl-gray">5.0 / 5.0</span>
                           </div>
                       </div>
                       
                       <div className="flex gap-4 mt-8 lg:mt-0">
                           <button 
                                onClick={prevReview}
                                className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all"
                                aria-label="Previous Review"
                           >
                               <ArrowLeft className="w-5 h-5" />
                           </button>
                           <button 
                                onClick={nextReview}
                                className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all"
                                aria-label="Next Review"
                           >
                               <ArrowRight className="w-5 h-5" />
                           </button>
                       </div>
                   </div>

                   {/* Review Content */}
                   <div className="lg:w-3/4 relative min-h-[300px] flex flex-col justify-center">
                       <div className="animate-fade-in-up" key={currentReview}>
                           <Sparkles className="w-8 h-8 text-sibyl-gray mb-6" />
                           <p className="font-display font-bold text-3xl md:text-5xl leading-tight uppercase tracking-tight mb-8">
                               "{REVIEWS[currentReview].text}"
                           </p>
                           <div className="flex items-center gap-4">
                               <div className="w-12 h-[1px] bg-white/30"></div>
                               <p className="font-sans text-sm font-bold uppercase tracking-widest">
                                   {REVIEWS[currentReview].author}
                               </p>
                               <span className="text-sibyl-gray text-xs font-mono">
                                   {REVIEWS[currentReview].date}
                               </span>
                           </div>
                       </div>
                   </div>

               </div>
           </div>
      </div>
    </section>
  );
};
