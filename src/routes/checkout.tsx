import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { formatCLP } from "@/lib/products";
import { getCart, cartTotal, type CartItem, setCart } from "@/lib/cart";
import { Lock, Check, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Bascharant" },
      { name: "description", content: "Finaliza tu compra de forma segura." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const router = useRouter();
  const [items, setItems] = useState<CartItem[]>([]);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [shipMethod, setShipMethod] = useState("standard");
  const [payment, setPayment] = useState("webpay");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => { setItems(getCart()); }, []);

  const subtotal = cartTotal(items);
  const shipping = shipMethod === "express" ? 7990 : subtotal > 40000 ? 0 : 4990;
  const total = subtotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      alert("El carrito está vacío.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { getStorefrontApiUrl, getPublicTokenHeaders } = await import("@/lib/shopify");

      const lineItems = items.map((i) => {
        if (!i.variantId) {
          throw new Error(
            `El producto "${i.name}" es de demostración y no tiene un ID de variante de Shopify asociado.`
          );
        }
        return {
          variantId: i.variantId,
          quantity: i.qty,
        };
      });

      const query = `
        mutation checkoutCreate($input: CheckoutCreateInput!) {
          checkoutCreate(input: $input) {
            checkout {
              webUrl
            }
            checkoutUserErrors {
              code
              field
              message
            }
          }
        }
      `;

      const response = await fetch(getStorefrontApiUrl(), {
        method: "POST",
        headers: getPublicTokenHeaders(),
        body: JSON.stringify({
          query,
          variables: {
            input: {
              lineItems,
              email: (e.currentTarget as any).email?.value || undefined,
              shippingAddress: {
                address1: (e.currentTarget as any).address?.value || "",
                address2: (e.currentTarget as any).address2?.value || "",
                city: (e.currentTarget as any).city?.value || "",
                province: (e.currentTarget as any).region?.value || "",
                zip: (e.currentTarget as any).zip?.value || "",
                country: "Chile",
                firstName: (e.currentTarget as any).firstName?.value || "",
                lastName: (e.currentTarget as any).lastName?.value || "",
                phone: (e.currentTarget as any).phone?.value || "",
              },
            },
          },
        }),
      });

      const { data, errors } = await response.json();

      if (errors && errors.length > 0) {
        throw new Error(errors[0].message);
      }

      const userErrors = data?.checkoutCreate?.checkoutUserErrors;
      if (userErrors && userErrors.length > 0) {
        throw new Error(userErrors[0].message);
      }

      const webUrl = data?.checkoutCreate?.checkout?.webUrl;
      if (webUrl) {
        setCart([]);
        window.location.href = webUrl;
      } else {
        throw new Error("No se pudo generar la URL de pago de Shopify.");
      }
    } catch (err: any) {
      console.error("Error en Shopify Checkout:", err);
      alert(
        `Error al procesar el pago: ${err.message || err}\n\nNota: Para usar el checkout real, asegúrate de que los productos del carrito provengan de Shopify y tengan IDs de variante reales.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal header */}
      <header className="border-b border-border">
        <div className="container-x flex items-center justify-between h-16">
          <Link to="/" className="font-display text-2xl">Verdé<span className="italic">.</span></Link>
          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="size-3.5" strokeWidth={1.5} />
            Pago 100% seguro
          </div>
          <Link to="/carrito" className="text-xs flex items-center gap-1 hover:text-terracotta">
            <ArrowLeft className="size-3.5" strokeWidth={1.5} /> Carrito
          </Link>
        </div>
      </header>

      <main className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20 pt-10 pb-20">
        <section className="lg:col-span-7">
          {/* Steps */}
          <ol className="flex items-center gap-2 text-xs mb-10">
            {(["Contacto", "Envío", "Pago"] as const).map((label, i) => {
              const n = (i + 1) as 1 | 2 | 3;
              const active = step === n;
              const done = step > n;
              return (
                <li key={label} className="flex items-center gap-2">
                  <span className={`size-6 flex items-center justify-center text-[11px] border ${active ? "bg-ink text-bone border-ink" : done ? "bg-forest text-bone border-forest" : "border-ink/30 text-muted-foreground"}`}>
                    {done ? <Check className="size-3" strokeWidth={2} /> : n}
                  </span>
                  <span className={active ? "text-foreground" : "text-muted-foreground"}>{label}</span>
                  {i < 2 && <span className="w-8 h-px bg-border ml-2" />}
                </li>
              );
            })}
          </ol>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Step 1 */}
            <fieldset className={step === 1 ? "" : "opacity-50 pointer-events-none"}>
              <legend className="font-display text-2xl mb-5">Contacto</legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nombre" name="firstName" required />
                <Field label="Apellido" name="lastName" required />
                <Field label="Correo electrónico" name="email" type="email" required className="sm:col-span-2" />
                <Field label="Teléfono" name="phone" type="tel" required className="sm:col-span-2" />
              </div>
              {step === 1 && (
                <button type="button" onClick={() => setStep(2)} className="mt-6 bg-ink text-bone px-7 py-4 text-[13px] tracking-[0.2em] uppercase hover:bg-forest transition-colors">
                  Continuar a envío
                </button>
              )}
            </fieldset>

            {/* Step 2 */}
            <fieldset className={step === 2 ? "" : step < 2 ? "hidden" : "opacity-50 pointer-events-none"}>
              <legend className="font-display text-2xl mb-5">Dirección de envío</legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Dirección" name="address" required className="sm:col-span-2" />
                <Field label="Depto / Casa" name="address2" />
                <Field label="Comuna" name="city" required />
                <Field label="Región" name="region" required />
                <Field label="Código postal" name="zip" />
              </div>

              <h3 className="mt-8 font-display text-xl mb-4">Método de envío</h3>
              <div className="space-y-3">
                {[
                  { id: "standard", t: "Envío estándar", s: "3–5 días hábiles", p: subtotal > 40000 ? 0 : 4990 },
                  { id: "express", t: "Envío express", s: "24–48 horas", p: 7990 },
                ].map((s) => (
                  <label key={s.id} className={`flex items-center justify-between gap-3 p-4 border cursor-pointer ${shipMethod === s.id ? "border-ink" : "border-ink/15 hover:border-ink/40"}`}>
                    <div className="flex items-center gap-3">
                      <input type="radio" name="ship" value={s.id} checked={shipMethod === s.id} onChange={() => setShipMethod(s.id)} className="accent-ink" />
                      <div><p className="text-sm font-medium">{s.t}</p><p className="text-xs text-muted-foreground">{s.s}</p></div>
                    </div>
                    <span className="text-sm">{s.p === 0 ? "Gratis" : formatCLP(s.p)}</span>
                  </label>
                ))}
              </div>
              {step === 2 && (
                <button type="button" onClick={() => setStep(3)} className="mt-6 bg-ink text-bone px-7 py-4 text-[13px] tracking-[0.2em] uppercase hover:bg-forest transition-colors">
                  Continuar a pago
                </button>
              )}
            </fieldset>

            {/* Step 3 */}
            <fieldset className={step === 3 ? "" : "hidden"}>
              <legend className="font-display text-2xl mb-5">Pago</legend>
              <div className="space-y-3">
                {[
                  { id: "webpay", t: "Webpay Plus", s: "Tarjetas de crédito y débito" },
                  { id: "mercadopago", t: "Mercado Pago", s: "Crédito, débito y saldo" },
                  { id: "transfer", t: "Transferencia bancaria", s: "Confirmación en 24h" },
                ].map((m) => (
                  <label key={m.id} className={`flex items-center gap-3 p-4 border cursor-pointer ${payment === m.id ? "border-ink" : "border-ink/15 hover:border-ink/40"}`}>
                    <input type="radio" name="pay" value={m.id} checked={payment === m.id} onChange={() => setPayment(m.id)} className="accent-ink" />
                    <div><p className="text-sm font-medium">{m.t}</p><p className="text-xs text-muted-foreground">{m.s}</p></div>
                  </label>
                ))}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 w-full bg-ink text-bone py-5 text-[13px] tracking-[0.25em] uppercase hover:bg-forest disabled:bg-ink/50 transition-colors flex items-center justify-center gap-2"
              >
                <Lock className="size-4" strokeWidth={1.5} />
                {isSubmitting ? "Procesando..." : `Pagar ${formatCLP(total)}`}
              </button>
              <p className="mt-3 text-[11px] text-center text-muted-foreground">
                Al confirmar aceptas nuestros términos y política de privacidad.
              </p>
            </fieldset>
          </form>
        </section>

        {/* Summary */}
        <aside className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
          <div className="bg-secondary p-7">
            <h2 className="font-display text-2xl">Tu pedido</h2>
            <ul className="mt-6 space-y-4 max-h-80 overflow-y-auto pr-1">
              {items.map((i) => (
                <li key={i.slug + i.size} className="flex gap-3">
                  <div className="relative size-16 bg-background shrink-0">
                    <img src={i.image} alt={i.name} width={120} height={120} loading="lazy" className="size-full object-cover" />
                    <span className="absolute -top-2 -right-2 size-5 text-[10px] bg-ink text-bone rounded-full flex items-center justify-center">{i.qty}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">{i.name}</p>
                    {i.size && <p className="text-xs text-muted-foreground">{i.size}</p>}
                  </div>
                  <span className="text-sm">{formatCLP(i.price * i.qty)}</span>
                </li>
              ))}
              {items.length === 0 && <p className="text-sm text-muted-foreground">Tu carrito está vacío.</p>}
            </ul>
            <dl className="mt-6 pt-6 border-t border-border space-y-2.5 text-sm">
              <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatCLP(subtotal)}</dd></div>
              <div className="flex justify-between"><dt>Envío</dt><dd>{shipping === 0 ? "Gratis" : formatCLP(shipping)}</dd></div>
              <div className="flex justify-between pt-3 border-t border-border font-medium text-base">
                <dt>Total</dt><dd>{formatCLP(total)}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </main>
    </div>
  );
}

function Field({ label, name, type = "text", required, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs text-muted-foreground tracking-wide">{label}{required && " *"}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1 w-full bg-transparent border-b border-ink/30 focus:border-ink py-2.5 outline-none text-sm transition-colors"
      />
    </label>
  );
}
