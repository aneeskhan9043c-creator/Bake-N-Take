import React from 'react';
import { X, Star, ThumbsUp, CheckCircle2 } from 'lucide-react';

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderNow: () => void;
}

export const ReviewsModal: React.FC<ReviewsModalProps> = ({ isOpen, onClose, onOrderNow }) => {
  if (!isOpen) return null;

  const reviews = [
    {
      name: "Hamza Tariq",
      rating: 5,
      date: "2 days ago",
      text: "The Chicken Fajita and BBQ Tikka pizzas are genuinely the best in Mingora. Dough is fresh, cheese is loaded, and the crust is crispy. 10/10!",
    },
    {
      name: "Ayesha Malik",
      rating: 5,
      date: "1 week ago",
      text: "Arrived scorching hot in 25 minutes with Free Home Delivery! The Zinger Mighty burger and Hot Wings are our family's favorite weekend feast.",
    },
    {
      name: "Bilal Ahmed",
      rating: 5,
      date: "3 weeks ago",
      text: "Bake N Take never disappoints. The Paratha rolls and Matka Pizza are super delicious and well spiced. Direct WhatsApp ordering is so quick and smooth.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-lg bg-[#1a0c06] text-white border border-orange-950/70 rounded-3xl shadow-2xl p-5 sm:p-7 flex flex-col space-y-4">
        
        <div className="flex items-center justify-between pb-3 border-b border-orange-950/60">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-orange-600/20 text-amber-400">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-xl font-bold font-display text-white">4.9 / 5.0 Rating</h2>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                  Verified
                </span>
              </div>
              <p className="text-xs text-orange-200/60">From over 10,000+ burger lovers</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="p-3.5 rounded-2xl bg-black/40 border border-orange-900/30 space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-white text-xs sm:text-sm">{rev.name}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-orange-100/75 leading-relaxed">{rev.text}</p>
              <p className="text-[10px] text-neutral-400">{rev.date}</p>
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-orange-950/40 flex items-center justify-between">
          <span className="text-xs text-orange-200/60">Try it for yourself today</span>
          <button
            onClick={() => {
              onClose();
              onOrderNow();
            }}
            className="bg-[#ff5900] hover:bg-[#ff7214] text-white text-xs font-bold py-2 px-4 rounded-xl shadow-md transition-all active:scale-95"
          >
            Order Now 🍔
          </button>
        </div>

      </div>
    </div>
  );
};
