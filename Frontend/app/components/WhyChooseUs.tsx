'use client';

import React from 'react';
import { Heart, ShieldCheck, Star, Truck } from 'lucide-react';
import { DoodleHeart } from './Icons';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Safe & Gentle Formulas',
      desc: 'Care with love',
      icon: Heart,
      iconBg: 'bg-rose-50 text-rose-500',
    },
    {
      title: 'Trusted by Parents',
      desc: 'Millions of Happy Moms',
      icon: ShieldCheck,
      iconBg: 'bg-pink-50 text-pink-600',
    },
    {
      title: 'Premium Quality Products',
      desc: 'Only the Best',
      icon: Star,
      iconBg: 'bg-amber-50 text-amber-500',
    },
    {
      title: 'Fast & Reliable Delivery',
      desc: 'Across India & Express',
      icon: Truck,
      iconBg: 'bg-rose-50 text-rose-500',
    },
  ];

  return (
    <section id="why-zozu" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Section Heading */}
      <div className="mb-6 sm:mb-8 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          Why Choose Zozu?
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Because your baby deserves the best.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Side: 4 Feature Cards */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-3.5 sm:gap-4">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-5 border border-rose-100 shadow-xs hover:shadow-lg hover:shadow-rose-100/50 hover:border-rose-200 transition group flex flex-col justify-between"
              >
                <div
                  className={`w-11 h-11 rounded-2xl ${feat.iconBg} flex items-center justify-center mb-3 group-hover:scale-110 transition`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-gray-800 leading-snug group-hover:text-rose-600 transition">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Photo Card of smiling baby in towel */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-16/10 sm:aspect-16/9 group bg-rose-50">
            <img
              src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=85"
              alt="Healthy baby smiling in warm white hooded towel"
              suppressHydrationWarning
              className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-rose-950/20 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-md border border-rose-100 transform rotate-1">
              <p className="text-xs sm:text-sm font-extrabold text-gray-800 flex items-center gap-1 font-serif italic">
                <span>Healthy Baby, Happy Tomorrow</span>
                <DoodleHeart className="w-4 h-4 text-rose-500 inline" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
