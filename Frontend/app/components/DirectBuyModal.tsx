'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, ShieldCheck, CheckCircle2, Lock, ArrowRight, Truck, Plus, Minus, CreditCard, Banknote, QrCode } from 'lucide-react';
import { BearLogo } from './Icons';

export default function DirectBuyModal() {
  const {
    isCheckoutOpen,
    closeCheckout,
    checkoutItems,
    updateCheckoutQuantity,
    isDirectSingleBuy,
    clearCart,
  } = useCart();

  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cod' | 'card'>('upi');

  // Order Placement State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isCheckoutOpen) return null;

  const subtotal = checkoutItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shippingFee = 0; // Free express shipping for direct buy
  const finalTotal = subtotal + shippingFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address || !pinCode) {
      alert('Please fill in your delivery details.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `ZOZU-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      setIsSubmitting(false);
      setIsOrderPlaced(true);
      if (!isDirectSingleBuy) {
        clearCart();
      }
    }, 1200);
  };

  const handleFinish = () => {
    setIsOrderPlaced(false);
    closeCheckout();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCheckout}
      />

      {/* Main Modal Card */}
      <div className="relative z-10 w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-rose-100 overflow-hidden my-auto animate-in fade-in-50 zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-5 py-4 bg-linear-to-r from-rose-50 to-pink-50 border-b border-rose-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-white p-1 shadow-xs flex items-center justify-center">
              <BearLogo className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-extrabold text-gray-900 text-base leading-tight flex items-center gap-1.5">
                <span>Direct Checkout</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500 text-white">
                  Express
                </span>
              </h3>
              <p className="text-[11px] text-gray-500 flex items-center gap-1 font-medium">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>256-bit Secure & Encrypted</span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeCheckout}
            className="w-8 h-8 rounded-full bg-white hover:bg-rose-100 text-gray-400 hover:text-gray-700 flex items-center justify-center shadow-xs transition"
            aria-label="Close checkout"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isOrderPlaced ? (
          /* ================================================================
             SUCCESS STATE: Order Placed Confirmation Screen
             ================================================================ */
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest block mb-1">
                Order Placed Successfully!
              </span>
              <h4 className="text-2xl font-black text-gray-900">
                Thank you, {fullName}! 🍼
              </h4>
              <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
                Your baby care essentials are being carefully packed with love and will be dispatched within 24 hours.
              </p>
            </div>

            {/* Order Details Card */}
            <div className="bg-rose-50/60 rounded-2xl p-4 text-left border border-rose-100 space-y-2 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-rose-100">
                <span className="text-gray-500">Order ID</span>
                <span className="font-extrabold text-gray-900 font-mono text-sm">{orderId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Total Paid / COD</span>
                <span className="font-extrabold text-rose-600 text-sm">₹{finalTotal}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Payment Mode</span>
                <span className="font-bold text-gray-800 uppercase text-[11px]">{paymentMethod}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-rose-100">
                <span className="text-gray-500">Estimated Delivery</span>
                <span className="font-bold text-emerald-700 flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" /> 2-3 Business Days
                </span>
              </div>
              <div className="pt-2 text-[11px] text-gray-500">
                Delivering to: <strong className="text-gray-800">{address}, {city} - {pinCode}</strong>
              </div>
            </div>

            <button
              type="button"
              onClick={handleFinish}
              className="w-full py-3.5 rounded-full bg-linear-to-r from-rose-500 to-pink-500 hover:from-rose-600 text-white font-bold text-sm shadow-md transition"
            >
              Continue Shopping on Zozu
            </button>
          </div>
        ) : (
          /* ================================================================
             CHECKOUT FORM & ORDER SUMMARY
             ================================================================ */
          <form onSubmit={handleSubmitOrder} className="max-h-[75vh] overflow-y-auto p-5 space-y-5">
            
            {/* Section 1: Product Summary in Checkout */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                  Order Items ({checkoutItems.length})
                </span>
                <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                  <Truck className="w-3 h-3" /> Free Express Delivery
                </span>
              </div>

              <div className="space-y-2 bg-rose-50/40 rounded-2xl p-3 border border-rose-100/80 max-h-48 overflow-y-auto">
                {checkoutItems.map((item) => (
                  <div key={item.product.id} className="flex items-center justify-between gap-3 bg-white p-2.5 rounded-xl border border-rose-50 shadow-2xs">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        suppressHydrationWarning
                        className="w-12 h-12 object-cover rounded-lg border border-rose-100 shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider block truncate">
                          {item.product.brand}
                        </span>
                        <h4 className="text-xs font-bold text-gray-800 truncate">
                          {item.product.name}
                        </h4>
                        <span className="text-xs font-black text-gray-900">
                          ₹{item.product.price}
                        </span>
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center border border-rose-200 rounded-full bg-rose-50/40 px-1 py-0.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => updateCheckoutQuantity(item.product.id, item.quantity - 1)}
                        className="w-5 h-5 rounded-full flex items-center justify-center text-gray-600 hover:bg-white transition"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateCheckoutQuantity(item.product.id, item.quantity + 1)}
                        className="w-5 h-5 rounded-full flex items-center justify-center text-gray-600 hover:bg-white transition"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Delivery Details Form */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
                Shipping & Delivery Address
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="text-[11px] font-semibold text-gray-600 block mb-1">
                    Parent / Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-gray-600 block mb-1">
                    Mobile Number (10 digits) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-gray-600 block mb-1">
                  Complete Address (House/Flat, Street, Area) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Flat 302, Sunflower Apts, Park Street"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="text-[11px] font-semibold text-gray-600 block mb-1">
                    City & State *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mumbai, MH"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-gray-600 block mb-1">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    placeholder="e.g. 400001"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Payment Options */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
                Choose Payment Method
              </span>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-2.5 rounded-2xl border text-center flex flex-col items-center justify-center gap-1 transition ${
                    paymentMethod === 'upi'
                      ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold ring-2 ring-rose-200'
                      : 'border-gray-200 hover:border-rose-200 text-gray-700'
                  }`}
                >
                  <QrCode className="w-5 h-5 text-rose-500" />
                  <span className="text-[11px]">UPI / QR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-2.5 rounded-2xl border text-center flex flex-col items-center justify-center gap-1 transition ${
                    paymentMethod === 'cod'
                      ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold ring-2 ring-rose-200'
                      : 'border-gray-200 hover:border-rose-200 text-gray-700'
                  }`}
                >
                  <Banknote className="w-5 h-5 text-emerald-600" />
                  <span className="text-[11px]">Cash on Delivery</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-2.5 rounded-2xl border text-center flex flex-col items-center justify-center gap-1 transition ${
                    paymentMethod === 'card'
                      ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold ring-2 ring-rose-200'
                      : 'border-gray-200 hover:border-rose-200 text-gray-700'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-blue-500" />
                  <span className="text-[11px]">Card / Net Banking</span>
                </button>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="p-3.5 bg-gray-50 rounded-2xl space-y-1.5 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-semibold text-gray-900">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-emerald-600 font-semibold">
                <span>Express Baby Delivery</span>
                <span className="uppercase text-[11px]">Free</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-gray-900 pt-2 border-t border-gray-200">
                <span>Total Amount</span>
                <span className="text-rose-600 text-base">₹{finalTotal}</span>
              </div>
            </div>

            {/* Place Order CTA Button */}
            <button
              type="submit"
              disabled={isSubmitting || checkoutItems.length === 0}
              className="w-full py-4 rounded-full bg-linear-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-sm shadow-lg shadow-rose-200 flex items-center justify-center gap-2 transition active:scale-98 disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Processing Secure Order...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>Place Order • ₹{finalTotal}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>100% Genuine & Pediatrician Certified • 15-Day Easy Returns</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
