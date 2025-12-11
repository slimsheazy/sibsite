import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
  return (
    <div className="group relative flex flex-col cursor-pointer">
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-stone-200">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
        
        {/* Quick Add Button */}
        <button className="absolute bottom-0 left-0 w-full bg-sibyl-black text-white py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-sans text-xs uppercase tracking-widest">
            Add to Cart
        </button>
      </div>
      
      <div className="pt-4 flex justify-between items-start">
        <div>
            <h3 className="font-serif text-lg text-sibyl-black group-hover:italic transition-all">{product.title}</h3>
            <p className="font-sans text-xs text-sibyl-gray uppercase tracking-wide mt-1">{product.category}</p>
        </div>
        <span className="font-sans text-sm font-medium text-sibyl-black">{product.price}</span>
      </div>
    </div>
  );
};

export const ProductGrid: React.FC = () => {
  return (
    <section id="collection" className="py-24 px-6 md:px-12 bg-[#f2f0e9]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-sibyl-black">
                Current<br/>Selections
            </h2>
            <div className="hidden md:block pb-2">
                <p className="text-right font-sans text-sm text-sibyl-gray max-w-xs">
                    Handpicked items sourced from estates and artisans across Europe and the Americas.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <button className="px-8 py-3 border border-sibyl-black text-sibyl-black font-sans text-xs uppercase tracking-widest hover:bg-sibyl-black hover:text-white transition-colors duration-300">
                View All Listings
            </button>
        </div>
      </div>
    </section>
  );
};
