import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { Search, ArrowUpRight, ArrowLeft, Archive, ShoppingBag } from 'lucide-react';

const categories = ['All', 'General', 'Timeline', 'Consultation', 'Love'];

const ProductCard: React.FC<{ product: Product; className?: string }> = ({ product, className = '' }) => {
  const hasImage = product.image && !product.image.includes('placeholder');

  const handleClick = (e: React.MouseEvent) => {
    if (product.etsyUrl) {
      window.open(product.etsyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`group cursor-pointer flex flex-col h-full p-6 hover:bg-white/5 transition-colors duration-500 ${className}`}
    >
      {/* Image Container - Only render if hasImage is true */}
      {hasImage ? (
        <div className="relative w-full overflow-hidden mb-6 bg-[#111] border border-white/5 aspect-[3/4]">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-full object-cover object-center transition-all duration-700 ease-out 
                         filter grayscale contrast-[1.15] brightness-75 
                         group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105"
            />
            {/* Noise Overlay for Texture Integration */}
            <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            ></div>
            
            <div className="absolute top-3 left-3 z-10">
                <span className="bg-black/80 backdrop-blur-sm border border-white/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white group-hover:bg-white group-hover:text-black transition-colors">
                    {product.category}
                </span>
            </div>
        </div>
      ) : (
        /* Text-only layout for placeholder items */
        <div className="mb-6">
            <span className="border border-white/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-sibyl-gray group-hover:text-white group-hover:border-white transition-colors">
                {product.category}
            </span>
        </div>
      )}
      
      <div className="flex flex-col justify-between flex-grow">
        <div>
            <h3 className="font-display font-bold text-white text-2xl uppercase leading-none mb-2 group-hover:underline decoration-1 underline-offset-4 transition-all">
                {product.title}
            </h3>
            <p className="font-sans text-sibyl-gray text-sm leading-relaxed mb-4 transition-colors group-hover:text-white/80 line-clamp-2">
                {product.description}
            </p>
        </div>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10 group-hover:border-white/30 transition-colors">
            <span className="font-display font-bold text-lg text-white">{product.price}</span>
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    if (product.etsyUrl) window.open(product.etsyUrl, '_blank', 'noopener,noreferrer');
                }}
                className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform"
                title="View on Etsy"
            >
                <ArrowUpRight className="w-4 h-4" />
            </button>
        </div>
      </div>
    </div>
  );
};

export const ProductCatalog: React.FC = () => {
  const [viewMode, setViewMode] = useState<'featured' | 'archive'>('featured');
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter Logic
  const filteredProducts = useMemo(() => {
    let productList = PRODUCTS;

    // "Featured" mode only shows items with real images (not placeholders)
    if (viewMode === 'featured') {
        productList = PRODUCTS.filter(p => p.image && !p.image.includes('placeholder'));
    }

    return productList.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [viewMode, activeCategory, searchQuery]);

  const switchToArchive = () => {
      setActiveCategory('All'); // Reset filters to ensure user sees all items
      setSearchQuery('');
      setViewMode('archive');
  };

  return (
    <section id="collection" className="bg-sibyl-dark text-white relative z-20 border-t border-white/10 min-h-[50vh]">
      <div className="container mx-auto px-0">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row border-b border-white/10">
            <div className="lg:w-1/3 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
                {viewMode === 'archive' && (
                    <button 
                        onClick={() => setViewMode('featured')}
                        className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sibyl-gray mb-6 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Curated
                    </button>
                )}
                <h2 className="font-display font-bold text-6xl md:text-7xl text-white leading-[0.85] uppercase tracking-tighter">
                    {viewMode === 'featured' ? (
                        <>Curated<br/>Readings</>
                    ) : (
                        <>Full<br/>Archive</>
                    )}
                </h2>
            </div>
            
            {/* Controls */}
            <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-between gap-8">
                 <div className="relative w-full max-w-md">
                    <input 
                        type="text" 
                        placeholder="SEARCH CATALOG..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent border border-white/20 rounded-full py-3 pl-6 pr-12 text-white focus:outline-none focus:border-white focus:bg-white/5 font-sans text-sm uppercase tracking-wider placeholder:text-sibyl-gray transition-all"
                    />
                    <Search className="absolute right-4 top-3.5 w-4 h-4 text-sibyl-gray" />
                 </div>

                 <div className="flex flex-wrap gap-3">
                    {categories.map(cat => (
                        <button 
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`font-display font-bold text-sm uppercase px-6 py-2 rounded-full border transition-all duration-300
                                ${activeCategory === cat 
                                    ? 'bg-white text-black border-white' 
                                    : 'bg-transparent text-white border-white/20 hover:border-white'}
                            `}
                        >
                            {cat}
                        </button>
                    ))}
                 </div>
            </div>
        </div>

        {/* View Mode Switcher: Horizontal Scroll vs Grid */}
        {viewMode === 'featured' ? (
             /* Horizontal Scroll Layout */
             <div className="flex overflow-x-auto pb-8 hide-scrollbar border-b border-white/10">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="w-[85vw] md:w-[350px] border-r border-white/10 shrink-0">
                            <ProductCard product={product} />
                        </div>
                    ))
                ) : (
                    <div className="w-full py-32 text-center border-r border-white/10">
                        <p className="font-display text-2xl text-sibyl-gray uppercase">No results found.</p>
                        <button 
                            onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                            className="mt-6 font-sans text-sm underline underline-offset-4 text-white"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
                {/* Spacer for right padding impact */}
                <div className="min-w-[1px] md:min-w-[1px]"></div>
             </div>
        ) : (
             /* Archive Grid Layout */
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-white/10 border-b border-white/10">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="border-r border-b border-white/10">
                             <ProductCard product={product} />
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-32 text-center border-b border-white/10">
                        <p className="font-display text-2xl text-sibyl-gray uppercase">No results found.</p>
                        <button 
                            onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                            className="mt-6 font-sans text-sm underline underline-offset-4 text-white"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
             </div>
        )}

        {/* Footer / Archive Toggle */}
        {viewMode === 'featured' && (
            <div className="py-16 text-center border-b border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer" onClick={switchToArchive}>
                 <p className="font-sans text-sibyl-gray text-sm mb-2">Looking for something specific?</p>
                 <button className="font-display font-bold text-2xl uppercase tracking-wider flex items-center justify-center gap-3">
                    <Archive className="w-6 h-6" /> View Full Archive ({PRODUCTS.length} Items)
                 </button>
            </div>
        )}
      </div>
    </section>
  );
};