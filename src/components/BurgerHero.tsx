import React from 'react';
import { Bike, Leaf, Star, Sparkles, Flame } from 'lucide-react';

interface BurgerHeroProps {
  onOrderNow: () => void;
  onViewMenu: () => void;
}

export const BurgerHero: React.FC<BurgerHeroProps> = ({ onOrderNow, onViewMenu }) => {
  return (
    <section className="relative w-full flex-1 flex items-center justify-center overflow-hidden py-4 sm:py-8 lg:py-10">
      
      {/* Decorative Background Elements */}

      {/* 2. The Cinematic Background Visual (Full Big Background Centerpiece) */}
      <div 
        className="absolute top-[45%] sm:top-[50%] lg:top-[55%] -translate-y-1/2 left-1/2 -translate-x-1/2 w-[650px] xs:w-[850px] sm:w-[1200px] lg:w-[1800px] aspect-square flex items-center justify-center pointer-events-none select-none z-0 transition-all opacity-90 sm:opacity-100"
        aria-hidden="true"
      >
        {/* Deep Atmospheric Glow */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 90, 0, 0.4) 0%, rgba(200, 50, 0, 0.15) 50%, transparent 75%)',
            filter: 'blur(80px)',
          }}
        />
        <img
          src="/final_isolated_burger.png"
          alt=""
          className="w-full h-full object-contain filter drop-shadow-[0_40px_100px_rgba(0,0,0,0.7)]"
          loading="eager"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Hero Text, Headings, Buttons, Badges */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-left order-1 pt-2 sm:pt-0 relative z-10 w-full">
            
            {/* Eyebrow Badge: FRESH • HOT • MADE TO ORDER */}
            <div className="mb-3 sm:mb-5">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/30 border border-white/10 text-orange-100 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-sm">
                FRESH • HOT • MADE TO ORDER
              </div>
            </div>

            {/* Giant Title Typography */}
            <h1 className="font-display tracking-tight leading-[1.05] sm:leading-[0.96]">
              <span className="block text-white font-black text-[clamp(1.8rem,6vw,4.2rem)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                Your Cravings.
              </span>
              <span className="block text-[#ff7a00] font-black text-[clamp(2.2rem,8vw,5.4rem)] drop-shadow-[0_6px_20px_rgba(255,100,0,0.3)]">
                Made Fresh.
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-[#fde2cb]/90 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed font-medium mt-4 sm:mt-5 mb-8 sm:mb-10 text-pretty">
              Freshly prepared food, bold flavours, and your favourites made to order. Explore the menu and order directly on WhatsApp.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-5 mb-8 sm:mb-12">
              {/* Primary "View Menu" Button */}
              <button
                onClick={onViewMenu}
                className="group flex items-center justify-center gap-2 bg-gradient-to-br from-[#ff6000] to-[#ff8c00] hover:from-[#ff7010] hover:to-[#ff9c10] text-white text-sm sm:text-base font-bold py-3.5 sm:py-4 px-6 sm:px-10 rounded-2xl shadow-xl shadow-orange-950/40 hover:shadow-orange-800/50 transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-white whitespace-nowrap"
              >
                <span>View Menu</span>
                <span className="text-lg opacity-80 group-hover:translate-x-1 transition-transform">→</span>
              </button>

              {/* Secondary "Order on WhatsApp" Button */}
              <button
                onClick={onOrderNow}
                className="flex items-center justify-center bg-white/5 hover:bg-white/10 text-white font-bold py-3.5 sm:py-4 px-5 sm:px-9 rounded-2xl border border-white/20 backdrop-blur-md text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-orange-400 whitespace-nowrap"
              >
                Order on WhatsApp
              </button>
            </div>

            {/* Bottom 3 Feature Badges (Matching Reference Image exactly) */}
            <div className="mt-8 sm:mt-12 lg:mt-16 pt-4 sm:pt-6 border-t border-white/10 flex flex-wrap sm:flex-nowrap items-center gap-y-4 gap-x-6 text-white/90">
              
              {/* 1. Fast Delivery */}
              <div className="flex items-center gap-2.5 sm:flex-1">
                <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-[#ff7d1c] shrink-0 shadow-sm border border-white/5">
                  <Bike className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-black text-white tracking-wide">
                    Fast Delivery
                  </p>
                  <p className="text-[10px] sm:text-xs text-orange-200/70">
                    At your doorstep
                  </p>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block h-8 w-[1px] bg-white/10 shrink-0" />

              {/* 2. Fresh Ingredients */}
              <div className="flex items-center gap-2.5 sm:flex-1">
                <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-[#ff7d1c] shrink-0 shadow-sm border border-white/5">
                  <Leaf className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-black text-white tracking-wide">
                    Fresh Ingredients
                  </p>
                  <p className="text-[10px] sm:text-xs text-orange-200/70">
                    100% Natural
                  </p>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block h-8 w-[1px] bg-white/10 shrink-0" />

              {/* 3. 4.9 Rating */}
              <div className="flex items-center gap-2.5 sm:flex-1">
                <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-amber-400 shrink-0 shadow-sm border border-white/5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-black text-white tracking-wide">
                    4.9 Rating
                  </p>
                  <p className="text-[10px] sm:text-xs text-orange-200/70">
                    From 10K+ Customers
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
