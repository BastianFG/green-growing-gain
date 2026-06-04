export type CartItem = {
  slug: string;
  name: string;
  image: string;
  price: number;
  qty: number;
  size?: string;
  variantId?: string;
};

const KEY = "verde_cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
}

export function setCart(items: CartItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("cart:update"));
}

export function addToCart(item: CartItem) {
  const cart = getCart();
  const existing = cart.find((i) => i.slug === item.slug && i.size === item.size);
  if (existing) existing.qty += item.qty;
  else cart.push(item);
  setCart(cart);
}

export function removeFromCart(slug: string, size?: string) {
  setCart(getCart().filter((i) => !(i.slug === slug && i.size === size)));
}

export function updateQty(slug: string, qty: number, size?: string) {
  const cart = getCart().map((i) =>
    i.slug === slug && i.size === size ? { ...i, qty: Math.max(1, qty) } : i
  );
  setCart(cart);
}

export function cartTotal(items: CartItem[]) {
  return items.reduce((s, i) => s + i.price * i.qty, 0);
}
