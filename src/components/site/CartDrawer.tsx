import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { X, ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { useEffect, useState } from "react";
import { getCart, updateQty, removeFromCart, cartTotal, type CartItem } from "@/lib/cart";
import { formatCLP, products } from "@/lib/products";
import { easeSnappy, easeOutQuint } from "@/lib/motion";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Sync cart state on open and on cart updates
  useEffect(() => {
    const sync = () => setItems(getCart());
    sync();
    window.addEventListener("cart:update", sync);
    return () => window.removeEventListener("cart:update", sync);
  }, []);

  const total = cartTotal(items);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOutQuint }}
            className="fixed inset-0 z-50 bg-ink/30 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <motion.div
            key="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: easeSnappy }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-bone flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="size-5 text-[#86895d]" strokeWidth={1.5} />
                <h2 className="font-display text-xl tracking-tight">
                  Tu carrito
                  {items.length > 0 && (
                    <span className="ml-2 text-sm font-normal text-muted-foreground">
                      ({items.reduce((s, i) => s + i.qty, 0)} artículos)
                    </span>
                  )}
                </h2>
              </div>
              <motion.button
                aria-label="Cerrar carrito"
                onClick={onClose}
                className="p-2 -mr-2 text-ink/60 hover:text-ink transition-colors"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.25, ease: easeOutQuint }}
              >
                <X className="size-5" strokeWidth={1.5} />
              </motion.button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto py-4 px-5 space-y-5 cart-scrollbar">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: easeOutQuint }}
                  className="flex flex-col items-center justify-center h-full text-center py-20 gap-4"
                >
                  <div className="size-16 rounded-full bg-[#86895d]/10 flex items-center justify-center">
                    <ShoppingBag className="size-7 text-[#86895d]/60" strokeWidth={1.5} />
                  </div>
                  <p className="font-display text-xl text-[#272831]/60">Tu carrito está vacío</p>
                  <p className="text-sm text-muted-foreground">Agrega plantas y accesorios para comenzar.</p>
                  <motion.button
                    onClick={onClose}
                    className="mt-2 text-[11px] font-semibold tracking-[0.2em] uppercase border-b border-[#272831]/30 pb-0.5 hover:border-[#86895d] hover:text-[#86895d] transition-colors"
                    whileHover={{ y: -1 }}
                  >
                    Explorar tienda →
                  </motion.button>
                </motion.div>
              ) : (
                <AnimatePresence initial={false}>
                  {items.map((item, i) => (
                    <motion.div
                      key={`${item.slug}-${item.size}`}
                      layout
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40, transition: { duration: 0.25 } }}
                      transition={{ duration: 0.4, ease: easeOutQuint, delay: i * 0.04 }}
                      className="flex gap-4 py-4 border-b border-border/60 last:border-0"
                    >
                      {/* Product image */}
                      <div className="size-20 shrink-0 rounded-[12px] overflow-hidden bg-secondary flex items-center justify-center">
                        <img
                          src={
                            (typeof item.image === "string" && !item.image.startsWith("http") && products.find(p => p.slug === item.slug)?.image) || 
                            item.image || ""
                          }
                          alt={item.name}
                          className="size-full object-cover"
                          width={80}
                          height={80}
                          loading="lazy"
                          onError={(e) => {
                            // Fallback if image fails to load
                            const target = e.target as HTMLImageElement;
                            const itemName = item.name || "";
                            const firstWord = itemName.split(' ')[0];
                            const localFallback = firstWord ? products.find(p => p.name.toLowerCase().includes(firstWord.toLowerCase()))?.image : undefined;
                            
                            if (localFallback && target.src !== localFallback) {
                              target.src = localFallback;
                            } else {
                              target.style.display = 'none';
                            }
                          }}
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <p className="font-display text-sm font-bold text-[#272831] leading-snug line-clamp-2">
                            {item.name}
                          </p>
                          {item.size && (
                            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mt-0.5">
                              {item.size}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          {/* Qty controls */}
                          <div className="flex items-center border border-neutral-200 rounded-full bg-neutral-50 overflow-hidden px-0.5">
                            <button
                              onClick={() => {
                                if (item.qty <= 1) removeFromCart(item.slug, item.size);
                                else updateQty(item.slug, item.qty - 1, item.size);
                              }}
                              aria-label="Disminuir cantidad"
                              className="px-2.5 py-1.5 hover:bg-neutral-200 rounded-full transition-colors"
                            >
                              <Minus className="size-3 text-[#272831]" strokeWidth={2} />
                            </button>
                            <span className="px-2 text-xs font-bold text-[#272831] min-w-[20px] text-center">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQty(item.slug, item.qty + 1, item.size)}
                              aria-label="Aumentar cantidad"
                              className="px-2.5 py-1.5 hover:bg-neutral-200 rounded-full transition-colors"
                            >
                              <Plus className="size-3 text-[#272831]" strokeWidth={2} />
                            </button>
                          </div>

                          <div className="flex items-center gap-3">
                            {/* Price */}
                            <span className="text-sm font-bold text-[#272831]">
                              {formatCLP(item.price * item.qty)}
                            </span>
                            {/* Remove */}
                            <button
                              onClick={() => removeFromCart(item.slug, item.size)}
                              aria-label={`Eliminar ${item.name}`}
                              className="text-muted-foreground hover:text-[#865d5d] transition-colors"
                            >
                              <Trash2 className="size-3.5" strokeWidth={1.5} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer: Summary + CTA */}
            {items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: easeOutQuint, delay: 0.15 }}
                className="shrink-0 border-t border-border px-6 pt-5 pb-7 space-y-5 bg-bone"
              >
                {/* Order summary */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>{formatCLP(total)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Envío</span>
                    <span className="text-[#86895d] font-medium">Calculado al finalizar</span>
                  </div>
                  <div className="flex justify-between font-bold text-[#272831] text-base pt-2 border-t border-border">
                    <span>Total</span>
                    <span>{formatCLP(total)}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to="/carrito"
                  onClick={onClose}
                  className="block w-full bg-[#86895d] hover:bg-[#777a53] text-white text-[12px] font-semibold tracking-[0.2em] uppercase rounded-full py-4 text-center transition-colors shadow-md hover:shadow-lg"
                >
                  Ir al carrito →
                </Link>
                <button
                  onClick={onClose}
                  className="block w-full text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors text-center"
                >
                  Seguir comprando
                </button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
