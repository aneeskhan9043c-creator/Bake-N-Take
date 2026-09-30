import React, { useState } from 'react';
import { BurgerHouseNav } from './components/BurgerHouseNav.tsx';
import { BurgerHero } from './components/BurgerHero.tsx';
import { OffersSection } from './components/OffersSection.tsx';
import { MenuSection } from './components/MenuSection.tsx';
import { HowToOrderSection } from './components/HowToOrderSection.tsx';
import { LocationContactSection } from './components/LocationContactSection.tsx';
import { RestaurantFooter } from './components/RestaurantFooter.tsx';
import { OrderCartDrawer, CartItem } from './components/OrderCartDrawer.tsx';
import { SpecialsModal } from './components/SpecialsModal.tsx';
import { AboutModal } from './components/AboutModal.tsx';
import { ReviewsModal } from './components/ReviewsModal.tsx';
import { ContactModal } from './components/ContactModal.tsx';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSpecialsOpen, setIsSpecialsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddToCart = (item: { name: string; price: number }) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          name: item.name,
          price: item.price,
          quantity: 1,
        },
      ];
    });
  };

  const handleClaimDeal = (dealTitle: string, price: number) => {
    handleAddToCart({ name: dealTitle, price });
    setIsSpecialsOpen(false);
    setIsCartOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleScrollToMenu = () => {
    const section = document.getElementById('menu');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToOffers = () => {
    const section = document.getElementById('offers-deals');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const section = document.getElementById('location-contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsContactOpen(true);
    }
  };

  const handleScrollToHowItWorks = () => {
    const section = document.getElementById('how-to-order');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-x-hidden selection:bg-[#ff5500] selection:text-white">
      
      {/* Radiant Background Lighting Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 select-none"
        style={{
          background: 'radial-gradient(circle at 74% 45%, rgba(255, 98, 14, 0.42) 0%, rgba(200, 60, 0, 0.25) 40%, rgba(80, 16, 0, 0.3) 80%, rgba(40, 8, 0, 0.5) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Top Navigation Bar ("Burger House" wordmark, Menu, Specials, About, Reviews, Contact, Order Now, Cart) */}
      <BurgerHouseNav
        onOpenMenu={handleScrollToMenu}
        onOpenOrder={() => setIsCartOpen(true)}
        onOpenSpecials={handleScrollToOffers}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenReviews={() => setIsReviewsOpen(true)}
        onOpenContact={handleScrollToContact}
        cartCount={totalCartCount}
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col justify-center">
        {/* HERO SECTION — UNTOUCHED & APPROVED */}
        <BurgerHero
          onOrderNow={() => setIsCartOpen(true)}
          onViewMenu={handleScrollToMenu}
        />

        {/* 1. OFFERS & DEALS SECTION (APPEARS FIRST) */}
        <OffersSection onAddToCart={handleAddToCart} />

        {/* 2. MENU CATEGORIES HUB & IN-PAGE DETAIL VIEW */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* 3. COMPACT HOW TO ORDER SECTION */}
        <HowToOrderSection />

        {/* 4. LOCATION & CONTACT SECTION */}
        <LocationContactSection />
      </main>

      {/* Comprehensive, Authentic Bake N Take Restaurant Footer */}
      <RestaurantFooter
        onScrollToMenu={handleScrollToMenu}
        onScrollToOffers={handleScrollToOffers}
        onScrollToHowItWorks={handleScrollToHowItWorks}
        onScrollToLocation={handleScrollToContact}
      />

      {/* Interactive Modals & Drawers */}
      <OrderCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onQuickAddItem={handleAddToCart}
      />

      <SpecialsModal
        isOpen={isSpecialsOpen}
        onClose={() => setIsSpecialsOpen(false)}
        onClaimDeal={handleClaimDeal}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onExploreMenu={handleScrollToMenu}
      />

      <ReviewsModal
        isOpen={isReviewsOpen}
        onClose={() => setIsReviewsOpen(false)}
        onOrderNow={() => setIsCartOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
