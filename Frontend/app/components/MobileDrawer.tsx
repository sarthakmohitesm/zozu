"use client";

import React from "react";
import { X, Sparkles, ChevronRight, Phone, Mail, Heart, HelpCircle } from "lucide-react";
import { BearLogo } from "./Icons";
import { useCart } from "../context/CartContext";

const CATEGORIES = [
  "Skincare & Lotions",
  "Shampoos & Washes",
  "Creams & Moisturizers",
  "Diaper Rash Care",
  "Baby Sun Care",
  "Baby Care Gift Kits",
];

export default function MobileDrawer() {
  const { isMobileMenuOpen, setIsMobileMenuOpen, setSelectedCategory, selectedCategory } = useCart();

  if (!isMobileMenuOpen) return null;

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setIsMobileMenuOpen(false);
    const element = document.getElementById("popular");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pr-10">
        <div className="w-screen max-w-xs bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/70">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center shadow-xs">
                <BearLogo className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-stone-900 block leading-tight">
                  Zo<span className="text-rose-500">zu</span>
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-rose-500 block">
                  Gentle Baby Care
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6 baby-scrollbar">
            {/* Categories without amount count */}
            <div>
              <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-2.5 px-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                Baby Categories
              </p>
              <div className="space-y-1">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => handleSelectCategory(cat)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition text-left ${
                        isActive
                          ? "bg-rose-500 text-white shadow-xs"
                          : "text-stone-700 hover:bg-rose-50 hover:text-rose-600"
                      }`}
                    >
                      <span>{cat}</span>
                      <ChevronRight className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-stone-400"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick sections */}
            <div className="pt-2 border-t border-stone-100">
              <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-2.5 px-2">
                Quick Links
              </p>
              <div className="space-y-1 text-xs">
                <a
                  href="#why-zozu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-xl text-stone-700 hover:bg-rose-50 hover:text-rose-600 transition"
                >
                  <span className="flex items-center gap-2">
                    <Heart className="w-3.5 h-3.5 text-rose-500" />
                    Why Choose Zozu
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                </a>
                <a
                  href="#popular"
                  onClick={() => {
                    setSelectedCategory("All");
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between px-3 py-2 rounded-xl text-stone-700 hover:bg-rose-50 hover:text-rose-600 transition"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                    All Baby Essentials
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                </a>
              </div>
            </div>

            {/* Helpline banner */}
            <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100 text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-rose-800">
                <Phone className="w-3.5 h-3.5 text-rose-600" />
                <span>Parent Care Helpline</span>
              </div>
              <p className="text-[11px] text-stone-600 leading-snug">
                Need help picking the best formula for your newborn?
              </p>
              <div className="text-xs font-bold text-rose-600">
                +91 1800-266-9698
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
