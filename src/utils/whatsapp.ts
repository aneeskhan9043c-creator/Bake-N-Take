export const VERIFIED_WHATSAPP_NUMBER = '923359448388';

export function generateWhatsAppOrderUrl(item: {
  name: string;
  price: number;
  size?: string;
  items?: string[];
  drinkInfo?: string;
  quantity?: number;
  phone?: string;
}): string {
  const phone = item.phone || VERIFIED_WHATSAPP_NUMBER; // Bake N Take Verified Hotline
  const qty = item.quantity || 1;

  let text = `👋 *Hello Bake N Take!* I would like to place an order:\n\n`;
  text += `🍔 *Order Item:* ${item.name}\n`;
  if (item.size) {
    text += `📏 *Size:* ${item.size}\n`;
  }
  text += `🔢 *Quantity:* ${qty}\n`;
  text += `💰 *Price:* Rs. ${item.price * qty}\n`;

  if (item.items && item.items.length > 0) {
    text += `\n📦 *Includes:*\n`;
    item.items.forEach((inc) => {
      text += `  • ${inc}\n`;
    });
  }

  if (item.drinkInfo) {
    text += `🥤 *Drink:* ${item.drinkInfo}\n`;
  }

  text += `\n📍 Please confirm delivery time and total amount. Thank you!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function openWhatsAppOrder(item: {
  name: string;
  price: number;
  size?: string;
  items?: string[];
  drinkInfo?: string;
  quantity?: number;
}) {
  const url = generateWhatsAppOrderUrl(item);
  window.open(url, '_blank', 'noopener,noreferrer');
}
