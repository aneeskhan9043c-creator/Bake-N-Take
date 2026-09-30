import React from 'react';
import { X, Award, Flame, Heart, Sparkles } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreMenu: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onExploreMenu }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-lg bg-[#1a0c06] text-white border border-orange-950/70 rounded-3xl shadow-2xl p-5 sm:p-7 flex flex-col space-y-4">
        
        <div className="flex items-center justify-between pb-3 border-b border-orange-950/60">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-orange-600/20 text-[#ff6818]">
              <Flame className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-display text-white">The Bake N Take Story</h2>
              <p className="text-xs text-orange-200/60">“Love at First Bite” · Mingora, Swat</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 cursor-pointer"
            aria-label="Close about modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-orange-100/80 leading-relaxed">
          <p>
            Located at Dakkhana Road, Mingora, <strong className="text-white">Bake N Take</strong> has become a beloved fast-food destination dedicated to bold flavours, fresh ingredients, and exceptional service with free home delivery.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-2xl bg-black/40 border border-orange-900/30">
              <Award className="w-5 h-5 text-amber-400 mb-1.5" />
              <h4 className="font-bold text-white text-xs">Fresh Artisanal Crust</h4>
              <p className="text-[11px] text-orange-200/70 mt-1">
                Stretched daily dough with rich mozzarella and flame-grilled meats.
              </p>
            </div>
            <div className="p-3 rounded-2xl bg-black/40 border border-orange-900/30">
              <Sparkles className="w-5 h-5 text-orange-400 mb-1.5" />
              <h4 className="font-bold text-white text-xs">Crunchy Zinger Fillets</h4>
              <p className="text-[11px] text-orange-200/70 mt-1">
                Hand-breaded fresh chicken fried to crispy golden perfection.
              </p>
            </div>
          </div>

          <p className="text-xs text-orange-200/60 pt-1">
            Enjoy our extensive menu from family feasts and pizza trios to hot shawarma wraps and loaded fries — delivered hot and fresh to your doorstep.
          </p>
        </div>

        <div className="pt-3 border-t border-orange-950/40 flex justify-end">
          <button
            onClick={() => {
              onClose();
              onExploreMenu();
            }}
            className="bg-[#ff5900] hover:bg-[#ff7214] text-white text-xs font-bold py-2.5 px-5 rounded-xl shadow-md transition-all active:scale-95"
          >
            Explore Our Menu
          </button>
        </div>

      </div>
    </div>
  );
};
