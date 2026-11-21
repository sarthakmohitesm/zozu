'use client';

import React from 'react';
import { CATEGORIES } from '../data/products';
import { CategoryIcon } from './Icons';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Categories() {
  const { selectedCategory, setSelectedCategory } = useCart();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Category Bar Container with Custom Pink Scrollbar */}
      <div className="flex items-center justify-between gap-3 overflow-x-auto baby-scrollbar pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(isSelected ? null : cat.id)}
                className={`group flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl border transition-all duration-200 shrink-0 text-left ${
                  isSelected
                    ? 'bg-rose-500 text-white border-rose-500 shadow-md shadow-rose-200 scale-102'
                    : 'bg-white hover:bg-rose-50/50 text-gray-800 border-rose-100 hover:border-rose-200 shadow-xs'
                }`}
              >
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                    isSelected ? 'bg-white/20' : cat.bgColor
                  }`}
                >
                  <CategoryIcon type={cat.iconType} className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span
                  className={`text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap ${
                    isSelected ? 'text-white' : 'text-gray-900 group-hover:text-rose-600'
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="shrink-0 pl-2">
          {selectedCategory ? (
            <button
              onClick={() => setSelectedCategory(null)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs sm:text-sm font-bold transition whitespace-nowrap border border-rose-200/60"
            >
              <span>Show All</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          ) : (
            <a
              href="#popular"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs sm:text-sm font-bold transition whitespace-nowrap border border-rose-200/60 group"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5 transition transform group-hover:translate-x-1" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
