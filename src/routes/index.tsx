import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FallingLeaves } from "@/components/site/FallingLeaves";
import { ProductCard } from "@/components/site/ProductCard";
import { ContactFormSection } from "./servicios";
import { products, fetchShopifyProducts } from "@/lib/products";
import heroPlant from "@/assets/hero-plant.jpg";
import catPots from "@/assets/cat-pots.jpg";
import catIndoor from "@/assets/cat-indoor.jpg";
import catGarden from "@/assets/cat-garden.jpg";
import lookbook1 from "@/assets/lookbook-1.jpg";
import {
  ArrowRight,
  Truck,
  Sprout,
  ShieldCheck,
  Leaf,
  ChevronDown,
} from "lucide-react";
import {
  easeSnappy,
  easeOutQuint,
  easeInOutExpo,
  staggerContainer,
  fadeUp,
  fadeIn,
  slideLeft,
  slideRight,
  scaleUp,
} from "@/lib/motion";

// ─────────────────────────────────────────────
// Route
// ─────────────────────────────────────────────
export const Route = createFileRoute("/")({
  loader: async () => {
    const shopifyProducts = await fetchShopifyProducts();
    return { products: shopifyProducts };
  },
  head: () => ({
    meta: [
      {
        title:
          "Bascharant — Plantas, maceteros y objetos para una vida más verde",
      },
      {
        name: "description",
        content:
          "Tienda premium de plantas de interior, maceteros, herramientas y decoración natural. Envío cuidado en Chile.",
      },
      {
        property: "og:title",
        content: "Bascharant — Plantas y maceteros premium",
      },
      {
        property: "og:description",
        content:
          "Tienda premium de plantas de interior, maceteros y jardinería en Chile.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
function Home() {
  const { products: shopifyProducts } = Route.useLoaderData();
  const bestSellers = shopifyProducts.slice(0, 4);
  const newArrivals = shopifyProducts.slice(2, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <MarqueeStrip />
        <Categories />
        <BestSellers products={bestSellers} />
        <Lookbook />
        <NewArrivals products={newArrivals} />
        <Benefits />
        {/* <Quiz /> */}
        {/* <Editorial /> */}
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax on image
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  // Fade out hero content on scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-8%"]);

  return (
    <section
      ref={heroRef}
      className="relative grid lg:grid-cols-2 min-h-[92vh] lg:min-h-[96vh] overflow-hidden"
    >
      <FallingLeaves />
      {/* Left — copy */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative order-2 lg:order-1 flex items-center container-x py-20 lg:py-0"
      >
        <div className="max-w-xl">
          {/* Eyebrow */}
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOutQuint, delay: 0 }}
          >
            Otoño · Colección 2026
          </motion.p>

          {/* H1 */}
          <motion.h1
            className="mt-5 font-display text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOutQuint, delay: 0.12 }}
          >
            Una casa <span className="italic font-serif">viva</span>
            <br />
            empieza por una hoja.
          </motion.h1>

          {/* Body */}
          <motion.p
            className="mt-6 text-base text-muted-foreground max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOutQuint, delay: 0.26 }}
          >
            Plantas seleccionadas, maceteros  y todo lo necesario
            para cultivar un hogar más sereno.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-9 flex flex-wrap gap-3.5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutQuint, delay: 0.38 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/tienda"
                className="group inline-flex items-center gap-2 bg-[#86895d] text-white text-[12px] font-semibold tracking-[0.18em] uppercase px-8 py-4 rounded-[50px] hover:bg-[#777a53] transition-colors shadow-md"
              >
                Comprar plantas
                <ArrowRight
                  className="size-4 group-hover:translate-x-1 transition-transform duration-300"
                  strokeWidth={1.5}
                />
              </Link>
            </motion.div>
            <motion.a
              href="#lookbook"
              className="inline-flex items-center text-[12px] font-semibold tracking-[0.18em] uppercase px-8 py-4 border border-[#272831]/20 hover:border-[#272831] rounded-[50px] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Ver lookbook
            </motion.a>
          </motion.div>

          {/* Nuestros Servicios CTA */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutQuint, delay: 0.45 }}
          >
            <motion.a
              href="https://www.bascharant.store/servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-[#272831]/70 hover:text-[#86895d] transition-colors duration-300 border-b border-[#272831]/20 hover:border-[#86895d] pb-0.5"
            >
              Servicio Jardin
              <ArrowRight
                className="size-3.5 group-hover:translate-x-0.5 transition-transform duration-300"
                strokeWidth={1.5}
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Right — image with parallax */}
      <div className="order-1 lg:order-2 relative bg-secondary overflow-hidden min-h-[45vw] max-h-[280px] sm:max-h-none lg:min-h-0 rounded-[20px] lg:my-6 lg:mr-6 shadow-sm">
        <motion.img
          src={heroPlant}
          alt="Monstera Deliciosa en macetero crema dentro de un salón luminoso"
          width={1600}
          height={1200}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-cover rounded-[20px]"
          style={{ y: imageY }}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: easeInOutExpo }}
        />

        {/* Image caption badge — glassmorphism */}
        <motion.div
          className="absolute bottom-6 right-6 glass px-5 py-4 text-xs max-w-[240px] rounded-[15px] shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutQuint, delay: 0.6 }}
        >
          <p className="font-display italic text-base">Monstera Deliciosa</p>
          <p className="text-muted-foreground mt-1">Cuidado fácil · Luz indirecta</p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-ink/50 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="eyebrow" style={{ fontSize: "0.6rem" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ChevronDown className="size-4" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────
// MARQUEE STRIP
// ─────────────────────────────────────────────
function MarqueeStrip() {
  const items = [
    "Envío cuidado a todo Chile",
    "Garantía de llegada en buen estado",
    "Asesoría de cuidado gratuita",
    "Empaque especializado",
    "Plantas revisadas hoja por hoja",
    "Viveros locales certificados",
  ];

  const full = [...items, ...items]; // duplicate for seamless loop

  return (
    <div className="border-y border-charcoal/80 bg-charcoal overflow-hidden py-3.5">
      <div className="marquee-track">
        {full.map((item, i) => (
          <span
            key={i}
            className="shrink-0 flex items-center gap-6 text-[11px] tracking-[0.28em] uppercase text-bone/70 px-6"
          >
            <span className="text-bone/30">·</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────────
const cats = [
  { label: "Plantas de interior", img: catIndoor, count: "82 productos", href: "/tienda" },
  { label: "Maceteros", img: catPots, count: "54 productos", href: "/tienda" },
  { label: "Jardinería", img: catGarden, count: "37 productos", href: "/tienda" },
];

function Categories() {
  return (
    <section className="container-x mt-24 lg:mt-32 overflow-hidden" id="shop">
      <motion.div
        className="flex items-end justify-between mb-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.1)}
      >
        <div>
          <motion.p className="eyebrow" variants={fadeUp(12, 0.55)}>
            Explora
          </motion.p>
          <motion.h2
            className="mt-3 font-display text-4xl lg:text-5xl"
            variants={fadeUp(20, 0.7)}
          >
            Por categoría
          </motion.h2>
        </div>
        <motion.div variants={fadeUp(12, 0.55)}>
          <Link
            to="/tienda"
            className="hidden sm:inline-flex items-center gap-1 text-sm border-b border-ink pb-0.5 link-underline"
          >
            Ver todo <ArrowRight className="size-4" strokeWidth={1.5} />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none md:grid-cols-3 gap-4 lg:gap-8 pb-4 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-none"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer(0.12, 0.05)}
      >
        {cats.map((c) => (
          <motion.div
            key={c.label}
            className="group block shrink-0 w-[72vw] sm:w-[50vw] md:w-auto snap-center snap-always"
            variants={fadeUp(40, 0.7)}
          >
            <Link to={c.href} className="block">
              <motion.div
                className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden bg-secondary rounded-[20px] shadow-sm"
                whileHover="hovered"
                initial="idle"
              >
                {/* Image */}
                <motion.img
                  src={c.img}
                  alt={c.label}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover rounded-[20px]"
                  variants={{
                    idle: { scale: 1 },
                    hovered: {
                      scale: 1.08,
                      transition: { duration: 1.4, ease: easeOutQuint },
                    },
                  }}
                />

                {/* Hover dark overlay */}
                <motion.div
                  className="absolute inset-0 bg-[#272831]"
                  variants={{
                    idle: { opacity: 0 },
                    hovered: {
                      opacity: 0.15,
                      transition: { duration: 0.5, ease: easeOutQuint },
                    },
                  }}
                />

                {/* Label always visible on mobile, hover only on desktop */}
                <div className="sm:hidden absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-[20px] px-4 py-3">
                  <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-white">{c.label}</p>
                </div>

                {/* Centered label on hover — desktop only */}
                <motion.div
                  className="hidden sm:flex absolute inset-0 items-center justify-center px-4"
                  variants={{
                    idle: { opacity: 0, scale: 0.9 },
                    hovered: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.4, ease: easeOutQuint },
                    },
                  }}
                >
                  <span className="glass px-6 py-3 rounded-full text-foreground text-[11px] font-semibold tracking-[0.2em] uppercase shadow-md pointer-events-none">
                    Explorar →
                  </span>
                </motion.div>
              </motion.div>

              <div className="pt-4 flex justify-between items-baseline">
                <motion.h3
                  className="font-display text-2xl group-hover:text-forest transition-colors duration-300 font-bold"
                  variants={{
                    idle: { y: 0 },
                    hovered: { y: -2, transition: { duration: 0.3 } },
                  }}
                >
                  {c.label}
                </motion.h3>
                <span className="text-xs text-muted-foreground font-medium">{c.count}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PRODUCT GRID (shared)
// ─────────────────────────────────────────────
function ProductGrid({
  products: prods,
}: {
  products: typeof import("@/lib/products").products;
}) {
  return (
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer(0.08, 0.05)}
    >
      {prods.map((p, i) => (
        <ProductCard key={p.slug} product={p} index={i} />
      ))}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// BEST SELLERS
// ─────────────────────────────────────────────
function BestSellers({
  products: prods,
}: {
  products: typeof import("@/lib/products").products;
}) {
  return (
    <section className="container-x mt-24 lg:mt-32 pb-20 sm:pb-0">
      <motion.div
        className="flex items-end justify-between mb-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.1)}
      >
        <div>
          <motion.p className="eyebrow" variants={fadeUp(12, 0.55)}>
            Favoritos
          </motion.p>
          <motion.h2
            className="mt-3 font-display text-4xl lg:text-5xl"
            variants={fadeUp(20, 0.7)}
          >
            Best sellers
          </motion.h2>
        </div>
      </motion.div>
      {/* Trust mini-strip — mobile only, shown before product grid for social proof */}
      <div className="sm:hidden flex items-center justify-between gap-2 mb-6 px-1">
        {[
          { emoji: "🚚", label: "Envío cuidado" },
          { emoji: "🌱", label: "Garantía verde" },
          { emoji: "💬", label: "Asesoría gratis" },
        ].map((t) => (
          <div key={t.label} className="flex-1 flex flex-col items-center gap-1 text-center">
            <span className="text-lg">{t.emoji}</span>
            <span className="text-[9px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">{t.label}</span>
          </div>
        ))}
      </div>
      <ProductGrid products={prods} />
    </section>
  );
}

// ─────────────────────────────────────────────
// NEW ARRIVALS
// ─────────────────────────────────────────────
function NewArrivals({
  products: prods,
}: {
  products: typeof import("@/lib/products").products;
}) {
  return (
    <section className="container-x mt-24 lg:mt-32">
      <motion.div
        className="flex items-end justify-between mb-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.1)}
      >
        <div>
          <motion.p className="eyebrow" variants={fadeUp(12, 0.55)}>
            Recién llegadas
          </motion.p>
          <motion.h2
            className="mt-3 font-display text-4xl lg:text-5xl"
            variants={fadeUp(20, 0.7)}
          >
            Nuevas esta semana
          </motion.h2>
        </div>
        <motion.div variants={fadeUp(12, 0.55)}>
          <Link
            to="/tienda"
            className="hidden sm:inline-flex items-center gap-1 text-sm border-b border-ink pb-0.5"
          >
            Ver todo <ArrowRight className="size-4" strokeWidth={1.5} />
          </Link>
        </motion.div>
      </motion.div>
      <ProductGrid products={prods} />
    </section>
  );
}

// ─────────────────────────────────────────────
// LOOKBOOK
// ─────────────────────────────────────────────
function Lookbook() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Parallax: image moves slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="lookbook" ref={sectionRef} className="mt-24 lg:mt-32 relative">
      <div className="relative min-h-[50vh] lg:min-h-[65vh] overflow-hidden rounded-[20px] shadow-sm">
        {/* Parallax image */}
        <motion.div className="absolute inset-0 rounded-[20px]" style={{ y: imageY }}>
          <img
            src={lookbook1}
            alt="Salón con Monstera, Ficus y suculentas sobre mesa de madera"
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-[20px]"
            style={{ minHeight: "110%" }}
          />
        </motion.div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Hotspot buttons */}
        {[
          { x: "22%", y: "55%" },
          { x: "55%", y: "70%" },
          { x: "82%", y: "38%" },
        ].map((h, i) => (
          <motion.button
            key={i}
            aria-label={`Ver producto ${i + 1}`}
            className="absolute z-10 size-8 rounded-full bg-white/95 border border-black/10 flex items-center justify-center shadow-md"
            style={{ left: h.x, top: h.y, x: "-50%", y: "-50%" }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3 + i * 0.15,
              duration: 0.5,
              ease: easeOutQuint,
            }}
            whileHover={{ scale: 1.2 }}
          >
            <span className="block size-1.5 bg-[#86895d] rounded-full" />
            {/* Ping ring */}
            <span
              className="absolute size-8 rounded-full border border-white/80 hotspot-ping"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          </motion.button>
        ))}

        {/* Caption block */}
        <motion.div
          className="absolute bottom-10 left-8 lg:bottom-16 lg:left-16 max-w-md text-white z-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer(0.12, 0.1)}
        >
          <motion.p
            className="text-[11px] tracking-[0.28em] uppercase opacity-80"
            variants={fadeUp(12, 0.6)}
          >
            Lookbook · 01
          </motion.p>
          <motion.h2
            className="mt-3 font-display text-4xl lg:text-5xl drop-shadow-sm font-bold text-white"
            variants={fadeUp(24, 0.8)}
          >
            El salón sereno
          </motion.h2>
          <motion.div variants={fadeUp(16, 0.65)}>
            <motion.a
              href="#"
              className="mt-6 inline-flex items-center gap-2 bg-white text-[#272831] text-[12px] font-semibold tracking-[0.18em] uppercase px-8 py-4 rounded-[50px] shadow-lg hover:bg-neutral-100 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              Comprar el look{" "}
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Editorial second row: scroll horizontal en móvil, grid en md+ */}
      <div className="mt-6 md:container-x">
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none md:grid-cols-3 gap-4 lg:gap-8 pb-4 -mx-0 px-6 md:px-0 md:mx-0 scrollbar-none container-x md:container-x-0">
        {[
          {
            label: "Sala de estar",
            desc: "Naturaleza que envuelve",
            img: catIndoor,
            span: "md:col-span-2",
            aspect: "aspect-[4/3] sm:aspect-[16/9]",
            mobileW: "w-[80vw] shrink-0 snap-center snap-always",
          },
          {
            label: "Terrazas",
            desc: "Exterior vivo",
            img: catGarden,
            span: "",
            aspect: "aspect-[4/3] sm:aspect-[4/5]",
            mobileW: "w-[72vw] shrink-0 snap-center snap-always",
          },
        ].map((item, i) => (
          <motion.a
            key={item.label}
            href="#"
            className={`group block ${item.span} ${item.mobileW} md:w-auto`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: easeOutQuint, delay: i * 0.12 }}
          >
            <div className={`relative ${item.aspect} overflow-hidden bg-secondary rounded-[20px] shadow-sm`}>
              <motion.img
                src={item.img}
                alt={item.label}
                width={1024}
                height={768}
                loading="lazy"
                decoding="async"
                className="size-full object-cover rounded-[20px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: easeOutQuint }}
              />
            </div>
            <div className="pt-3 flex justify-between items-baseline">
              <h3 className="font-display text-xl group-hover:text-forest transition-colors duration-300 font-bold">
                {item.label}
              </h3>
              <span className="text-xs text-muted-foreground font-medium">{item.desc}</span>
            </div>
          </motion.a>
        ))}
      </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// BENEFITS
// ─────────────────────────────────────────────
const benefitItems = [
  { icon: Truck, title: "Envío cuidado", body: "Empaque especializado y entrega en 24–72h." },
  {
    icon: ShieldCheck,
    title: "Garantía verde",
    body: "Reposición si tu planta llega en mal estado.",
  },
  {
    icon: Sprout,
    title: "Asesoría de cuidado",
    body: "Recibe consejos personalizados por correo.",
  },
  {
    icon: Leaf,
    title: "Cultivo responsable",
    body: "Plantas criadas en viveros locales certificados.",
  },
];

function Benefits() {
  return (
    <section className="container-x mt-24 lg:mt-32">
      <motion.div
        className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.12, 0.05)}
      >
        {benefitItems.map((b) => (
          <motion.div
            key={b.title}
            className="bg-[#f9f9fb] border border-[#e9e9e9] p-8 rounded-[20px] flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={fadeUp(24, 0.65)}
          >
            <motion.div 
              className="size-12 rounded-full bg-[#86895d]/10 flex items-center justify-center shrink-0"
              variants={scaleUp(0.7, 0.5)}
            >
              <b.icon className="size-6 text-[#86895d]" strokeWidth={1.5} />
            </motion.div>
            <div>
              <h3 className="font-display text-xl font-bold text-[#272831]">
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                {b.body}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────
// QUIZ
// ─────────────────────────────────────────────
const quizSteps = [
  { q: "¿Interior o exterior?", a: "Adaptamos a tu espacio" },
  { q: "¿Cuánta luz tienes?", a: "Sol, sombra o intermedio" },
  { q: "¿Tienes mascotas?", a: "Filtramos pet friendly" },
  { q: "¿Cuánto tiempo dedicas?", a: "Cuidado fácil o avanzado" },
];

function Quiz() {
  return (
    <section className="container-x mt-24 lg:mt-32">
      <div className="bg-[#86895d] text-white px-8 py-16 lg:p-20 grid lg:grid-cols-2 gap-10 items-center relative overflow-hidden texture-diagonal rounded-[20px] shadow-md">
        {/* Prontamente Overlay */}
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[3px] flex flex-col items-center justify-center z-20">
          <motion.div
            initial={{ rotate: -2 }}
            whileHover={{ scale: 1.12, rotate: 2, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="bg-bone text-[#272831] px-8 py-4 rounded-full shadow-2xl border border-bone/30 select-none cursor-pointer"
          >
            <p className="text-[14px] font-bold tracking-[0.25em] uppercase text-center">Próximamente</p>
          </motion.div>
        </div>
        {/* Left — copy */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={slideLeft(30, 0.8)}
        >
          <p className="eyebrow text-white/70">Asistente Bascharant</p>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl text-white font-bold">
            Encuentra tu <span className="italic font-serif">planta ideal</span> en 60
            segundos.
          </h2>
          <p className="mt-5 text-white/80 max-w-md leading-relaxed">
            Responde cuatro preguntas y te recomendamos plantas que se adapten a
            tu luz, tu rutina y tu hogar.
          </p>
          <motion.a
            href="#"
            className="mt-8 inline-flex items-center gap-2 bg-white text-[#272831] text-[12px] font-semibold tracking-[0.18em] uppercase px-8 py-4 rounded-[50px] shadow-lg hover:bg-neutral-100 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.25 }}
          >
            Comenzar quiz{" "}
            <ArrowRight className="size-4 text-[#86895d]" strokeWidth={2} />
          </motion.a>
        </motion.div>

        {/* Right — step grid */}
        <motion.ul
          className="grid grid-cols-2 gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.12, 0.2)}
        >
          {quizSteps.map((s, i) => (
            <motion.li
              key={i}
              className="bg-white/10 border border-white/10 p-6 lg:p-8 rounded-[15px] hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-sm"
              variants={fadeUp(20, 0.65)}
              whileHover={{ y: -4 }}
            >
              <span className="font-display italic text-3xl text-white/40 font-bold">
                0{i + 1}
              </span>
              <p className="mt-3 font-semibold text-white">{s.q}</p>
              <p className="mt-1 text-sm text-white/70">{s.a}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// EDITORIAL
// ─────────────────────────────────────────────
const articles = [
  { t: "Cómo regar tu Monstera", k: "5 min · Cuidado", img: catIndoor },
  {
    t: "Plantas para departamentos pequeños",
    k: "7 min · Inspiración",
    img: catPots,
  },
  { t: "Guía completa de fertilización", k: "9 min · Avanzado", img: catGarden },
  { t: "Plantas pet friendly", k: "4 min · Hogar", img: catIndoor },
];

function Editorial() {
  return (
    <section className="container-x mt-24 lg:mt-32">
      <div className="relative rounded-[20px] overflow-hidden p-6 lg:p-10 border border-border/40 bg-secondary/10">
        {/* Prontamente Overlay */}
        <div className="absolute inset-0 bg-[#272831]/40 backdrop-blur-[3px] flex flex-col items-center justify-center z-20">
          <motion.div
            initial={{ rotate: 2 }}
            whileHover={{ scale: 1.12, rotate: -2, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="bg-bone text-[#272831] px-8 py-4 rounded-full shadow-2xl border border-bone/30 select-none cursor-pointer"
          >
            <p className="text-[14px] font-bold tracking-[0.25em] uppercase text-center">Próximamente</p>
          </motion.div>
        </div>
        <motion.div
          className="grid lg:grid-cols-12 gap-10 items-start"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer(0.1, 0.05)}
      >
        {/* Left — heading */}
        <motion.div className="lg:col-span-4" variants={slideLeft(24, 0.8)}>
          <p className="eyebrow">Centro de aprendizaje</p>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl">
            Cuidar plantas es <span className="italic">cuidarse</span>.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
            Guías, rituales semanales y consejos honestos para que cada hoja
            crezca contigo.
          </p>
          <a
            href="#"
            className="mt-7 inline-block text-sm border-b border-ink pb-0.5 link-underline"
          >
            Explorar artículos
          </a>
        </motion.div>

        {/* Right — article cards */}
        <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
          {articles.map((a, i) => (
            <motion.li
              key={a.t}
              variants={fadeUp(20, 0.65)}
              custom={i}
            >
              <a href="#" className="group block">
                {/* Article thumbnail */}
                <div className="aspect-[16/10] overflow-hidden bg-secondary mb-4 rounded-[20px] shadow-sm">
                  <motion.img
                    src={a.img}
                    alt={a.t}
                    width={600}
                    height={375}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover rounded-[20px]"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 1.2, ease: easeOutQuint }}
                  />
                </div>
                <p className="eyebrow">{a.k}</p>
                <h3 className="mt-2 font-display text-xl leading-snug group-hover:text-forest transition-colors duration-300 font-bold">
                  {a.t}
                </h3>
                <span className="mt-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground group-hover:text-[#86895d] transition-colors">
                  Leer →
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      </div>
    </section>
  );
}


