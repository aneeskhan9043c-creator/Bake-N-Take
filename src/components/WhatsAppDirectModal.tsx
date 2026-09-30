import React, { useState } from 'react';
import { X, MessageCircle, ArrowRight, Clock, ShieldCheck, PhoneCall } from 'lucide-react';

interface WhatsAppDirectModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledItem?: { name: string; price: string } | null;
}

export const WhatsAppDirectModal: React.FC<WhatsAppDirectModalProps> = ({
  isOpen,
  onClose,
  prefilledItem,
}) => {
  if (!isOpen) return null;

  const restaurantPhone = "+92 300 1234567";
  const rawNumber = "923001234567";

  const defaultMessage = prefilledItem
    ? `Hi Flame & Bun! I would like to order: ${prefilledItem.name} (${prefilledItem.price}). Please share delivery time and total.`
    : "Hi Flame & Bun! I'd like to place an order for delivery / pickup. Please send today's available menu and deals.";

  const [customNote, setCustomNote] = useState(defaultMessage);

  const handleLaunchWhatsApp = () => {
    const encodedText = encodeURIComponent(customNote.trim());
    const waUrl = `https://wa.me/${rawNumber}?text=${encodedText}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-lg bg-[#190e09] border border-orange-900/60 rounded-2xl shadow-2xl overflow-hidden z-10">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-orange-950/80 bg-gradient-to-r from-[#25D366]/10 via-transparent to-transparent flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
              <MessageCircle className="w-5 h-5 fill-current stroke-none" />
            </div>
            <div>
              <h2 id="whatsapp-modal-title" className="text-lg font-bold font-display text-orange-100">
                Order via WhatsApp
              </h2>
              <div className="flex items-center gap-2 text-xs text-amber-200/70">
                <span>Kitchen Line: {restaurantPhone}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-400 font-medium">Online</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close WhatsApp prompt"
            className="p-2 text-amber-300/80 hover:text-white hover:bg-orange-900/40 rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-orange-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4">
          <p className="text-sm text-amber-100/90 leading-relaxed">
            Our kitchen team takes orders directly on WhatsApp for personal order customizations, live delivery tracking, and fast response times.
          </p>

          <div className="space-y-1.5">
            <label htmlFor="wa-message" className="text-xs font-semibold uppercase tracking-wider text-orange-300">
              Message Preview
            </label>
            <textarea
              id="wa-message"
              rows={3}
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              className="w-full bg-[#120a06] border border-orange-950 rounded-xl p-3 text-sm text-amber-100 placeholder-amber-400/40 focus:border-orange-500 focus:outline-none transition-colors resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] text-amber-200/70">
            <div className="flex items-center gap-1.5 bg-orange-950/30 p-2 rounded-lg border border-orange-950/50">
              <Clock className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>Prepared in 15–20 mins</span>
            </div>
            <div className="flex items-center gap-1.5 bg-orange-950/30 p-2 rounded-lg border border-orange-950/50">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>Cash on Delivery</span>
            </div>
          </div>

          <button
            onClick={handleLaunchWhatsApp}
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#082811] text-base font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-white"
          >
            <MessageCircle className="w-5 h-5 fill-current stroke-none" />
            <span>Continue to WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
