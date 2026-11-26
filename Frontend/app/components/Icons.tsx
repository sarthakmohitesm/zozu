import React from 'react';

// Cute Teddy Bear Mascot Logo
export function BearLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left Ear */}
      <circle cx="16" cy="16" r="10" fill="#E8B58F" />
      <circle cx="16" cy="16" r="5.5" fill="#F8C0CC" />
      
      {/* Right Ear */}
      <circle cx="48" cy="16" r="10" fill="#E8B58F" />
      <circle cx="48" cy="16" r="5.5" fill="#F8C0CC" />
      
      {/* Head */}
      <circle cx="32" cy="34" r="24" fill="#F1C29B" />
      
      {/* Cheeks */}
      <circle cx="18" cy="38" r="4.5" fill="#F6A5B5" opacity="0.65" />
      <circle cx="46" cy="38" r="4.5" fill="#F6A5B5" opacity="0.65" />
      
      {/* Eyes */}
      <ellipse cx="24" cy="30" rx="3.5" ry="4" fill="#2E2421" />
      <circle cx="25" cy="28.5" r="1.3" fill="#FFFFFF" />
      <ellipse cx="40" cy="30" rx="3.5" ry="4" fill="#2E2421" />
      <circle cx="41" cy="28.5" r="1.3" fill="#FFFFFF" />
      
      {/* Muzzle */}
      <ellipse cx="32" cy="40" rx="9" ry="7" fill="#FFF2E7" />
      
      {/* Nose */}
      <path d="M29 36C29 34.5 35 34.5 35 36C35 37.8 32.8 39.5 32 39.5C31.2 39.5 29 37.8 29 36Z" fill="#2E2421" />
      
      {/* Smile */}
      <path d="M29.5 40C30.5 41.5 33.5 41.5 34.5 40" stroke="#2E2421" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// Sleeping Bear on Cloud (for Feature Promo Card)
export function SleepingBearCloud({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft Cloud */}
      <path d="M25 90C18 90 12 84 12 76C12 69 17 63 24 63C25 50 36 40 50 40C58 40 65 44 70 50C75 46 82 44 89 44C102 44 113 54 114 67C122 68 128 75 128 83C128 92 120 100 110 100L25 100C25 96.5 25 93.5 25 90Z" fill="#FFFFFF" fillOpacity="0.95" />
      <ellipse cx="70" cy="98" rx="45" ry="10" fill="#E2E8F0" fillOpacity="0.4" />

      {/* Sleeping Bear Body */}
      <ellipse cx="65" cy="55" rx="22" ry="16" transform="rotate(-8 65 55)" fill="#E8B58F" />
      
      {/* Head */}
      <circle cx="48" cy="46" r="16" fill="#F1C29B" />
      <circle cx="39" cy="34" r="6" fill="#E8B58F" />
      <circle cx="39" cy="34" r="3.5" fill="#FFAEC0" />
      <circle cx="56" cy="36" r="6" fill="#E8B58F" />
      <circle cx="56" cy="36" r="3.5" fill="#FFAEC0" />
      
      {/* Closed Smiling Eye (Zzz) */}
      <path d="M42 45C44 47.5 48 47.5 50 45" stroke="#3D261D" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="49" r="3.5" fill="#F43F5E" fillOpacity="0.5" />
      
      {/* Cute Nose */}
      <circle cx="49" cy="49" r="2" fill="#3D261D" />

      {/* Dream Stars / Sparkles */}
      <path d="M96 24L97.5 29L102 30.5L97.5 32L96 37L94.5 32L90 30.5L94.5 29L96 24Z" fill="#FBBF24" />
      <path d="M112 42L113 45L116 46L113 47L112 50L111 47L108 46L111 45L112 42Z" fill="#F472B6" />
      <text x="74" y="26" fill="#E11D48" fontSize="13" fontWeight="bold" fontFamily="sans-serif">z</text>
      <text x="83" y="19" fill="#E11D48" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Z</text>
    </svg>
  );
}

