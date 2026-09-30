import React from 'react';
import { X, Tag, Gift, Flame, ArrowRight } from 'lucide-react';

interface SpecialsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaimDeal: (dealName: string, price: number) => void;
}

export const SpecialsModal: React.FC<SpecialsModalProps> = ({ isOpen, onClose, onClaimDeal }) => {
  if (!isOpen) return null;

  const deals = [
    {
      title: "Family Deal 1",
      price: 2400,
      originalPrice: 2850,
      desc: "1x Medium Pizza + 1x Zinger Burger + 10x Hot Wings + 1.5 LTR Drink.",
      highlight: "Family Favorite",
    },
    {
      title: "Deal 2 (Duo Combo)",
      price: 1350,
      originalPrice: 1600,
      desc: "2x Zinger Burgers + 5x Hot Wings + 1x Regular Fries + 500 ML Drink.",
      highlight: "Save Rs. 250",
    },
    {
      title: "Special Deals-1 (Pizza Trio)",
      price: 2100,
      originalPrice: 2400,
      desc: "3x Small 7\" Artisanal Pizzas (Choose Fajita, Tikka, or Supreme).",
      highlight: "Pizza Trio Saver",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-lg bg-[#1a0c06] text-white border border-orange-950/70 rounded-3xl shadow-2xl p-5 sm:p-7 flex flex-col space-y-4">
        
        <div className="flex items-center justify-between pb-3 border-b border-orange-950/60">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-orange-600/20 text-[#ff6818]">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-display text-white">Today's Specials</h2>
              <p className="text-xs text-orange-200/60">Limited-time chef bundles</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3.5">
          {deals.map((deal) => (
            <div
              key={deal.title}
              className="p-4 rounded-2xl bg-black/40 border border-orange-900/40 hover:border-orange-500/50 transition-all flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-white text-base">{deal.title}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                  {deal.highlight}
                </span>
              </div>
              <p className="text-xs text-orange-100/70 mt-1.5 leading-relaxed">{deal.desc}</p>
              
              <div className="flex items-center justify-between mt-4 pt-2.5 border-t border-orange-950/40">
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-extrabold text-white">Rs. {deal.price}</span>
                  <span className="text-xs line-through text-neutral-400">Rs. {deal.originalPrice}</span>
                </div>
                <button
                  onClick={() => onClaimDeal(deal.title, deal.price)}
                  className="bg-[#ff5900] hover:bg-[#ff7214] text-white text-xs font-bold py-1.5 px-3.5 rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-1"
                >
                  <span>Claim Deal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
