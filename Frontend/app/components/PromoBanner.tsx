'use client';

import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, Droplets, Baby } from 'lucide-react';
import { FluffyTeddy, DoodleHeart } from './Icons';
import { useCart } from '../context/CartContext';

export default function PromoBanner() {
  const { setSelectedCategory } = useCart();

  const handleShopOffer = () => {
    setSelectedCategory(null);
    const element = document.getElementById('popular');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        
        {/* Left Offer Card: Flat 15% OFF (7 cols on desktop) */}
        <div className="lg:col-span-7 relative overflow-hidden rounded-3xl bg-linear-to-r from-[#ffe4eb] via-[#ffebf0] to-[#fce2e8] border border-rose-200/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between shadow-md shadow-rose-100">
          
          {/* Subtle Decorative Accents */}
          <div className="absolute top-3 right-1/2 opacity-30 pointer-events-none">
            <DoodleHeart className="w-6 h-6" color="#f43f5e" />
          </div>

          {/* Left Text */}
          <div className="z-10 space-y-2 sm:space-y-3 text-center sm:text-left max-w-xs sm:max-w-sm">
            <div className="inline-block px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 text-xs font-black uppercase tracking-wider">
              Limited Time Celebration
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
              Flat <span className="text-rose-500">15% OFF</span>
              <span className="block text-xl sm:text-2xl font-bold text-gray-800">
                on Baby Care Essentials
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Because every little smile matters!
            </p>
            <div className="pt-2">
              <button
                onClick={handleShopOffer}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-rose-300 transition transform hover:scale-105 active:scale-95"
              >
                <span>Shop the Offer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Mascot: 3D Fluffy Teddy Bear */}
          <div className="mt-4 sm:mt-0 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-rose-200/40 rounded-full blur-2xl transform scale-75" />
            <FluffyTeddy className="w-36 h-36 sm:w-44 sm:h-44 relative z-10 transition-transform duration-500 hover:scale-105 drop-shadow-md" />
          </div>
        </div>

        {/* Right Trust Badges (5 cols on desktop) */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-rose-100 p-6 sm:p-8 flex flex-col justify-center shadow-xs">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Badge 1 */}
            <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-rose-50/50 hover:bg-rose-50 transition border border-rose-100/60 group">
              <div className="w-11 h-11 rounded-full bg-emerald-100/80 text-emerald-600 flex items-center justify-center mb-2 shadow-xs group-hover:scale-110 transition">
                <Leaf className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-gray-900 leading-tight">
                Dermatologically
              </h4>
              <span className="text-[10px] text-gray-500 font-medium">Tested</span>
            </div>

            {/* Badge 2 */}
            <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-rose-50/50 hover:bg-rose-50 transition border border-rose-100/60 group">
              <div className="w-11 h-11 rounded-full bg-sky-100/80 text-sky-600 flex items-center justify-center mb-2 shadow-xs group-hover:scale-110 transition">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-gray-900 leading-tight">
                Hypoallergenic
              </h4>
              <span className="text-[10px] text-gray-500 font-medium">Formula</span>
            </div>

            {/* Badge 3 */}
            <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-rose-50/50 hover:bg-rose-50 transition border border-rose-100/60 group">
              <div className="w-11 h-11 rounded-full bg-amber-100/80 text-amber-600 flex items-center justify-center mb-2 shadow-xs group-hover:scale-110 transition">
                <Droplets className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-gray-900 leading-tight">
                Paraben
              </h4>
              <span className="text-[10px] text-gray-500 font-medium">Free</span>
            </div>

            {/* Badge 4 */}
            <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-rose-50/50 hover:bg-rose-50 transition border border-rose-100/60 group">
              <div className="w-11 h-11 rounded-full bg-rose-100/80 text-rose-600 flex items-center justify-center mb-2 shadow-xs group-hover:scale-110 transition">
                <Baby className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-gray-900 leading-tight">
                Safe for
              </h4>
              <span className="text-[10px] text-gray-500 font-medium">Newborns</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
