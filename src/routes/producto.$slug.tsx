import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { products, formatCLP, getShopifyProductByHandle } from "@/lib/products";
import { addToCart } from "@/lib/cart";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight, Truck, RotateCcw, ShieldCheck, Heart, Plus, Minus,
  Sun, Droplets, Thermometer, PawPrint, TrendingUp, Ruler, X,
} from "lucide-react";
import { staggerContainer } from "@/lib/motion";
import { toast } from "sonner";
export const Route = createFileRoute("/producto/$slug")({
  loader: async ({ params }) => {
    const product = await getShopifyProductByHandle(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — Bascharant` },
        { name: "description", content: `${p.name}${p.scientific ? ` (${p.scientific})` : ""}. ${p.category} premium. Envío cuidado en Chile.` },
        { property: "og:title", content: `${p.name} — Bascharant` },
        { property: "og:description", content: `${p.name}${p.scientific ? ` · ${p.scientific}` : ""} · ${formatCLP(p.price)}` },
        { property: "og:type", content: "product" },
        { property: "og:image", content: p.image },
        { property: "og:url", content: `/producto/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/producto/${p.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.name,
          image: [p.image],
          description: `${p.name}${p.scientific ? ` (${p.scientific})` : ""}`,
          sku: p.slug,
          brand: { "@type": "Brand", name: "Bascharant" },
          offers: {
            "@type": "Offer",
            price: p.price,
            priceCurrency: "CLP",
            availability: "https://schema.org/InStock",
          },
        }),
      }],
    };
  },
  component: PDP,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <p>Producto no encontrado</p>
    </div>
  ),
});

const SIZES = [
  { label: "Pequeña", h: "30 cm", available: true },
  { label: "Mediana", h: "60 cm", available: true },
  { label: "Grande", h: "1 m",   available: true },
  { label: "XL",      h: "1.5 m", available: false },
];

