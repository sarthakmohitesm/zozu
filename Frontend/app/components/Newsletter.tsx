'use client';

import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PaperPlaneDoodle, BearLogo } from './Icons';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-[#ffe4eb] via-[#ffebf0] to-[#fce2e8] border border-rose-200/80 p-6 sm:p-8 shadow-xs">
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left: Icon + Heading */}
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/90 border border-rose-200 flex items-center justify-center shadow-xs shrink-0 text-rose-500">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                Stay Updated!
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                Get the latest offers, baby care tips and more.
              </p>
            </div>
          </div>

          {/* Center: Email Subscription Form */}
          <div className="w-full lg:max-w-md">
            {subscribed ? (
              <div className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-500 text-white text-xs sm:text-sm font-semibold shadow-xs">
                <CheckCircle2 className="w-4 h-4" />
                <span>You're on the list! Welcome to the family.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-white/90 p-1.5 rounded-full border border-rose-200 shadow-xs focus-within:ring-2 focus-within:ring-rose-400">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent px-4 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-linear-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-xs sm:text-sm font-bold shadow-xs transition hover:scale-105 active:scale-95 shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Right: Paper Plane Doodle + Peeking Mascot */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <PaperPlaneDoodle className="w-10 h-10 text-rose-500" />
            <div className="w-16 h-16 rounded-2xl bg-white/80 border border-rose-100 flex items-center justify-center shadow-xs">
              <BearLogo className="w-12 h-12" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
