import React from 'react';
import { UtensilsCrossed, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const HowToOrderSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'EXPLORE',
      description: 'Browse the menu and choose your favourites.',
      icon: UtensilsCrossed,
    },
    {
      number: '02',
      title: 'ORDER ON WHATSAPP',
      description: 'Select your items and send your order directly on WhatsApp.',
      icon: MessageCircle,
    },
    {
      number: '03',
      title: 'CONFIRM & ENJOY',
      description: 'Confirm your order details and enjoy your food.',
      icon: CheckCircle2,
    },
  ];

  const handleScrollToMenu = () => {
    const menuEl = document.getElementById('menu') || document.getElementById('offers-deals');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="how-to-order" 
      aria-labelledby="how-to-order-heading"
      className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 border-t border-orange-950/30"
    >
      {/* Subtle Warm Atmospheric Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none opacity-20 rounded-full select-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 110, 20, 0.4) 0%, rgba(180, 50, 0, 0.1) 60%, transparent 80%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff7a00] mb-2">
            HOW IT WORKS
          </p>
          <h2 
            id="how-to-order-heading" 
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight"
          >
            Ordering is <span className="text-[#ff7a00]">Simple.</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#fed2af]/70 leading-relaxed font-medium text-pretty">
            Choose what you want from the menu, send your order on WhatsApp, and confirm the details with Bake N Take.
          </p>
        </div>

        {/* 3 Compact Steps Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-neutral-900/70 border border-white/10 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-950/20 backdrop-blur-sm"
              >
                {/* Top Row: Step Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-2xl sm:text-3xl font-black text-[#ff7a00] tabular-nums tracking-tighter opacity-90 group-hover:text-orange-400 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff7a00] group-hover:scale-110 group-hover:bg-[#ff7a00]/10 transition-transform duration-300">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-white tracking-wide uppercase mb-1.5 group-hover:text-orange-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#fed2af]/70 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Subtle desktop connector arrow indicator to the next card */}
                {idx < steps.length - 1 && (
                  <div 
                    className="hidden md:flex absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-neutral-950 border border-white/15 items-center justify-center text-neutral-400 z-20 pointer-events-none"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-3 h-3 text-[#ff7a00]/80" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Compact Quick Return Link */}
        <div className="mt-8 text-center">
          <button
            onClick={handleScrollToMenu}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#fed2af]/70 hover:text-white transition-colors cursor-pointer group py-1 px-3 rounded-full hover:bg-white/5"
          >
            <span>Ready to order? Explore the menu above</span>
            <span className="text-[#ff7a00] group-hover:-translate-y-0.5 transition-transform">↑</span>
          </button>
        </div>
      </div>
    </section>
  );
};