function PDP() {
  const { product } = Route.useLoaderData();
  const router = useRouter();
  const [size, setSize] = useState(0);
  const [qty, setQty] = useState(1);
  const [openTab, setOpenTab] = useState<string | null>("desc");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const isSizeAvailable = (sizeIndex: number) => {
    const s = SIZES[sizeIndex];
    if (product.sizesAvailability && s.label in product.sizesAvailability) {
      return product.sizesAvailability[s.label];
    }
    return s.available;
  };

  const isOutOfStock = product.inStock === false || !isSizeAvailable(size);

  const productImages = product.images && product.images.length > 0
    ? product.images
    : [product.image, product.image, product.image, product.image, product.image];

  const [activeImage, setActiveImage] = useState(productImages[0]);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  useEffect(() => {
    setActiveImage(productImages[0]);
    const firstAvailable = SIZES.findIndex((_, i) => isSizeAvailable(i));
    setSize(firstAvailable !== -1 ? firstAvailable : 0);
  }, [product]);

  useEffect(() => {
    if (product.images && product.images.length > 0 && product.images[size]) {
      setActiveImage(product.images[size]);
    }
  }, [size, product.images]);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Pick 4 related products, skipping the current one.
  // Using a stable slice but shifting based on the current product index
  const currentIndex = products.findIndex((p) => p.slug === product.slug);
  const related = products
    .filter((p) => p.slug !== product.slug)
    .slice(currentIndex % 10, (currentIndex % 10) + 4);

  const activePrice = product.pricesBySize && SIZES[size]
    ? (product.pricesBySize[SIZES[size].label] ?? product.price)
    : product.price;

  const handleAddToCartOnly = () => {
    addToCart({
      slug: product.slug,
      name: product.name,
      image: product.image,
      price: activePrice,
      qty,
      size: SIZES[size].label,
      variantId: product.variantId,
    });
    toast.success(`${product.name} agregado`, {
      description: `${SIZES[size].label} · ${qty} unidad(es)`,
      action: {
        label: "Ver carrito",
        onClick: () => router.navigate({ to: "/carrito" }),
      },
    });
  };

  const handleBuyNow = () => {
    addToCart({
      slug: product.slug,
      name: product.name,
      image: product.image,
      price: activePrice,
      qty,
      size: SIZES[size].label,
      variantId: product.variantId,
    });
    router.navigate({ to: "/carrito" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container-x pt-6">
          <nav aria-label="Migas" className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Inicio</Link>
            <ChevronRight className="size-3" />
            <Link to="/tienda" className="hover:text-foreground">Tienda</Link>
            <ChevronRight className="size-3" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        <section className="container-x mt-6 grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Gallery - Desktop Grid / Mobile Carousel */}
          <div className="lg:col-span-7">
            {/* Desktop Gallery Layout */}
            <div className="hidden lg:flex gap-4">
              {/* Vertical Thumbnails List */}
              <div className="flex flex-col gap-3 shrink-0 w-20">
                {productImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-[4/5] bg-secondary overflow-hidden rounded-[10px] border-2 transition-all ${
                      activeImage === img ? "border-[#86895d] opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Miniatura ${i + 1}`}
                      width={100} height={125}
                      className="size-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div 
                onClick={() => setZoomImage(activeImage)}
                className="flex-1 aspect-[4/5] bg-secondary overflow-hidden rounded-[20px] shadow-sm cursor-zoom-in"
              >
                <img
                  src={activeImage}
                  alt={product.name}
                  width={1200} height={1500}
                  fetchPriority="high"
                  decoding="async"
                  className="size-full object-cover rounded-[20px] transition-all duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Mobile Carousel Layout */}
            <div className="lg:hidden w-full">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {productImages.map((img, i) => (
                    <CarouselItem key={i}>
                      <div 
                        onClick={() => setZoomImage(img)}
                        className="aspect-[4/5] bg-secondary overflow-hidden rounded-[20px] shadow-sm cursor-zoom-in"
                      >
                        <img
                          src={img}
                          alt={`${product.name} - Imagen ${i + 1}`}
                          width={1200} height={1500}
                          fetchPriority={i === 0 ? "high" : undefined}
                          loading={i === 0 ? undefined : "lazy"}
                          decoding="async"
                          className="size-full object-cover rounded-[20px]"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Custom premium dots indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {productImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => api?.scrollTo(i)}
                      className={`size-2 rounded-full transition-all duration-300 ${
                        current === i + 1 ? "bg-[#86895d] w-6" : "bg-neutral-300"
                      }`}
                      aria-label={`Ir a imagen ${i + 1}`}
                    />
                  ))}
                </div>
              </Carousel>
            </div>

            {/* Disclaimer Desktop/Mobile */}
            <div className="mt-5 lg:mt-6 flex items-center justify-center lg:justify-start">
               <p className="text-[11px] text-muted-foreground/80 italic font-medium tracking-wide">
                 * Las imágenes son referenciales. Al tratarse de seres vivos, cada planta es única y presenta variaciones naturales.
               </p>
            </div>
          </div>

          {/* Info */}
          <aside className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            {product.tag && <p className="eyebrow text-terracotta">{product.tag}</p>}
            <h1 className="mt-3 font-display text-4xl lg:text-5xl leading-tight">{product.name}</h1>
            {product.scientific && <p className="mt-2 text-muted-foreground italic">{product.scientific}</p>}

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-2xl font-bold text-[#272831]">{formatCLP(activePrice)}</span>
              {product.oldPrice && (
                <>
                  <span className="text-muted-foreground line-through">{formatCLP(product.oldPrice)}</span>
                  <span className="text-xs bg-[#86895d] text-white px-2.5 py-1 rounded-full font-bold shadow-sm">
                    −{Math.round((1 - activePrice / product.oldPrice) * 100)}%
                  </span>
                </>
              )}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">o 3 cuotas de {formatCLP(Math.round(activePrice / 3))} sin interés</p>

            {/* Care icons */}
            <ul className="mt-8 grid grid-cols-3 gap-y-6 gap-x-4 border-y border-border py-6">
              {[
                { Icon: Sun, label: "Luz", val: "Indirecta" },
                { Icon: Droplets, label: "Riego", val: "1×/sem" },
                { Icon: Thermometer, label: "Temp", val: "18–26°C" },
                { Icon: PawPrint, label: "Mascotas", val: product.tag === "Pet Friendly" ? "Sí" : "No" },
                { Icon: TrendingUp, label: "Crecimiento", val: "Medio" },
                { Icon: Ruler, label: "Cuidado", val: product.care ?? "Fácil" },
              ].map(({ Icon, label, val }) => (
                <li key={label} className="text-center flex flex-col items-center">
                  <div className="size-10 rounded-full bg-[#86895d]/10 flex items-center justify-center mb-1.5 shrink-0">
                    <Icon className="size-5 text-[#86895d]" strokeWidth={1.5} />
                  </div>
                  <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-muted-foreground">{label}</p>
                  <p className="text-xs mt-0.5 font-medium text-[#272831]">{val}</p>
                </li>
              ))}
            </ul>

            {/* Size */}
            <div className="mt-7">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-semibold text-[#272831]">Tamaño · {SIZES[size].h}</h3>
                <button className="text-xs underline underline-offset-4 text-muted-foreground hover:text-foreground font-medium">Guía de tamaños</button>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {SIZES.map((s, i) => (
                  <button
                    key={s.label}
                    disabled={!isSizeAvailable(i)}
                    onClick={() => setSize(i)}
                    className={`py-3 px-4 text-[11px] font-bold uppercase tracking-[0.1em] border rounded-full transition-all disabled:opacity-40 disabled:line-through ${
                      i === size ? "border-[#86895d] bg-[#86895d] text-white shadow-sm" : "border-neutral-200 hover:border-neutral-400 text-muted-foreground hover:text-[#272831]"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty + CTA */}
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="flex items-center border border-neutral-200 rounded-full overflow-hidden bg-neutral-50 px-1 shrink-0">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Disminuir" className="px-3 py-3 hover:bg-neutral-200 rounded-full transition-colors">
                    <Minus className="size-3.5 text-[#272831]" strokeWidth={2} />
                  </button>
                  <span className="px-2 min-w-[2.5ch] text-center font-bold text-sm text-[#272831]">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} aria-label="Aumentar" className="px-3 py-3 hover:bg-neutral-200 rounded-full transition-colors">
                    <Plus className="size-3.5 text-[#272831]" strokeWidth={2} />
                  </button>
                </div>
                <button
                  onClick={handleAddToCartOnly}
                  disabled={isOutOfStock}
                  className="flex-1 bg-[#86895d] hover:bg-[#777a53] disabled:bg-neutral-400 text-white text-[12px] font-semibold tracking-[0.2em] uppercase rounded-full shadow-md transition-all py-4 hover:shadow-lg disabled:cursor-not-allowed"
                >
                  {isOutOfStock ? "Agotado" : "Agregar al carrito"}
                </button>
                <button aria-label="Favoritos" className="border border-neutral-200 size-14 rounded-full flex items-center justify-center hover:border-neutral-400 hover:text-[#86895d] transition-colors shrink-0">
                  <Heart className="size-5" strokeWidth={1.5} />
                </button>
              </div>

              {!isOutOfStock && (
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-[#272831] hover:bg-[#1a1b22] text-white text-[12px] font-semibold tracking-[0.2em] uppercase rounded-full shadow-md transition-all py-4 hover:shadow-lg"
                >
                  Comprar Ahora
                </button>
              )}
            </div>

            {/* Trust */}
            <ul className="mt-8 space-y-4 text-sm border-t border-border pt-6">
              {[
                { Icon: Truck, t: "Envío en 24–72h", s: "Empaque especializado a todo Chile" },
                { Icon: RotateCcw, t: "Devolución 30 días", s: "Cambia o devuelve sin complicaciones" },
                { Icon: ShieldCheck, t: "Garantía", s: "Reposición si llega en mal estado" },
              ].map(({ Icon, t, s }) => (
                <li key={t} className="flex gap-3.5 items-start">
                  <div className="size-8 rounded-full bg-[#86895d]/10 flex items-center justify-center shrink-0">
                    <Icon className="size-4 text-[#86895d]" strokeWidth={1.5} />
                  </div>
                  <div><p className="font-semibold text-sm text-[#272831]">{t}</p><p className="text-muted-foreground text-xs mt-0.5">{s}</p></div>
                </li>
              ))}
            </ul>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              {[
                { id: "desc", title: "Descripción", body: product.description ?? `${product.name}${product.scientific ? ` (${product.scientific})` : ""}. Una pieza viva, seleccionada hoja por hoja en viveros locales. Llega lista para acompañarte por años con un cuidado mínimo y mucho carácter.` },
                { id: "care", title: "Cuidados", body: product.careDetails ?? "Luz indirecta brillante. Riego semanal, dejando secar la capa superior. Evitar corrientes de aire frío. Limpiar hojas cada dos semanas con paño húmedo." },
                { id: "ship", title: "Envío y devoluciones", body: "Despacho cuidado en empaque especializado dentro de 24–72 horas hábiles. Garantía de llegada en buen estado o reposición sin costo. Devoluciones hasta 30 días." },
              ].map((a) => (
                <div key={a.id} className="border-b border-border">
                  <button
                    onClick={() => setOpenTab(openTab === a.id ? null : a.id)}
                    className="w-full flex justify-between items-center py-5 text-left text-sm"
                    aria-expanded={openTab === a.id}
                  >
                    <span className="font-medium">{a.title}</span>
                    <Plus className={`size-4 transition-transform ${openTab === a.id ? "rotate-45" : ""}`} strokeWidth={1.5} />
                  </button>
                  {openTab === a.id && (
                    <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{a.body}</p>
                  )}
                </div>
              ))}
            </div>
          </aside>
        </section>

        {/* Completa el look */}
        <section className="container-x mt-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow">Completa tu planta</p>
              <h2 className="mt-3 font-display text-3xl lg:text-4xl">También te puede gustar</h2>
            </div>
          </div>
          <motion.div
            key={product.slug}
            className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 lg:gap-x-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer(0.06, 0.04)}
          >
            {related.map((p) => <ProductCard key={p.slug} product={p} />)}
          </motion.div>
        </section>

        {/* Sticky mobile CTA */}
        <div className="lg:hidden sticky bottom-0 inset-x-0 bg-white/95 backdrop-blur border-t border-border p-4 z-30">
          {isOutOfStock ? (
            <button
              disabled
              className="w-full bg-neutral-400 text-white py-4 rounded-full text-[12px] font-semibold tracking-[0.2em] uppercase cursor-not-allowed"
            >
              Agotado
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={handleAddToCartOnly}
                className="flex-1 border border-[#86895d] text-[#86895d] py-4 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-neutral-50"
              >
                Agregar
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-[#86895d] text-white py-4 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase shadow-md hover:bg-[#777a53]"
              >
                Comprar Ahora
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox / Zoom Overlay */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImage(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              aria-label="Cerrar vista ampliada"
            >
              <X className="size-8" strokeWidth={1.5} />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-[15px] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={zoomImage}
                alt="Vista ampliada del producto"
                className="max-w-full max-h-[90vh] object-contain rounded-[15px] select-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
