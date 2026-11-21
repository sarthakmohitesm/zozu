# Zozu — Gentle Baby Cosmetics & Skincare

Zozu is a modern, responsive e-commerce web application dedicated to dermatologically-tested, pediatrician-approved baby skincare, washes, soothing creams, and gift kits.

## Project Structure

```
zozu/
├── Frontend/           # Next.js 16 (App Router), Tailwind CSS v4, TypeScript
│   ├── app/            # Application routes, contexts, components & data
│   │   ├── components/ # Header, Hero, Categories, PopularPicks, WhyChooseUs, Newsletter, Footer, CartDrawer, DirectBuyModal, etc.
│   │   ├── context/    # CartContext (Cart, Direct Buy, Search & Wishlist state)
│   │   ├── data/       # Product catalog & categories
│   │   └── types.ts    # TypeScript definitions
│   └── package.json
└── Backend/            # Backend APIs & server architecture
```

## Running Frontend Locally

```bash
cd Frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Key Features

- **Amazon-style Instant Search**: Live fuzzy search suggestions with page background dimming and direct "Add to Cart" and "Buy Now" shortcuts.
- **Direct Buy & Instant Checkout**: Direct 1-click checkout modal with order summary, customer address, payment method selection (UPI/QR, COD, Card), and order confirmation.
- **Interactive Bag Drawer**: Slide-out cart with real-time free delivery calculation threshold and quantity management.
- **Responsive Navigation**: Mobile bottom bar and slide drawer with category filtering.
- **Gentle Baby Aesthetic**: Curated pastel palette, soft rounded UI components, and custom baby pink scrollbars.
