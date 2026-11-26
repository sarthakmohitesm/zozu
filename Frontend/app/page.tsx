import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import PopularPicks from "./components/PopularPicks";
import PromoBanner from "./components/PromoBanner";
import WhyChooseUs from "./components/WhyChooseUs";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import DirectBuyModal from "./components/DirectBuyModal";
import MobileDrawer from "./components/MobileDrawer";
import MobileBottomNav from "./components/MobileBottomNav";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fffafa]">
      {/* Top Header with Announcement Bar & Amazon-style live search & backdrop */}
      <Header />

      {/* Main Content Sections matching the mockup */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 1. Hero Banner with carousel & baby in hooded towel */}
        <Hero />

        {/* 2. Horizontal pastel Category Quick-Nav */}
        <Categories />

        {/* 3. Popular Picks 5 Products + Side Green Bedtime Dreams Promo Card */}
        <PopularPicks />

        {/* 4. Middle Offer Banner: Flat 15% OFF + 4 Trust Badges */}
        <PromoBanner />

        {/* 5. Why Choose BabyGlow: 4 Feature cards + Smiling baby photo card */}
        <WhyChooseUs />

        {/* 6. Stay Updated Newsletter with paper airplane doodle & peeking mascot */}
        <Newsletter />
      </main>

      {/* Footer with brand, quick links, customer service, our promise & app badges */}
      <Footer />

      {/* Slide-out Cart Drawer with delivery fee calculator */}
      <CartDrawer />

      {/* Direct Buy 1-Click Instant Checkout Modal */}
      <DirectBuyModal />

      {/* Mobile Navigation Drawer */}
      <MobileDrawer />

      {/* Sticky Mobile Bottom Navigation Bar */}
      <MobileBottomNav />
    </div>
  );
}
