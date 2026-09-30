import React from 'react';
import { X, MessageCircle, Flame, Sparkles } from 'lucide-react';

interface MenuQuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBurgerForWhatsApp: (burgerName: string, price: string) => void;
}

export const MenuQuickViewModal: React.FC<MenuQuickViewModalProps> = ({
  isOpen,
  onClose,
  onSelectBurgerForWhatsApp,
}) => {
  if (!isOpen) return null;

  const menuItems = [
    {
      name: "The Classic Double Smash",
      category: "Signature Beef",
      price: "Rs. 780",
      description: "Two 80g smashed beef patties, melted cheddar, crisp lettuce, dill pickles, signature house glaze on toasted brioche.",
      popular: true,
    },
    {
      name: "Smoky Firehouse Smash",
      category: "Spicy Beef",
      price: "Rs. 850",
      description: "Double smash beef, pepper jack, grilled jalapeños, crispy onion straw crunch, chipotle barbecue drizzle.",
      popular: true,
    },
    {
      name: "The Karachi Melt Smash",
      category: "Chef's Special",
      price: "Rs. 890",
      description: "Double seasoned beef, caramelized sweet onions, molten mozzarella & cheddar cascade, garlic aioli.",
      popular: false,
    },
    {
      name: "Crispy Buttermilk Zinger",
      category: "Premium Poultry",
      price: "Rs. 690",
      description: "24-hr marinated chicken thigh with shatter-crisp crumb, tangy slaw, house mayo on buttered bun.",
      popular: false,
    },
    {
      name: "Loaded Truffle Herb Fries",
      category: "Craft Sides",
      price: "Rs. 420",
      description: "Hand-cut Idaho potatoes dusted with cracked pepper, sea salt, truffle oil drizzle, grated parmesan.",
      popular: false,
    },
    {
      name: "Dark Chocolate Shake",
      category: "Fresh Shakes",
      price: "Rs. 480",
      description: "Thick hand-spun dairy ice cream, rich cocoa fudge, roasted waffle crumb topping.",
      popular: false,
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
    >
      {/* Backdrop click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-2xl bg-[#1a0e08] border border-orange-900/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh] z-10">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-orange-950/80 flex items-center justify-between bg-gradient-to-r from-orange-950/40 via-[#1a0e08] to-orange-950/40">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-orange-400 mb-1 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>Direct Kitchen Menu</span>
            </div>
            <h2 id="menu-modal-title" className="text-xl sm:text-2xl font-bold font-display text-orange-100">
              Fresh Smash Menu
            </h2>
            <p className="text-xs text-amber-200/70 mt-0.5">
              Tap any item to order instantly via WhatsApp
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu quick view"
            className="p-2 text-amber-300/80 hover:text-white hover:bg-orange-900/40 rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-orange-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Item Grid */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 divide-y divide-orange-950/50">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className={`pt-4 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group`}
            >
              <div className="space-y-1 max-w-md">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-orange-100 font-display">
                    {item.name}
                  </h3>
                  {item.popular && (
                    <span className="text-[10px] font-semibold tracking-wide text-amber-400">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-xs text-amber-200/70 leading-relaxed">
                  {item.description}
                </p>
                <div className="text-xs text-orange-400/80">
                  {item.category}
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0">
                <span className="text-sm font-bold font-display text-amber-100 whitespace-nowrap tabular-nums">
                  {item.price}
                </span>
                <button
                  onClick={() => onSelectBurgerForWhatsApp(item.name, item.price)}
                  className="flex items-center gap-1.5 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-[#082811] border border-[#25D366]/30 hover:border-[#25D366] text-xs font-semibold py-1.5 px-3 rounded-lg transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#25D366]"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current stroke-none" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info banner */}
        <div className="p-4 bg-orange-950/60 border-t border-orange-950/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-200/80">
          <span>Freshly prepared upon order · Pick-up & Delivery available</span>
          <button
            onClick={() => onSelectBurgerForWhatsApp("Custom Order", "All Items")}
            className="flex items-center gap-1.5 text-xs text-orange-300 hover:text-white font-medium underline underline-offset-4"
          >
            <span>Ask for today's special deals on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