// Category Icons
export function CategoryIcon({ type, className = "w-7 h-7" }: { type: string; className?: string }) {
  switch (type) {
    case 'skincare':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F43F5E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3h6v3H9z" fill="#FFE4E6" />
          <path d="M8 6h8a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V8a2 2 0 0 1 2-2z" />
          <path d="M12 11v6" stroke="#FB7185" />
          <path d="M9.5 13.5h5" stroke="#FB7185" />
        </svg>
      );
    case 'shampoo':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4" />
          <path d="M9 6h6" />
          <path d="M7 10a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v9a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-9z" fill="#E0F2FE" />
          <circle cx="12" cy="14" r="2" fill="#38BDF8" stroke="none" />
        </svg>
      );
    case 'cream':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="10" width="18" height="11" rx="4" fill="#EEF2FF" />
          <ellipse cx="12" cy="10" rx="9" ry="3" fill="#C7D2FE" />
          <path d="M7 7c0-2.2 2.2-4 5-4s5 1.8 5 4" stroke="#4F46E5" />
        </svg>
      );
    case 'diaper':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 6h14a1 1 0 0 1 1 1v1a7 7 0 0 1-7 7 7 7 0 0 1-7-7V7a1 1 0 0 1 1-1z" fill="#DBEAFE" />
          <path d="M7 6l2 9" />
          <path d="M17 6l-2 9" />
          <path d="M10 20h4" stroke="#1D4ED8" strokeWidth="2" />
        </svg>
      );
    case 'sun':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" fill="#FEF3C7" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      );
    case 'kit':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="8" width="18" height="13" rx="2" fill="#FFE4E6" />
          <path d="M12 8v13" />
          <path d="M3 13h18" />
          <path d="M7.5 4a2.5 2.5 0 0 1 4.5 1.5V8H7.5A2.5 2.5 0 0 1 7.5 4z" />
          <path d="M16.5 4a2.5 2.5 0 0 0-4.5 1.5V8h4.5A2.5 2.5 0 0 0 16.5 4z" />
        </svg>
      );
    default:
      return null;
  }
}

// Doodle Heart
export function DoodleHeart({ className = "w-6 h-6", color = "#F43F5E" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 20.5C12 20.5 4 15.5 2.5 10C1 4.5 7.5 2 12 6.5C16.5 2 23 4.5 21.5 10C20 15.5 12 20.5 12 20.5Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Paper Airplane Doodle
export function PaperPlaneDoodle({ className = "w-8 h-8", color = "#F43F5E" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 24L42 8L28 42L22 28L6 24Z" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="#FFF1F2" />
      <path d="M42 8L22 28" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M4 36C8 38 12 36 15 32C18 28 22 28 26 30" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

// Social Media Icons
export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  );
}

export function PinterestIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.94-.1-2.38.02-3.41l1.45-6.14s-.37-.74-.37-1.84c0-1.72 1-3.01 2.25-3.01 1.06 0 1.57.8 1.57 1.75 0 1.07-.68 2.66-1.03 4.14-.3 1.24.62 2.26 1.84 2.26 2.21 0 3.91-2.33 3.91-5.7 0-2.98-2.14-5.06-5.2-5.06-3.54 0-5.62 2.66-5.62 5.4 0 1.07.41 2.22.93 2.84.1.12.11.23.08.36l-.35 1.43c-.05.23-.19.28-.43.17-1.61-.75-2.62-3.1-2.62-4.99 0-4.06 2.95-7.79 8.51-7.79 4.47 0 7.94 3.19 7.94 7.44 0 4.44-2.8 8.01-6.68 8.01-1.31 0-2.53-.68-2.95-1.48l-.8 3.06c-.29 1.12-1.08 2.52-1.61 3.38A12 12 0 1 0 12 0z" />
    </svg>
  );
}

