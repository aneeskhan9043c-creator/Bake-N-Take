import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Flame } from 'lucide-react';

interface BurgerHouseNavProps {
  onOpenMenu: () => void;
  onOpenOrder: () => void;
  onOpenSpecials: () => void;
  onOpenAbout: () => void;
  onOpenReviews: () => void;
  onOpenContact: () => void;
  cartCount: number;
}

export const BurgerHouseNav: React.FC<BurgerHouseNavProps> = ({
  onOpenMenu,
  onOpenOrder,
  onOpenSpecials,
  onOpenAbout,
  onOpenReviews,
  onOpenContact,
  cartCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (callback: () => void) => {
    callback();
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-40 w-full pt-3 sm:pt-5 pb-2 px-4 sm:px-8 lg:px-12 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Lockup: Bake N Take Logo Image */}
        <a
          href="#"
          className="flex items-center group cursor-pointer select-none"
          aria-label="Bake N Take Home"
        >
          <img 
            src="/brand_logo_clean.png" 
            alt="Bake N Take Logo" 
            className="h-24 sm:h-36 lg:h-44 w-auto object-contain scale-x-110 transition-transform group-hover:scale-[1.15] origin-left drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
          />
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-9 text-sm font-medium text-[#fcebd6]/90"
        >
          <button
            onClick={onOpenMenu}
            className="hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-orange-400 py-1"
          >
            Menu
          </button>
          <button
            onClick={onOpenSpecials}
            className="hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-orange-400 py-1"
          >
            Specials
          </button>
          <button
            onClick={onOpenAbout}
            className="hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-orange-400 py-1"
          >
            About
          </button>
          <button
            onClick={onOpenReviews}
            className="hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-orange-400 py-1"
          >
            Reviews
          </button>
          <button
            onClick={onOpenContact}
            className="hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-orange-400 py-1"
          >
            Contact
          </button>
        </nav>

        {/* Right Actions: "Order Now" Pill Button + Cart Icon */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Order Now Button */}
          <button
            onClick={onOpenOrder}
            className="bg-gradient-to-r from-[#ff5200] via-[#ff6500] to-[#ff7800] hover:from-[#ff5f0a] hover:to-[#ff8210] text-white text-[10px] sm:text-sm font-bold px-3 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg shadow-orange-950/40 hover:shadow-orange-700/50 hover:scale-[1.03] active:scale-95 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-white whitespace-nowrap"
          >
            Order Now
          </button>

          {/* Cart Icon Button */}
          <button
            onClick={onOpenOrder}
            aria-label="View Cart"
            className="relative p-2 sm:p-2.5 rounded-full bg-black/30 hover:bg-black/45 border border-white/10 text-white/90 hover:text-white transition-all hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-orange-400"
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-[#ff5200] to-[#ff7a00] text-white text-[10px] sm:text-xs font-bold rounded-full flex items-center justify-center shadow-md animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 rounded-xl bg-black/25 text-white/90 hover:text-white border border-white/10 focus-visible:outline-2 focus-visible:outline-orange-400"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 pb-2 border-b border-white/10 text-xs text-orange-300 font-semibold uppercase tracking-wider">
            <span>Bake N Take — Fresh Fast Food</span>
          </div>
          <button
            onClick={() => handleNavClick(onOpenMenu)}
            className="text-left py-2 px-3 rounded-lg text-white font-semibold hover:bg-white/10 text-base"
          >
            Menu
          </button>
          <button
            onClick={() => handleNavClick(onOpenSpecials)}
            className="text-left py-2 px-3 rounded-lg text-white font-semibold hover:bg-white/10 text-base"
          >
            Specials & Deals
          </button>
          <button
            onClick={() => handleNavClick(onOpenAbout)}
            className="text-left py-2 px-3 rounded-lg text-white font-semibold hover:bg-white/10 text-base"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick(onOpenReviews)}
            className="text-left py-2 px-3 rounded-lg text-white font-semibold hover:bg-white/10 text-base"
          >
            Customer Reviews (4.9 ★)
          </button>
          <button
            onClick={() => handleNavClick(onOpenContact)}
            className="text-left py-2 px-3 rounded-lg text-white font-semibold hover:bg-white/10 text-base"
          >
            Contact & Timings
          </button>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => handleNavClick(onOpenOrder)}
              className="w-full bg-gradient-to-r from-[#ff5200] to-[#ff7800] text-white font-bold py-2.5 rounded-xl text-center shadow-lg"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
