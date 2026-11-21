"use client";

import React from "react";
import Link from "next/link";
import { BearLogo, FacebookIcon, InstagramIcon, YoutubeIcon } from "./Icons";
import { Heart, ShieldCheck, Sparkles, Truck, Phone, Mail, MapPin } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Footer() {
  const { setSelectedCategory } = useCart();

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    const element = document.getElementById("popular");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white border-t border-stone-200/80 pt-12 pb-24 lg:pb-12 text-stone-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-stone-100">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center shadow-xs group-hover:scale-105 transition">
                <BearLogo className="w-7 h-7" />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-stone-900 block leading-tight">
                  Zo<span className="text-rose-500">zu</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-rose-500 block">
                  Gentle Care. Happy Baby.
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Dermatologist approved and pediatrician formulated baby cosmetics. Nurturing your baby's delicate skin with natural, hypoallergenic botanicals.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white flex items-center justify-center transition shadow-xs"
              >
                <InstagramIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white flex items-center justify-center transition shadow-xs"
              >
                <FacebookIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white flex items-center justify-center transition shadow-xs"
              >
                <YoutubeIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Shop Categories */}
          <div>
            <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-500" />
              Shop Categories
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleCategoryClick("Skincare & Lotions")}
                  className="text-stone-600 hover:text-rose-600 transition hover:translate-x-1 inline-block"
                >
                  Skincare & Lotions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("Shampoos & Washes")}
                  className="text-stone-600 hover:text-rose-600 transition hover:translate-x-1 inline-block"
                >
                  Shampoos & Washes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("Creams & Moisturizers")}
                  className="text-stone-600 hover:text-rose-600 transition hover:translate-x-1 inline-block"
                >
                  Creams & Moisturizers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("Diaper Rash Care")}
                  className="text-stone-600 hover:text-rose-600 transition hover:translate-x-1 inline-block"
                >
                  Diaper Rash Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("Baby Sun Care")}
                  className="text-stone-600 hover:text-rose-600 transition hover:translate-x-1 inline-block"
                >
                  Baby Sun Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("Baby Care Gift Kits")}
                  className="text-stone-600 hover:text-rose-600 transition hover:translate-x-1 inline-block"
                >
                  Baby Care Gift Kits
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care & Support */}
          <div>
            <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-rose-500" />
              Customer Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600">
              <li>
                <a href="#why-zozu" className="hover:text-rose-600 transition hover:translate-x-1 inline-block">
                  Why Choose Zozu
                </a>
              </li>
              <li>
                <a href="#popular" className="hover:text-rose-600 transition hover:translate-x-1 inline-block">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#popular" className="hover:text-rose-600 transition hover:translate-x-1 inline-block">
                  Shipping & Free Returns
                </a>
              </li>
              <li>
                <a href="#popular" className="hover:text-rose-600 transition hover:translate-x-1 inline-block">
                  Pediatrician Certifications
                </a>
              </li>
              <li>
                <a href="#popular" className="hover:text-rose-600 transition hover:translate-x-1 inline-block">
                  Contact Care Team
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Our Promise */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              The Zozu Promise
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Every drop is 100% cruelty-free, paraben-free, sulfate-free, and formulated with certified organic calming botanicals.
            </p>

            <div className="space-y-2 pt-2 text-xs sm:text-sm text-stone-600">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <span>+91 1800-266-9698 (Toll Free)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <span>care@zozubaby.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Badges */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Zozu Baby Care Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <span className="hover:text-rose-500 transition cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-rose-500 transition cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-rose-500 transition cursor-pointer">Dermatologist Safe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
