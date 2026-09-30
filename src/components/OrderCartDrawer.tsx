import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle, MessageCircle, ArrowRight, Bike } from 'lucide-react';
import { VERIFIED_WHATSAPP_NUMBER } from '../utils/whatsapp';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  extras?: string[];
}

interface OrderCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onQuickAddItem: (item: { name: string; price: number }) => void;
}

export const OrderCartDrawer: React.FC<OrderCartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onQuickAddItem,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 0; // Free Home Delivery in Mingora
  const total = subtotal + deliveryFee;

  const handleCheckoutWhatsApp = () => {
    if (cartItems.length === 0) return;
    
    const itemsSummary = cartItems
      .map(
        (item) =>
          `• ${item.quantity}x ${item.name} (Rs. ${item.price * item.quantity})${
            item.extras && item.extras.length > 0 ? ` [${item.extras.join(', ')}]` : ''
          }`
      )
      .join('\n');

    const message = `🍕 *NEW ORDER FROM BAKE N TAKE* 🍔\n\n${itemsSummary}\n\n*Total Amount:* Rs. ${total}\n*Delivery:* Free Home Delivery\n\n*Customer Details:*\nName: ${
      customerName || 'Customer'
    }\nPhone: ${phone || 'Not provided'}\nAddress: ${deliveryAddress || 'Dakkhana Road / Mingora'}\n\nPlease confirm my order!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${VERIFIED_WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
    setOrderPlaced(true);
  };

  const quickPicks = [
    { name: "Fries Regular", price: 250 },
    { name: "Hot Wings (5 Pcs)", price: 400 },
    { name: "Nuggets (5 Pcs)", price: 350 },
    { name: "Soup (Chicken Corn)", price: 280 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-md h-full bg-[#1b0d06] text-white border-l border-orange-950/60 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-orange-950/60 flex items-center justify-between bg-[#140a04]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-orange-600/20 text-[#ff6818]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-display text-white">Your Burger House Order</h2>
              <p className="text-xs text-orange-200/60">{cartItems.length} items in cart</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
          {orderPlaced ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-bold font-display text-white">Order Sent to WhatsApp!</h3>
              <p className="text-sm text-orange-200/80 max-w-xs mx-auto">
                Our kitchen has received your details. We'll start sizzling your patties immediately!
              </p>
              <button
                onClick={() => {
                  setOrderPlaced(false);
                  onClose();
                }}
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2.5 px-6 rounded-xl text-sm"
              >
                Back to Burger House
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              {cartItems.length === 0 ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-orange-950/40 border border-orange-900/50 flex items-center justify-center mx-auto text-3xl">
                    🍔
                  </div>
                  <h3 className="text-base font-bold text-white">Your cart is empty</h3>
                  <p className="text-xs text-orange-200/60 max-w-xs mx-auto">
                    Choose our signature Double Smash Burger or add delicious sides below!
                  </p>
                  <button
                    onClick={() => onQuickAddItem({ name: "The Classic Double Smash", price: 780 })}
                    className="inline-flex items-center gap-1.5 bg-[#ff6818] hover:bg-[#ff7a2b] text-white font-bold text-xs py-2 px-4 rounded-xl shadow-md transition-all active:scale-95"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Classic Double Smash (Rs. 780)</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 sm:p-3.5 rounded-xl bg-black/40 border border-orange-900/30 flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                        <p className="text-xs text-[#ff8335] font-semibold mt-0.5">
                          Rs. {item.price * item.quantity}
                          <span className="text-[11px] text-neutral-400 font-normal ml-1">
                            (Rs. {item.price} each)
                          </span>
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center bg-black/60 border border-white/10 rounded-lg p-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:text-white text-neutral-400 transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 text-xs font-bold text-white tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:text-white text-neutral-400 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1.5 text-neutral-400 hover:text-rose-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Quick Add Upgrades */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400/90 mb-2">
                  Add Tasty Sides & Add-ons
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {quickPicks.map((pick) => (
                    <button
                      key={pick.name}
                      onClick={() => onQuickAddItem(pick)}
                      className="p-2 rounded-xl bg-black/30 hover:bg-black/50 border border-orange-950/60 hover:border-orange-500/50 text-left transition-all group flex flex-col justify-between"
                    >
                      <span className="text-xs font-semibold text-white/90 group-hover:text-white line-clamp-1">
                        {pick.name}
                      </span>
                      <div className="flex items-center justify-between mt-1 text-[11px] text-orange-300">
                        <span>+Rs. {pick.price}</span>
                        <Plus className="w-3 h-3 text-orange-400 group-hover:scale-125 transition-transform" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Details Form */}
              <div className="pt-2 border-t border-orange-950/50 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400/90">
                  Delivery Details
                </h4>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-black/40 border border-orange-950/80 rounded-xl px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                />
                <input
                  type="tel"
                  placeholder="Contact Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-black/40 border border-orange-950/80 rounded-xl px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                />
                <textarea
                  rows={2}
                  placeholder="Delivery Address / House / Street"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-black/40 border border-orange-950/80 rounded-xl px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 resize-none"
                />
              </div>
            </>
          )}
        </div>

        {/* Footer Checkout Summary */}
        {!orderPlaced && cartItems.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-orange-950/60 bg-[#140a04] space-y-3">
            <div className="space-y-1.5 text-xs text-orange-200/70">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="tabular-nums font-semibold text-white">Rs. {subtotal}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Home Delivery</span>
                <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider">FREE</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base font-bold text-white pt-1 border-t border-orange-950/40">
                <span>Total Amount</span>
                <span className="text-[#ff6818] tabular-nums">Rs. {total}</span>
              </div>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-[#062910] font-extrabold py-3.5 px-4 rounded-xl shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current stroke-none" />
              <span>Send Order on WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-auto" />
            </button>
            <p className="text-[11px] text-center text-orange-200/50">
              Fastest confirmation · Cash on Delivery available
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
