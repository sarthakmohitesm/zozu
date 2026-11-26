'use client';

import React from 'react';
import Link from 'next/link';
import { BearLogo, FacebookIcon, InstagramIcon, YoutubeIcon, PinterestIcon, DoodleHeart } from './Icons';
import { Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Footer() {
  const { setSelectedCategory } = useCart();

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    const element = document.getElementById('popular');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-rose-100/80 pt-12 pb-24 lg:pb-8 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-rose-100/60">
          
          {/* Column 1: Brand & Bio (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 p-1 flex items-center justify-center transition transform group-hover:scale-105 shadow-xs">
                <BearLogo className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-gray-900 group-hover:text-rose-600 transition flex items-center gap-0.5">
                  Zo<span className="text-rose-500">zu</span>
                </span>
                <span className="text-[10px] text-gray-500 -mt-0.5 font-medium tracking-wide">
                  Gentle Care. Happy Baby.
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
              Premium baby cosmetics for a healthier, happier tomorrow.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition shadow-2xs"
              >
                <InstagramIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition shadow-2xs"
              >
                <FacebookIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition shadow-2xs"
              >
                <YoutubeIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition shadow-2xs"
              >
                <PinterestIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-bold text-gray-900 tracking-wider mb-3.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-rose-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#popular" className="hover:text-rose-600 transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="#why-zozu" className="hover:text-rose-600 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#offers" className="hover:text-rose-600 transition">
                  Offers
                </a>
              </li>
              <li>
                <a href="#help" className="hover:text-rose-600 transition">
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Service (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-bold text-gray-900 tracking-wider mb-3.5">
              Customer Service
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <a href="#popular" className="hover:text-rose-600 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#popular" className="hover:text-rose-600 transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#popular" className="hover:text-rose-600 transition">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#popular" className="hover:text-rose-600 transition">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#popular" className="hover:text-rose-600 transition">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Our Promise (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-bold text-gray-900 tracking-wider mb-3.5">
              Our Promise
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
              <li className="flex items-center gap-1.5 text-gray-700">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span>Safe & Gentle</span>
              </li>
              <li className="flex items-center gap-1.5 text-gray-700">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span>High Quality</span>
              </li>
              <li className="flex items-center gap-1.5 text-gray-700">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span>Parent Approved</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Download Our App (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-gray-900 tracking-wider">
              Download Our App
            </h4>
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-black text-white hover:bg-stone-800 transition"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.71-.93 2.73 1 .08 2.01-.48 2.63-1.23z" />
                </svg>
                <div className="text-left">
                  <div className="text-[9px] uppercase leading-none opacity-80">Download on the</div>
                  <div className="text-xs font-bold leading-tight">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-black text-white hover:bg-stone-800 transition"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.22-.924V2.738c0-.34.08-.65.22-.924zm11.24 11.24l2.584 2.584-12.02 6.87 9.436-9.454zm0-2.108L5.413 1.492l12.02 6.87-2.584 2.584zm1.488 1.488l3.18-1.817a1.5 1.5 0 0 0 0-2.646l-3.18-1.817-1.748 1.748 1.748 1.748z" />
                </svg>
                <div className="text-left">
                  <div className="text-[9px] uppercase leading-none opacity-80">GET IT ON</div>
                  <div className="text-xs font-bold leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Zozu. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-rose-500 transition cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-rose-500 transition cursor-pointer">Terms & Conditions</span>
            <span>•</span>
            <span className="hover:text-rose-500 transition cursor-pointer">Sitemap</span>
          </div>
          <div className="hidden lg:block">
            <DoodleHeart className="w-5 h-5 text-rose-400" />
          </div>
        </div>

      </div>
    </footer>
  );
}
