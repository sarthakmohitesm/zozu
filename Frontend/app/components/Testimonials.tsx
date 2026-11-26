'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';
import { DoodleHeart } from './Icons';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Heading */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              What Our Parents Say
            </h2>
            <DoodleHeart className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Real stories. Happy families.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-rose-200 text-gray-600 hover:text-rose-600 hover:border-rose-400 flex items-center justify-center shadow-xs transition active:scale-95"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={next}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-rose-200 text-gray-600 hover:text-rose-600 hover:border-rose-400 flex items-center justify-center shadow-xs transition active:scale-95"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Testimonials Grid (Desktop: 3 items, Mobile: single carousel) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((item, index) => (
          <div
            key={item.id}
            className={`bg-white rounded-3xl border border-rose-100/80 p-5 sm:p-6 shadow-xs hover:shadow-md transition relative flex flex-col justify-between ${
              index === currentIndex ? 'ring-2 ring-rose-200 md:ring-0' : 'hidden md:flex'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-rose-200" />
              </div>
              <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed italic">
                "{item.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 mt-4 border-t border-rose-50">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-rose-200 shrink-0">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                  — {item.name}
                </h4>
                {item.badge && (
                  <span className="text-[10px] text-rose-500 font-semibold">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
