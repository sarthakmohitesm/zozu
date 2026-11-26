'use client';

import React from 'react';
import { Heart, Star, ShoppingBag, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { POPULAR_PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { SleepingBearCloud, DoodleHeart } from './Icons';

export default function PopularPicks() {
  const { addToCart, openDirectBuy, toggleWishlist, isWishlisted, selectedCategory, searchQuery, setSelectedCategory, setSearchQuery } = useCart();

  const filteredProducts = POPULAR_PRODUCTS.filter((prod) => {
    const matchesCat = !selectedCategory || prod.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="popular" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-3 mb-6 sm:mb-8">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              {searchQuery ? (
                <span>Search Results for <span className="text-rose-500">"{searchQuery}"</span></span>
              ) : selectedCategory ? (
                <span>Filtered Products</span>
              ) : (
                'Popular Picks'
              )}
            </h2>
            <DoodleHeart className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {searchQuery
              ? `Found ${filteredProducts.length} baby care ${filteredProducts.length === 1 ? 'item' : 'items'}`
              : 'Loved by parents, trusted for babies.'}
          </p>
        </div>

        <div>
          {searchQuery || selectedCategory ? (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory(null);
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-rose-300 text-rose-600 hover:bg-rose-50 text-xs sm:text-sm font-semibold transition group"
            >
              <span>Show All</span>
            </button>
          ) : (
            <a
              href="#popular"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-rose-300 hover:border-rose-400 text-rose-600 hover:bg-rose-50 text-xs sm:text-sm font-bold transition group"
            >
              <span>View All Products</span>
              <ArrowRight className="w-3.5 h-3.5 transition transform group-hover:translate-x-1" />
            </a>
          )}
        </div>
      </div>

      {/* When no products match search */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 text-center border border-rose-100 max-w-lg mx-auto shadow-sm my-6">
          <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-400 mx-auto flex items-center justify-center text-2xl mb-3">
            🔍
          </div>
          <h3 className="font-extrabold text-gray-800 text-base mb-1">
            No products found matching "{searchQuery}"
          </h3>
          <p className="text-xs text-gray-500 mb-4">
            Try searching for "lotion", "sunscreen", "shampoo", or "wash"
          </p>
        </div>
      ) : (
        /* Main Grid: Products + Side Feature Card */
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 md:gap-5">
          {filteredProducts.map((product) => {
            const isFav = isWishlisted(product.id);
            return (
              <div
                key={product.id}
                id={`product-${product.id}`}
                className="group relative bg-white rounded-3xl p-3 sm:p-4 border border-rose-100/90 shadow-xs hover:shadow-xl hover:shadow-rose-100/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top badges: Discount & Wishlist */}
                  <div className="flex items-center justify-between gap-1 mb-2">
                    {product.discount ? (
                      <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-extrabold tracking-wide">
                        {product.discount}
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                        Pure & Mild
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => toggleWishlist(product.id)}
                      className="p-1.5 rounded-full hover:bg-rose-50 text-gray-400 hover:text-rose-500 transition active:scale-110"
                      aria-label={`Wishlist ${product.name}`}
                    >
                      <Heart
                        className={`w-4 h-4 transition ${
                          isFav ? 'text-rose-500 fill-rose-500' : 'text-gray-400'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Product Image */}
                  <div className="relative aspect-square w-full rounded-2xl bg-rose-50/40 p-2 overflow-hidden mb-3 group-hover:bg-rose-50/70 transition">
                    <img
                      src={product.image}
                      alt={product.name}
                      suppressHydrationWarning
                      className="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-108 transition duration-500"
                    />
                  </div>

                  {/* Brand & Name */}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 block truncate">
                    {product.brand}
                  </span>
                  <h3 className="font-bold text-gray-800 text-xs sm:text-sm line-clamp-2 mt-0.5 leading-snug group-hover:text-rose-600 transition">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-1.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-gray-700">{product.rating}</span>
                    <span className="text-[10px] text-gray-400">({product.reviewsCount})</span>
                  </div>
                </div>

                {/* Price & Action Buttons: Add to Cart and Buy Now */}
                <div className="pt-3 mt-2 border-t border-rose-50 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="font-black text-gray-900 text-sm sm:text-base">
                        ₹{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[10px] text-gray-400 line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="py-1.5 px-2 rounded-xl border border-rose-200 bg-rose-50/70 hover:bg-rose-100 text-rose-700 text-[11px] font-bold flex items-center justify-center gap-1 transition active:scale-95 shadow-2xs"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Cart</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => openDirectBuy(product, 1)}
                      className="py-1.5 px-2 rounded-xl bg-linear-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-[11px] font-bold flex items-center justify-center gap-1 transition active:scale-95 shadow-xs shadow-rose-200"
                      aria-label={`Buy ${product.name} now`}
                    >
                      <Zap className="w-3.5 h-3.5 fill-current text-amber-200" />
                      <span>Buy</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Feature Promo Card on the right */}
          {!searchQuery && (
            <div className="relative rounded-3xl bg-linear-to-b from-[#e6f4ea] via-[#edf7f0] to-[#e1f0e6] p-4 sm:p-5 flex flex-col justify-between border border-emerald-100 shadow-xs overflow-hidden col-span-2 sm:col-span-1 lg:col-span-1">
              <div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/80 text-[10px] font-bold text-emerald-800 mb-2.5">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  <span>Sweet Dreams</span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-gray-900 leading-tight">
                  Gentle Care for Growing Dreams
                </h3>

                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                  Soothing bedtime lotions formulated for deep, blissful baby sleep.
                </p>
              </div>

              <div className="flex flex-col items-center my-2">
                <SleepingBearCloud className="w-28 h-28 transform hover:scale-105 transition" />
              </div>

              <a
                href="#popular"
                className="w-full py-2 px-3 rounded-full bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition shadow-sm"
              >
                <span>Explore More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
