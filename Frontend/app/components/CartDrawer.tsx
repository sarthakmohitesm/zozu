"use client";

import React from "react";
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Sparkles } from "lucide-react";
import { useCart } from "../context/CartContext";
import { CartItem } from "../types";
import { BearLogo } from "./Icons";

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    updateQuantity,
    removeFromCart,
    cartTotal,
    cartCount,
    openCartCheckout,
  } = useCart();

  if (!isCartOpen) return null;

  const freeDeliveryThreshold = 499;
  const deliveryFee = cartTotal >= freeDeliveryThreshold || cartTotal === 0 ? 0 : 49;
  const remainingForFreeDelivery = Math.max(0, freeDeliveryThreshold - cartTotal);
  const progressPercent = Math.min(100, Math.round((cartTotal / freeDeliveryThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-5 py-4 border-b border-stone-200/80 flex items-center justify-between bg-stone-50/50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-100/70 border border-rose-200/60 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <h2 className="text-base font-bold text-stone-900 leading-tight">
                  Your Baby Bag
                </h2>
                <p className="text-xs text-stone-500">
                  {cartCount} {cartCount === 1 ? "item" : "items"} selected
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free delivery progress bar */}
          <div className="bg-rose-50/80 border-b border-rose-100 px-5 py-2.5">
            <div className="flex items-center justify-between text-xs font-medium text-stone-700 mb-1.5">
              {cartTotal >= freeDeliveryThreshold ? (
                <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  Yay! You unlocked FREE Delivery!
                </span>
              ) : (
                <span>
                  Add <strong className="text-rose-600 font-bold">₹{remainingForFreeDelivery}</strong> more for{" "}
                  <strong>FREE Delivery</strong>
                </span>
              )}
              <span className="text-stone-500">{progressPercent}%</span>
            </div>
            <div className="w-full h-1.5 bg-rose-200/60 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  cartTotal >= freeDeliveryThreshold ? "bg-emerald-500" : "bg-rose-500"
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart items list */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 baby-scrollbar">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-20 h-20 rounded-3xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-4">
                  <BearLogo className="w-12 h-12" />
                </div>
                <h3 className="text-base font-bold text-stone-800">Your bag is empty</h3>
                <p className="mt-1.5 text-xs text-stone-500 max-w-xs leading-relaxed">
                  Looks like you haven't added any soothing baby cosmetics yet. Let's find something gentle for your little one!
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold shadow-md shadow-rose-200 transition"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item: CartItem) => (
                <div
                  key={item.product.id}
                  className="flex gap-3.5 p-3 rounded-2xl border border-stone-100 hover:border-rose-100 bg-white hover:bg-rose-50/20 transition shadow-2xs"
                >
                  <div className="w-20 h-20 rounded-xl bg-stone-50 border border-stone-100 flex-shrink-0 p-1 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-contain mix-blend-multiply"
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-stone-900 leading-snug line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-stone-300 hover:text-rose-500 p-0.5 transition"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[10px] text-stone-500 line-clamp-1 mt-0.5">
                        {item.product.tagline}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm font-bold text-stone-900">
                          ₹{item.product.price * item.quantity}
                        </span>
                        {item.product.originalPrice && (
                          <span className="text-[10px] text-stone-400 line-through">
                            ₹{item.product.originalPrice * item.quantity}
                          </span>
                        )}
                      </div>

                      {/* Quantity adjuster */}
                      <div className="flex items-center gap-2 border border-stone-200 rounded-full px-2 py-0.5 bg-stone-50">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="text-stone-600 hover:text-rose-600 active:scale-90"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-stone-800 min-w-[14px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="text-stone-600 hover:text-rose-600 active:scale-90"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer checkout bar */}
          {cartItems.length > 0 && (
            <div className="border-t border-stone-200/80 p-5 bg-white space-y-3.5 shadow-lg">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-800">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Delivery</span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-600 font-bold uppercase text-[11px]">Free</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-stone-900 pt-1.5 border-t border-stone-100">
                  <span>Total Amount</span>
                  <span className="text-base text-rose-600">₹{cartTotal + deliveryFee}</span>
                </div>
              </div>

              {/* Checkout button */}
              <button
                onClick={openCartCheckout}
                className="w-full py-3.5 rounded-full bg-rose-500 hover:bg-rose-600 active:scale-98 text-white font-bold text-sm shadow-md shadow-rose-200 flex items-center justify-center gap-2 transition"
              >
                <span>Proceed to Direct Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-stone-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Secure Checkout • Cash on Delivery / UPI Available</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