// 3D Fluffy Teddy Bear for 15% OFF Promo Card
export function FluffyTeddy({ className = "w-48 h-48" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="fluffyFur" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#F9D7B7" />
          <stop offset="60%" stopColor="#E2A779" />
          <stop offset="100%" stopColor="#C48455" />
        </radialGradient>
        <radialGradient id="innerEar" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFD1DC" />
          <stop offset="100%" stopColor="#F48FB1" />
        </radialGradient>
        <radialGradient id="snoutGrad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFF7ED" />
          <stop offset="100%" stopColor="#FED7AA" />
        </radialGradient>
        <filter id="teddyShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#8B4513" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Shadow */}
      <ellipse cx="100" cy="188" rx="65" ry="10" fill="#E2A779" opacity="0.35" />

      {/* Left Ear */}
      <circle cx="56" cy="54" r="24" fill="url(#fluffyFur)" filter="url(#teddyShadow)" />
      <circle cx="56" cy="54" r="14" fill="url(#innerEar)" />

      {/* Right Ear */}
      <circle cx="144" cy="54" r="24" fill="url(#fluffyFur)" filter="url(#teddyShadow)" />
      <circle cx="144" cy="54" r="14" fill="url(#innerEar)" />

      {/* Body */}
      <ellipse cx="100" cy="144" rx="52" ry="46" fill="url(#fluffyFur)" filter="url(#teddyShadow)" />
      {/* Tummy highlight */}
      <ellipse cx="100" cy="148" rx="34" ry="28" fill="#FFF7ED" opacity="0.85" />

      {/* Head */}
      <circle cx="100" cy="95" r="48" fill="url(#fluffyFur)" filter="url(#teddyShadow)" />

      {/* Cute Rosy Cheeks */}
      <ellipse cx="68" cy="108" rx="9" ry="6" fill="#F43F5E" opacity="0.4" />
      <ellipse cx="132" cy="108" rx="9" ry="6" fill="#F43F5E" opacity="0.4" />

      {/* Snout */}
      <ellipse cx="100" cy="112" rx="20" ry="15" fill="url(#snoutGrad)" />
      {/* Nose */}
      <path d="M92 104C92 100 108 100 108 104C108 109 102 113 100 113C98 113 92 109 92 104Z" fill="#3E2723" />
      {/* Smile */}
      <path d="M100 113V118M95 118C97 121 100 121 100 118C100 121 103 121 105 118" stroke="#3E2723" strokeWidth="2.5" strokeLinecap="round" />

      {/* Eyes */}
      <circle cx="80" cy="88" r="6.5" fill="#2E1C14" />
      <circle cx="82" cy="85.5" r="2.2" fill="#FFFFFF" />
      <circle cx="78.5" cy="89.5" r="1" fill="#FFFFFF" />

      {/* Right Eye */}
      <circle cx="120" cy="88" r="6.5" fill="#2E1C14" />
      <circle cx="122" cy="85.5" r="2.2" fill="#FFFFFF" />
      <circle cx="118.5" cy="89.5" r="1" fill="#FFFFFF" />

      {/* Cute Pink Bowtie */}
      <path d="M85 135L100 142L85 149C82 150 78 147 79 142C80 137 82 134 85 135Z" fill="#F43F5E" />
      <path d="M115 135L100 142L115 149C118 150 122 147 121 142C120 137 118 134 115 135Z" fill="#F43F5E" />
      <circle cx="100" cy="142" r="5" fill="#BE123C" />

      {/* Paws */}
      <ellipse cx="62" cy="140" rx="14" ry="12" transform="rotate(20 62 140)" fill="url(#fluffyFur)" />
      <circle cx="62" cy="140" r="7" fill="#FFF7ED" opacity="0.8" />

      <ellipse cx="138" cy="140" rx="14" ry="12" transform="rotate(-20 138 140)" fill="url(#fluffyFur)" />
      <circle cx="138" cy="140" r="7" fill="#FFF7ED" opacity="0.8" />
    </svg>
  );
}
