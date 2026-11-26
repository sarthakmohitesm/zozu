'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { DoodleHeart } from './Icons';

interface SlideData {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  babyImage: string;
  badgeNote: string;
}

const SLIDES: SlideData[] = [
  {
    badge: 'Safe • Gentle • Trusted',
    titleLine1: 'Little Care,',
    titleLine2: 'Big Happiness',
    subtitle: 'Premium baby cosmetics for soft, healthy and happy skin.',
    ctaText: 'Shop Now',
    ctaLink: '#popular',
    babyImage: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1000&q=85',
    badgeNote: 'Because they deserve the best ♡',
  },
  {
    badge: '100% Tear-Free Formulas',
    titleLine1: 'Pure Touch,',
    titleLine2: 'Natural Glow',
    subtitle: 'Crafted with organic calendula and chamomile to soothe sensitive skin.',
    ctaText: 'Explore Lotions',
    ctaLink: '#popular',
    babyImage: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=85',
    badgeNote: 'Dermatologist tested with love ♡',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative px-3 sm:px-6 lg:px-8 pt-3 pb-6 sm:py-8 max-w-7xl mx-auto">
      {/* Outer Banner Card */}
      <div className="relative overflow-hidden rounded-3xl sm:rounded-[36px] bg-linear-to-br from-[#fff0f3] via-[#ffeff3] to-[#ffe5ec] border border-rose-200/60 shadow-lg shadow-rose-200/30">
        
        {/* Soft Background Accents */}
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-rose-200/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-pink-200/40 blur-3xl pointer-events-none" />
        
        <div className="absolute top-8 left-1/3 opacity-30 pointer-events-none hidden md:block animate-pulse">
          <Sparkles className="w-6 h-6 text-rose-400" />
        </div>
        <div className="absolute bottom-10 left-12 opacity-35 pointer-events-none hidden md:block">
          <DoodleHeart className="w-8 h-8" color="#f43f5e" />
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-rose-600 shadow-md flex items-center justify-center transition hover:scale-105 active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-rose-600 shadow-md flex items-center justify-center transition hover:scale-105 active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Content Grid */}
        <div className="px-6 py-8 sm:px-12 sm:py-12 md:py-16 lg:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12">
          
          {/* Left Column: Hero Text & Call to Action */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-rose-200/80 shadow-xs text-rose-600 font-bold text-xs sm:text-sm">
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              <span>{slide.badge}</span>
            </div>

            {/* Main Headline */}
            <div className="relative">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-[1.12]">
                <span>{slide.titleLine1}</span>
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-pink-500 relative">
                  {slide.titleLine2}
                  <span className="inline-block align-top ml-2 sm:ml-3 transform rotate-12">
                    <DoodleHeart className="w-6 h-6 sm:w-8 sm:h-8" color="#f43f5e" />
                  </span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0 font-normal leading-relaxed">
              {slide.subtitle}
            </p>

            {/* CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={slide.ctaLink}
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-linear-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-rose-300/60 hover:shadow-rose-400/70 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Baby in Towel + Cosmetic Bottles Visual */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative">
            <div className="relative max-w-sm sm:max-w-md w-full">
              
              <div className="absolute -top-3 right-2 sm:-top-5 sm:right-6 z-20 bg-white/95 backdrop-blur-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl shadow-md border border-rose-100 transform rotate-2">
                <span className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1 font-serif italic">
                  {slide.badgeNote}
                </span>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 aspect-4/3 sm:aspect-5/4 group">
                <img
                  src={slide.babyImage}
                  alt="Happy cute baby smiling"
                  suppressHydrationWarning
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {/* Floating Cosmetic Trio Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-lg border border-rose-100/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-rose-50 p-1 flex items-center justify-center shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=150&q=80"
                        alt="Baby Lotion"
                        suppressHydrationWarning
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-rose-500 uppercase tracking-wide">BabyGlow Range</p>
                      <p className="text-xs sm:text-sm font-extrabold text-gray-800 leading-tight">Gentle Lotion & Tear-Free Wash</p>
                      <p className="text-[10px] text-gray-500">Hypoallergenic & Pediatrician Approved</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 text-[11px] font-bold">
                    Safe for Newborns
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === idx
                  ? 'w-6 sm:w-8 h-2 bg-rose-500'
                  : 'w-2 h-2 bg-rose-300/70 hover:bg-rose-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
