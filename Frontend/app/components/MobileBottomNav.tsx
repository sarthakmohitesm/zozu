"use client";

import React from "react";
import { Home, Grid, Heart, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function MobileBottomNav() {
  const { cartCount, wishlist, setIsCartOpen, setSelectedCategory } = useCart();

  const scrollToCategories = () => {
    setSelectedCategory("All");
    const elem = document.getElementById("categories");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToPopular = () => {
    const elem = document.getElementById("popular");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/80 px-4 py-2 shadow-lg safe-area-pb">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Home */}
        <button
          onClick={scrollToHome}
          className="flex flex-col items-center gap-1 text-stone-600 hover:text-rose-500 py-1 px-3 transition"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium">Home</span>
        </button>

        {/* Categories */}
        <button
          onClick={scrollToCategories}
          className="flex flex-col items-center gap-1 text-stone-600 hover:text-rose-500 py-1 px-3 transition"
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-medium">Categories</span>
        </button>

        {/* Wishlist */}
        <button
          onClick={scrollToPopular}
          className="relative flex flex-col items-center gap-1 text-stone-600 hover:text-rose-500 py-1 px-3 transition"
        >
          <Heart className="w-5 h-5" />
          {wishlist.length > 0 && (
            <span className="absolute top-0 right-2 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
          <span className="text-[10px] font-medium">Wishlist</span>
        </button>

        {/* Cart Bag */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center gap-1 text-stone-600 hover:text-rose-500 py-1 px-3 transition"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-2 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center animate-pulse">
              {cartCount}
            </span>
          )}
          <span className="text-[10px] font-medium">Cart</span>
        </button>
      </div>
    </nav>
  );
}
