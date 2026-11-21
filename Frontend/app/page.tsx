import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import PopularPicks from "./components/PopularPicks";
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
      {/* Top Header with live Amazon-style search & backdrop */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <Categories />
        <PopularPicks />
        <WhyChooseUs />
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-out Cart Drawer */}
      <CartDrawer />

      {/* Direct Buy Checkout Modal */}
      <DirectBuyModal />

      {/* Mobile Slide-out Drawer */}
      <MobileDrawer />

      {/* Mobile Bottom Sticky Navigation */}
      <MobileBottomNav />
    </div>
  );
}
