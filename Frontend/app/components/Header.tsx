'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, Heart, ChevronDown, X, Star, ArrowRight, Sparkles, Zap, Truck, Headphones } from 'lucide-react';
import { BearLogo } from './Icons';
import { useCart } from '../context/CartContext';
import { CATEGORIES, POPULAR_PRODUCTS } from '../data/products';
import { Product } from '../types';

interface HeaderProps {
  onOpenMobileMenu?: () => void;
}

export default function Header({ onOpenMobileMenu }: HeaderProps) {
  const {
    totalItems,
    wishlist,
    setIsCartOpen,
    setIsMobileMenuOpen,
    searchQuery,
    setSearchQuery,
    setSelectedCategory,
    showToast,
    addToCart,
    openDirectBuy,
  } = useCart();

  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const shopMenuRef = useRef<HTMLDivElement>(null);
  const helpMenuRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  const shopTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const helpTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus & search suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (shopMenuRef.current && !shopMenuRef.current.contains(event.target as Node)) {
        setIsShopMenuOpen(false);
      }
      if (helpMenuRef.current && !helpMenuRef.current.contains(event.target as Node)) {
        setIsHelpMenuOpen(false);
      }
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node) &&
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsSearchFocused(false);
        setIsShopMenuOpen(false);
        setIsHelpMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (shopTimeoutRef.current) clearTimeout(shopTimeoutRef.current);
      if (helpTimeoutRef.current) clearTimeout(helpTimeoutRef.current);
    };
  }, []);

  const handleShopMouseEnter = () => {
    if (shopTimeoutRef.current) clearTimeout(shopTimeoutRef.current);
    setIsShopMenuOpen(true);
  };

  const handleShopMouseLeave = () => {
    shopTimeoutRef.current = setTimeout(() => {
      setIsShopMenuOpen(false);
    }, 200);
  };

  const handleHelpMouseEnter = () => {
    if (helpTimeoutRef.current) clearTimeout(helpTimeoutRef.current);
    setIsHelpMenuOpen(true);
  };

  const handleHelpMouseLeave = () => {
    helpTimeoutRef.current = setTimeout(() => {
      setIsHelpMenuOpen(false);
    }, 200);
  };

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    setIsShopMenuOpen(false);
    const element = document.getElementById('popular');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHelpAction = (type: string) => {
    setIsHelpMenuOpen(false);
    if (type === 'track') {
      showToast('📦 Tracking: Order status sent to your registered email & SMS');
    } else if (type === 'support') {
      showToast('📞 24/7 Helpline: +91 1800-ZOZU-CARE (Toll Free)');
    } else if (type === 'returns') {
      showToast('🔄 15-Day hassle-free returns on all unopened cosmetics');
    }
  };

  const query = searchQuery.trim().toLowerCase();
  const suggestedProducts = query
    ? POPULAR_PRODUCTS.filter(
        (prod) =>
          prod.name.toLowerCase().includes(query) ||
          prod.brand.toLowerCase().includes(query) ||
          prod.category.toLowerCase().includes(query) ||
          (prod.tagline && prod.tagline.toLowerCase().includes(query))
      )
    : [];

  const matchingCategories = query
    ? CATEGORIES.filter(
        (cat) =>
          cat.name.toLowerCase().includes(query) ||
          cat.id.toLowerCase().includes(query)
      )
    : [];

  const handleSelectProduct = (product: Product) => {
    setSearchQuery(product.name);
    setIsSearchFocused(false);
    setMobileSearchOpen(false);
    const el = document.getElementById('popular');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchFocused(false);
    setMobileSearchOpen(false);
    const el = document.getElementById('popular');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trendingSearches = [
    'Baby Sunscreen SPF 50',
    'Baby Lotion',
    'Tear-Free Shampoo',
    'Diaper Rash Cream',
    'Baby Wash',
  ];

  return (
    <>
      {/* Amazon-Style Faded Backdrop */}
      {isSearchFocused && (
        <div
          className="fixed inset-0 bg-stone-950/65 backdrop-blur-xs z-30 transition-opacity duration-300 animate-in fade-in"
          onClick={() => setIsSearchFocused(false)}
          aria-hidden="true"
        />
      )}

      {/* Top Announcement Bar */}
      <div className="bg-[#fff1f3] border-b border-rose-100/80 text-[11px] sm:text-xs text-stone-600 font-medium py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5 text-rose-500" />
            <span>Free Shipping on orders above ₹999</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Pure & Safe for Your Little One</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Headphones className="w-3.5 h-3.5 text-rose-500" />
            <span>24/7 Customer Support</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20 gap-3">
            
            {/* Mobile Menu Button + Brand Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onOpenMobileMenu || (() => setIsMobileMenuOpen(true))}
                className="lg:hidden p-2 -ml-2 text-gray-700 hover:text-rose-500 rounded-xl hover:bg-rose-50 focus:outline-none"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              <a href="#" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-rose-50 p-1 flex items-center justify-center transition transform group-hover:scale-105 shadow-xs">
                  <BearLogo className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-gray-900 group-hover:text-rose-600 transition flex items-center gap-0.5">
                    Baby<span className="text-rose-500">Glow</span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-gray-500 -mt-1 font-medium tracking-wide">
                    Gentle Care. Happy Baby.
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Center Links */}
            <nav className="hidden lg:flex items-center gap-1.5 text-sm font-semibold">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setSelectedCategory(null);
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-full bg-rose-100/70 text-rose-600 hover:bg-rose-200/70 transition shadow-xs"
              >
                Home
              </a>

              {/* Shop Dropdown */}
              <div
                ref={shopMenuRef}
                className="relative"
                onMouseEnter={handleShopMouseEnter}
                onMouseLeave={handleShopMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setIsShopMenuOpen((prev) => !prev)}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-full transition ${
                    isShopMenuOpen
                      ? 'bg-rose-50 text-rose-600 ring-2 ring-rose-200'
                      : 'text-gray-700 hover:text-rose-600 hover:bg-rose-50'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={isShopMenuOpen}
                >
                  <span>Shop</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
                      isShopMenuOpen ? 'rotate-180 text-rose-500' : ''
                    }`}
                  />
                </button>

                {isShopMenuOpen && (
                  <div
                    className="absolute top-full left-0 pt-1.5 z-50 w-64 animate-in fade-in-50 zoom-in-95 duration-150"
                    onMouseEnter={handleShopMouseEnter}
                    onMouseLeave={handleShopMouseLeave}
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-rose-100 p-2 space-y-1">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => handleSelectCategory(cat.id)}
                          className="w-full text-left flex items-center px-3.5 py-2.5 rounded-xl text-xs font-semibold text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition group"
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 group-hover:scale-125 transition-transform" />
                            <span>{cat.name}</span>
                          </span>
                        </button>
                      ))}
                      <div className="pt-1 mt-1 border-t border-rose-50">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedCategory(null);
                            setIsShopMenuOpen(false);
                            const el = document.getElementById('popular');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="w-full text-center py-1.5 text-[11px] font-bold text-rose-500 hover:text-rose-700 hover:bg-rose-50/50 rounded-lg transition"
                        >
                          View All Baby Products →
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About Link */}
              <a
                href="#why-zozu"
                className="px-3.5 py-2 rounded-full text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition"
              >
                About
              </a>

              {/* Offers Link */}
              <a
                href="#offers"
                className="px-3.5 py-2 rounded-full text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition"
              >
                Offers
              </a>

              {/* Help Dropdown */}
              <div
                ref={helpMenuRef}
                className="relative"
                onMouseEnter={handleHelpMouseEnter}
                onMouseLeave={handleHelpMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setIsHelpMenuOpen((prev) => !prev)}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-full transition ${
                    isHelpMenuOpen
                      ? 'bg-rose-50 text-rose-600 ring-2 ring-rose-200'
                      : 'text-gray-700 hover:text-rose-600 hover:bg-rose-50'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={isHelpMenuOpen}
                >
                  <span>Help</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
                      isHelpMenuOpen ? 'rotate-180 text-rose-500' : ''
                    }`}
                  />
                </button>

                {isHelpMenuOpen && (
                  <div
                    className="absolute top-full left-0 pt-1.5 z-50 w-52 animate-in fade-in-50 zoom-in-95 duration-150"
                    onMouseEnter={handleHelpMouseEnter}
                    onMouseLeave={handleHelpMouseLeave}
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-rose-100 p-2 space-y-1">
                      <button
                        type="button"
                        onClick={() => handleHelpAction('track')}
                        className="w-full text-left flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition"
                      >
                        <span>📦</span>
                        <span>Track Order</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleHelpAction('support')}
                        className="w-full text-left flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition"
                      >
                        <span>💬</span>
                        <span>24/7 Live Support</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleHelpAction('returns')}
                        className="w-full text-left flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition"
                      >
                        <span>🔄</span>
                        <span>Return Policy</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop Amazon-Style Search Bar & Suggestions */}
            <div
              ref={searchContainerRef}
              className={`hidden md:flex items-center flex-1 max-w-sm lg:max-w-md mx-4 relative transition-all duration-200 ${
                isSearchFocused ? 'z-40 scale-102' : 'z-20'
              }`}
            >
              <form onSubmit={handleSearchSubmit} className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for baby care..."
                  value={searchQuery}
                  onFocus={() => setIsSearchFocused(true)}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (!isSearchFocused) setIsSearchFocused(true);
                  }}
                  className={`w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm rounded-full transition duration-200 text-gray-800 placeholder-gray-400 border ${
                    isSearchFocused
                      ? 'bg-white ring-2 ring-rose-400 border-rose-400 shadow-xl'
                      : 'bg-gray-100/90 hover:bg-gray-100 focus:bg-white border-transparent'
                  } focus:outline-none`}
                />
                <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 transition ${
                  isSearchFocused ? 'text-rose-500' : 'text-gray-400'
                }`} />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </form>

              {/* Suggestions Dropdown */}
              {isSearchFocused && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-rose-100 overflow-hidden z-50 animate-in fade-in-50 zoom-in-98 duration-150">
                  {query ? (
                    <div>
                      <div className="px-4 py-2.5 bg-rose-50/60 border-b border-rose-100/60 flex items-center justify-between text-xs">
                        <span className="font-bold text-gray-700">
                          Suggested for <span className="text-rose-600">"{searchQuery}"</span>
                        </span>
                        <span className="text-[11px] text-gray-500">
                          {suggestedProducts.length} matches
                        </span>
                      </div>

                      {matchingCategories.length > 0 && (
                        <div className="px-4 py-2 border-b border-rose-50 bg-white flex items-center gap-2 overflow-x-auto no-scrollbar">
                          <span className="text-[11px] text-gray-400 font-medium shrink-0">Category:</span>
                          {matchingCategories.map((cat) => (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => {
                                handleSelectCategory(cat.id);
                                setIsSearchFocused(false);
                              }}
                              className="px-2.5 py-1 rounded-full bg-rose-100/70 hover:bg-rose-200 text-rose-700 text-xs font-semibold shrink-0 transition"
                            >
                              ☀️ {cat.name}
                            </button>
                          ))}
                        </div>
                      )}

                      <div className="max-h-80 overflow-y-auto divide-y divide-rose-50">
                        {suggestedProducts.length > 0 ? (
                          suggestedProducts.map((prod) => (
                            <div
                              key={prod.id}
                              className="p-3 hover:bg-rose-50/60 transition flex items-center justify-between gap-3 cursor-pointer group"
                              onClick={() => handleSelectProduct(prod)}
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="w-12 h-12 rounded-xl bg-rose-50/60 p-1 shrink-0 overflow-hidden border border-rose-100">
                                  <img
                                    src={prod.image}
                                    alt={prod.name}
                                    suppressHydrationWarning
                                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition"
                                  />
                                </div>
                                <div className="min-w-0">
                                  <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wide block truncate">
                                    {prod.brand}
                                  </span>
                                  <h4 className="text-xs sm:text-sm font-bold text-gray-800 truncate group-hover:text-rose-600 transition">
                                    {prod.name}
                                  </h4>
                                  <div className="flex items-center gap-2 mt-0.5">
                                    <div className="flex items-center gap-0.5 text-[11px] text-amber-500 font-bold">
                                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                      <span>{prod.rating}</span>
                                    </div>
                                    <span className="text-xs font-bold text-gray-900">
                                      ₹{prod.price}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-1.5 shrink-0">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart(prod);
                                  }}
                                  className="px-2.5 py-1.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-bold transition active:scale-95"
                                >
                                  + Cart
                                </button>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openDirectBuy(prod, 1);
                                  }}
                                  className="px-3 py-1.5 rounded-full bg-linear-to-r from-rose-500 to-pink-500 text-white text-xs font-bold transition shadow-xs active:scale-95 flex items-center gap-1"
                                >
                                  <Zap className="w-3 h-3 fill-current text-amber-200" />
                                  <span>Buy</span>
                                </button>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="p-6 text-center text-gray-400">
                            <p className="text-xs font-semibold text-gray-600 mb-1">
                              No baby products found matching "{searchQuery}"
                            </p>
                            <p className="text-[11px] text-gray-400">
                              Try searching for "sunscreen", "lotion", or "shampoo"
                            </p>
                          </div>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={handleSearchSubmit}
                        className="w-full py-2.5 px-4 bg-rose-50/70 hover:bg-rose-100 text-rose-700 text-xs font-bold text-center flex items-center justify-center gap-1.5 transition border-t border-rose-100/60"
                      >
                        <span>See all results for "{searchQuery}"</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <div className="p-4 space-y-3">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                          <span>Trending Baby Searches</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {trendingSearches.map((term, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setSearchQuery(term);
                                setIsSearchFocused(false);
                                const el = document.getElementById('popular');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="px-3 py-1.5 rounded-full bg-gray-100 hover:bg-rose-50 hover:text-rose-600 text-xs text-gray-700 font-medium transition"
                            >
                              🔍 {term}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-rose-50">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">
                          Explore Categories
                        </span>
                        <div className="grid grid-cols-2 gap-1.5">
                          {CATEGORIES.slice(0, 4).map((cat) => (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => {
                                handleSelectCategory(cat.id);
                                setIsSearchFocused(false);
                              }}
                              className="px-3 py-2 rounded-xl text-left text-xs font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition flex items-center justify-between"
                            >
                              <span>{cat.name}</span>
                              <ArrowRight className="w-3 h-3 text-gray-400" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Action Icons (Account & Cart) */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileSearchOpen(!mobileSearchOpen);
                  setIsSearchFocused(!mobileSearchOpen);
                }}
                className="md:hidden p-2 text-gray-600 hover:text-rose-500 rounded-full hover:bg-rose-50 transition"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <a
                href="#popular"
                className="hidden sm:flex relative p-2.5 text-gray-600 hover:text-rose-500 rounded-full hover:bg-rose-50 transition"
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </a>

              <button
                type="button"
                onClick={() => showToast('👋 Welcome to Zozu! Your profile is safe & protected.')}
                className="p-2.5 text-gray-600 hover:text-rose-500 rounded-full hover:bg-rose-50 transition"
                aria-label="User Account"
              >
                <User className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 text-gray-600 hover:text-rose-500 rounded-full hover:bg-rose-50 transition"
                aria-label="Open Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                <span className="absolute top-1 right-0.5 min-w-4.5 h-4.5 px-1 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {totalItems}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Expandable Live Search */}
          {mobileSearchOpen && (
            <div ref={mobileSearchRef} className="md:hidden pb-3 pt-1 animate-in fade-in-50 relative z-40">
              <form onSubmit={handleSearchSubmit} className="relative w-full">
                <input
                  type="text"
                  placeholder="Search baby sunscreen, lotion, wash..."
                  value={searchQuery}
                  onFocus={() => setIsSearchFocused(true)}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (!isSearchFocused) setIsSearchFocused(true);
                  }}
                  autoFocus
                  className="w-full pl-10 pr-9 py-2.5 text-xs bg-white text-gray-800 placeholder-gray-400 rounded-full border-2 border-rose-400 shadow-xl focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
                <Search className="w-4 h-4 text-rose-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </form>

              {isSearchFocused && query && (
                <div className="mt-2 bg-white rounded-2xl shadow-2xl border border-rose-100 overflow-hidden max-h-72 overflow-y-auto divide-y divide-rose-50">
                  {suggestedProducts.length > 0 ? (
                    suggestedProducts.map((prod) => (
                      <div
                        key={prod.id}
                        className="p-3 flex items-center justify-between gap-2.5 active:bg-rose-50"
                        onClick={() => handleSelectProduct(prod)}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            suppressHydrationWarning
                            className="w-10 h-10 object-cover rounded-lg border border-rose-100 shrink-0"
                          />
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-gray-800 truncate">{prod.name}</p>
                            <p className="text-[11px] font-semibold text-rose-600">₹{prod.price}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(prod);
                            }}
                            className="px-2 py-1 rounded-full bg-rose-50 text-rose-600 text-[10px] font-bold"
                          >
                            + Cart
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              openDirectBuy(prod, 1);
                            }}
                            className="px-2.5 py-1 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center gap-0.5"
                          >
                            <Zap className="w-2.5 h-2.5 fill-current" />
                            <span>Buy</span>
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-center text-xs text-gray-500">
                      No products found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
}
