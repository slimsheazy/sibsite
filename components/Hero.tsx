import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-sibyl-dark flex flex-col justify-center pt-20">
      
      {/* Decorative Flower Sticker */}
      <div className="absolute top-[15%] right-[5%] z-30 pointer-events-auto">
         <img 
            src="https://raw.githubusercontent.com/slimsheazy/sh/12296d68dd3863f40b85ce72e2e946e37a11f306/assets/images/flowerasset.jpg" 
            alt="Mystical Flower" 
            className="w-24 md:w-40 h-auto object-contain rotate-12 drop-shadow-2xl
                       filter grayscale contrast-[1.2] brightness-90
                       transition-all duration-700 ease-out cursor-help
                       hover:grayscale-0 hover:contrast-100 hover:brightness-100 hover:rotate-6 hover:scale-110"
         />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full min-h-[80vh]">
        
        {/* Top Label - Brutalist Style */}
        <div className="flex justify-end mb-4 md:mb-0 animate-fade-in-up">
            <div className="text-right">
                <p className="font-display font-bold text-lg md:text-xl uppercase leading-none text-white">Digital</p>
                <p className="font-display font-bold text-lg md:text-xl uppercase leading-none text-white">Interactive</p>
                <p className="font-display font-bold text-lg md:text-xl uppercase leading-none text-white">Tarot</p>
                <p className="font-display font-bold text-lg md:text-xl uppercase leading-none text-white">Brand</p>
                <p className="font-display font-bold text-lg md:text-xl uppercase leading-none text-white text-sibyl-gray">Insight + Motion</p>
            </div>
        </div>

        {/* Massive Typography */}
        <div className="relative flex flex-col items-center md:block">
            {/* Lowered z-index to 0 so it sits BEHIND the image */}
            <h1 className="font-display font-bold text-[18vw] md:text-[20vw] leading-[0.8] text-white tracking-tighter mix-blend-difference z-0 relative select-none">
                SIBYLHAUS
            </h1>
        </div>

        {/* User Image with Noir-to-Color Effect */}
        {/* Raised z-index to 20 and increased negative margin to overlap text */}
        <div className="relative w-full max-w-xl mx-auto mt-[-5rem] md:mt-[-14vw] z-20 pointer-events-auto flex justify-center">
             <div className="group relative cursor-pointer">
                 <img 
                    src="https://i.imgur.com/cKRZ2sb.png" 
                    alt="Shea - Sibylhaus" 
                    className="w-full h-auto object-contain max-h-[60vh]
                               filter grayscale contrast-[1.2] brightness-75
                               transition-all duration-700 ease-out
                               group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-[1.02]"
                 />
             </div>
        </div>

        {/* Bottom Info */}
        <div className="flex justify-between items-end mt-12 pb-12 border-b border-white/20 relative z-20">
            <div className="max-w-md">
                <p className="font-sans text-sibyl-gray text-sm md:text-base leading-relaxed">
                    I spot the patterns. You handle the outcomes.
                </p>
            </div>
            <a href="#about" className="hidden md:flex items-center gap-4 font-display font-bold uppercase tracking-widest text-white hover:text-sibyl-gray transition-colors">
                Scroll Down <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
        </div>

      </div>
    </section>
  );
};