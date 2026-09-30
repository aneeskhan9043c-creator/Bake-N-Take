import React, { useState } from 'react';
import { Sparkles, MessageCircle, ShoppingBag, Check, Coffee, Flame, Users, ChevronRight } from 'lucide-react';
import { MENU_DEALS, DealItem } from '../data/menuData';
import { openWhatsAppOrder } from '../utils/whatsapp';

interface OffersSectionProps {
  onAddToCart: (item: { name: string; price: number }) => void;
}

type FilterCategory = 'all' | 'burger' | 'family' | 'pizza' | 'combo' | 'shawarma';

export const OffersSection: React.FC<OffersSectionProps> = ({ onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [addedDealId, setAddedDealId] = useState<string | null>(null);

  const filteredDeals = activeFilter === 'all'
    ? MENU_DEALS
    : MENU_DEALS.filter((deal) => deal.categoryTag === activeFilter);

  const handleQuickAdd = (deal: DealItem) => {
    onAddToCart({ name: deal.name, price: deal.price });
    setAddedDealId(deal.id);
    setTimeout(() => setAddedDealId(null), 1800);
  };

  const handleWhatsApp = (deal: DealItem) => {
    openWhatsAppOrder({
      name: deal.name,
      price: deal.price,
      items: deal.items,
      drinkInfo: deal.drinkInfo,
      quantity: 1,
    });
  };

  return (
    <section id="offers-deals" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-t border-orange-950/30">
      {/* Subtle radial warmth glow behind deals */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-25 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 90, 0, 0.35) 0%, rgba(180, 50, 0, 0.1) 60%, transparent 80%)',
          filter: 'blur(90px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff7a00] mb-2.5">
              <Flame className="w-4 h-4 text-[#ff7a00]" />
              <span>Limited Daily Value</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Offers & <span className="text-[#ff7a00]">Deals</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#fed2af]/70 max-w-xl font-medium leading-relaxed">
              Handcrafted value combos and feast bundles prepared fresh to order. Exact prices from our official kitchen menu with direct WhatsApp ordering.
            </p>
          </div>

          {/* Filter Pills (Clean Segmented Bar) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-x-auto scrollbar-none max-w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-[#ff5500] to-[#ff8000] text-white shadow-md'
                  : 'text-[#fed2af]/70 hover:text-white'
              }`}
            >
              All Deals ({MENU_DEALS.length})
            </button>
            <button
              onClick={() => setActiveFilter('family')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'family'
                  ? 'bg-gradient-to-r from-[#ff5500] to-[#ff8000] text-white shadow-md'
                  : 'text-[#fed2af]/70 hover:text-white'
              }`}
            >
              Family Feasts
            </button>
            <button
              onClick={() => setActiveFilter('burger')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'burger'
                  ? 'bg-gradient-to-r from-[#ff5500] to-[#ff8000] text-white shadow-md'
                  : 'text-[#fed2af]/70 hover:text-white'
              }`}
            >
              Zinger & Burger
            </button>
            <button
              onClick={() => setActiveFilter('pizza')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'pizza'
                  ? 'bg-gradient-to-r from-[#ff5500] to-[#ff8000] text-white shadow-md'
                  : 'text-[#fed2af]/70 hover:text-white'
              }`}
            >
              Pizza Combos
            </button>
            <button
              onClick={() => setActiveFilter('shawarma')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'shawarma'
                  ? 'bg-gradient-to-r from-[#ff5500] to-[#ff8000] text-white shadow-md'
                  : 'text-[#fed2af]/70 hover:text-white'
              }`}
            >
              Rolls & Shawarma
            </button>
          </div>
        </div>

        {/* Deals Container: Responsive Grid / Horizontal Swipe on Narrow Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredDeals.map((deal) => {
            const isAdded = addedDealId === deal.id;

            return (
              <div
                key={deal.id}
                className="group relative flex flex-col justify-between rounded-3xl bg-neutral-900/80 border border-white/10 hover:border-orange-500/40 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-950/40 backdrop-blur-sm overflow-hidden"
              >
                {/* Visual Top Area */}
                <div>
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-4 bg-neutral-950">
                    <img
                      src={deal.image}
                      alt={deal.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Graceful fallback to avoid broken image frames
                        const target = e.currentTarget;
                        target.src = '/final_isolated_burger.png';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                    {/* Optional small label if present */}
                    {deal.tag && (
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-bold text-amber-300 tracking-wide uppercase">
                        {deal.tag}
                      </div>
                    )}

                    {/* Drink indicator badge if specified */}
                    {deal.drinkInfo && (
                      <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-medium text-orange-200">
                        <Coffee className="w-3 h-3 text-[#ff7a00]" />
                        <span>{deal.drinkInfo}</span>
                      </div>
                    )}
                  </div>

                  {/* Deal Title & Price Header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                      {deal.name}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="block text-lg sm:text-xl font-black text-[#ff8000] tabular-nums">
                        Rs. {deal.price}
                      </span>
                    </div>
                  </div>

                  {/* Exact Included Items List */}
                  <div className="space-y-1.5 pt-2 pb-4 border-t border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                      Included Items:
                    </span>
                    {deal.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#fed2af]/90 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Controls (Comfortable 48px+ mobile hit area) */}
                <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                  <button
                    onClick={() => handleWhatsApp(deal)}
                    className="flex-1 min-h-[48px] flex items-center justify-center gap-2 bg-[#ff5500] hover:bg-[#ff6600] active:scale-[0.98] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-orange-950/40 transition-all cursor-pointer touch-manipulation select-none"
                    title="Order this deal directly on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                    <span className="truncate">Order on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => handleQuickAdd(deal)}
                    className={`min-h-[48px] min-w-[48px] p-3 rounded-xl border border-white/15 flex items-center justify-center transition-all cursor-pointer touch-manipulation shrink-0 ${
                      isAdded
                        ? 'bg-emerald-600 text-white border-emerald-500'
                        : 'bg-white/5 hover:bg-white/15 text-white'
                    }`}
                    title="Add to order list"
                    aria-label={`Add ${deal.name} to order`}
                  >
                    {isAdded ? <Check className="w-5 h-5" /> : <ShoppingBag className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Kicker */}
        <div className="mt-12 text-center text-xs text-[#fed2af]/60">
          <span>* All deals are prepared fresh upon order placement · Exact items & portions strictly honoured · Real-time kitchen dispatch</span>
        </div>
      </div>
    </section>
  );
};
