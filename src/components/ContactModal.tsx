import React from 'react';
import { X, MapPin, Phone, Clock, MessageCircle, Bike, Smartphone, ExternalLink } from 'lucide-react';
import { VERIFIED_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleWhatsAppChat = () => {
    window.open(`https://wa.me/${VERIFIED_WHATSAPP_NUMBER}?text=👋%20Hello%20Bake%20N%20Take!%20I%20have%20an%20inquiry%20or%20would%20like%20to%20order.`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-lg bg-[#140b07] text-white border border-orange-950/70 rounded-3xl shadow-2xl p-5 sm:p-7 flex flex-col space-y-4">
        
        <div className="flex items-center justify-between pb-3 border-b border-orange-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-orange-600/20 text-[#ff7a00]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-display text-white">Bake N Take</h2>
              <p className="text-xs text-orange-200/70">“Love at First Bite” · Location & Contact</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 cursor-pointer"
            aria-label="Close contact modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 text-xs sm:text-sm">
          {/* Address */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-orange-900/30 flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#ff7a00] shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-bold text-white text-xs sm:text-sm">Restaurant Address</h4>
              <p className="text-xs text-orange-200/80 mt-0.5">
                Dakkhana Road, Mingora, Swat
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Dakkhana+Road,+Mingora,+Swat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#ff7a00] font-semibold mt-1 hover:underline"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Delivery Hours */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-orange-900/30 flex items-start gap-3">
            <Clock className="w-4 h-4 text-[#ff7a00] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-white text-xs sm:text-sm">Delivery Hours</h4>
              <p className="text-xs text-orange-200/80 mt-0.5 tabular-nums">
                10:00 AM – 02:00 AM
              </p>
              <div className="inline-flex items-center gap-1.5 mt-1 text-[11px] text-emerald-400 font-semibold">
                <Bike className="w-3.5 h-3.5" />
                <span>Free Home Delivery Available</span>
              </div>
            </div>
          </div>

          {/* Contact Numbers */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-orange-900/30 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-400">Landline:</span>
              <a href="tel:0946722400" className="font-bold text-white hover:text-orange-300 tabular-nums">
                0946-722400
              </a>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-400">WhatsApp:</span>
              <a href={`https://wa.me/${VERIFIED_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-400 hover:text-emerald-300 tabular-nums">
                0335-9448388
              </a>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-400">Secondary Mobile:</span>
              <a href="tel:03400395050" className="font-bold text-white hover:text-orange-300 tabular-nums">
                0340-0395050
              </a>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-orange-950/40 flex items-center justify-between gap-3">
          <button
            onClick={handleWhatsAppChat}
            className="flex-1 bg-[#ff5500] hover:bg-[#ff6600] active:scale-[0.98] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-3 rounded-xl border border-white/10 hover:bg-white/10 text-xs font-semibold text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
