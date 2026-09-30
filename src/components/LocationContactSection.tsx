import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Bike, 
  MessageCircle, 
  Smartphone, 
  ExternalLink,
  Heart
} from 'lucide-react';
import { VERIFIED_WHATSAPP_NUMBER } from '../utils/whatsapp';

export const LocationContactSection: React.FC = () => {
  const directWhatsAppUrl = `https://wa.me/${VERIFIED_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    '👋 Hello Bake N Take! I would like to place an order or have an inquiry.'
  )}`;

  const mapsQueryUrl = 'https://www.google.com/maps/search/?api=1&query=Dakkhana+Road,+Mingora,+Swat';
  const mapsEmbedUrl = 'https://maps.google.com/maps?q=Dakkhana+Road,+Mingora,+Swat&t=&z=15&ie=UTF8&iwloc=&output=embed';

  return (
    <section 
      id="location-contact" 
      aria-labelledby="location-contact-heading"
      className="relative w-full py-14 sm:py-18 lg:py-22 px-4 sm:px-8 lg:px-12 border-t border-orange-950/30"
    >
      {/* Subtle Warm Lighting Backdrop */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] pointer-events-none opacity-20 rounded-full select-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 90, 0, 0.4) 0%, rgba(180, 50, 0, 0.1) 60%, transparent 80%)',
          filter: 'blur(90px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff7a00] mb-2">
            FIND US
          </p>
          <h2 
            id="location-contact-heading" 
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight"
          >
            Come By or <span className="text-[#ff7a00]">Order Direct.</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#fed2af]/70 leading-relaxed font-medium text-pretty">
            Have a question, want to place an order, or need directions? Get in touch with Bake N Take.
          </p>
        </div>

        {/* 2-Part Grid: Left Details & Right Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* LEFT: Business Information & Contact Hub (lg:col-span-6 or 7) */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-neutral-900/80 border border-white/10 backdrop-blur-sm shadow-xl">
            <div className="space-y-6">
              
              {/* Brand Title & Tagline */}
              <div className="pb-5 border-b border-white/10">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                      Bake N Take
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#ff7a00] font-semibold tracking-wide mt-1">
                      <Heart className="w-3.5 h-3.5 fill-[#ff7a00]" />
                      <span>“Love at First Bite”</span>
                    </div>
                  </div>
                  {/* Delivery Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-950/50 border border-orange-500/30 text-xs font-bold text-orange-200">
                    <Bike className="w-3.5 h-3.5 text-[#ff7a00]" />
                    <span>Free Home Delivery</span>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#ff7a00]/10 border border-[#ff7a00]/30 flex items-center justify-center shrink-0 text-[#ff7a00]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    Restaurant Location
                  </span>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Dakkhana Road, Mingora, Swat
                  </p>
                </div>
              </div>

              {/* Delivery Hours Card (Strictly labeled as Delivery Hours) */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#ff7a00]/10 border border-[#ff7a00]/30 flex items-center justify-center shrink-0 text-[#ff7a00]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    Delivery Hours
                  </span>
                  <p className="text-sm font-semibold text-white mt-0.5 tabular-nums">
                    10:00 AM – 02:00 AM
                  </p>
                </div>
              </div>

              {/* Phone Numbers Grid */}
              <div className="pt-2 space-y-2.5">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Direct Contact Lines
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Landline */}
                  <a
                    href="tel:0946722400"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#ff7a00] shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="min-w-0">
                      <span className="block text-[10px] text-neutral-400 font-medium">Landline</span>
                      <span className="text-xs sm:text-sm font-bold text-white tabular-nums truncate block">
                        0946-722400
                      </span>
                    </div>
                  </a>

                  {/* Secondary Mobile */}
                  <a
                    href="tel:03400395050"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4 text-[#ff7a00] shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="min-w-0">
                      <span className="block text-[10px] text-neutral-400 font-medium">Secondary Mobile</span>
                      <span className="text-xs sm:text-sm font-bold text-white tabular-nums truncate block">
                        0340-0395050
                      </span>
                    </div>
                  </a>
                </div>

                {/* Verified WhatsApp Line Callout */}
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-500/30 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 fill-emerald-400/20 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="block text-[10px] text-emerald-300 font-bold uppercase tracking-wider">
                        Official Order WhatsApp
                      </span>
                      <span className="text-sm font-bold text-white tabular-nums">
                        0335-9448388
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-300 group-hover:translate-x-1 transition-transform">
                    Chat Now →
                  </span>
                </a>
              </div>

            </div>

            {/* Action Buttons Row */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 min-h-[48px] flex items-center justify-center gap-2 bg-[#ff5500] hover:bg-[#ff6600] active:scale-[0.98] text-white py-3 px-5 rounded-xl text-sm font-bold shadow-lg shadow-orange-950/40 transition-all cursor-pointer touch-manipulation text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                <span>Order on WhatsApp (0335-9448388)</span>
              </a>

              <a
                href="tel:0946722400"
                className="w-full sm:w-auto min-h-[48px] flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 active:scale-[0.98] border border-white/15 text-white font-bold text-sm transition-all cursor-pointer touch-manipulation whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#ff7a00]" />
                <span>Call Now (0946-722400)</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Real Google Maps Embed Container (lg:col-span-6 or 5) */}
          <div className="lg:col-span-6 flex flex-col rounded-3xl bg-neutral-900/80 border border-white/10 overflow-hidden shadow-xl min-h-[360px] lg:min-h-full">
            {/* Map Header Strip */}
            <div className="py-3 px-4 sm:px-6 bg-neutral-950/80 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-[#fed2af]/90">
                <MapPin className="w-3.5 h-3.5 text-[#ff7a00]" />
                <span>Bake N Take · Dakkhana Road, Mingora, Swat</span>
              </div>
              <a
                href={mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#ff7a00] hover:text-orange-300 transition-colors"
              >
                <span>View Large</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Live Google Map */}
            <div className="relative flex-1 w-full min-h-[300px] sm:min-h-[380px] bg-neutral-950">
              <iframe
                title="Bake N Take Location Dakkhana Road Mingora Swat"
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full filter saturate-[0.95] contrast-[1.05]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
