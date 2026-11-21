'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';

interface CartContextType {
  cart: CartItem[];
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  cartCount: number;
  subtotal: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  
  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;

  // Search & Filter
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (categoryId: string | null) => void;

  // Direct Buy & Checkout
  isCheckoutOpen: boolean;
  checkoutItems: CartItem[];
  isDirectSingleBuy: boolean;
  openDirectBuy: (product: Product, quantity?: number) => void;
  openCartCheckout: () => void;
  closeCheckout: () => void;
  updateCheckoutQuantity: (productId: string, quantity: number) => void;

  // Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>(['prod-1']);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Direct Buy & Checkout state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutItems, setCheckoutItems] = useState<CartItem[]>([]);
  const [isDirectSingleBuy, setIsDirectSingleBuy] = useState(false);

  useEffect(() => {
    // Client mount hook
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2800);
  };

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${product.name} to cart! 🛍️`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  // Direct Buy single item flow
  const openDirectBuy = (product: Product, quantity = 1) => {
    setCheckoutItems([{ product, quantity }]);
    setIsDirectSingleBuy(true);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Open checkout with current cart items
  const openCartCheckout = () => {
    if (cart.length === 0) {
      showToast('Your cart is empty! Add products to checkout.');
      return;
    }
    setCheckoutItems([...cart]);
    setIsDirectSingleBuy(false);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const updateCheckoutQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCheckoutItems((prev) => prev.filter((item) => item.product.id !== productId));
      return;
    }
    setCheckoutItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from Wishlist ♡');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Added to Wishlist! 💕');
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems: cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        cartCount: totalItems,
        subtotal,
        cartTotal: subtotal,
        isCartOpen,
        setIsCartOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        wishlist,
        toggleWishlist,
        isWishlisted,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        isCheckoutOpen,
        checkoutItems,
        isDirectSingleBuy,
        openDirectBuy,
        openCartCheckout,
        closeCheckout,
        updateCheckoutQuantity,
        toastMessage,
        showToast,
      }}
    >
      {children}
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-8 right-1/2 translate-x-1/2 md:translate-x-0 md:right-8 z-50 bg-stone-900/90 backdrop-blur-md text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2.5 text-sm font-medium animate-bounce border border-white/10 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
          <span>{toastMessage}</span>
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
