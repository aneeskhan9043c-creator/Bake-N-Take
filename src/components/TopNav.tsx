import React from 'react';
import { Menu, MessageCircle } from 'lucide-react';

interface TopNavProps {
  onOpenMenu: () => void;
  onOpenWhatsApp: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ onOpenMenu, onOpenWhatsApp }) => {
  return (
    <header className="w-full relative z-30 border-b border-orange-950/40 bg-gradient-to-b from-[#140b07]/95 to-[#140b07]/60 backdrop-blur-md shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-18 flex items-center justify-between gap-4">
        {/* Logo / Wordmark on left */}
        <a
          href="#"
          className="text-base sm:text-xl font-extrabold tracking-tight font-display text-orange-100 hover:text-orange-400 transition-colors shrink-0"
        >
          FLAME & BUN
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Hero navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-amber-200/80"
        >
          <button
            onClick={onOpenMenu}
            className="hover:text-amber-100 transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-orange-500 rounded-sm"
          >
            Signature Burgers
          </button>
          <button
            onClick={onOpenMenu}
            className="hover:text-amber-100 transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-orange-500 rounded-sm"
          >
            Craft Sides
          </button>
          <button
            onClick={onOpenMenu}
            className="hover:text-amber-100 transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-orange-500 rounded-sm"
          >
            Fresh Shakes
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Mobile minimal menu icon button */}
          <button
            onClick={onOpenMenu}
            aria-label="Open Menu"
            className="md:hidden flex items-center gap-1.5 py-1.5 px-2.5 rounded-lg border border-orange-900/50 bg-[#22130c]/80 hover:bg-[#2e1910] text-amber-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            <Menu className="w-4 h-4 text-orange-400" />
            <span>Menu</span>
          </button>

          {/* Desktop WhatsApp Action */}
          <button
            onClick={onOpenWhatsApp}
            className="hidden sm:flex items-center gap-2 bg-[#FFF7ED] hover:bg-white text-[#1c0f08] text-xs font-bold py-2 px-3.5 rounded-lg shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current stroke-none" />
            <span>Order on WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  );
};
