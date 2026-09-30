import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Bike, 
  MessageCircle, 
  Smartphone, 
  Heart, 
  ArrowUp, 
  ExternalLink,
  UtensilsCrossed,
  Flame
} from 'lucide-react';
import { VERIFIED_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface RestaurantFooterProps {
  onScrollToMenu: () => void;
  onScrollToOffers: () => void;
  onScrollToHowItWorks: () => void;
  onScrollToLocation: () => void;
}

export const RestaurantFooter: React.FC<RestaurantFooterProps> = ({
  onScrollToMenu,
  onScrollToOffers,
  onScrollToHowItWorks,
  onScrollToLocation,
}) => {
  const directWhatsAppUrl = `https://wa.me/${VERIFIED_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    '👋 Hello Bake N Take! I would like to place an order.'
  )}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full bg-[#0d0704] border-t border-orange-950/50 text-[#fed2af]/80">
      {/* Subtle Warm Top Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(255, 90, 0, 0.4) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-8">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/brand_logo_clean.png" 
                alt="Bake N Take Logo" 
                className="h-16 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              />
            </div>
            
            <div className="flex items-center gap-1.5 text-xs text-[#ff7a00] font-bold tracking-wide">
              <Heart className="w-3.5 h-3.5 fill-[#ff7a00]" />
              <span>“Love at First Bite”</span>
            </div>

            <p className="text-xs sm:text-sm text-[#fed2af]/70 leading-relaxed font-medium max-w-sm">
              Mingora's destination for oven-hot artisanal pizzas, crispy golden zinger burgers, spicy rolls, and family feast bundles. Crafted fresh to order every day.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-orange-950/40 border border-orange-500/30 text-xs font-bold text-orange-200">
              <Bike className="w-4 h-4 text-[#ff7a00]" />
              <span>Free Home Delivery in Mingora</span>
            </div>
          </div>

          {/* Column 2: Quick Links / Menu (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-bold text-white tracking-wider uppercase flex items-center gap-1.5">
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#ff7a00]" />
              <span>Menu</span>
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button 
                  onClick={onScrollToMenu}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Artisan Pizzas
                </button>
              </li>
              <li>
                <button 
                  onClick={onScrollToMenu}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Crispy Zinger Burgers
                </button>
              </li>
              <li>
                <button 
                  onClick={onScrollToMenu}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Fried Chicken & Wings
                </button>
              </li>
              <li>
                <button 
                  onClick={onScrollToMenu}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Shawarma & Paratha Rolls
                </button>
              </li>
              <li>
                <button 
                  onClick={onScrollToMenu}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Snacks & Loaded Fries
                </button>
              </li>
              <li>
                <button 
                  onClick={onScrollToMenu}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Biryani & Fried Rice
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Deals & Guide (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-bold text-white tracking-wider uppercase flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-[#ff7a00]" />
              <span>Specials</span>
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button 
                  onClick={onScrollToOffers}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Family Deals 1–4
                </button>
              </li>
              <li>
                <button 
                  onClick={onScrollToOffers}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Special Pizza Trios
                </button>
              </li>
              <li>
                <button 
                  onClick={onScrollToOffers}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Zinger & Wings Combos
                </button>
              </li>
              <li>
                <button 
                  onClick={onScrollToOffers}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Student Value Deals
                </button>
              </li>
              <li>
                <button 
                  onClick={onScrollToHowItWorks}
                  className="hover:text-white transition-colors cursor-pointer text-left text-[#ff7a00]"
                >
                  How to Order Guide →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="font-display text-sm font-bold text-white tracking-wider uppercase">
              Get in Touch
            </h4>

            {/* Address */}
            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-[#ff7a00] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Dakkhana Road, Mingora, Swat</span>
                <button
                  onClick={onScrollToLocation}
                  className="block text-[11px] text-[#ff7a00] hover:underline cursor-pointer mt-0.5"
                >
                  View on Interactive Map ↓
                </button>
              </div>
            </div>

            {/* Delivery Hours */}
            <div className="flex items-start gap-2.5 text-xs">
              <Clock className="w-4 h-4 text-[#ff7a00] shrink-0 mt-0.5" />
              <div>
                <span className="text-neutral-400">Delivery Hours: </span>
                <span className="font-bold text-white tabular-nums">10:00 AM – 02:00 AM</span>
              </div>
            </div>

            {/* Contact Phone Numbers */}
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#ff7a00]" />
                <span className="text-neutral-400">Landline:</span>
                <a href="tel:0946722400" className="font-bold text-white hover:text-orange-300 tabular-nums">
                  0946-722400
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-3.5 h-3.5 text-[#ff7a00]" />
                <span className="text-neutral-400">Mobile:</span>
                <a href="tel:03400395050" className="font-bold text-white hover:text-orange-300 tabular-nums">
                  0340-0395050
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Callout Button */}
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer touch-manipulation mt-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Order on WhatsApp (0335-9448388)</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Made By Anees & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#fed2af]/60">
          <p className="text-[11px] sm:text-xs text-center sm:text-left text-[#fed2af]/70 font-medium">
            © 2026 Bake N Take. Made by <span className="font-bold text-white tracking-wide">ANEES</span>
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-all cursor-pointer hover:-translate-y-0.5"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#ff7a00]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
