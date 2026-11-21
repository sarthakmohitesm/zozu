"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Heart } from "lucide-react";
import { BearLogo } from "./Icons";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-50 via-pink-50/70 to-rose-100/60 border border-rose-200/60 p-8 sm:p-12 shadow-sm">
        {/* Background glow & accents */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-md shadow-rose-100 border border-rose-100 mb-5">
            <BearLogo className="w-9 h-9" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-rose-100/80 text-rose-700 uppercase mb-3">
            <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
            Join the Zozu Family
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Stay Updated with Gentle Care
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Subscribe for gentle baby skincare tips, pediatrician advice, and early access to new soothing formula drops.
          </p>

          {subscribed ? (
            <div className="mt-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span className="font-medium text-sm sm:text-base">
                Welcome to the family! You're now on our gentle care list.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full px-5 py-3.5 rounded-full text-sm bg-white border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 shadow-xs"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-rose-500 hover:bg-rose-600 active:scale-95 text-white text-sm font-semibold shadow-md shadow-rose-200 transition"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-stone-500">
            🔒 We respect your privacy. No spam, only loving care recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}
