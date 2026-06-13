import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { formatCLP, products } from "@/lib/products";
import { getCart, removeFromCart, updateQty, cartTotal, type CartItem } from "@/lib/cart";
import { Minus, Plus, X, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/carrito")({
  head: () => ({
    meta: [
      { title: "Carrito — Bascharant" },
      { name: "description", content: "Revisa los productos de tu carrito." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => {
    const sync = () => setItems(getCart());
    sync();
    window.addEventListener("cart:update", sync);
    return () => window.removeEventListener("cart:update", sync);
  }, []);

  const handleWhatsAppShare = () => {
    const greeting = "Hola, quiero cotizar estas plantas tienen disponibles ?";
    const itemsText = items.map((i) => `- ${i.name} (Cantidad: ${i.qty})`).join("\n");
    const message = `${greeting}\n\n${itemsText}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/56988458216?text=${encodedMessage}`, "_blank");
  };

  const subtotal = cartTotal(items);
  const shipping = subtotal > 40000 || subtotal === 0 ? 0 : 4990;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container-x pt-12 pb-20">
        <p className="eyebrow">Tu selección</p>
        <h1 className="mt-3 font-display text-5xl lg:text-6xl">Carrito</h1>

        {items.length === 0 ? (
          <div className="mt-16 text-center py-20 border-y border-border">
            <p className="font-display text-2xl italic">Aún no has agregado plantas.</p>
            <Link to="/tienda" className="mt-6 inline-block bg-ink text-bone px-7 py-4 text-[13px] tracking-[0.2em] uppercase">
              Explorar tienda
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid lg:grid-cols-12 gap-12">
            <ul className="lg:col-span-8 border-y border-border divide-y divide-border">
              {items.map((i) => (
                <li key={i.slug + i.size} className="py-6 flex gap-4 lg:gap-6">
                  <div className="size-24 lg:size-32 bg-secondary shrink-0 overflow-hidden flex items-center justify-center">
                    <img 
                      src={
                        (typeof i.image === "string" && !i.image.startsWith("http") && products.find(p => p.slug === i.slug)?.image) || 
                        i.image || ""
                      }
                      alt={i.name} 
                      width={200} 
                      height={200} 
                      loading="lazy" 
                      className="size-full object-cover" 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const itemName = i.name || "";
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
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div className="flex justify-between gap-3">
                      <div>
                        <Link to="/producto/$slug" params={{ slug: i.slug }} className="font-display text-xl hover:text-terracotta transition-colors">{i.name}</Link>
                        {i.size && <p className="text-xs text-muted-foreground mt-1">Tamaño: {i.size}</p>}
                      </div>
                      <button onClick={() => removeFromCart(i.slug, i.size)} aria-label="Eliminar" className="text-muted-foreground hover:text-foreground">
                        <X className="size-4" strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-ink/20">
                        <button onClick={() => updateQty(i.slug, i.qty - 1, i.size)} aria-label="Menos" className="p-2 hover:bg-secondary">
                          <Minus className="size-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="px-3 text-sm">{i.qty}</span>
                        <button onClick={() => updateQty(i.slug, i.qty + 1, i.size)} aria-label="Más" className="p-2 hover:bg-secondary">
                          <Plus className="size-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="font-medium">{formatCLP(i.price * i.qty)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <div className="bg-secondary p-7">
                <h2 className="font-display text-2xl">Resumen</h2>
                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatCLP(subtotal)}</dd></div>
                  <div className="flex justify-between">
                    <dt>Envío</dt>
                    <dd>{shipping === 0 ? <span className="text-forest">Gratis</span> : formatCLP(shipping)}</dd>
                  </div>
                  {subtotal < 40000 && subtotal > 0 && (
                    <p className="text-xs text-muted-foreground pt-2">Te faltan {formatCLP(40000 - subtotal)} para envío gratis</p>
                  )}
                  <div className="flex justify-between pt-3 border-t border-border font-medium text-base">
                    <dt>Total</dt><dd>{formatCLP(total)}</dd>
                  </div>
                </dl>
                <button
                  onClick={() => alert("Disculpas: Actualmente nos encontramos desarrollando la plataforma de pago. Pronto estará disponible. ¡Gracias por tu paciencia!")}
                  className="w-full mt-6 flex items-center justify-center gap-2 bg-ink text-bone py-4 text-[13px] tracking-[0.2em] uppercase hover:bg-forest transition-colors cursor-pointer"
                >
                  Ir al checkout <ArrowRight className="size-4" strokeWidth={1.5} />
                </button>
                <button
                  onClick={handleWhatsAppShare}
                  className="w-full mt-3 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 text-[13px] tracking-[0.2em] uppercase hover:bg-[#1ebd5b] transition-colors cursor-pointer font-medium"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Cotizar por WhatsApp
                </button>
                <p className="mt-3 text-[11px] text-center text-muted-foreground">Pago seguro · Webpay · Mercado Pago · Tarjetas</p>
              </div>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
