export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
  reviewsCount: string;
  image: string;
  badge?: string;
  tagline?: string;
  inStock?: boolean;
}

export interface CategoryItem {
  id: string;
  name: string;
  iconType: 'skincare' | 'shampoo' | 'cream' | 'diaper' | 'sun' | 'kit';
  bgColor: string;
  accentColor: string;
  count?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  avatar: string;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
