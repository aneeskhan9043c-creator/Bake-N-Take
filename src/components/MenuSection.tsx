import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  MessageCircle, 
  ShoppingBag, 
  Check, 
  Sparkles, 
  AlertCircle,
  Pizza,
  UtensilsCrossed,
  Flame
} from 'lucide-react';
import { 
  MENU_CATEGORIES, 
  MENU_ITEMS, 
  MenuCategory, 
  MenuItem, 
  SizeOption 
} from '../data/menuData';
import { openWhatsAppOrder } from '../utils/whatsapp';

interface MenuSectionProps {
  onAddToCart: (item: { name: string; price: number }) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  // Keep track of selected size for items that have sizes (keyed by item.id)
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const selectedCategory = MENU_CATEGORIES.find((c) => c.id === selectedCategoryId);

  // Filter items for the active category
  const activeItems = selectedCategoryId
    ? MENU_ITEMS.filter((item) => item.categoryId === selectedCategoryId)
    : [];

  const handleSizeSelect = (itemId: string, sizeLabel: string) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [itemId]: sizeLabel,
    }));
  };

  const getItemEffectivePriceAndSize = (item: MenuItem): { price: number; sizeLabel?: string } => {
    if (!item.sizes || item.sizes.length === 0) {
      return { price: item.price };
    }
    const currentSizeLabel = selectedSizes[item.id] || item.sizes[0].label;
    const sizeOpt = item.sizes.find((s) => s.label === currentSizeLabel) || item.sizes[0];
    return {
      price: sizeOpt.price,
      sizeLabel: sizeOpt.label,
    };
  };

  const handleQuickAdd = (item: MenuItem) => {
    const { price, sizeLabel } = getItemEffectivePriceAndSize(item);
    const itemName = sizeLabel ? `${item.name} (${sizeLabel})` : item.name;
    onAddToCart({ name: itemName, price });
    setAddedItemId(item.id);
    setTimeout(() => setAddedItemId(null), 1800);
  };

  const handleWhatsApp = (item: MenuItem) => {
    const { price, sizeLabel } = getItemEffectivePriceAndSize(item);
    openWhatsAppOrder({
      name: item.name,
      price,
      size: sizeLabel,
      quantity: 1,
    });
  };

  const handleOpenCategory = (catId: string) => {
    setSelectedCategoryId(catId);
    // Smooth scroll down to the menu view area
    const menuEl = document.getElementById('menu-hub');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToHub = () => {
    setSelectedCategoryId(null);
    const menuEl = document.getElementById('menu-hub');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-t border-orange-950/30">
      <div id="menu-hub" className="max-w-7xl mx-auto">
        
        {/* VIEW 1: CATEGORY HUB (When no category is selected) */}
        {!selectedCategory && (
          <div className="animate-in fade-in duration-300">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff7a00] mb-2.5">
                <UtensilsCrossed className="w-4 h-4 text-[#ff7a00]" />
                <span>Culinary Selection</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Explore Our <span className="text-[#ff7a00]">Menu</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#fed2af]/70 leading-relaxed font-medium">
                Choose a category below to explore individual kitchen creations, sizes, and instant WhatsApp ordering. Handcrafted with fresh premium ingredients.
              </p>
            </div>

            {/* Category Cards Grid (2-col mobile, 3-col tablet, 4-col desktop) */}
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {MENU_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => handleOpenCategory(cat.id)}
                  className="group relative flex flex-col justify-between rounded-3xl bg-neutral-900/80 border border-white/10 hover:border-orange-500/50 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-950/40 active:scale-[0.98] active:border-orange-500/80 cursor-pointer overflow-hidden backdrop-blur-sm touch-manipulation select-none min-h-[220px]"
                  role="button"
                  tabIndex={0}
                  aria-label={`Explore ${cat.title} menu category`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleOpenCategory(cat.id);
                    }
                  }}
                >
                  {/* Category Image */}
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 bg-neutral-950">
                    <img
                      src={cat.heroImage}
                      alt={cat.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.src = '/final_isolated_burger.png';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                    {/* Item count tag */}
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-orange-200">
                      {cat.itemCount} Items
                    </div>

                    {/* Badge */}
                    {cat.badge && (
                      <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-[#ff6a00]/80 backdrop-blur-sm text-[10px] font-bold text-white tracking-wider uppercase">
                        {cat.badge}
                      </div>
                    )}
                  </div>

                  {/* Category Title & Description */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-1.5">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#fed2af]/70 leading-relaxed line-clamp-2 font-medium">
                        {cat.description}
                      </p>
                    </div>

                    {/* Explore Kicker (Generous 44px+ hit area touch zone) */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between min-h-[44px] text-xs sm:text-sm font-bold text-[#ff7a00] group-hover:text-orange-300">
                      <span>Explore Category</span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ff7a00]/20 transition-colors">
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: CATEGORY DETAIL VIEW (When a category is active) */}
        {selectedCategory && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            {/* Top Navigation & Back Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <button
                onClick={handleBackToHub}
                className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm transition-all hover:-translate-x-1 active:scale-[0.98] cursor-pointer touch-manipulation w-full sm:w-fit justify-center sm:justify-start"
              >
                <ArrowLeft className="w-4 h-4 text-[#ff7a00]" />
                <span>← Back to Menu Hub</span>
              </button>

              {/* Quick Category Switcher Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1 max-w-full">
                {MENU_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategoryId(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      selectedCategoryId === cat.id
                        ? 'bg-[#ff6a00] text-white shadow-md'
                        : 'bg-white/5 hover:bg-white/10 text-[#fed2af]/80'
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Banner Spotlight */}
            <div className="relative rounded-3xl overflow-hidden mb-10 border border-white/15 bg-neutral-950 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="relative z-10 max-w-xl">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#ff7a00] mb-2">
                  Category Showcase · {selectedCategory.itemCount} Dishes
                </span>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
                  {selectedCategory.title}
                </h1>
                <p className="text-sm sm:text-base text-[#fed2af]/80 leading-relaxed font-medium">
                  {selectedCategory.description}
                </p>
              </div>

              {/* Hero Photography Anchor */}
              <div className="relative w-full md:w-80 aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/10 shrink-0">
                <img
                  src={selectedCategory.heroImage}
                  alt={selectedCategory.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Render Items: If Pizza, split into 3 subsections: Regular, Special, Family */}
            {selectedCategory.id === 'pizza' ? (
              <div className="space-y-12">
                {/* Subsection A: Regular Pizza */}
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-2 border-b border-orange-500/30">
                    <Pizza className="w-5 h-5 text-[#ff7a00]" />
                    <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                      A. Regular Pizza
                    </h3>
                    <span className="text-xs text-[#fed2af]/60 font-medium">
                      (Available in 7", 10", 13")
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {activeItems
                      .filter((item) => item.subCategory === 'Regular Pizza')
                      .map((item) => renderItemCard(item))}
                  </div>
                </div>

                {/* Subsection B: Special Pizza */}
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-2 border-b border-orange-500/30">
                    <Sparkles className="w-5 h-5 text-[#ff7a00]" />
                    <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                      B. Special Pizza
                    </h3>
                    <span className="text-xs text-[#fed2af]/60 font-medium">
                      (Gourmet crust recipes)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {activeItems
                      .filter((item) => item.subCategory === 'Special Pizza')
                      .map((item) => renderItemCard(item))}
                  </div>
                </div>

                {/* Subsection C: Family Pizza */}
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-2 border-b border-orange-500/30">
                    <Flame className="w-5 h-5 text-[#ff7a00]" />
                    <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                      C. Family Pizza & Matka Pizza
                    </h3>
                    <span className="text-xs text-[#fed2af]/60 font-medium">
                      (Party and clay pot creations)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {activeItems
                      .filter((item) => item.subCategory === 'Family Pizza')
                      .map((item) => renderItemCard(item))}
                  </div>
                </div>
              </div>
            ) : (
              /* Standard Items Grid for other categories */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {activeItems.map((item) => renderItemCard(item))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );

  // Helper renderer for a single menu item card
  function renderItemCard(item: MenuItem) {
    const isAdded = addedItemId === item.id;
    const { price, sizeLabel } = getItemEffectivePriceAndSize(item);
    const currentSelectedSize = selectedSizes[item.id] || (item.sizes ? item.sizes[0].label : undefined);

    return (
      <div
        key={item.id}
        className="group relative flex flex-col justify-between rounded-2xl bg-neutral-900/85 border border-white/10 hover:border-orange-500/40 p-4 transition-all duration-300 hover:shadow-xl hover:shadow-orange-950/30 backdrop-blur-sm overflow-hidden"
      >
        <div>
          {/* Item Food Image */}
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-3 bg-neutral-950">
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
              onError={(e) => {
                const target = e.currentTarget;
                target.src = '/final_isolated_burger.png';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Price Badge on top of image */}
            <div className="absolute bottom-2.5 right-2.5 px-3 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-white/20 text-sm font-black text-[#ff8000] tabular-nums shadow-lg">
              Rs. {price}
            </div>

            {/* Size indicator on image if active */}
            {sizeLabel && (
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-[10px] font-bold text-white">
                Size: {sizeLabel}
              </div>
            )}
          </div>

          {/* Item Name */}
          <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-orange-300 transition-colors mb-1">
            {item.name}
          </h4>

          {/* Business Verification Flag if required */}
          {item.flag && (
            <div className="my-1.5 flex items-start gap-1.5 p-2 rounded-lg bg-amber-950/40 border border-amber-600/30 text-[11px] text-amber-200/90 leading-tight">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>{item.flag}</span>
            </div>
          )}

          {/* Description */}
          <p className="text-xs text-[#fed2af]/70 leading-relaxed font-medium mb-3">
            {item.description}
          </p>

          {/* Interactive Size Selector for Pizza and Variable Items */}
          {item.sizes && item.sizes.length > 0 && (
            <div className="mb-4 pt-2 border-t border-white/10">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                Select Size:
              </span>
              {/* Interactive Size Selector for Pizza and Variable Items (Comfortable 44px+ hit area) */}
              <div className="flex flex-wrap gap-1.5">
                {item.sizes.map((s) => {
                  const isSelected = currentSelectedSize === s.label;
                  return (
                    <button
                      key={s.label}
                      onClick={() => handleSizeSelect(item.id, s.label)}
                      className={`flex-1 min-w-[54px] min-h-[44px] py-2 px-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer touch-manipulation flex flex-col items-center justify-center ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#ff5500] to-[#ff8000] text-white shadow-md'
                          : 'bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10'
                      }`}
                    >
                      <span className="block">{s.label}</span>
                      <span className="block text-[10px] opacity-80 tabular-nums">
                        Rs. {s.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Action Controls (Comfortable 48px+ mobile hit area) */}
        <div className="pt-3 border-t border-white/10 flex items-center gap-2">
          <button
            onClick={() => handleWhatsApp(item)}
            className="flex-1 min-h-[48px] flex items-center justify-center gap-2 bg-[#ff5500] hover:bg-[#ff6600] active:scale-[0.98] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-orange-950/30 transition-all cursor-pointer touch-manipulation select-none"
            title="Order this item on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span className="truncate">Order on WhatsApp</span>
          </button>

          <button
            onClick={() => handleQuickAdd(item)}
            className={`min-h-[48px] min-w-[48px] p-3 rounded-xl border border-white/15 flex items-center justify-center transition-all cursor-pointer touch-manipulation shrink-0 ${
              isAdded
                ? 'bg-emerald-600 text-white border-emerald-500'
                : 'bg-white/5 hover:bg-white/15 text-white'
            }`}
            title="Add to order cart"
            aria-label={`Add ${item.name} to cart`}
          >
            {isAdded ? <Check className="w-5 h-5" /> : <ShoppingBag className="w-5 h-5" />}
          </button>
        </div>
      </div>
    );
  }
};
